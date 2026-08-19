import { NextRequest, NextResponse } from "next/server";
import {
  appointmentSchema,
  sanitizeText,
} from "@/lib/validations/forms";
import { createServiceClient, hasSupabaseConfig } from "@/lib/supabase/admin";
import { generateConfirmationCode, rateLimit } from "@/lib/security/rate-limit";
import { sendAppointmentConfirmation } from "@/lib/notifications/email";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(`appointments:${ip}`);

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many booking attempts. Please try again shortly." },
      { status: 429 },
    );
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { error: "Booking service is not configured yet." },
      { status: 503 },
    );
  }

  const body = await request.json();
  const parsed = appointmentSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors[0]?.message ?? "Invalid booking details." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const supabase = createServiceClient();

  const [{ data: service }, { data: dentist }] = await Promise.all([
    supabase
      .from("services")
      .select("id, title")
      .eq("slug", parsed.data.serviceSlug)
      .maybeSingle(),
    parsed.data.dentistSlug
      ? supabase
          .from("dentists")
          .select("id, name")
          .eq("slug", parsed.data.dentistSlug)
          .maybeSingle()
      : Promise.resolve({ data: null }),
  ]);

  if (!service) {
    return NextResponse.json({ error: "Selected service not found." }, { status: 404 });
  }

  const confirmationCode = generateConfirmationCode();

  const { data, error } = await supabase
    .from("appointments")
    .insert({
      service_id: service.id,
      dentist_id: dentist?.id ?? null,
      patient_name: sanitizeText(parsed.data.patientName),
      patient_email: parsed.data.patientEmail.toLowerCase(),
      patient_phone: parsed.data.patientPhone,
      appointment_date: parsed.data.appointmentDate,
      appointment_time: parsed.data.appointmentTime,
      notes: parsed.data.notes ? sanitizeText(parsed.data.notes) : null,
      confirmation_code: confirmationCode,
      status: "pending",
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "That time slot is no longer available. Please choose another." },
        { status: 409 },
      );
    }
    return NextResponse.json({ error: "Unable to create appointment." }, { status: 500 });
  }

  await sendAppointmentConfirmation({
    patientName: parsed.data.patientName,
    patientEmail: parsed.data.patientEmail,
    confirmationCode,
    serviceTitle: service.title,
    dentistName: dentist?.name ?? "Assigned clinician",
    appointmentDate: parsed.data.appointmentDate,
    appointmentTime: parsed.data.appointmentTime,
  });

  return NextResponse.json({
    id: data.id,
    confirmationCode,
    message:
      "Your appointment has been booked successfully. A confirmation has been sent to your email.",
  });
}

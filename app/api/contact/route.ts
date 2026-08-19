import { NextRequest, NextResponse } from "next/server";
import { contactSchema, sanitizeText } from "@/lib/validations/forms";
import { createServiceClient, hasSupabaseConfig } from "@/lib/supabase/admin";
import { rateLimit } from "@/lib/security/rate-limit";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const limit = rateLimit(`contact:${ip}`);

  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again shortly." },
      { status: 429 },
    );
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json(
      { error: "Contact service is not configured yet." },
      { status: 503 },
    );
  }

  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors[0]?.message ?? "Invalid contact details." },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  const supabase = createServiceClient();
  const { error } = await supabase.from("contact_enquiries").insert({
    name: sanitizeText(parsed.data.name),
    email: parsed.data.email.toLowerCase(),
    phone: parsed.data.phone || null,
    message: sanitizeText(parsed.data.message),
    status: "new",
  });

  if (error) {
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }

  return NextResponse.json({
    message: "Thanks for reaching out. Our team will respond within one business day.",
  });
}

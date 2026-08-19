import { createServiceClient, hasSupabaseConfig } from "@/lib/supabase/admin";
import { services as staticServices, dentists as staticDentists } from "@/lib/constants/site";
import type { Appointment, ContactEnquiry, Dentist, Service } from "@/types/database";

export async function getServices(): Promise<Service[]> {
  if (!hasSupabaseConfig()) {
    return staticServices.map((item, index) => ({
      id: `static-${index}`,
      slug: item.slug,
      title: item.title,
      description: item.description,
      duration_minutes: item.duration,
      price_label: item.price,
      active: true,
    }));
  }

  const supabase = createServiceClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("active", true)
    .order("title");

  return data ?? [];
}

export async function getDentists(): Promise<Dentist[]> {
  if (!hasSupabaseConfig()) {
    return staticDentists.map((item, index) => ({
      id: `static-${index}`,
      slug: item.slug,
      name: item.name,
      title: item.title,
      bio: item.bio,
      specialties: item.specialties,
      image_url: item.image,
      active: true,
    }));
  }

  const supabase = createServiceClient();
  const { data } = await supabase
    .from("dentists")
    .select("*")
    .eq("active", true)
    .order("name");

  return data ?? [];
}

export async function getAppointments(): Promise<Appointment[]> {
  if (!hasSupabaseConfig()) return [];
  const supabase = createServiceClient();
  const { data } = await supabase
    .from("appointments")
    .select("*")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export async function getEnquiries(): Promise<ContactEnquiry[]> {
  if (!hasSupabaseConfig()) return [];
  const supabase = createServiceClient();
  const { data } = await supabase
    .from("contact_enquiries")
    .select("*")
    .order("created_at", { ascending: false });
  return data ?? [];
}

export async function getBookedSlots(date: string, dentistSlug: string) {
  if (!hasSupabaseConfig()) return [];

  const supabase = createServiceClient();
  const { data: dentist } = await supabase
    .from("dentists")
    .select("id")
    .eq("slug", dentistSlug)
    .maybeSingle();

  if (!dentist) return [];

  const { data } = await supabase
    .from("appointments")
    .select("appointment_time")
    .eq("appointment_date", date)
    .eq("dentist_id", dentist.id)
    .in("status", ["pending", "confirmed"]);

  return (data ?? []).map((item) => String(item.appointment_time).slice(0, 5));
}

export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export type EnquiryStatus = "new" | "in_progress" | "resolved";

export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration_minutes: number;
  price_label: string;
  active: boolean;
};

export type Dentist = {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  specialties: string[];
  image_url: string;
  active: boolean;
};

export type Appointment = {
  id: string;
  service_id: string;
  dentist_id: string | null;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  appointment_date: string;
  appointment_time: string;
  notes: string | null;
  status: AppointmentStatus;
  confirmation_code: string;
  created_at: string;
};

export type ContactEnquiry = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: EnquiryStatus;
  created_at: string;
};

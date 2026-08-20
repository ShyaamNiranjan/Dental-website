import { z } from "zod";

const phoneRegex = /^(?:\+1[\s.-]?)?(?:\(?[2-9]\d{2}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;

export const appointmentSchema = z.object({
  serviceSlug: z.string().min(1),
  dentistSlug: z.string().optional(),
  appointmentDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  appointmentTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  patientName: z.string().trim().min(2).max(120),
  patientEmail: z.string().trim().email().max(160),
  patientPhone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid US phone number"),
  notes: z.string().trim().max(500).optional(),
  website: z.string().max(0).optional(),
});

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid US phone number")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(),
});

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type ContactInput = z.infer<typeof contactSchema>;

export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

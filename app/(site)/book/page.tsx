import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking/booking-wizard";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your dental appointment online with service selection, clinician choice, and instant confirmation.",
};

export default function BookPage() {
  return (
    <Section
      eyebrow="Booking"
      title="Book your appointment in a few guided steps"
      description="Select your service, choose a clinician, pick a time, and receive a confirmation code instantly."
    >
      <BookingWizard />
    </Section>
  );
}

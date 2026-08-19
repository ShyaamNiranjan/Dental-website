import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking/booking-wizard";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your appointment at Prestige Dental Beverly Hills — choose your service, select a dentist, pick a time, and receive instant confirmation.",
};

export default function BookPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Online Booking</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Book your appointment.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Select your service, choose your clinician, pick a time that works, and receive an instant confirmation code. No phone calls required.
          </p>
        </div>
      </section>
      <Section eyebrow="" title="">
        <BookingWizard />
      </Section>
    </>
  );
}

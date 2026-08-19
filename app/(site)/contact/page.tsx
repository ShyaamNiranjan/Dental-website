import type { Metadata } from "next";
import { ContactBlock } from "@/components/sections/contact-block";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Prestige Dental Beverly Hills — send a message, get directions, or call to speak with our front desk team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            We're here when you need us.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Reach out with questions, insurance queries, or anything else. Our front desk team responds within one business day.
          </p>
        </div>
      </section>
      <Section eyebrow="" title="Send us a message" className="pb-8">
        <ContactForm />
      </Section>
      <ContactBlock />
    </>
  );
}

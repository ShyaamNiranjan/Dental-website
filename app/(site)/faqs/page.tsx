import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/constants/site";
import { Section } from "@/components/ui/section";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about appointments, insurance, treatments, and what to expect at Prestige Dental Beverly Hills.",
};

export default function FaqsPage() {
  return (
    <>
      <Section
        eyebrow="FAQs"
        title="Answers before your first visit"
        description="Common questions about booking, insurance, treatments, emergencies, and what makes Prestige Dental different."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer text-base font-semibold text-slate-900 marker:text-teal-600">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <p className="text-slate-600 text-sm">Still have a question?</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300"
            >
              Send us a message
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { faqs } from "@/lib/constants/site";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about appointments, treatments, and clinic policies.",
};

export default function FaqsPage() {
  return (
    <Section
      eyebrow="FAQs"
      title="Answers before your first visit"
      description="Common questions about booking, treatments, emergencies, and what to expect."
    >
      <div className="space-y-4">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <summary className="cursor-pointer text-base font-semibold text-slate-900">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

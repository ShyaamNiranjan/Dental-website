import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ClearSmile Dental Studio's patient-first philosophy, modern clinic experience, and care standards.",
};

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="A dental clinic designed around clarity and trust"
      description={siteConfig.description}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-slate-900">Our approach</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            We combine modern diagnostics, transparent treatment planning, and
            a booking experience that respects your time. Every visit is structured
            so patients understand options, timelines, and next steps before treatment begins.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-slate-900">Why patients choose us</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <li>Mobile-first online booking with instant confirmation</li>
            <li>Experienced clinicians across cosmetic and family dentistry</li>
            <li>Calm clinic environment with clear communication</li>
            <li>Follow-up support and responsive front-desk coordination</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

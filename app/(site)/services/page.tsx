import type { Metadata } from "next";
import { services } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore general dentistry, cosmetic treatments, implants, Invisalign, root canal therapy, and pediatric care.",
};

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="Every treatment, explained clearly"
      description="Choose the care you need with transparent pricing guidance and realistic appointment durations."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug}>
            <p className="text-sm font-semibold text-teal-700">
              {service.duration} minutes
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.description}
            </p>
            <p className="mt-4 font-medium text-slate-900">{service.price}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

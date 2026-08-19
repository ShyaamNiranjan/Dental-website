import Link from "next/link";
import { services } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <Section
      eyebrow="Services"
      title="Complete dental care, thoughtfully organized"
      description="Every service includes transparent timelines, clinician guidance, and follow-up support."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <Card key={service.slug} className="flex flex-col">
            <p className="text-sm font-semibold text-teal-700">
              {service.duration} min
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {service.description}
            </p>
            <p className="mt-4 text-sm font-medium text-slate-900">
              {service.price}
            </p>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
        >
          Explore all services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

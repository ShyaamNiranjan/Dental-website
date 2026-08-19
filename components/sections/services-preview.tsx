import Link from "next/link";
import { services } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { ArrowRight, Clock } from "lucide-react";

export function ServicesPreview() {
  return (
    <Section
      eyebrow="Services"
      title="Complete dental care under one roof"
      description="Every service includes a thorough consultation, transparent treatment options, and a clinician who takes the time to explain exactly what you're getting and why."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
            <Card className="h-full transition group-hover:border-teal-300 group-hover:shadow-md">
              <div className="flex items-center gap-2 text-sm text-teal-700">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {service.duration} min
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 group-hover:text-teal-800">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {service.shortDescription}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900">{service.price}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-teal-700">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

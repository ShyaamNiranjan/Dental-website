import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Comprehensive dental services in Beverly Hills including cosmetic dentistry, implants, Invisalign, whitening, root canal, and pediatric care.",
};

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="Every treatment your family needs, in one practice"
      description="From routine checkups to full smile transformations, our Beverly Hills team handles every level of care with the same standard of clinical excellence."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
            <Card className="h-full flex flex-col transition group-hover:border-teal-300 group-hover:shadow-md">
              <div className="flex items-center gap-2 text-sm text-teal-700">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {service.duration} minutes
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 group-hover:text-teal-800">
                {service.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {service.shortDescription}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="font-semibold text-slate-900">{service.price}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-700">
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

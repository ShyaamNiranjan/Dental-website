import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/constants/site";
import { Section } from "@/components/ui/section";
import { CheckCircle2, Clock, ArrowLeft, CalendarDays } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const others = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Services
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {service.duration} minutes
              </span>
              <span className="text-sm font-semibold text-slate-900">{service.price}</span>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{service.description}</p>

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-slate-900">What's included</h2>
              <ul className="mt-5 space-y-3">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-6 text-slate-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Ready to get started?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Book your {service.title.toLowerCase()} appointment online. Same-week availability for most services.
              </p>
              <Link
                href="/book"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </Link>
              <p className="mt-5 text-center text-xs text-slate-500">
                Questions first? Call us at{" "}
                <a
                  href="tel:(310) 555-0192"
                  className="font-medium text-teal-800"
                >
                  (310) 555-0192
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <Section
          eyebrow="Other Services"
          title="Explore more treatments"
          className="bg-slate-50"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-sm"
              >
                <p className="text-sm font-medium text-teal-700">{item.duration} min</p>
                <h3 className="mt-2 font-semibold text-slate-900 group-hover:text-teal-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { CalendarDays, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read verified patient reviews for Prestige Dental Beverly Hills. Rated 5.0 stars across Google, Yelp, and Healthgrades.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Reviews</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            What our patients say.
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <span>5.0 average</span>
            </div>
            <span>127 verified reviews</span>
            <span>Google · Yelp · Healthgrades</span>
          </div>
        </div>
      </section>

      <Section eyebrow="" title="">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <div className="flex gap-1 text-amber-500" aria-hidden="true">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-7 text-slate-700">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </figcaption>
            </Card>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Ready to experience this for yourself?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            New patients are welcome. Most appointments available within the week.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}

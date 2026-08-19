import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Prestige Dental Beverly Hills is a patient-first practice built around clinical excellence, transparent communication, and a modern booking experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            A Beverly Hills practice built on trust, not volume.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Prestige Dental was founded on a simple premise: that premium dental care should feel like premium dental care — from the moment you book online to the moment you walk out of the treatment room.
          </p>
        </div>
      </section>

      <Section eyebrow="Our Philosophy" title="We operate differently.">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-slate-900">Longer appointments, not shorter ones</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Most dental practices are built around volume — 15-minute slots, rushed consultations, procedures recommended before the patient fully understands their options. We take a different approach. Every new patient receives a 60-minute comprehensive exam. No procedures are recommended without a clear explanation of the finding, the options, and the honest clinical recommendation.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-slate-900">Transparent treatment planning</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              You will never receive a surprise bill at Prestige Dental. Before any treatment begins, our team provides a written breakdown of costs, insurance coverage, and timeline. We accept most major PPO insurance plans and offer in-house financing for larger treatment plans through CareCredit and Sunbit.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-slate-900">Technology that serves the patient</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We use digital radiography, intraoral cameras, 3D CBCT imaging, and guided surgical planning tools — not because they're impressive, but because they produce better outcomes and reduce patient discomfort. Our online booking system gives patients same-week access without a phone call.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-slate-900">A team that stays current</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Dentistry evolves quickly. Our clinicians complete continuing education well beyond state requirements, hold board certifications in their specialties, and maintain active memberships in the American Dental Association, the Academy of General Dentistry, and specialty organizations. What we learn, our patients benefit from.
            </p>
          </Card>
        </div>
      </Section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            {[
              { stat: "18+", label: "Years in practice" },
              { stat: "2,000+", label: "Implants placed" },
              { stat: "5.0", label: "Average review rating" },
              { stat: "127+", label: "Verified patient reviews" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-semibold text-teal-400">{item.stat}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Location" title="Find us in Beverly Hills">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm leading-7 text-slate-600">
              We are located in the heart of Beverly Hills on Wilshire Boulevard, with convenient access from West Hollywood, Century City, Bel Air, and Santa Monica. Validated parking is available in the building garage.
            </p>
            <address className="not-italic text-sm leading-7 text-slate-700">
              <p className="font-semibold">{siteConfig.name}</p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}</p>
              <p><a href={`tel:${siteConfig.phone}`} className="text-teal-800 font-medium">{siteConfig.phone}</a></p>
            </address>
            <div className="pt-2">
              {siteConfig.hours.map((item) => (
                <p key={item.days} className="text-sm text-slate-600">
                  <span className="font-medium">{item.days}:</span> {item.time}
                </p>
              ))}
            </div>
            <Link
              href="/book"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="Prestige Dental Beverly Hills location"
              src={siteConfig.mapEmbedUrl}
              className="h-full min-h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

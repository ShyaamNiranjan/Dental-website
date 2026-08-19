import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Mobile-first dental experience
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Dental care that feels calm, clear, and completely modern.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            {siteConfig.tagline}. Book online in minutes, meet experienced
            clinicians, and get treatment plans explained in plain language.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              View Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Same-week appointments",
              "Secure online booking",
              "Experienced specialists",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-teal-900/5">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-700 to-teal-900 p-8 text-white">
              <ShieldCheck className="h-10 w-10" aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-semibold">
                Built for patients who expect better.
              </h2>
              <p className="mt-3 text-sm leading-6 text-teal-50">
                From booking to follow-up, every touchpoint is designed for
                clarity, speed, and trust.
              </p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-teal-100">
                    Avg. wait time
                  </dt>
                  <dd className="text-2xl font-semibold">8 min</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-teal-100">
                    Patient satisfaction
                  </dt>
                  <dd className="text-2xl font-semibold">4.9/5</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

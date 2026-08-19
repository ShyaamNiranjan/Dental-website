import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Star } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-800/20 via-transparent to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-700/40 bg-teal-900/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
            Beverly Hills, California
          </div>
          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl">
            Dental care built for patients who expect more.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
            {siteConfig.tagline}. Serving Beverly Hills, West Hollywood, and Century City with same-week availability and a patient experience that matches the standard of this neighborhood.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-400"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book an Appointment
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm text-slate-300">5.0 across 127 reviews</span>
            </div>
            <div className="h-4 w-px bg-white/20" aria-hidden="true" />
            <span className="text-sm text-slate-300">LA Magazine Top Dentist 2024</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-600 to-teal-900 p-7 text-white">
              <ShieldCheck className="h-9 w-9 text-teal-200" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-semibold">
                New patient appointments available this week.
              </h2>
              <p className="mt-3 text-sm leading-6 text-teal-100">
                Most patients are seen within 3–5 business days. Dental emergencies are accommodated same-day.
              </p>
              <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-teal-200">Avg. wait</dt>
                  <dd className="mt-1 text-2xl font-semibold">6 min</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-teal-200">Satisfaction</dt>
                  <dd className="mt-1 text-2xl font-semibold">5.0 / 5</dd>
                </div>
              </dl>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {[
                "Online booking with instant confirmation",
                "Most PPO insurance plans accepted",
                "Flexible financing available",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

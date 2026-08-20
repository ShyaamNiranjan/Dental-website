import Link from "next/link";
import { Section } from "@/components/ui/section";
import { CalendarDays, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

export function CTABanner() {
  return (
    <Section title="Book your visit" className="py-12">
      <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
              New patients welcome
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-snug">
              Book your appointment online.<br className="hidden md:block" /> Most slots available within the week.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              Select your service, choose your dentist, and receive an instant confirmation — no phone calls required.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-400 whitespace-nowrap"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book Online
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 whitespace-nowrap"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

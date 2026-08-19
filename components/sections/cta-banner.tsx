import Link from "next/link";
import { Section } from "@/components/ui/section";

export function CTABanner() {
  return (
    <Section title="Book your visit" className="py-12">
      <div className="rounded-[2rem] bg-slate-950 px-6 py-10 text-white md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              Ready when you are
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Book your visit in under 2 minutes.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Choose your service, pick a clinician, select a time, and receive
              instant confirmation.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-400"
          >
            Start Booking
          </Link>
        </div>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { CalendarDays } from "lucide-react";

export function StickyCTA() {
  return (
    <Link
      href="/book"
      aria-label="Book an appointment"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-800 hover:scale-105 active:scale-95 md:hidden"
    >
      <CalendarDays className="h-6 w-6" aria-hidden="true" />
    </Link>
  );
}

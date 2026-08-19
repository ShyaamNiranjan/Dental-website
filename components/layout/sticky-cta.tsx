import Link from "next/link";
import { CalendarDays } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <Link
        href="/book"
        className="flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/30"
      >
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        Book an Appointment
      </Link>
    </div>
  );
}

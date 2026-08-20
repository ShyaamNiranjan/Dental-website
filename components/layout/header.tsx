import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="bg-amber-400 px-4 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 sm:text-xs">
        Demo website — not a real dental practice
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-xs font-bold text-white tracking-tight">
            PD
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-slate-900 leading-tight">
                Prestige Dental
              </p>
              <span className="rounded bg-amber-400 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                Demo
              </span>
            </div>
            <p className="hidden text-xs text-slate-500 sm:block leading-tight">
              Beverly Hills
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 md:inline-flex"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Link
            href="/book"
            className="hidden rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex"
          >
            Book Appointment
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-sm font-bold text-white">
            CS
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {siteConfig.name}
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Premium dental care
            </p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 lg:flex"
        >
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
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:inline-flex"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <Link
            href="/book"
            className="hidden rounded-full bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800 sm:inline-flex"
          >
            Book Appointment
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

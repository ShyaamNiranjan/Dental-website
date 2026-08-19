import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xs font-bold text-white">
              PD
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Prestige Dental Beverly Hills</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Prestige Dental Beverly Hills. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" className="transition hover:text-white">
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.postalCode}
            </p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="transition hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </p>
            <div className="pt-2 text-xs text-slate-500">
              {siteConfig.hours.map((item) => (
                <p key={item.days}>{item.days}: {item.time}</p>
              ))}
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}

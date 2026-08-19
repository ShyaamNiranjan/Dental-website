import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-sm font-bold text-white">
            CS
          </div>
          <h2 className="text-lg font-semibold text-white">{siteConfig.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Visit Us
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic leading-6">
            <p>{siteConfig.address.street}</p>
            <p>
              {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.postalCode}
            </p>
            <p>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. Demo deployment.
      </div>
    </footer>
  );
}

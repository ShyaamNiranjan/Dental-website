import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { dentists } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Dentists",
  description:
    "Meet the Prestige Dental Beverly Hills team — board-certified cosmetic, surgical, and family dentists with advanced fellowship training.",
};

export default function DentistsPage() {
  return (
    <Section
      eyebrow="Our Dentists"
      title="Clinicians with credentials that matter"
      description="Every dentist at Prestige Dental holds board certification, has completed advanced fellowship training, and brings a record of complex, successful cases to every appointment."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {dentists.map((dentist) => (
          <Link key={dentist.slug} href={`/dentists/${dentist.slug}`} className="group block">
            <Card className="h-full flex flex-col transition group-hover:border-teal-300 group-hover:shadow-md">
              <Image
                src={dentist.image}
                alt={dentist.name}
                width={96}
                height={96}
                className="rounded-2xl bg-teal-50"
              />
              <h2 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-teal-800">
                {dentist.name}
              </h2>
              <p className="text-sm font-medium text-teal-700">{dentist.title}</p>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{dentist.shortBio}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {dentist.specialties.slice(0, 2).map((specialty) => (
                  <li
                    key={specialty}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800"
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-700">
                Full profile <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

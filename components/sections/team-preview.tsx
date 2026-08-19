import Link from "next/link";
import { dentists } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function TeamPreview() {
  return (
    <Section
      eyebrow="Our Dentists"
      title="Specialists with credentials that matter"
      description="Each clinician at Prestige Dental brings board certification, advanced fellowship training, and a record of complex, successful cases."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {dentists.map((dentist) => (
          <Link key={dentist.slug} href={`/dentists/${dentist.slug}`} className="group block">
            <Card className="h-full transition group-hover:border-teal-300 group-hover:shadow-md">
              <Image
                src={dentist.image}
                alt={dentist.name}
                width={80}
                height={80}
                className="rounded-2xl bg-teal-50"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-800">
                {dentist.name}
              </h3>
              <p className="text-sm font-medium text-teal-700">{dentist.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{dentist.shortBio}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-700">
                Full profile <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { dentists } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Dentists",
  description:
    "Meet the ClearSmile Dental Studio team of cosmetic, surgical, and pediatric specialists.",
};

export default function DentistsPage() {
  return (
    <Section
      eyebrow="Our Team"
      title="Specialists focused on patient comfort"
      description="Each clinician brings deep expertise and a calm, communication-first approach."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {dentists.map((dentist) => (
          <Card key={dentist.slug}>
            <Image
              src={dentist.image}
              alt={dentist.name}
              width={96}
              height={96}
              className="rounded-2xl bg-teal-50"
            />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              {dentist.name}
            </h2>
            <p className="text-sm font-medium text-teal-700">{dentist.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{dentist.bio}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dentist.specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-800"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { dentists } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import Image from "next/image";

export function TeamPreview() {
  return (
    <Section
      eyebrow="Dentists"
      title="Clinicians patients trust"
      description="Experienced specialists across cosmetic, surgical, and family dentistry."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {dentists.map((dentist) => (
          <Card key={dentist.slug}>
            <Image
              src={dentist.image}
              alt={dentist.name}
              width={80}
              height={80}
              className="rounded-2xl bg-teal-50"
            />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {dentist.name}
            </h3>
            <p className="text-sm font-medium text-teal-700">{dentist.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{dentist.bio}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

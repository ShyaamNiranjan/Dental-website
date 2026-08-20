import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { dentists, siteConfig } from "@/lib/constants/site";
import { Section } from "@/components/ui/section";
import { ArrowLeft, CalendarDays, GraduationCap } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return dentists.map((dentist) => ({ slug: dentist.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dentist = dentists.find((item) => item.slug === slug);
  if (!dentist) return {};
  return {
    title: dentist.name,
    description: dentist.shortBio,
  };
}

export default async function DentistDetailPage({ params }: Props) {
  const { slug } = await params;
  const dentist = dentists.find((item) => item.slug === slug);

  if (!dentist) notFound();

  const others = dentists.filter((item) => item.slug !== slug);

  return (
    <>
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <Link
            href="/dentists"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Our Dentists
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-start gap-6">
              <Image
                src={dentist.image}
                alt={dentist.name}
                width={100}
                height={100}
                className="rounded-2xl bg-teal-50"
              />
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  {dentist.name}
                </h1>
                <p className="mt-1 text-base font-medium text-teal-700">{dentist.title}</p>
              </div>
            </div>

            <p className="mt-8 text-base leading-8 text-slate-600">{dentist.bio}</p>

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-slate-900">Specialties</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {dentist.specialties.map((specialty) => (
                  <li
                    key={specialty}
                    className="rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-800"
                  >
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <GraduationCap className="h-5 w-5 text-teal-700" aria-hidden="true" />
                Education & Training
              </h2>
              <ul className="mt-4 space-y-2">
                {dentist.education.map((item) => (
                  <li key={item} className="text-sm leading-6 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Book with {dentist.name.split(" ")[1]}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Select your service and choose {dentist.name.split(" ")[1]} as your preferred clinician during booking.
              </p>
              <Link
                href="/book"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Book an Appointment
              </Link>
              <p className="mt-4 text-center text-xs text-slate-500">
                Or call{" "}
                <a href={siteConfig.phoneHref} className="font-medium text-teal-800">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <Section eyebrow="The Team" title="Meet our other dentists" className="bg-slate-50">
          <div className="grid gap-5 md:grid-cols-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/dentists/${item.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-teal-300 hover:shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-xl bg-teal-50 flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-teal-800">
                    {item.name}
                  </p>
                  <p className="text-sm text-teal-700">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.shortBio}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

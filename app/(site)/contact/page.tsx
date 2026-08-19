import type { Metadata } from "next";
import { ContactBlock } from "@/components/sections/contact-block";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ClearSmile Dental Studio for enquiries, directions, and appointment support.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Send us a secure message"
        description="Use the form below for treatment questions, follow-ups, or general enquiries."
        className="pb-8"
      >
        <ContactForm />
      </Section>
      <ContactBlock />
    </>
  );
}

import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { TeamPreview } from "@/components/sections/team-preview";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { CTABanner } from "@/components/sections/cta-banner";
import { ContactBlock } from "@/components/sections/contact-block";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TeamPreview />
      <TestimonialsPreview />
      <CTABanner />
      <ContactBlock />
    </>
  );
}

import { testimonials } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { Star } from "lucide-react";

export function TestimonialsPreview() {
  return (
    <Section
      eyebrow="Testimonials"
      title="Patients notice the difference"
      description="Real feedback from people who booked online and experienced the full workflow."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <div className="flex gap-1 text-amber-500" aria-hidden="true">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-7 text-slate-700">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </figcaption>
          </Card>
        ))}
      </div>
    </Section>
  );
}

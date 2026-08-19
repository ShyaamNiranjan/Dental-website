import Link from "next/link";
import { testimonials } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { ArrowRight, Star } from "lucide-react";

export function TestimonialsPreview() {
  return (
    <Section
      eyebrow="Patient Reviews"
      title="What patients say about us"
      description="Consistently rated 5 stars across Google, Yelp, and Healthgrades by patients across Beverly Hills and the Westside."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.slice(0, 3).map((item) => (
          <Card key={item.name}>
            <div className="flex gap-1 text-amber-500" aria-hidden="true">
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-7 text-slate-700">
              "{item.quote}"
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </figcaption>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800"
        >
          Read all reviews
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}

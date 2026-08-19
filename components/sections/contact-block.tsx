import { siteConfig } from "@/lib/constants/site";
import { Card, Section } from "@/components/ui/section";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export function ContactBlock() {
  return (
    <Section
      eyebrow="Contact"
      title="Visit the clinic or reach out directly"
      description="We respond to enquiries quickly and keep booking confirmations transparent."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-teal-700" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900">Address</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.postalCode}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-teal-700" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-1 text-sm text-teal-800"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-teal-700" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 text-sm text-teal-800"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock3 className="mt-1 h-5 w-5 text-teal-700" aria-hidden="true" />
            <div>
              <p className="font-semibold text-slate-900">Opening Hours</p>
              <ul className="mt-1 space-y-1 text-sm text-slate-600">
                {siteConfig.hours.map((item) => (
                  <li key={item.days}>
                    {item.days}: {item.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <div className="overflow-hidden rounded-3xl border border-slate-200">
          <iframe
            title="ClearSmile Dental Studio location map"
            src={siteConfig.mapEmbedUrl}
            className="h-full min-h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

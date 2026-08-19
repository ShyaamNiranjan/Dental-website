export const siteConfig = {
  name: "ClearSmile Dental Studio",
  tagline: "Modern dental care built around your comfort",
  description:
    "Premium, patient-first dental care with online booking, experienced clinicians, and a calm clinic experience in Mumbai.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@clearsmile.demo",
  address: {
    street: "42 Health Park Road, Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400050",
    country: "IN",
  },
  hours: [
    { days: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.67123456789!2d72.8276!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBandra%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/dentists", label: "Dentists" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "general-checkup",
    title: "General Checkup",
    description: "Comprehensive oral exams, digital X-rays, and preventive care plans.",
    duration: 45,
    price: "From ₹1,200",
    icon: "stethoscope",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, natural-looking smile.",
    duration: 60,
    price: "From ₹8,500",
    icon: "sparkles",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description: "Long-lasting implant solutions with guided treatment planning.",
    duration: 90,
    price: "Consultation required",
    icon: "shield",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    description: "Clear aligner therapy for discreet orthodontic correction.",
    duration: 60,
    price: "From ₹1,50,000",
    icon: "smile",
  },
  {
    slug: "root-canal",
    title: "Root Canal Therapy",
    description: "Pain-managed endodontic care to save infected teeth.",
    duration: 75,
    price: "From ₹6,500",
    icon: "heart-pulse",
  },
  {
    slug: "pediatric-care",
    title: "Pediatric Care",
    description: "Gentle dentistry designed for children and first-time visits.",
    duration: 45,
    price: "From ₹1,500",
    icon: "baby",
  },
];

export const dentists = [
  {
    slug: "dr-ananya-mehta",
    name: "Dr. Ananya Mehta",
    title: "Lead Dentist & Cosmetic Specialist",
    bio: "15+ years in cosmetic and restorative dentistry with a focus on minimally invasive care.",
    specialties: ["Cosmetic Dentistry", "Smile Design", "Veneers"],
    image: "/images/dentist-1.svg",
  },
  {
    slug: "dr-rohan-kapoor",
    name: "Dr. Rohan Kapoor",
    title: "Implant & Oral Surgery Specialist",
    bio: "Experienced in complex extractions, implants, and full-mouth rehabilitation cases.",
    specialties: ["Implants", "Oral Surgery", "Bone Grafting"],
    image: "/images/dentist-2.svg",
  },
  {
    slug: "dr-priya-nair",
    name: "Dr. Priya Nair",
    title: "Pediatric & Preventive Dentist",
    bio: "Known for creating calm, anxiety-free experiences for children and families.",
    specialties: ["Pediatric Care", "Preventive Dentistry", "Orthodontics"],
    image: "/images/dentist-3.svg",
  },
];

export const testimonials = [
  {
    name: "Neha Sharma",
    role: "Marketing Director",
    quote:
      "Booking online was effortless and the clinic felt premium from the moment I walked in. Dr. Ananya explained everything clearly.",
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Startup Founder",
    quote:
      "I had been putting off a root canal for months. The team made it painless and the follow-up confirmation gave me peace of mind.",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Parent",
    quote:
      "My daughter actually enjoyed her dental visit. The pediatric care here is thoughtful, gentle, and very professional.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do you accept walk-in appointments?",
    answer:
      "We recommend booking online to secure your preferred time. Same-day slots may be available depending on clinician schedules.",
  },
  {
    question: "How do I reschedule or cancel?",
    answer:
      "Use the confirmation email details or call our front desk at least 4 hours before your appointment to reschedule.",
  },
  {
    question: "Is teeth whitening safe?",
    answer:
      "Yes. Our in-clinic whitening protocols are clinically supervised and tailored to your enamel sensitivity profile.",
  },
  {
    question: "Do you treat dental emergencies?",
    answer:
      "Limited emergency slots are reserved daily. Call us directly for urgent pain, swelling, or trauma cases.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Bring a valid ID, any previous dental records, and a list of medications. Arrive 10 minutes early for intake.",
  },
];

export const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
];

export const siteConfig = {
  name: "Prestige Dental Beverly Hills",
  tagline: "Exceptional dental care for those who expect more",
  description:
    "Beverly Hills' premier dental practice offering cosmetic, restorative, and preventive care. Online booking, same-week availability, and a patient experience built around comfort and clarity.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "(424) 555-0147",
  phoneHref: "tel:+14245550147",
  email: "hello@prestigedental.com",
  address: {
    street: "9401 Wilshire Boulevard, Suite 820",
    city: "Beverly Hills",
    state: "CA",
    postalCode: "90212",
    country: "US",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.5!2d-118.4004!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb8d9a4f0001%3A0x0!2sWilshire+Blvd%2C+Beverly+Hills%2C+CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/dentists", label: "Our Dentists" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "comprehensive-exam",
    title: "Comprehensive Exam",
    shortDescription: "Thorough oral evaluation with digital X-rays and a personalized care plan.",
    description:
      "Our comprehensive dental exam goes beyond a routine checkup. Using the latest digital radiography and intraoral imaging, our clinicians perform a full assessment of your gum health, bite alignment, enamel integrity, and soft tissue. You'll leave with a clear understanding of your oral health status and a prioritized care plan — no unnecessary procedures, just honest guidance.",
    duration: 60,
    price: "From $175",
    highlights: [
      "Full-mouth digital X-rays included",
      "Gum disease and cancer screening",
      "Bite and TMJ assessment",
      "Personalized treatment roadmap",
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Professional Teeth Whitening",
    shortDescription: "In-office whitening that delivers real results in a single appointment.",
    description:
      "Our professional whitening system delivers results that over-the-counter products simply cannot match. Using clinical-grade whitening agents and a custom shade analysis, we lighten teeth by several shades in a single visit — safely, comfortably, and without the post-treatment sensitivity that many patients dread. Take-home trays are available for ongoing maintenance.",
    duration: 90,
    price: "From $650",
    highlights: [
      "Up to 8 shades lighter in one visit",
      "Sensitivity-managed protocol",
      "Custom shade mapping before treatment",
      "Take-home maintenance kit included",
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent tooth replacement that looks, feels, and functions like your natural teeth.",
    description:
      "Dental implants are the gold standard for replacing missing teeth. Our board-certified implant specialist uses guided implant surgery to place titanium posts with precision, minimizing recovery time and maximizing long-term outcomes. From single-tooth replacement to full-arch restoration, we handle the complete process in-house — from consultation through crown placement.",
    duration: 120,
    price: "Consultation required",
    highlights: [
      "In-house specialist — no referrals needed",
      "3D guided implant placement",
      "Zirconia and porcelain crown options",
      "10-year structural warranty",
    ],
  },
  {
    slug: "invisalign",
    title: "Invisalign Clear Aligners",
    shortDescription: "Discreet orthodontic correction without wires, brackets, or lifestyle disruption.",
    description:
      "Invisalign uses a series of custom-made, clear plastic aligners to gradually shift your teeth into alignment — invisibly and comfortably. As a Platinum Invisalign provider, our team has completed hundreds of cases ranging from mild crowding to complex bite correction. Treatment is planned digitally so you can see your projected result before committing.",
    duration: 60,
    price: "From $4,200",
    highlights: [
      "Platinum Invisalign provider",
      "Digital treatment preview before you start",
      "Removable — eat and brush normally",
      "Average treatment time 12–18 months",
    ],
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    shortDescription: "Pain-free endodontic treatment that saves infected teeth and relieves discomfort fast.",
    description:
      "Root canal therapy has an unfair reputation. With modern anesthesia and rotary instrumentation, the procedure is no more uncomfortable than a standard filling — and it eliminates the severe pain caused by infected pulp tissue. Our endodontic team completes most cases in a single appointment, with same-day emergency slots reserved for acute cases.",
    duration: 90,
    price: "From $1,100",
    highlights: [
      "Same-day emergency appointments available",
      "Single-visit completion in most cases",
      "Rotary endodontics for precision and comfort",
      "Crown included in treatment planning",
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, anxiety-free dental care designed specifically for children.",
    description:
      "Creating positive dental experiences early sets children up for a lifetime of good oral health. Our pediatric suite is designed to be welcoming, calm, and entirely non-intimidating. From first visits to sealants, fluoride treatments, and early orthodontic assessments, our team communicates directly with kids in language they understand — and with parents in language they trust.",
    duration: 45,
    price: "From $120",
    highlights: [
      "Dedicated pediatric treatment room",
      "Age-appropriate communication and techniques",
      "Sealants, fluoride, and early orthodontic screening",
      "Accepts most major dental insurance plans",
    ],
  },
];

export const dentists = [
  {
    slug: "dr-catherine-mills",
    name: "Dr. Catherine Mills, DDS",
    title: "Founder & Lead Cosmetic Dentist",
    shortBio: "Board-certified cosmetic dentist with 18 years of experience and a reputation for smile transformations that look completely natural.",
    bio: "Dr. Catherine Mills founded Prestige Dental Beverly Hills after a decade of practicing at top cosmetic dental centers in New York and Los Angeles. A graduate of UCLA School of Dentistry and a diplomate of the American Board of Aesthetic Dentistry, she has been featured in Los Angeles Magazine's 'Top Dentists' list for six consecutive years. Dr. Mills specializes in full smile makeovers, porcelain veneers, and implant-supported restorations. Her philosophy is simple: great dentistry should be invisible — patients should walk out looking like the best version of themselves, not like they've had dental work done.",
    specialties: ["Cosmetic Dentistry", "Porcelain Veneers", "Smile Design", "Implant Restorations"],
    education: ["DDS, UCLA School of Dentistry", "Diplomate, American Board of Aesthetic Dentistry"],
    image: "/images/dentist-1.svg",
  },
  {
    slug: "dr-james-harrington",
    name: "Dr. James Harrington, DMD",
    title: "Implant & Oral Surgery Specialist",
    shortBio: "Fellowship-trained oral surgeon specializing in dental implants, bone grafting, and full-arch rehabilitation.",
    bio: "Dr. James Harrington completed his dental degree at Harvard School of Dental Medicine and went on to complete a fellowship in oral and maxillofacial surgery at Cedars-Sinai Medical Center. With over 2,000 implant placements performed, he brings a level of technical precision and clinical experience that is rare outside of academic medical centers. Dr. Harrington uses CBCT-guided surgery for every implant placement, ensuring accuracy down to the millimeter. He consults directly with patients to set honest expectations about timelines, outcomes, and recovery.",
    specialties: ["Dental Implants", "Oral Surgery", "Bone Grafting", "Full-Arch Rehabilitation"],
    education: ["DMD, Harvard School of Dental Medicine", "Fellowship, Oral & Maxillofacial Surgery, Cedars-Sinai"],
    image: "/images/dentist-2.svg",
  },
  {
    slug: "dr-sofia-reyes",
    name: "Dr. Sofia Reyes, DDS",
    title: "General & Pediatric Dentist",
    shortBio: "Family-focused dentist known for creating calm, trust-based experiences for patients of all ages — especially first-timers and anxious patients.",
    bio: "Dr. Sofia Reyes earned her DDS from USC Herman Ostrow School of Dentistry, where she graduated with honors and received the Dean's Award for Patient Communication. She has advanced training in pediatric behavior management, dental anxiety protocols, and preventive care programs. Dr. Reyes believes that the quality of patient communication is just as important as clinical skill — and she has built a loyal patient base across Beverly Hills and West Hollywood on that foundation. She speaks fluent English and Spanish.",
    specialties: ["General Dentistry", "Pediatric Care", "Preventive Dentistry", "Dental Anxiety Management"],
    education: ["DDS, USC Herman Ostrow School of Dentistry", "Advanced Training in Pediatric Behavior Management"],
    image: "/images/dentist-3.svg",
  },
];

export const testimonials = [
  {
    name: "Amanda K.",
    role: "Entertainment Attorney, West Hollywood",
    quote:
      "I've been to several high-end dental practices in LA and Prestige is in a different category. The booking process was seamless, the clinic is immaculate, and Dr. Mills is genuinely exceptional. My veneers look completely natural.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    role: "Tech Executive, Santa Monica",
    quote:
      "I'd been avoiding a root canal for over a year. Dr. Harrington made it completely painless — I was back at my desk the same afternoon. The online booking and confirmation system made the whole thing feel effortless.",
    rating: 5,
  },
  {
    name: "Jennifer & Noah R.",
    role: "Parents, Bel Air",
    quote:
      "Finding a dentist our kids actually look forward to visiting was something we thought was impossible. Dr. Reyes is remarkable with children. Our seven-year-old asked when he could come back.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Physician, Beverly Hills",
    quote:
      "As a medical professional I appreciate when a practice operates with clinical rigor. The intake process, the imaging, the treatment explanation — everything met a standard I rarely see outside of hospital settings.",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Real Estate Developer, Century City",
    quote:
      "Six months into Invisalign and I'm already seeing results I didn't expect this early. The digital preview before I committed was a great touch — I knew exactly what I was signing up for.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Do you accept dental insurance?",
    answer:
      "We accept most major PPO dental insurance plans. Our front desk team will verify your benefits before your appointment and provide a clear breakdown of estimated out-of-pocket costs. We also offer in-house financing options for larger treatment plans.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "Most new patients can be seen within 3–5 business days. For dental emergencies, we reserve same-day slots — call us directly and we will do our best to accommodate you the same day.",
  },
  {
    question: "What makes Prestige Dental different from other Beverly Hills practices?",
    answer:
      "We operate on a longer appointment model — you are never rushed. Every new patient receives a comprehensive exam before any treatment is recommended, and our clinicians communicate every finding and option in plain language before proceeding.",
  },
  {
    question: "How do I reschedule or cancel my appointment?",
    answer:
      "You can reschedule by calling our front desk or replying to your confirmation email. We ask for at least 24 hours notice for cancellations so we can offer your slot to another patient.",
  },
  {
    question: "Is professional teeth whitening safe?",
    answer:
      "Yes. Our in-office whitening protocol is clinically supervised and uses professional-grade agents that are safe for enamel. We conduct a sensitivity assessment beforehand and adjust the treatment accordingly.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Bring a valid photo ID, your insurance card if applicable, and any recent dental X-rays or records from a previous provider. We recommend arriving 10 minutes early to complete new patient intake.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We partner with CareCredit and Sunbit to offer flexible financing with low monthly payment options. Interest-free periods are available for qualified applicants.",
  },
];

export const timeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

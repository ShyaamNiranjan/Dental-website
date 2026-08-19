-- Update service slugs to match new site constants
update services set slug = 'comprehensive-exam'    where slug = 'general-checkup';
update services set slug = 'root-canal-therapy'    where slug = 'root-canal';
update services set slug = 'pediatric-dentistry'   where slug = 'pediatric-care';

-- Update titles and descriptions to match new content
update services set
  title = 'Comprehensive Exam',
  description = 'Thorough oral evaluation with digital X-rays and a personalized care plan.',
  duration_minutes = 60,
  price_label = 'From $175'
where slug = 'comprehensive-exam';

update services set
  title = 'Professional Teeth Whitening',
  description = 'In-office whitening that delivers real results in a single appointment.',
  duration_minutes = 90,
  price_label = 'From $650'
where slug = 'teeth-whitening';

update services set
  title = 'Dental Implants',
  description = 'Permanent tooth replacement that looks, feels, and functions like your natural teeth.',
  duration_minutes = 120,
  price_label = 'Consultation required'
where slug = 'dental-implants';

update services set
  title = 'Invisalign Clear Aligners',
  description = 'Discreet orthodontic correction without wires, brackets, or lifestyle disruption.',
  duration_minutes = 60,
  price_label = 'From $4,200'
where slug = 'invisalign';

update services set
  title = 'Root Canal Therapy',
  description = 'Pain-free endodontic treatment that saves infected teeth.',
  duration_minutes = 90,
  price_label = 'From $1,100'
where slug = 'root-canal-therapy';

update services set
  title = 'Pediatric Dentistry',
  description = 'Gentle, anxiety-free dental care designed specifically for children.',
  duration_minutes = 45,
  price_label = 'From $120'
where slug = 'pediatric-dentistry';

-- Update dentist slugs and info
update dentists set
  slug = 'dr-catherine-mills',
  name = 'Dr. Catherine Mills, DDS',
  title = 'Founder & Lead Cosmetic Dentist',
  bio = 'Board-certified cosmetic dentist with 18 years of experience and a reputation for smile transformations that look completely natural.'
where slug = 'dr-ananya-mehta';

update dentists set
  slug = 'dr-james-harrington',
  name = 'Dr. James Harrington, DMD',
  title = 'Implant & Oral Surgery Specialist',
  bio = 'Fellowship-trained oral surgeon specializing in dental implants, bone grafting, and full-arch rehabilitation.'
where slug = 'dr-rohan-kapoor';

update dentists set
  slug = 'dr-sofia-reyes',
  name = 'Dr. Sofia Reyes, DDS',
  title = 'General & Pediatric Dentist',
  bio = 'Family-focused dentist known for creating calm, trust-based experiences for patients of all ages.'
where slug = 'dr-priya-nair';

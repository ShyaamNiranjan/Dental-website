insert into services (slug, title, description, duration_minutes, price_label) values
  ('general-checkup', 'General Checkup', 'Comprehensive oral exams, digital X-rays, and preventive care plans.', 45, 'From ₹1,200'),
  ('teeth-whitening', 'Teeth Whitening', 'Professional whitening treatments for a brighter, natural-looking smile.', 60, 'From ₹8,500'),
  ('dental-implants', 'Dental Implants', 'Long-lasting implant solutions with guided treatment planning.', 90, 'Consultation required'),
  ('invisalign', 'Invisalign', 'Clear aligner therapy for discreet orthodontic correction.', 60, 'From ₹1,50,000'),
  ('root-canal', 'Root Canal Therapy', 'Pain-managed endodontic care to save infected teeth.', 75, 'From ₹6,500'),
  ('pediatric-care', 'Pediatric Care', 'Gentle dentistry designed for children and first-time visits.', 45, 'From ₹1,500')
on conflict (slug) do nothing;

insert into dentists (slug, name, title, bio, specialties, image_url) values
  ('dr-ananya-mehta', 'Dr. Ananya Mehta', 'Lead Dentist & Cosmetic Specialist', '15+ years in cosmetic and restorative dentistry with a focus on minimally invasive care.', array['Cosmetic Dentistry', 'Smile Design', 'Veneers'], '/images/dentist-1.svg'),
  ('dr-rohan-kapoor', 'Dr. Rohan Kapoor', 'Implant & Oral Surgery Specialist', 'Experienced in complex extractions, implants, and full-mouth rehabilitation cases.', array['Implants', 'Oral Surgery', 'Bone Grafting'], '/images/dentist-2.svg'),
  ('dr-priya-nair', 'Dr. Priya Nair', 'Pediatric & Preventive Dentist', 'Known for creating calm, anxiety-free experiences for children and families.', array['Pediatric Care', 'Preventive Dentistry', 'Orthodontics'], '/images/dentist-3.svg')
on conflict (slug) do nothing;

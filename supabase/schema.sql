-- ClearSmile Dental Studio schema
create extension if not exists "pgcrypto";

create type appointment_status as enum ('pending', 'confirmed', 'completed', 'cancelled');
create type enquiry_status as enum ('new', 'in_progress', 'resolved');

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  duration_minutes integer not null check (duration_minutes > 0),
  price_label text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists dentists (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  title text not null,
  bio text not null,
  specialties text[] not null default '{}',
  image_url text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references services(id),
  dentist_id uuid references dentists(id),
  patient_name text not null,
  patient_email text not null,
  patient_phone text not null,
  appointment_date date not null,
  appointment_time time not null,
  notes text,
  status appointment_status not null default 'pending',
  confirmation_code text unique not null,
  created_at timestamptz not null default now()
);

create table if not exists contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  status enquiry_status not null default 'new',
  created_at timestamptz not null default now()
);

create unique index if not exists appointments_unique_slot_idx
  on appointments (dentist_id, appointment_date, appointment_time)
  where status in ('pending', 'confirmed');

create index if not exists appointments_created_at_idx on appointments (created_at desc);
create index if not exists contact_enquiries_created_at_idx on contact_enquiries (created_at desc);

alter table services enable row level security;
alter table dentists enable row level security;
alter table appointments enable row level security;
alter table contact_enquiries enable row level security;

create policy "Public read active services"
  on services for select
  using (active = true);

create policy "Public read active dentists"
  on dentists for select
  using (active = true);

create policy "Public insert appointments"
  on appointments for insert
  with check (true);

create policy "Authenticated read appointments"
  on appointments for select
  to authenticated
  using (true);

create policy "Authenticated update appointments"
  on appointments for update
  to authenticated
  using (true);

create policy "Public insert enquiries"
  on contact_enquiries for insert
  with check (true);

create policy "Authenticated read enquiries"
  on contact_enquiries for select
  to authenticated
  using (true);

create policy "Authenticated update enquiries"
  on contact_enquiries for update
  to authenticated
  using (true);

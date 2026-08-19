# ClearSmile Dental Studio

Premium, mobile-first dental website demo built to match a real client requirement brief:

- Clean, responsive healthcare design
- Online appointment booking workflow
- Secure contact form handling
- Admin dashboard with authentication
- Local SEO structure and performance optimization

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Supabase (Postgres + Auth)
- Vercel deployment

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Create a Supabase project and run:

- [`supabase/schema.sql`](./supabase/schema.sql)
- [`supabase/seed.sql`](./supabase/seed.sql)

4. Create an admin user in Supabase Auth.

5. Start the dev server:

```bash
npm run dev
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO/metadata |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-side Supabase access |
| `RESEND_API_KEY` | Optional appointment confirmation emails |

## Deployment (Vercel + Custom Domain)

1. Push to GitHub.
2. Import the repo in Vercel.
3. Add all environment variables in Vercel project settings.
4. Deploy.
5. In Vercel → Domains, add your custom domain (for example `dental.yniidi.com`).
6. Update DNS at your domain provider:
   - `CNAME` for subdomain → `cname.vercel-dns.com`
   - or use Vercel nameservers if managing DNS there
7. Wait for SSL provisioning, then set `NEXT_PUBLIC_SITE_URL` to the live domain and redeploy.

## Demo Routes

- `/` — Home
- `/book` — Booking flow
- `/contact` — Secure contact form
- `/admin/login` — Admin authentication
- `/admin` — Dashboard

## Notes

This is a demo product built around a posted requirement. Branding, content, integrations, and deployment can be customized for the client's actual practice.

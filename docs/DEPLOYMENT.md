# Deployment Guide — Vercel + Custom Domain

This app is a Next.js project and should be deployed on **Vercel** (not GitHub Pages).

## 1. Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Open **SQL Editor** and run:
   - `supabase/schema.sql`
   - `supabase/seed.sql`
3. Create an admin user in **Authentication → Users**
4. Copy these values from **Project Settings → API**:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - anon public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - service_role key → `SUPABASE_SERVICE_ROLE_KEY`

## 2. Vercel Deploy

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `ShyaamNiranjan/Dental-website`
3. Framework preset: **Next.js**
4. Add environment variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...   # optional, for confirmation emails
```

5. Deploy

## 3. Custom Domain (example: dental.yniidi.com)

1. Vercel project → **Settings → Domains**
2. Add `dental.yniidi.com`
3. At your DNS provider (Cloudflare, etc.), add:

```
Type: CNAME
Name: dental
Value: cname.vercel-dns.com
```

4. Wait for SSL to provision (usually a few minutes)
5. Update `NEXT_PUBLIC_SITE_URL` to `https://dental.yniidi.com`
6. Redeploy

## 4. Post-Deploy Smoke Test

- [ ] `/` loads on mobile
- [ ] `/book` completes a test appointment
- [ ] duplicate slot booking is rejected
- [ ] `/contact` submits successfully
- [ ] `/admin/login` works with Supabase admin user
- [ ] admin can update appointment/enquiry status
- [ ] `/sitemap.xml` and `/robots.txt` resolve

## 5. Optional Email Confirmations

Add a [Resend](https://resend.com) API key as `RESEND_API_KEY` to send booking confirmation emails automatically.

## Local Development Note

If C: drive is low on space, develop from `D:\Dental-website` (same repo copy) where `node_modules` can install successfully.

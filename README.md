# Gull Snobar — Portfolio

A premium dark-mode-first personal portfolio built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, **Supabase**, and **Resend**.

---

## 🚀 Quick Start

### 1. Install dependencies

Open PowerShell in `C:\Users\HP\portfolio` and run:

```powershell
npm install
```

> If `npm install` fails due to peer conflicts, run: `npm install --legacy-peer-deps`

### 2. Fill in `.env.local`

Open `.env.local` and replace the placeholder values:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Dashboard → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Dashboard → Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Project Settings → API |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys |
| `ADMIN_PASSWORD` | Set any strong password (e.g. `MyS3cretPass!`) |
| `ADMIN_SECRET_COOKIE` | Set any 32-char random string |

### 3. Set up Supabase database

1. Go to [supabase.com](https://supabase.com) → your project → **SQL Editor**
2. Copy the contents of `supabase/schema.sql`
3. Paste and click **Run**

### 4. Add your resume

Place your resume PDF at:
```
public/resume.pdf
```

### 5. Run locally

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── (main)/          # Public pages (Hero, About, Skills, etc.)
│   ├── admin/           # Password-protected CMS
│   ├── api/             # API routes (contact, guestbook, projects)
│   ├── guestbook/       # Guestbook page
│   ├── globals.css      # Design tokens (CSS variables)
│   └── layout.tsx       # Root layout with fonts + ThemeProvider
├── components/
│   ├── layout/          # Navbar, Footer, ThemeToggle, ThemeProvider
│   ├── sections/        # Hero, About, Skills, Experience, ProjectCard, Contact, Guestbook
│   └── shared/          # AnimatedText, SectionHeader
├── lib/                 # data.ts, utils.ts, supabase.ts, email.ts, validations.ts
├── types/               # TypeScript interfaces
├── supabase/            # schema.sql
├── public/              # resume.pdf, images
├── middleware.ts         # Admin auth guard
└── .env.local           # ← fill this in!
```

---

## 🎨 Design System

| Token | Dark | Light |
|---|---|---|
| Background | `#0A0A0A` | `#FAFAFA` |
| Surface | `#141414` | `#FFFFFF` |
| Border | `#262626` | `#E5E5E5` |
| Text Primary | `#FAFAFA` | `#0A0A0A` |
| Text Secondary | `#A3A3A3` | `#525252` |
| Accent | `#6366F1` | `#6366F1` |

**Fonts:** Space Grotesk (headings) + Inter (body) — both loaded via `next/font/google`

---

## 🛠 Admin Panel

Access at `/admin/login`. Log in with your `ADMIN_PASSWORD`.

Features:
- ✅ View all projects
- ✅ Add new project (with tech stack tags, featured toggle)
- ✅ Edit existing projects
- ✅ Delete projects
- ✅ Logout

---

## 🌐 Deploying to Vercel

1. Push code to GitHub (`.env.local` is gitignored — safe to push)
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add all env vars from `.env.local` in Vercel → Settings → Environment Variables
4. Click **Deploy**

---

## ✏️ Customisation

- **GitHub URL**: Update `personalInfo.github` in `lib/data.ts`
- **Projects**: Use `/admin` panel or edit `featuredProjects` in `lib/data.ts`
- **Accent colour**: Change `--accent` in `app/globals.css`
- **Add sections**: Create a component in `components/sections/` and import it in `app/(main)/page.tsx`

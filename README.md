# Gull Snobar — Developer Portfolio

A responsive developer portfolio presenting my projects, professional experience, technical skills, education, and contact information. Built with the Next.js App Router and a custom editorial design system.

## Highlights

- Responsive layouts for desktop, tablet, and mobile
- Light and dark themes
- Project showcase, experience, expertise, About, contact, and guestbook sections
- Validated contact and guestbook forms
- Supabase-backed project and guestbook data with local project fallbacks
- Password-protected project administration
- Accessible navigation, focus states, and reduced-motion support

## Technology Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 14, React 18, TypeScript |
| Styling | Tailwind CSS, PostCSS, CSS custom properties |
| Motion and icons | Framer Motion, Lucide React |
| Forms and validation | React Hook Form, Zod |
| Data and email | Supabase, Resend |
| Theming | next-themes |
| Utilities | clsx, tailwind-merge |
| Fonts | Inter, Space Grotesk, JetBrains Mono via `next/font` |

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create `.env.local` when using the contact form, guestbook, or admin features:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
CONTACT_EMAIL=
ADMIN_PASSWORD=
ADMIN_SECRET_COOKIE=
```

## Available Commands

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```

Built and maintained by **Gull Snobar**.

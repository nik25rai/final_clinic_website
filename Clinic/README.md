# Dental clinic single-page site (static, no backend)
`npm install` · `npm run dev` · `npm run build && npm start` · deploy to Vercel.
- Clinic details, hours, nav, stats, review/maps links: `lib/config.ts`. Services: `data/services.ts`. Reviews: `data/testimonials.ts`. Gallery: `data/gallery.ts`.
- Replace SVG placeholders in `public/images/` (keep names, or update `data/gallery.ts`, `About.tsx`, `Technology.tsx`).
- WhatsApp number: `NEXT_PUBLIC_WHATSAPP_NUMBER`. Form: set `NEXT_PUBLIC_FORM_ENDPOINT`, otherwise it opens WhatsApp.
- Privacy/Terms footer links are `#` placeholders; add your own pages before launch.

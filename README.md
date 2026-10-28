# Mahaveer Furniture — website

Marketing site for Mahaveer Furniture, Chikhalwadi, Bopodi, Pune.
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · fully static output.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying. It is used for canonical URLs, the sitemap and Open Graph tags.

## Deploy (GitHub Pages)

Every push to `main` builds a static export and publishes it via `.github/workflows/deploy.yml`
to https://sultansaudagar1999.github.io/MahaveerFurniture/. The workflow sets the
`/MahaveerFurniture` base path; locally the site still runs at the root.

If you later move to a custom domain, set the repository's Pages custom domain and remove
`NEXT_PUBLIC_BASE_PATH` from the workflow.

## Where things live

| What | File |
| --- | --- |
| Business facts (phone, address, map, rating) | `src/content/site.ts` |
| Collections and their detail pages | `src/content/collections.ts` |
| Services, process steps, FAQs | `src/content/services.ts` |
| Insights articles | `src/content/insights.ts` |
| Photography registry | `src/content/images.ts` + `src/assets/images/` |
| Design tokens (colours, type, motion) | `src/app/globals.css` (`@theme`) |

## Before launch

- [ ] **Replace all photography.** Every image is Unsplash stock used as a placeholder; none shows the shop's own furniture. Drop real photos into `src/assets/images/` using the same filenames, and update the alt text in `src/content/images.ts`.
- [ ] **Confirm services** in `src/content/services.ts`: made-to-measure orders, delivery and room-planning are assumed, not confirmed.
- [ ] **Confirm collections and pieces** in `src/content/collections.ts` against what the showroom actually stocks.
- [ ] **Confirm the number is on WhatsApp.** The enquiry form and the WhatsApp buttons send to +91 84213 97713.
- [ ] **Add opening hours** if you want them shown. The contact page currently asks visitors to call ahead.
- [ ] Update `site.rating` in `src/content/site.ts` when the Google rating changes, or remove it.
- [ ] Set `NEXT_PUBLIC_SITE_URL`.

## Enquiry form

There is no server. The form validates the input, then opens WhatsApp with the enquiry already written for the customer to send. Nothing is stored. To receive enquiries by email instead, add a route handler or a form service and change `onSubmit` in `src/components/EnquiryForm.tsx`.

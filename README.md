# Curious Maxx Author Website

Premium, cinematic single-page author website for Joyce B. Whaley, centered on the Curious Maxx series.

## Folder Structure

```text
.
├── public/
│   └── images/
│       ├── author-photo.png
│       ├── books/
│       │   ├── curious-maxx.jpg
│       │   ├── storytime-creation.jpg
│       │   └── storytime-jonah.jpg
│       └── joyce-poster.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── book-card.tsx
│   │   ├── button-link.tsx
│   │   ├── icons.tsx
│   │   ├── navbar.tsx
│   │   ├── reveal.tsx
│   │   ├── section-heading.tsx
│   │   └── trailer-gallery.tsx
│   └── data/
│       └── site-content.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## Run Locally

```bash
"/mnt/c/Program Files/nodejs/npm" install
"/mnt/c/Program Files/nodejs/npm" run dev
```

## Production SEO URL

Set `NEXT_PUBLIC_SITE_URL` before deployment so canonical tags, Open Graph URLs, schema, `robots.txt`, and `sitemap.xml` use the live domain.

```bash
NEXT_PUBLIC_SITE_URL=https://www.your-live-domain.com
```

## Replace Images

- Replace `/public/images/author-photo.png` to update the author portrait.
- Replace `/public/images/joyce-poster.png` to update the trailer/series promotional artwork.
- Replace files in `/public/images/books/` to update the individual book cover assets.

## Edit Copy, Links, and Trailer Assets

Edit [`src/data/site-content.ts`](/mnt/d/VS/curiousmax website/src/data/site-content.ts).

This file contains:

- hero copy
- verified/adapted author bio copy
- book summaries and Amazon links
- book cover image paths and alt text
- retailer links
- SEO metadata values
- trailer coming-soon copy and future trailer handoff content

SEO metadata currently includes:

- canonical metadata
- Open Graph metadata
- Twitter card metadata
- JSON-LD structured data for the website, author, and books
- `robots.txt` and `sitemap.xml`

## Update The Trailer Section Later

In [`src/data/site-content.ts`](/mnt/d/VS/curiousmax website/src/data/site-content.ts):

- update `trailerSpotlight` while the author-introduction trailer is still in production
- replace the coming-soon section with a live embed or player when the final trailer is ready

The trailer area is currently a premium coming-soon section for one unified author trailer.

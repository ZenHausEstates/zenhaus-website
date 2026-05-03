# ZenHaus Estates Website

Real estate investment website for ZenHaus LLC, focused on the Southwest Florida market.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Calendly embedded widget

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel. Push to the connected GitHub repository and Vercel will automatically build and deploy.

## Project structure

```
zenhaus-website/
├── public/
│   └── images/
│       └── logo.jpeg
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

- Brand colors are defined in `tailwind.config.ts` under `theme.extend.colors.zenhaus`
- Calendly URL is in `src/app/page.tsx` (search for `calendly.com/zenhaus`)
- Content sections are all in `src/app/page.tsx`

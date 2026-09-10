# JakeGenerates

The public umbrella site for JakeGenerates: a growing collection of practical tools that save time on repetitive work.

## Local setup

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Service Report Generator link

The homepage CTA uses `NEXT_PUBLIC_SERVICE_REPORT_URL`. Create `.env.local` and add the deployed tool URL:

```bash
NEXT_PUBLIC_SERVICE_REPORT_URL=https://service-reports.jakegenerates.com
```

The intended production URL for the first tool is `https://service-reports.jakegenerates.com`. The homepage uses that URL as its fallback when the environment variable is not set.

## Public contact

The public JakeGenerates contact address is `contact@jakegenerates.com`. Configure forwarding for this address before relying on it for incoming messages.

## Quality checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Import the `jakegenerates` GitHub repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Add `NEXT_PUBLIC_SERVICE_REPORT_URL=https://service-reports.jakegenerates.com` in the Vercel project environment variables.
4. Deploy, then attach the `jakegenerates.com` custom domain in **Settings → Domains**.
5. Configure `service-reports.jakegenerates.com` on the Vercel project that hosts the Service Report Generator.

No database, authentication, billing, analytics, or other services are required.

Before launch, review the Privacy Policy and Terms of Use for the exact hosting and tool behavior you deploy. The current copy assumes this umbrella site has no accounts, payments, analytics, or advertising cookies; linked tools may publish their own policies.

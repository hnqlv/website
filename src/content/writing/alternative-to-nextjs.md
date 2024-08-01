---
title: Alternative to Next.js for indie devs
summary: Exploring alternatives to Next.js for indie devs.
date: 2024-07-12
tags: ["writing", "nextjs", "astro"]
---

For content-driven websites, [Astro](https://astro.build/) is currently the best alternative to Next.js. It's a non-VC backed open-source project with a friendly community and growing momentum.

Astro offers:

- Content-focused web framework
- Static and SSR site deployment options
- Support for various [deployment](https://docs.astro.build/en/guides/deploy/) services (Netlify, Vercel, GitHub Pages, Deno Deploy, Render)

Deploying on Fly.io:

1. Set up an account
2. [Install](https://fly.io/docs/flyctl/install/) the fly CLI
3. Run `fly launch` from your project root
4. For SSR, add the node adapter: `npx astro add node`

Note: If adding SSR after deploying a static site, you may need to update your Dockerfile.

When **not** to use Astro:

Astro isn't ideal for highly interactive pages like dashboards. While it offers Islands architecture for partial interactivity, it's not suitable if the entire page is interactive.

For such cases, Next.js remains the best option. However, you can deploy Next.js projects on various platforms beyond Vercel, including Fly.io, Cloudflare Pages, and Firebase.




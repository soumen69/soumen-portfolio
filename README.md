# Soumen Maiti — Developer Portfolio

A dark, minimal, backend-focused portfolio built with **Next.js App Router**, **React**, **TypeScript** and **Tailwind CSS**.

## Requirements

- Node.js 20.9 or newer (Node.js 22 LTS is recommended)
- npm 10 or newer

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

Run these before pushing changes:

```bash
npm run lint
npm run typecheck
npm run build
```

## Personalise the portfolio

Most personal content lives in `src/data/portfolio.ts`:

- Profile details, role and contact links
- Experience timeline and project descriptions
- Technical skill groups
- Currently learning topics
- Engineering highlights and education

The profile image displayed in the hero is `public/images/soumen-profile.jpg`. The original uploaded photograph is retained at `public/images/soumen.jpg`.

The downloadable résumé is `public/resume/soumen-maity-resume.pdf`. Replace it with the latest PDF whenever the résumé changes, keeping this filename so the download link continues to work.

## Deploy to Vercel

1. Create a GitHub repository for this project.
2. Push the project to GitHub. Do not commit `node_modules`, `.next`, local environment files or build output.
3. Sign in to Vercel and import the GitHub repository.
4. Keep the framework preset as **Next.js** and the project root as the repository root.
5. No environment variables or database are required for the current static portfolio.
6. Deploy, then open the generated Vercel URL and test the profile image, section links, résumé download, email link and mobile navigation.
7. Add a custom domain in Vercel when you have chosen one. After that, set the production URL as `metadataBase` in `src/app/layout.tsx` and add the same domain to your social/profile links where appropriate.

Vercel automatically builds and deploys new commits pushed to the connected production branch. Preview deployments are created for other branches and pull requests.

## Before announcing the site

Read `LAUNCH_CHECKLIST.md`. In particular, confirm that the employer/client project names and descriptions are acceptable to publish publicly. The site intentionally avoids displaying a personal phone number and does not claim that you are actively job hunting.

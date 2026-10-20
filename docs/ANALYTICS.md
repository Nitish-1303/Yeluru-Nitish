# Analytics setup

The site uses cookieless, privacy-friendly analytics. No cookie banner is needed for either option.

## Vercel Web Analytics (already wired)

The `@vercel/analytics` script is loaded from `src/components/Analytics.tsx`.

1. Open the project in Vercel, then **Analytics**.
2. Click **Enable**.
3. Redeploy. Page views show up after the first visits.

## OpenPanel (optional, off until you set an ID)

OpenPanel loads only when `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` is set at build time. Snippet source: https://openpanel.dev/docs/get-started/install-openpanel

1. Create a project at openpanel.dev and copy its **Client ID**.
2. In Vercel: **Settings, Environment Variables**, add `NEXT_PUBLIC_OPENPANEL_CLIENT_ID` with that value for Production.
3. Redeploy. It tracks page views, outgoing links and referrers.
4. For a local test, put the same variable in `.env.local` and run `npm run dev`.

The client ID is public by design (it ships in the page). Do not put a secret key in this variable.

## Link-click events (OpenPanel only)

`src/components/ClickTracking.tsx` listens for link clicks and sends an event only when OpenPanel is configured. Without a client ID it does nothing. It matches on the link address, so the page markup is unchanged.

| Event | Fires on |
| --- | --- |
| `contact_email_click` | any `mailto:` link |
| `contact_linkedin_click` | links to linkedin.com |
| `contact_topmate_click` | links to topmate.io |
| `project_demo_click` | external, non-GitHub links inside the Projects section |
| `project_repo_click` | github.com links inside the Projects section |
| `github_click` | github.com links elsewhere (hero, proof PRs) |
| `resume_download` | links ending in `.pdf` (none exist yet) |
| `external_link_click` | any other outside link |

There is no contact form on the site, so there are no form events. Vercel Web Analytics shows page views and referrers only; custom events there need a paid plan, so they are not wired.

## Campaign links

Put these on links you share. Both tools read the `utm_*` parameters, so traffic splits by source.

- X: `https://www.yelurunitish.tech/?utm_source=x&utm_medium=social&utm_campaign=portfolio`
- LinkedIn: `https://www.yelurunitish.tech/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio`
- GitHub profile or READMEs: `https://www.yelurunitish.tech/?utm_source=github&utm_medium=referral&utm_campaign=portfolio`
- Founder outreach (change `founder-name` per person): `https://www.yelurunitish.tech/?utm_source=outreach&utm_medium=email&utm_campaign=founder-name`

Nothing here is a measurement. Numbers appear only after real visits.

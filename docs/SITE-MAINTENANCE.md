# Springhill Website — updating dates and visitor information

This checklist is for future updates to the live church website.

## Adding a confirmed special event or BLAST date
1. Edit `lib/events.ts`, in the `events` array, adding one event object using an existing event as a template.
2. The `expires` date should have the date of the event, in the form `YYYY-MM-DDT23:59:59Z`. It is used as a **calendar-date marker**, not the exact event time. For example, an event on December 18, 2026 uses `new Date('2026-12-18T23:59:59Z')`.
3. Verify the weekday in `fullDate`, as well as `month`, `day`, `time`, `location`, `description`, `body` and `gcalUrl`. Never publish an unconfirmed date.
4. Save and deploy. The homepage upcoming-events panel, the Events page and the monthly calendar now read from the **same source**. Future event dates are not manually duplicated in `EventCalendar.tsx`.
5. Only add an `OVERRIDES` date in `components/EventCalendar.tsx` when a special service **replaces** the usual Sunday schedule. Do not create a second overlapping event for the same date.

## Service times
- Regular Sundays: 10 AM and 6 PM, except the first Sunday (single 2 PM Friends & Family service).
- Wednesdays: 7:30 PM.
- Monday prayer or other prayer gatherings: **as announced** (often Monday at 7 PM), not an automatic weekly recurrence.
- Verify any permanent schedule change before updating `app/page.tsx`, `app/new-here/page.tsx`, `components/Footer.tsx`, `app/prayer/page.tsx`, `app/events/page.tsx` and the website's structured metadata in `app/layout.tsx`.

## Giving
`app/give/page.tsx` currently links to the Tithe.ly **church search**, not a verified Springhill checkout. If the church supplies the actual direct giving URL, confirm the receiving church before replacing `GIVE_URL` and the explanatory wording. Do not invent a merchant-specific link.

## Contact and prayer request forms
`components/ContactModal.tsx` and `components/PrayerModal.tsx` both currently POST to the existing Formspree endpoint. The requests are differentiated by `_type`.
- An on-screen success response confirms the form service accepted the request; **it does not prove email/inbox delivery**. Confirm one clearly labeled test with the church inbox owner.
- The optional confidentiality flag is informational; it does not automatically route requests to a different secure recipient. Inbox access and handling must be managed by the church.
- Do not publish a claim that only a particular prayer team can access private messages unless separate restricted routing is actually configured.

## Design
- Keep the forest-green editorial theme and existing SPC pictures throughout the main church pages.
- Keep BLAST illustration-only; never replace the new BLAST art with church photos.
- Home gallery uses a curated list in `components/PhotoSlider.tsx`, and old photos remain in `public/` for future use.
- The animation CSS respects reduced-motion settings.

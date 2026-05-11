# Post-launch checklist

## Hero banner — switch when App Store goes live

Pre-launch (current):
- `messages/en.json` → `hero.launchStatus` = `"Coming soon to the App Store"`
- `messages/zh-TW.json` → `hero.launchStatus` = `"App Store 上線在即"`

Post-launch — change these two lines:
- `messages/en.json` → `hero.launchStatus` = `"Now available on the App Store"`
- `messages/zh-TW.json` → `hero.launchStatus` = `"現已於 App Store 上架"`

Then redeploy: `vercel deploy --prod`.

(Or remove the banner entirely by deleting the `<p>` block at the top of the Hero in `app/[locale]/page.tsx`.)

## Other post-launch tasks

- [ ] Fill in App Store URL in `components/AppStoreButton.tsx` (currently `href="#"`)
- [ ] Replace screenshot placeholders in `public/screenshots/` with 5 × 1284×2778 PNGs, update `ScreenshotPlaceholder` to use `<Image>`
- [ ] Replace `public/icon.png` OG image with a proper 1200×630 banner (currently uses 1024×1024 icon)
- [ ] Update App Store Connect `Support URL` → `https://skinllergic.com/en/support`
- [ ] Update App Store Connect `Marketing URL` → `https://skinllergic.com`
- [ ] Update App Store Connect `Privacy Policy URL` → `https://skinllergic.com/en/privacy`

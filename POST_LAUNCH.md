# Post-launch checklist

Once the App Store review goes through, flip the site over by setting two
Vercel env vars and redeploying — no source changes needed.

## 1. Set Vercel env vars (Production scope)

In Vercel → Project → Settings → Environment Variables, add or update:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_APP_LAUNCHED` | `true` |
| `NEXT_PUBLIC_APP_STORE_URL` | `https://apps.apple.com/app/idXXXXXXXXXX` *(real App Store URL)* |

What they drive:
- `NEXT_PUBLIC_APP_LAUNCHED=true` — Hero status pill swaps to "Now available on the App Store" / 「現已於 App Store 上架」 (`messages/*.json` → `hero.launchStatusPost`).
- `NEXT_PUBLIC_APP_STORE_URL` — Every `<AppStoreButton>` (Hero CTA + footer CTA) starts linking to the real App Store listing.

## 2. Redeploy

```sh
vercel deploy --prod
```

(Or trigger a fresh production deploy from the Vercel dashboard.)

## 3. Update App Store Connect URLs

In ASC → App Information:

| Field | Value |
|---|---|
| Marketing URL | `https://skinllergic.com` |
| Support URL | `https://skinllergic.com/en/support` |
| Privacy Policy URL | `https://skinllergic.com/en/privacy` |

## 4. Replace placeholder assets (not blocking, do when ready)

- [ ] Replace screenshot placeholders in `public/screenshots/` with 5 × 1284×2778 PNGs, update `ScreenshotPlaceholder` to use `<Image>`
- [ ] Replace `public/icon.png` OG image with a proper 1200×630 banner (currently uses 1024×1024 icon)
- [ ] Record a 30-second App Preview Video and update the Press Kit reference (currently "Coming soon")

## 5. Rollback

If something goes sideways, flip `NEXT_PUBLIC_APP_LAUNCHED` to anything other than `"true"` (or delete the var) and redeploy — the pre-launch banner and `href="#"` defaults return.

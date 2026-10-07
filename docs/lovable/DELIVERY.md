# Historical Lovable build evidence

Original Lovable-managed preview, before GitHub Pages adaptation. Current deployment: docs/GITHUB-PAGES.md.

# VELDR O/01 — Delivery

## Source reference

Owner-authorized expansion of the supplied original vehicle product demo, not the separate PACHIN personal website.

- Repository: https://github.com/Pachin1919/veldr-o01-product-preview
- Pinned source SHA: `913a1baa1395674ed2546c9719969716eb30648c`
- Uploaded source matched the pinned reference files inspected.
- Source `index.html` SHA-256: `b5022580137bd1eb273ca1a49f8fa86ab4d92b1290f51be4862c96a6e3acd485`
- Source `styles.css` SHA-256: `8d79af86a0378d66aa30f896d24dcbe24a89e7766594135bf657445746ea00f8`
- Source `script.js` SHA-256: `948371b605e873e830644f5e3e1c4259b83de36b9f65d429c45466b2badf5ed3`
- Resulting project snapshot observed with `git rev-parse HEAD`: `17130f516b5170b98c85145a193476ee2c24c784`. This snapshot includes the implementation, QA screenshots and delivery documentation. This SHA-record correction follows that snapshot; the platform manages subsequent commits automatically.

## Implemented routes

- `/`: original THE LONG WAY. identity and artwork, preserved scroll-driven hero movement, editorial product sections, exterior/cabin/gallery links.
- `/design`: full original side profile, four accessible feature-aligned annotations, proportion/design-intent notes, return and onward navigation.
- `/cabin`: original interior composition, three accessible annotations, practical design-intent notes, return and onward navigation.
- `/explore`: complete three-view gallery with native controls, keyboard navigation, touch swipe, captions, loading/error/retry states, and detail/home links.

Language switching is functional across all routes and persists locally. Components use the existing scaffold, browser-native CSS, React and existing UI utilities. No new npm packages, backend, database, auth, payments, analytics, music, upload flow or external service was added.

## Portable assets and provenance

All displayed artwork and fonts are real portable binaries under `public/assets/`, not Lovable-only asset pointers or externally hosted runtime URLs.

- `hero-plateau.png`, `side-profile.png`, `interior.png`: the original supplied generated concept artwork, 1672 × 941 each, preserved without stock substitutions or whole-image paint filters. Annotated/gallery views retain the original aspect ratio.
- `barlow-condensed-600.woff2`, `ibm-plex-sans-400.woff2`, `noto-sans-sc-page.woff2`: original bundled fonts. Original license notices are retained.
- `noto-sans-sc-full.woff2`: full Google Fonts Noto Sans SC variable source converted locally to WOFF2 to cover added Chinese copy. `NotoSansSC-OFL.txt` retains its OFL license. Final source coverage: 351 Chinese characters, none missing.
- QA screenshots and machine-readable evidence are portable files in `docs/qa/`.

## Verification and known limits

See [QA.md](QA.md) for actual route, resource, overflow, input, reduced-motion and four-remount-cycle results. The automatic build harness passed after the final code changes.

This is a fictional visual vehicle concept, not an engineered product or live inventory. Gallery views are the three supplied images, not a simulated 3D rotation or paint configurator. The complete CJK font is approximately 7.5 MB; it trades initial transfer size for reliable new-copy coverage. Chromium preview testing is complete; physical-device, other-browser and screen-reader audits were not performed. Document titles remain English brand/editorial titles while on-page EN/ZH copy switches.

No production publication occurred and no push was made to the owner's existing GitHub repositories.
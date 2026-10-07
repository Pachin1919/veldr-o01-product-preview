# Historical Lovable build evidence

Original Lovable-managed preview, before GitHub Pages adaptation. Current deployment: docs/GITHUB-PAGES.md.

# VELDR O/01 — QA

Verified against the local preview using Chromium/Playwright. Evidence is saved in `docs/qa/`. Screenshots use viewport captures; the long homepage is stitched from viewport segments, not a full-page browser screenshot.

## Routes and languages

| Route | 1440 × 900 EN/ZH | 390 × 844 EN/ZH | Direct entry | Horizontal overflow |
| --- | --- | --- | --- | --- |
| `/` | Pass | Pass | Pass | None |
| `/design` | Pass | Pass | Pass | None |
| `/cabin` | Pass | Pass | Pass | None |
| `/explore` | Pass | Pass | Pass | None |

All 16 route/viewport/language checks produced the expected heading and document language. No page errors or failed normal resources were recorded (`results.json`). Desktop image completeness checks passed. The gallery was additionally checked through all three views, a cached reload, and deliberate image failure followed by successful retry; zero page errors and no overflow (`gallery-final.log`).

## Interaction and accessibility

- Pointer: exterior/cabin annotation buttons open useful explanations; closing is available. Gallery tabs/arrows change views and captions. Detail links and return-to-home links work.
- Keyboard: cabin annotation focused with a solid visible outline, Enter opened “Controls with a place,” and Escape closed it. Gallery supports Left/Right and Home/End. Controls are native links/buttons with labels and pressed/expanded states.
- Touch: gallery tap and horizontal swipe passed; cabin hotspot tap passed. Mobile navigation opened and navigated to Design.
- Language: EN/ZH navigation and reload persistence passed (`zh-CN` after reload). The original THE LONG WAY. remains an intentional brand headline; surrounding product copy and supporting labels switch language.
- Reduced motion: hero transform was `none`, with no active shift. Content remains visible without reveals or parallax.

## Motion lifecycle evidence

The hero preserves the original scroll-driven 0.15 displacement, rather than adding a perpetual animation loop. RAF work is scheduled only on relevant events; no particle/canvas renderer or GSAP instance was introduced.

Four home → design → home cycles were measured. On every detail visit: heroes **0**, listeners **0**, observers **1**, pending frames **0**. On every return home: heroes **1**, listeners **4**, observers **13**, pending frames **0**. Counts did not accumulate. The remaining detail observer belongs to that page's reveal component; it is disconnected on unmount.

After allowing the intersection observer to settle offscreen, the hero update counter remained **3 → 3** during further scrolling. Simulated document-hidden/visibilitychange evidence remained **4 → 4**. The initial broad run's offscreen counter was inconclusive because it included transition scrolling; use the settled measurements in `evidence.json`, not that earlier counter. Hidden-state verification used a controlled document property override, not an OS background-tab test.

Cleanup removes scroll/resize/visibility/media-query listeners, disconnects observers, and cancels pending frames. Narrow screens disable hero displacement. There is no scroll hijacking.

## Font and copy review

The full self-hosted Noto Sans SC WOFF2 loaded on all Chinese routes. A final cmap comparison against Chinese characters throughout showroom source found **351 unique characters, zero missing**, with **30,890 cmap entries** (`font-final.json`). The earlier rendered-copy check covered 294 unique characters with zero missing. Font licenses are retained in `public/assets/`.

Read all route copy in both languages in rendered context (`copy-review.txt`); final supporting eyebrow labels were then localized. Copy describes visible design intent, not verified engineering performance. The footer identifies a fictional 4×4 concept. No pricing, availability, bookings, invented testimonials, or vehicle specifications were added.

## Screenshots

- [Desktop hero](docs/qa/desktop-hero.png)
- [Long homepage](docs/qa/long-home.png)
- [Mobile homepage](docs/qa/mobile-home.png)
- [Mobile Chinese cabin](docs/qa/mobile-cabin-zh.png)
- [Mobile Chinese gallery, loaded](docs/qa/mobile-gallery-zh.png)
- [Exterior detail and annotation](docs/qa/detail-design.png)
- [Reduced-motion still](docs/qa/reduced-motion.png)

The automatic build harness reported `build OK` after the final frontend changes. This is local-preview QA, not a production publication or a physical-device/screen-reader audit.
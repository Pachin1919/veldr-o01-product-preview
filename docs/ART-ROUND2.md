# VELDR O/01 — Art round 2

## Scope and preserved authority

Refinement of the existing fictional showroom, not a rebrand. THE LONG WAY. first screen, original hero artwork, original side/cabin proportions, four routes, language persistence, hotspot data and three-view gallery remain intact. Original source authority: `913a1baa1395674ed2546c9719969716eb30648c`; owner-supplied current downstream reference: `c088b750a60d0f1c1f34d96fb9f83a1ae110dc80`. No downstream repository was modified or published.

No new routes, packages, package/lockfile versions, typefaces, services, data, engineering claims, controls or effect systems were introduced. Existing font licenses remain unchanged. Local asset paths are portable for the owner's existing static adapter; that downstream adapter was not executed here.

## Artwork inventory and provenance

Native image editing/generation produced three **new compositions**, using the supplied original artwork as visual references, not stock photographs, screenshot placeholders, recoloured originals or SVG-painted imagery. Model: `openai/gpt-image-2.5-sunburst`. The generated JPEGs were web-sized and JPEG-optimized with Pillow; delivered files are real binaries under `public/assets`, with no platform-only dependency.

| Delivered file | Dimensions | Bytes | Origin and intent |
| --- | --- | --- | --- |
| `public/assets/highland-road.jpg` | 1920 × 768 | 287880 | Generated landscape guided by `hero-plateau.png`: winding gravel road, rocky highlands, olive moss, mist and muted sunrise/clouds; no vehicle, logo, signage or capability implication. Generation `6542e0b6-c8b6-42fa-b958-94f3ee08b3bf`. |
| `public/assets/upholstery-study.jpg` | 1200 × 1000 | 219509 | Generated warm brown stitched swatch and olive textile study guided by `interior.png`; no hardware or confirmed specification. Generation `ade11968-7cec-4875-aa0c-bb0dae8bce2e`. |
| `public/assets/journey-equipment.jpg` | 960 × 1280 | 242677 | Generated portrait still life guided by the original cabin/highland palette: unbranded olive camera case, folded blank paper map, plain metal flask and cord; no baked-in lettering. Generation `42682a8c-bd4f-4174-a744-26228b878294`. |
| `public/assets/controls-detail.jpg` | 380 × 270 | 28066 | **Genuine crop, not generated**: original `interior.png`, pixel rectangle `(740,370)`–`(1120,640)`; three physical controls beneath the screen. JPEG conversion only, no repainting. This supplemental detail does not count toward the three new compositions. |

The original `hero-plateau.png`, `side-profile.png` and `interior.png` are unchanged. They remain the only vehicle views in the gallery and the source of every hotspot. No new full vehicle angle was invented. All new studies have lazy loading, explicit intrinsic dimensions and localized descriptive alt text.

## Chapter composition map

| Page/chapter | Composition and density |
| --- | --- |
| `/` first screen | Incumbent full-screen hero, THE LONG WAY. and existing motion/actions unchanged. |
| Quiet opening | Stone-paper reading area, restrained heading/body, inset portrait still life on an unequal grid; mobile portrait sits below the reading area. |
| Exterior figure | Original complete side image dominates an inset landscape figure; compact baseline heading and precise caption/link rail; short note beneath. No crop or distortion. |
| Road interlude | Full-bleed 5:2 panorama with one short line on a dark caption band; no large empty text section. |
| Material/equipment notes | Unequal contact-sheet arrangement: broad material image, narrower portrait equipment, small genuine controls crop and compact outlook note. Replaces three equal text-only columns. Mobile becomes a varied vertical sequence with an equipment/text pair. |
| Cabin spread | Warm band, full original cabin figure, then smaller material sample and concise reading/link area; no simulated configuration or material specification. |
| Showroom ending | Compact heading/body and existing showroom action, not another oversized headline. |
| `/design` | Original annotated side view; denser proportion reading/notes; new panoramic road interlude; existing onward links. |
| `/cabin` | Original annotated cabin; denser control/material notes; image-led swatch spread with explicit speculative caption; existing onward links. |
| `/explore` | Original complete three-view gallery unchanged; no support studies added as false vehicle views. |

The homepage has six different lower-chapter skeletons. Existing detail pages keep their specialized annotation experience rather than duplicating the homepage's full sequence.

## Localization and fonts

All added visible copy, captions and image descriptions have EN/ZH equivalents. Language selection still persists through navigation and reload. Existing complete self-hosted `noto-sans-sc-full.woff2` was inspected with fontTools: **375 distinct source Chinese characters checked, zero missing**, 30890 cmap entries. The original narrow page subset is not used for the new copy; the complete face already covers it, so regeneration or a new font would be unnecessary. Font/license binaries are unchanged and excluded from image export. Results: `qa/art-round2/font-results.json`.

## Actual verification

- Automatic build harness: `build OK` after code changes and final check; no manual build or lint loop.
- One batched full-scroll Chromium pass: all four routes × EN/ZH × 1440×900/390×844 = **16 checks**. No horizontal overflow, missing rendered images, page errors, failed requests or HTTP errors in that pass. All direct entries loaded, including detail pages.
- Full scroll inspected and recorded, not just first screens: desktop home 6058px EN / 5906px ZH; mobile home 5431px EN / 5022px ZH. No composition defect requiring a code-fix batch was observed.
- Keyboard hotspot opens with Enter, visible solid focus outline and closes on Escape. Touch cabin hotspot opens. Gallery End/Home/Right selects the original views; touch swipe selects side profile.
- Existing home → exterior → home → gallery flow exercised through page links. Confirmation pass checked mobile menu opens, follows the cabin link and closes; every internal destination remains `/`, `/design`, `/cabin` or `/explore`.
- Deliberately blocked side image displays the gallery failure state; after unblocking, **Try again** loads the actual original image. Failure/retry screenshots saved. The deliberate request failure is separate from the clean 16-page pass.
- Chinese preference persists after reload. Reduced motion gives hero transform `none` and zero hidden essential headings/paragraphs.
- Existing showroom tests: **3 passed**, retaining exactly the three original gallery views and original exterior/interior observation sets.
- Leaf metadata inspected on all four routes: unique branded title, description, OG title/description, website type and large-image Twitter card. Local asset images do not receive fabricated absolute OG URLs.

### Evidence

`docs/qa/art-round2/` contains 16 stitched full-scroll overviews, EN/ZH desktop/mobile lower material and cabin captures, keyboard/touch/menu/failure/retry captures, machine-readable `results.json`, `confirmation.json`, font results and rendered-copy review. Full-scroll files were stitched from viewport screenshots, not browser `full_page` capture. Two representative lower chapters: `1440-en-home-field.png` and `1440-en-home-cabin.png`; mobile: `390-zh-home-overview.jpg`, `390-zh-home-field.png`, `390-zh-home-cabin.png`. A focused skip-to-content link can appear in an element capture after keyboard navigation; it is the existing accessibility control, not chapter content.

Limits: Chromium/emulated mobile only, not physical devices, other browsers or a screen-reader audit. Original motion lifecycle system was not changed; the first-round four-cycle lifecycle audit was not repeated in this bounded second-round pass. The complete CJK face remains roughly 7.5 MB. No production or downstream Pages verification/publication occurred.

## Text-safe image export

`.export/art-round2/manifest.json` lists only the four new app artwork images above with `path`, byte `size`, `sha256` and ordered `chunk_paths`. Exact binary bytes are base64-encoded into UTF-8 ASCII chunk files, each at most **32000 characters**, splitting at multiples of four. Concatenate chunks in manifest order, base64-decode, then validate byte size and SHA-256 before writing each path. Local decoding/hash comparison is confirmed for every entry; see `.export/art-round2/roundtrip.json`.

Unchanged originals, fonts, and QA screenshots are excluded from the artwork export. Export files are outside `public`, never referenced by app code, and never part of the running page. No publishing or external Git operation was performed.
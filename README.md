# VELDR O/01 — Vehicle Product Preview

A standalone, scrolling product page for a fictional 4×4 SUV. The concept vehicle and all three campaign images were generated for this demo. It uses no real automotive brand, no music, no backend, and no third-party runtime dependency.

![Desktop preview of the VELDR O/01 landing page](assets/preview.png)

[Live preview](https://pachin1919.github.io/veldr-o01-product-preview/)

## Preview locally

In PowerShell, from this folder:

```powershell
py -m http.server 4340 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4340/`.

This is a visual concept, not a purchasable vehicle. The copy describes design intent rather than verified engineering specifications.

Barlow Condensed, IBM Plex Sans, and Noto Sans SC are self-hosted, with SIL Open Font License texts in `assets/`. The Noto Sans SC file is a page-specific subset obtained through the Google Fonts CSS API; regenerate it when changing the Chinese copy.

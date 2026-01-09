Preparing and uploading your portfolio package to Upwork

1. Run the packaging script (Windows PowerShell):

```powershell
# from the project root
.\package_portfolio.ps1
```

This creates `portfolio_package.zip` in the repo root containing:
- `README.md`, `PORTFOLIO.md`, `DEMO_SCRIPT.md`
- `assets/screenshots/*` (headshot, demo, README)
- `assets/mock_screenshots/*` (mock pages you can screenshot)

2. On Upwork, create a new Portfolio entry:
- Title: TECHNEWS — Laravel 10 News Platform
- Description: Use the `PORTFOLIO.md` blurb and proposal examples.
- Upload images: open `assets/mock_screenshots/*.html` in browser, capture 1280×720 screenshots, and upload the PNGs.
- Upload `portfolio_package.zip` as an attachment if Upwork permits.

3. Add links to the GitHub repo and a live demo (if hosted).

Tips:
- Use the screenshots listed in `assets/screenshots/README.md`.
- Replace the placeholder headshot (`headshot.svg`) with your real photo before packaging.

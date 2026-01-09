How to add a professional "face" and short demo to attract clients

This file explains simple, high-impact steps to add a professional headshot and a short demo GIF or video to your README and Upwork portfolio.

1) Headshot (high impact)

- Use a clear, well-lit headshot with a neutral background. Crop to a square or circle.
- Recommended size: 400×400 px for profile picture; for README use 200×200 or smaller.
- Name the file `assets/screenshots/headshot.png` (or `.jpg`) and add it to the repo.
- Example markdown to add to `README.md` near the top or in the "Hire Me" section:

```markdown
<p align="left">
  <img src="assets/screenshots/headshot.png" width="120" alt="Your Name - Developer">
</p>
```

2) Short demo GIF / video

- Record a 30–60 second screen capture showing: homepage, article view, admin dashboard, and creating an article.
- Create a short GIF (use Peek, ShareX, or gifenc) or host a short MP4 (YouTube unlisted or Vimeo).
- Add a small embed or link in `README.md`:

```markdown
![Demo GIF](assets/screenshots/demo.gif)

Or link to a hosted video:

[Watch short demo](https://youtu.be/your-demo-link)
```

3) Short pitch & CTA

- Add a one-line pitch near your photo: e.g. "I build Laravel apps — available for hire on Upwork: https://www.upwork.com/freelancers/~YOUR-UPWORK-ID"
- Keep the pitch short and client-centered: list outcomes, not only skills.

4) Screenshots quality checklist

- Use 1280×720 for landscape screenshots.
- Blur or redact any real user data or emails.
- Add short captions under each image describing what it shows.

5) Where to place these assets

- `assets/screenshots/headshot.png` — used in README and Upwork portfolio
- `assets/screenshots/demo.gif` — short site walkthrough
- `assets/screenshots/homepage.png`, `article-page.png`, `dashboard.png`, `create-article.png`, `mobile-view.png` — portfolio gallery

6) Quick tools

- Windows: ShareX (screenshots + GIF), OBS (record video)
- Mac: QuickTime (record), GIPHY Capture (GIF)
- Linux: Peek (GIF), ffmpeg (record/convert)

If you want, I can:
- add the markdown snippet to `README.md` with a placeholder image reference (done in this commit), or
- create a small demo GIF from the running app (requires running the app locally and screen capture).

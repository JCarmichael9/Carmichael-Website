# Carmichael Web Studio

Static site: HTML, CSS, vanilla JS. No build step, no dependencies.

## Run locally
Open `index.html` in a browser.

## Publish on GitHub Pages
1. Create a repo (your account is JCarmichael9; a separate business account or repo is fine) and upload these files with `index.html` at the top level.
2. Settings > Pages > Deploy from branch > `main` / root.
3. Site appears at `https://USERNAME.github.io/REPO/`. All paths are relative, so project URLs work.
4. After deploying, add an absolute `og:image` meta tag (1200x630 PNG in `assets/`) for link previews.

## Replace things
- Email: change the `mailto:` in `index.html` (id `mail`).
- Logo: edit or swap files in `assets/logo/`. `favicon.svg` is linked in each page's `<head>`.
- Images: placeholders are marked "Placeholder" in `index.html` and `demos/*/index.html`. Replace each `.ph` div with an `<img src="..." alt="..." width= height=>` using files in `assets/img/`.
- Business name is provisional; search and replace "Carmichael Web Studio" when confirmed.

## Contact form
GitHub Pages cannot receive form posts. Use the mailto link, or later add Formspree or Web3Forms (free tiers).

## Test checklist
Tab through the whole page and confirm visible focus; open the mobile menu at under 860px width, close it with Escape; click every nav link and demo link plus the back links; test Copy email; check 360px, 768px and desktop widths; check the console for errors; enable reduced motion in your OS and confirm no animation.

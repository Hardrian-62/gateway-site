# Gateway Mercosur — website

Static site. No build step, no dependencies.

## Structure

```
index.html          Home
services.html       Services
about.html          About (who we help / how we work / why work with us)
team.html           Meet the team
faq.html            Frequently asked questions
legal-notice.html   Legal notice (linked from every footer)
privacy-policy.html Privacy policy (linked from every footer and the contact form)
assets/css/*.css    One stylesheet per page (legal.css is shared by both legal pages)
assets/img/*        Photos, graphics, logo (SVG)
```

## Previewing

Open any `.html` file in a browser, or in VS Code install the **Live Server**
extension, right-click `index.html` and choose *Open with Live Server*.

## Notes for the next round of work

- **CSS is per-page.** Each page has its own stylesheet, and the design tokens
  (`:root` variables), nav and button styles are duplicated across all five.
  Worth merging the shared parts into a single `site.css` and leaving only
  page-specific rules in the per-page files.
- **Fonts** load from Google Fonts: Source Serif 4 (headings) and Inter (body).
- **Header images** are sized so the frame matches the photo's own aspect
  ratio, which is what stops people being cropped out at different window
  widths. If you swap a header photo, update the matching `aspect-ratio` in
  that page's CSS.
- **Two images are served per breakpoint** using `<picture>`: the About page's
  "who we help" graphic and the Florianópolis aerial. Desktop and mobile load
  different files.
- **Placeholders still to replace:** the WhatsApp number on the home page
  contact block (`+00 000 000 000`), and the `mailto:` addresses
  (`hello@gatewaymercosur.com`) if that isn't the real inbox.
- **The contact form does not submit.** It has `onsubmit="return false"`.
  Wire it to a form handler before launch.
- **Copy check outstanding:** a few phrases still imply an existing client
  base, which reads oddly for a business that hasn't launched. Mainly
  "Some clients need clarity before taking their first step" on About.

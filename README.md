# Roshan Inggershal VR - Hacker's Portfolio (React + Vite)

## Run it
    npm install
    npm run dev        # local site at http://localhost:5173
    npm run build      # production files in dist/
    npm run preview    # test the production build

Needs Node.js 18 or newer.

## Change the content (most edits)
Open `src/data/content.js`. Every piece of text on the site is there:

| What                         | Where in content.js        |
|------------------------------|----------------------------|
| Name, email, footer          | `site`                     |
| Menu links                   | `nav`                      |
| Boot lines, typing roles     | `boot`, `roles`            |
| Intro paragraph              | `lede` (*stars* = green)   |
| Hero buttons                 | `ctas`                     |
| Scrolling strip              | `ticker`                   |
| About text and fact table    | `about`                    |
| Project cards                | `work.cards`               |
| Security cards               | `security.cards`           |
| Data and ML cards            | `data.cards`               |
| Research panels              | `research.panels`          |
| Terminal commands            | `commands`                 |

To add a project, copy one object inside `work.cards` and edit its fields.
To add a terminal command, add `{ name, desc, out: [[text, style]] }` to `commands`.

## Change the look
- Colors and fonts: the variables at the top of `src/styles.css` (`--green`, `--bg`, `--cyan` ...).
- Fonts are loaded in `index.html`.
- Page title, description and search data: `index.html`.

## Structure
    src/
      data/content.js        all text
      App.jsx                page layout and the animation on/off state
      styles.css             all styling and keyframes
      components/
        MatrixRain.jsx       canvas rain background
        Overlays.jsx         scanlines, vignette, cursor glow, scroll bar
        Header.jsx           menu, clock, FX toggle
        Hero.jsx             boot lines, glitch name, typed role, buttons
        RoleTyper.jsx        typing line
        Terminal.jsx         interactive shell
        Ticker.jsx           scrolling strip
        DecryptHeading.jsx   scramble-to-text headings
        Card.jsx             project card with tilt and scan sweep
        CardSection.jsx      grid of cards (work, security, data)
        About.jsx  Research.jsx  Contact.jsx  Footer.jsx

## Animations
Always on by default. The FX button in the header turns them off for a visitor
and remembers the choice in that browser.

## Deploy
Run `npm run build`, then upload the `dist/` folder to Netlify, Vercel,
GitHub Pages or any static host. (`base` is "./", so any folder path works.)
Do not open `dist/index.html` by double-clicking: browsers block module scripts on file://.
Use `npm run preview` or a host.

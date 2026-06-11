# ანა ჩიხიაშვილის პერსონალური ბრენდის ვებსაიტი

**ფაილები:**
- [`index.html`](index.html) — **ინტერაქტიული ვერსია** (custom cursor, sparkle trail, 3D tilt, count-ups, easter eggs)
- [`index-original.html`](index-original.html) — სტატიკური V6 Hybrid (backup, უცვლელი)
- `tokens.css` · `data.js` — design system + content
- `canva-reference.png` — Canva რეფერენსი

**ინტერაქციული ეფექტები (index.html):**
- Custom yellow cursor + pink sparkle trail (desktop only)
- ANNA letters — hover-ით თითო ასო აწვება/ბრუნდება/ფერი გააქ
- Floating decoration stars — parallax mouse-ით + bob animation
- 3D tilt hover — hero card, about chunks, experience cards
- Marquee — hover → pause, click → reverse
- KPI numbers count up on scroll
- Scroll progress bar (yellow → pink → cyan → orange)
- Active nav link on scroll + smooth scroll with offset
- Section reveal on scroll (opacity + translate-y)
- Sparkle burst on contact pill hover/click
- Easter eggs: **triple-click on ANNA logo** → confetti party; **Konami code** (↑↑↓↓←→←→ba) → same
- Respects `prefers-reduced-motion`

---

პერსონალური ბრენდის ვებსაიტის **5 დიზაინის ვარიანტი** ანა ჩიხიაშვილისთვის — Junior Project Manager, Tbilisi.

## გალერეის გახსნა

ორმაგი დააწკაპუნეთ ფაილზე `index.html` ან გაუშვით ტერმინალში:

```bash
open "index.html"
```

გალერიიდან შეგიძლიათ აირჩიოთ ნებისმიერი ვარიანტი.

---

## ვარიანტები

### ჩემი 5 დიზაინი (Multi-page sites)

| # | სახელი | დიზაინის არქეტიპი | საუკეთესო ვისთვის |
|---|---|---|---|
| 1 | **Neon Playful** (Glow-up) | Y2K / Playful Neon | კრეატიული სააგენტოები, სოციალური მედია |
| 2 | **Editorial Magazine** | Jessica Hische-style ჟურნალი | Strategy, thought leadership |
| 3 | **Glassmorphism Modern** | Apple / Linear / Stripe | SaaS სტარტაპები, PM როლები |
| 4 | **Swiss Grid Corporate** | Massimo Vignelli-style | კონსალტინგი, კორპორაციული |
| 5 | **Brutalist Bold** | Awwwards / Anti-design | თამამი ბრენდები, viral potential |

### Claude Design Handoff (Single-page sites)

| # | სახელი | დიზაინის არქეტიპი | სტატუსი |
|---|---|---|---|
| 6 | **V1 Canva-Faithful** | Canva-ს ყველაზე ერთგული ვერსია | Reference |
| 7 | **V5 Creative** | Asymmetric, color-block XP cards | Alternate |
| 8 | **V6 Hybrid** ⭐ | V5 body + V1 experience cards | **Primary (recommended)** |

Claude Design-ის ვარიანტები მოდის `Claude Design Tool`-დან (შენი Canva reference-ის საფუძველზე) და იყენებს **shared design tokens**-ს (`tokens.css`) + **shared content** (`data.js`).

---

## სტრუქტურა

```
anis saiti/
├── README.md                  ← ეს ფაილი
├── index.html                 ← გალერია (აქ დაიწყეთ)
├── gallery-style.css          ← გალერიის სტილი
│
├── variant-01-neon-playful/       ← ყოველი ვარიანტი სრულად იზოლირებულია
├── variant-02-editorial-magazine/
├── variant-03-glassmorphism-modern/
├── variant-04-swiss-corporate/
├── variant-05-brutalist-bold/
├── variant-06-claude-v1-canva/    ← Claude Design (V1 — Canva faithful)
├── variant-07-claude-v5-creative/ ← Claude Design (V5 — creative)
└── variant-08-claude-v6-hybrid/   ← Claude Design (V6 — PRIMARY ⭐)
```

ყოველი variant საქაღალდე შეიცავს:
- **5 HTML გვერდი** (Home, About, Experience, Services, Contact)
- **CSS + JS** (საკუთარი, ცალკე)
- **Assets** (SVG-ები, ფავიკონი)

---

## პრინციპები

- **სრული იზოლაცია** — ყოველი ვარიანტი დამოუკიდებელი, არანაირი shared file
- **Vanilla HTML/CSS/JS** — build step-ის გარეშე, პირდაპირ ბრაუზერში
- **რესპონსიული** — mobile-first, 375px-დან 1920px-მდე
- **ხელმისაწვდომი** — WCAG AA, semantic HTML, keyboard navigation
- **სწრაფი** — <250KB total page weight

---

## კონტენტი

ყოველი ვარიანტი შეიცავს იდენტურ ინფორმაციას (ანას CV-დან):

- **გამოცდილება**: Campa (Marketing Manager, 2025-), Echolize (Middle Account Manager, 2023-25)
- **კლიენტები**: McDonald's, Socar, TNET, Bank of Georgia
- **KPIs**: 40% engagement lift, 35+ influencers, 1.5M+ reach, 5-6 campaigns/month
- **სერვისები**: Social Media, Graphic Design, Advertising, Branding, Campaign Building, Project Management
- **კონტაქტი**: anachikhiashvili22@gmail.com · +995 598 336 815 · LinkedIn

---

## მომდევნო ნაბიჯები

1. აირჩიეთ ფავორიტი ვარიანტი
2. დაამატეთ რეალური ფოტო (თითოეული ვარიანტის assets/ დირექტორიაში)
3. განათავსეთ ჰოსტინგზე (Netlify / Vercel / Cloudflare Pages)
4. დააკავშირეთ საკუთარი დომენი

---

## წყაროები

- **CV**: `/Users/imac/Downloads/Anna Chikhiashvili. Account Manager CV .pdf`
- **Personal Branding**: `/Users/imac/Downloads/პერსონალური ბრენდინგი ფინალური.docx`
- **Canva რეფერენსი**: `/Users/imac/Downloads/ANNA/1.png`

# 🚀 Mustafizur Rahman — Senior Software Engineer Portfolio

A modern, high-performance developer portfolio and resume web application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Designed with a dual-influence aesthetic combining the sticky personal sidebar and dark-mode foundation of **Taqui Imam** with the glassmorphism card architecture, ambient dot-grid, and typography of **Chanh Dai**.

---

## 🎨 UI/UX Design System

- **Layout Architecture**: Two-column layout on desktop featuring a sticky profile card with quick actions, metric counters, and vertical section navigation, alongside a main content stream.
- **Glassmorphism**: Backdrop blur cards with border highlights and accent glows.
- **Theme Support**: Seamless Dark/Light theme switching with persistent `localStorage` support (defaults to dark base `#0b0f17`).
- **Typography**: Powered by Vercel's **Geist** (headings & body) and **Geist Mono** (technical labels, badges, numbers).
- **Color Palette**: Dark slate base (`#0b0f17`), emerald accent (`#00c758`), teal (`#14b8a6`), and slate glass overlays.
- **Responsive Navigation**: Scroll-aware sticky top navigation with active section detection, reduced transparency on scroll, and a mobile drawer.

---

## 📱 Portfolio Sections

1. **Profile Sidebar** — Sticky desktop card with avatar, live availability status pill, quick contact buttons, resume download, metrics counter strip, and vertical navigation.
2. **About & Overview (`#about`)** — Executive narrative, 4-metric highlight strip (10+ Yrs Exp, 30+ Projects, 18+ Techs, 100% Client Satisfaction), and 4 core architectural focus pillars.
3. **Technologies (`#technology`)** — Interactive tech stack with category filtering (*All, Frontend, Backend, Database, DevOps & Cloud, Mobile*) using Devicon vector logos and proficiency levels.
4. **Experience (`#experience`)** — Vertical timeline featuring company names, tenures, impact bullet points, and technology tags.
5. **Projects (`#projects`)** — Filterable project grid with category tabs (*All, Enterprise, Full Stack, E-Commerce, Cloud*), featured badges, external links, and tech tags.
6. **Services (`#services`)** — 8 comprehensive engineering capabilities with icon cards and deliverables checklists.
7. **Education (`#education`)** — Academic qualifications (Master's & Bachelor's in CSE) with distinction awards.
8. **Recommendations (`#recommendations`)** — Client and engineering leadership testimonials.
9. **Contact (`#contact`)** — Direct contact cards with one-click clipboard copy for email and phone, timezone/location, availability banner, and interactive message form.

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
- **Fonts:** [Geist & Geist Mono](https://vercel.com/font) via `next/font/google`
- **Icons:** [Lucide React](https://lucide.dev/) + [Devicon](https://devicon.dev/)

---

## 📁 Project Structure

```
resume/
├── public/
│   ├── dev.png                   # Profile picture
│   ├── cims.png                  # Project screenshot: CIMS
│   ├── erp.png                   # Project screenshot: ERP
│   └── Mustafizur_Rahman.pdf     # Downloadable Resume / CV
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout, Geist font setup, metadata
│   │   └── page.tsx              # Main page, 2-column layout, scroll spy
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Top navbar with theme toggle & mobile menu
│   │   │   └── Sidebar.tsx       # Sticky personal sidebar & vertical nav
│   │   ├── ui/
│   │   │   ├── SectionCard.tsx   # Glassmorphism section container
│   │   │   └── Badge.tsx         # Monospace tag pill component
│   │   ├── sections/
│   │   │   ├── Home.tsx          # About & overview section
│   │   │   ├── Technology.tsx    # Filterable tech stack showcase
│   │   │   ├── Experience.tsx    # Work history timeline
│   │   │   ├── Projects.tsx      # Project showcase with category filters
│   │   │   ├── Services.tsx      # 8 full-stack engineering services
│   │   │   ├── Education.tsx     # Academic qualifications
│   │   │   ├── Testimonials.tsx  # Endorsements & recommendations
│   │   │   └── Contact.tsx       # Contact info, copy buttons & form
│   │   ├── Header.tsx            # Header adapter
│   │   └── ThemeToggle.tsx       # Floating theme toggle button
│   ├── data/
│   │   └── portfolioData.ts      # Centralized typed data source
│   └── globals.css               # Tailwind v4 theme, dot-grid & glass styles
├── next.config.mjs               # Next.js export & image configuration
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.18 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/musfiz/resume.git
   cd resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static export
npm run build

# Start production server
npm run start
```

---

## ⚙️ Customizing Content

All portfolio content is decoupled from components and managed in a single typed file:

- **Edit personal details, bio, metrics, projects, experience, services & contact:**
  Modify `src/data/portfolioData.ts`.
- **Replace profile picture:**
  Replace `public/dev.png`.
- **Replace resume document:**
  Replace `public/Mustafizur_Rahman.pdf`.

---

## 👤 Author

**Mustafizur Rahman**
- **Role:** Senior Software Engineer @ BJIT
- **Website:** [musfiz.com](https://musfiz.com)
- **LinkedIn:** [linkedin.com/in/musfiz](https://linkedin.com/in/musfiz)
- **GitHub:** [@musfiz](https://github.com/musfiz)

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

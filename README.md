# 🚀 Full Stack Developer Portfolio

A modern, responsive, and feature-rich portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, technical skills, projects, and services with an elegant dark/light theme and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2.15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Modern UI/UX

- **Dark/Light Theme Toggle** - Seamless theme switching with persistent storage
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Hover effects, transitions, and scroll-based interactions
- **Gradient Accents** - Beautiful gradient backgrounds and icon styling
- **Glass Morphism** - Modern backdrop blur effects on header

### 📱 Sections

1. **Home** - Hero section with profile image, social links, and CTA
2. **Technology** - Interactive tech stack showcase with 18+ technologies using Devicon
3. **Experience** - Professional timeline design with gradient icons
4. **Education** - Academic background with timeline layout and achievement badges
5. **Services** - 8 comprehensive full-stack development services with animated cards
6. **Projects** - Portfolio showcase with project cards and external links
7. **Contact** - Contact form with social media integration

### ⚡ Performance Optimizations

- **Lazy Loading** - Dynamic imports for all sections using `next/dynamic`
- **Code Splitting** - Separated components for optimal bundle size
- **SSR/SSG** - Server-side rendering for SEO optimization
- **Optimized Images** - Next.js Image component with remote patterns

### 🎯 Key Highlights

- **TypeScript** - Full type safety across the application
- **Modern Icons** - Lucide React icons for UI elements
- **Devicon Integration** - Technology logos for tech stack visualization
- **SCSS/CSS Modules** - Custom styling with CSS variables for theming
- **Active Section Tracking** - Dynamic navigation highlighting based on scroll position
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 14.2.15 (React 18)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4.1 + SCSS/Sass 1.77.2
- **Icons:** Lucide React 0.553.0 + Devicon 2.17.0

### Development Tools

- **Package Manager:** npm
- **Linting:** ESLint 8
- **CSS Processing:** PostCSS + Autoprefixer
- **Build Tool:** Next.js built-in compiler

## 📦 Project Structure

```
portfolio/
├── public/
│   └── dev.png                    # Profile image
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with metadata
│   │   └── page.tsx               # Main portfolio page
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Home.tsx           # Hero section
│   │   │   ├── Technology.tsx     # Tech stack section
│   │   │   ├── Experience.tsx     # Work experience timeline
│   │   │   ├── Education.tsx      # Education timeline
│   │   │   ├── Services.tsx       # Services offered
│   │   │   ├── Projects.tsx       # Project showcase
│   │   │   └── Contact.tsx        # Contact form
│   │   ├── Header.tsx             # Navigation header
│   │   └── ThemeToggle.tsx        # Dark/light mode toggle
│   └── main.scss                  # Global styles & CSS variables
├── tailwind.config.ts             # Tailwind configuration
├── next.config.mjs                # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/musfiz/resume.git
   cd resume
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Customization

### Update Personal Information

- Edit section components in `src/components/sections/`
- Replace profile image in `public/dev.png`
- Update social links in `Home.tsx`

### Modify Theme Colors

- Edit CSS variables in `src/main.scss`
- Customize Tailwind colors in `tailwind.config.ts`

### Add/Remove Sections

- Create new section components in `src/components/sections/`
- Import and add to `src/app/page.tsx`
- Update navigation in `src/components/Header.tsx`

## 📋 Features in Detail

### Timeline Design

Both Experience and Education sections feature a modern timeline layout with:

- Vertical gradient line connecting timeline items
- Gradient circular icons with shadow effects
- Responsive card design
- Hover animations

### Services Grid

8-column responsive grid showcasing:

- Frontend Development (React, Next.js, Vue)
- Backend Development (Node.js, Express, NestJS)
- Database Design (PostgreSQL, MongoDB, MySQL)
- Cloud Services (AWS, Azure, Google Cloud)
- Mobile Development (React Native, PWA)
- Microservices Architecture
- DevOps & CI/CD
- Performance Optimization

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mustafizur Rahman**

- GitHub: [@musfiz](https://github.com/musfiz)
- Portfolio: [Live Demo](https://musfiz.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<div align="center">
  Made with ❤️ using Next.js and TypeScript
</div>

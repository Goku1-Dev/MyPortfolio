# 🚀 Gokul's Portfolio & Reactivity Engine

Welcome to the repository containing my personal portfolio. This project is unique because it is built entirely using a **custom Reactivity Engine** that I developed from scratch!

## 🌟 Overview

This repository serves a dual purpose:
1. **Reactivity Engine (`/src`)**: A lightweight, custom JavaScript framework handling Virtual DOM diffing, reactive state management, and component lifecycles.
2. **Portfolio Web App (`/example/portfolio`)**: A fully functional, production-ready portfolio application built to "dogfood" the Reactivity Engine.

## ✨ Features

### Portfolio Application
- **Custom Routing:** A fast, declarative router built on top of the browser's History API.
- **Dynamic Resume Viewer:** Integrated Mozilla's `pdf.js` to render the resume dynamically onto HTML5 Canvas elements with high-resolution scaling for an optimal reading experience.
- **Interactive UI:** Smooth scroll-reveal animations, responsive sidebar navigation, and a modern aesthetic with tailored accent colors.
- **Modular Pages:** Clean separation of concerns with dedicated pages for Home, About, Projects, Designs, and Resume mapping directly to custom reactive states.
- **Centralized Content:** All textual content is managed efficiently via a centralized state (`text.tsx`), making updates smooth.

### Reactivity Engine (Under the Hood)
- **Virtual DOM (`h` function):** Custom hyper-script function for declarative UI rendering via JSX/TSX.
- **Reactive State (`state.ts`):** Fine-grained reactivity system designed to minimize re-renders.
- **Component Lifecycle:** Custom hooks (e.g., `onMount`) to seamlessly manage side-effects and external library integrations.
- **Optimized Rendering:** Scheduler and derived state mechanisms to ensure 60fps animations.

## 📂 Project Structure

```text
MyPortfolio/
├── src/                    # The Reactivity Engine source code
│   ├── index.ts            # Core exports
│   ├── dom.ts              # Virtual DOM & rendering
│   ├── state.ts            # Reactive state management
│   ├── effect.ts           # Side-effect system
│   ├── scheduler.ts        # Task scheduling and batching
│   └── ...                 # Other internal modules
├── example/portfolio/      # The Portfolio Web Application
│   ├── Home.tsx            # Main application layout and router
│   ├── Home.state.ts       # Global state and routing logic
│   ├── HomePage.tsx        # Landing view
│   ├── AboutPage.tsx       # Detailed background and experiences
│   ├── ResumePage.tsx      # Canvas-based PDF resume viewer
│   ├── Sidebar.tsx         # Responsive navigation sidebar
│   ├── PortfolioStyles.css # Styling and animations
│   └── text.tsx            # Centralized content and copy
├── package.json            # Project configuration and scripts
└── vite.config.ts          # Vite configuration for building and dev
```

## 👨‍💻 About the Developer

**Gokul Sureshkumar**  
*Full-Stack Developer & Designer*

I build production web, desktop, and mobile apps, and engineer custom systems and libraries. With **3+ years** of experience, I use React, Next.js, Node.js, FastAPI, Flutter, and more. I design secure APIs, role-based systems, and real-time interfaces that are fast and purposeful. 

Beyond shipping products, I go deep into systems engineering — I've built a custom JSX compiler, a React Fiber clone, a memory allocator in C, and a Git engine from scratch. I bridge engineering and design using Figma, Affinity, and CorelDRAW to create experiences that look as good as they work.

### Technical Arsenal
- **Languages & Frameworks:** C, C++, Rust, TypeScript, JavaScript, Python. Advanced in React, Next.js, Node.js, FastAPI, React Native, and Flutter. MySQL, PostgreSQL, Firebase, Git.
- **System & Backend:** Designing secure RESTful APIs with JWT, RBAC, Microservices architecture, database optimization, System Design.
- **UI/UX & Design:** Crafting reusable UI components in React and SCSS, alongside logo design and layouts using Figma, Affinity, CorelDRAW, Adobe, and Canva.
- **Core Engineering:** Built custom JSX compilers, JS reactive libraries (Fiber architecture, VDOM diffing), memory allocators in C, and Git engine clones.

## 🚀 Getting Started

To run this project locally and see the custom reactivity engine in action:

1. **Clone the repository:**
   ```bash
   git clone git@personal:VenkatRaman3103/Reactivity-Engine.git
   cd MyPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🛠️ Tech Stack
- **Languages:** TypeScript, TSX, CSS
- **Core Rendering:** Custom Reactivity Engine (No React/Vue/Svelte!)
- **Tooling:** Vite, Babel, PostCSS, TailwindCSS
- **Libraries (Portfolio):** `pdf.js`

## 📬 Contact Me
- **Email**: gokul.sureshkumar06@gmail.com
- **LinkedIn**: [gokul-sureshkumar](https://www.linkedin.com/in/gokul-sureshkumar/)
- **GitHub**: [Goku1-Dev](https://github.com/Goku1-Dev)
- **Website**: [gokul.in](http://gokul.in)

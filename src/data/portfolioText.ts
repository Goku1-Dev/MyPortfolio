
export const portfolioText = {
  sidebar: {
    logo: "Gokul S",
    navItems: ["HOME", "ABOUT", "PROJECTS", "DESIGNS", "RESUME"],
  },
  home: {
    header: {
      title: "Hi, I'm Gokul Sureshkumar",
      subtitle: "Full-Stack Developer & Designer. I build production web, desktop and mobile apps, and engineer custom systems and libraries.",
      btnAbout: "LinkedIn",
      btnCv: "GitHub",
    },
    about: {
      sectionTitle: "About Me:",
      welcomePhrase: "Welcome to my portfolio. Here is a brief look into my background:",
      yearsTitle: "3+",
      yearsDesc: "years of experience as a Full-Stack Developer & Designer. I have built multiple production applications across web and mobile platforms using React, Next.js, Node.js, and Flutter. I specialize in both high-level UI development and deep systems engineering—from designing secure RESTful APIs to building custom JS reactive libraries, C memory allocators, and Git engine clones from scratch.",
    },
    skills: {
      sectionTitle: "Technical Skills:",
      items: [
        {
          title: "LANGUAGES &\nFRAMEWORKS",
          desc: "C, C++, Rust, TypeScript, JavaScript, Python. Advanced in React, Next.js, Node.js, React Native, and Flutter.",
        },
        {
          title: "SYSTEM & BACKEND",
          desc: "Designing secure RESTful APIs with JWT, RBAC, Microservices architecture, MySQL, and PostgreSQL optimization.",
        },
        {
          title: "UI/UX & DESIGN",
          desc: "Crafting reusable UI components in React and SCSS, alongside logo design and layouts using Figma, Affinity, and Canva.",
        },
        {
          title: "CORE ENGINEERING",
          desc: "Built custom JS reactive libraries (Fiber architecture, VDOM diffing), memory allocators, and Git engine clones.",
        },
      ],
    },
    projects: {
      sectionTitle: "Explore My Projects:",
      viewAllBtn: "View All",
      detailBtn: "View details",
      categories: [
        {
          title: "Projects",
          desc: "Core engineering projects focused on reimplementing standard systems, libraries, and low-level tools from scratch.",
          items: [
            {
              title: "ZENITIX JS LIBRARY",
              slug: "zenitix-js-library",
              colorMode: "color-1",
              tagline: "A fine-grained reactive UI library built from first principles.",
              description:
                "Zenitix is a custom JavaScript reactive library I designed and built from scratch, inspired by signal-based frameworks like Solid.js. It compiles a JSX-like syntax down to fine-grained DOM updates without a virtual DOM diffing pass, giving predictable, low-overhead reactivity for UI components.",
              highlights: [
                "Custom compiler that transforms JSX into fine-grained reactive bindings",
                "Signal-based state primitives: derive(), effect(), and when() for conditional rendering",
                "Component-level memoization to avoid unnecessary re-renders",
                "Zero external runtime dependencies, under 6kb gzipped",
              ],
              stack: ["TypeScript", "Vite", "Custom Compiler", "AST Parsing"],
            },
            {
              title: "REACT FIBER CLONE",
              slug: "react-fiber-clone",
              colorMode: "color-2",
              tagline: "A from-scratch reimplementation of React's Fiber reconciliation architecture.",
              description:
                "To deeply understand how React schedules and reconciles UI updates, I built a working clone of React's Fiber architecture. It implements a linked-list based fiber tree, a work loop with time-slicing, and a two-phase commit process (render and commit) mirroring React's internals.",
              highlights: [
                "Fiber tree data structure with linked-list traversal (child/sibling/return pointers)",
                "Cooperative scheduling using requestIdleCallback-style time slicing",
                "Reconciliation algorithm with key-based diffing for lists",
                "Hooks implementation: useState, useEffect, and useMemo built from scratch",
              ],
              stack: ["JavaScript", "Data Structures", "Scheduling", "DOM APIs"],
            },
            {
              title: "MEMORY ALLOCATOR",
              slug: "memory-allocator",
              colorMode: "color-3",
              tagline: "A custom malloc/free implementation in C, built for learning systems programming.",
              description:
                "A hand-written dynamic memory allocator in C that manages heap memory manually, implementing malloc, free, calloc, and realloc. The project explores free-list management, block splitting/coalescing, and alignment handling to minimize fragmentation.",
              highlights: [
                "Explicit free-list allocator with first-fit and best-fit strategies",
                "Block splitting and coalescing to reduce heap fragmentation",
                "8-byte memory alignment and header/footer boundary tagging",
                "Benchmarked against glibc malloc under varying workloads",
              ],
              stack: ["C", "Systems Programming", "Memory Management"],
            },
            {
              title: "GIT VERSION CONTROL",
              slug: "git-version-control",
              colorMode: "color-4",
              tagline: "A Git engine clone implementing the core object model and commands from scratch.",
              description:
                "A from-scratch clone of Git's internal engine, implementing the content-addressable object store (blobs, trees, commits), the index/staging area, and core commands like init, add, commit, log, and diff, without relying on the real Git binary.",
              highlights: [
                "Content-addressable object storage using SHA-1 hashing and zlib compression",
                "Custom implementations of blob, tree, and commit objects",
                "Staging area (index) and working-directory diffing",
                "CLI commands: init, add, commit, log, diff, and branch",
              ],
              stack: ["Python", "Hashing", "Compression", "CLI Tools"],
            },
          ],
        },
        {
          title: "Websites",
          desc: "Production-ready, full-stack web applications featuring role-based dashboards, secure APIs, and responsive components.",
          items: [
            {
              title: "ACADEMIC DASHBOARD",
              slug: "academic-dashboard",
              colorMode: "color-4",
              tagline: "A role-aware dashboard for students, faculty, and administrators.",
              description:
                "A full-stack academic management platform with dedicated dashboards for students, faculty, and administrators. Built with React and Node.js, it handles attendance, grading, and announcements behind a secure, role-based access layer.",
              highlights: [
                "Role-based dashboards for student, faculty, and admin user types",
                "JWT authentication with RBAC-controlled API routes",
                "Real-time attendance and grade update notifications",
                "Responsive layout tested across desktop and tablet breakpoints",
              ],
              stack: ["React", "Node.js", "MySQL", "JWT"],
            },
            {
              title: "OPERATIONS PORTAL",
              slug: "operations-portal",
              colorMode: "color-5",
              tagline: "An internal operations portal streamlining day-to-day workflow tracking.",
              description:
                "An internal-facing operations portal built to centralize task tracking, approvals, and reporting for a mid-size team. Focused on clarity and speed, with optimistic UI updates for a snappy day-to-day experience.",
              highlights: [
                "Centralized task and approval workflow tracking",
                "Optimistic UI updates with background sync",
                "Exportable reports generated from live PostgreSQL views",
                "Modular component library shared across internal tools",
              ],
              stack: ["Next.js", "PostgreSQL", "Node.js", "SCSS"],
            },
            {
              title: "ADMIN CONTROL PANEL",
              slug: "admin-control-panel",
              colorMode: "color-6",
              tagline: "A configurable admin panel for managing users, roles, and permissions.",
              description:
                "A general-purpose admin control panel that gives product teams fine-grained control over users, roles, and permissions without touching code. Designed with a component system that's reused across multiple internal products.",
              highlights: [
                "Fine-grained, configurable role and permission management",
                "Audit log of every administrative action",
                "Reusable data-table components with sorting, filtering, and pagination",
                "Dark and light theming built on CSS custom properties",
              ],
              stack: ["React", "Node.js", "MySQL", "RBAC"],
            },
            {
              title: "REAL-TIME MONITORING",
              slug: "real-time-monitoring",
              colorMode: "color-1",
              tagline: "Live waveform and signal dashboards for embedded hardware data streams.",
              description:
                "A real-time monitoring interface for continuous embedded hardware data streams, rendering live waveform charts and signal health indicators with minimal latency for engineers on the factory floor.",
              highlights: [
                "Live waveform rendering with canvas-based charting for performance",
                "WebSocket-driven real-time data pipeline from embedded devices",
                "Configurable alert thresholds with instant visual flags",
                "Optimized re-render strategy to sustain high-frequency data updates",
              ],
              stack: ["React", "WebSockets", "Canvas API", "Node.js"],
            },
            {
              title: "E-COMMERCE PLATFORM",
              slug: "ecommerce-platform",
              colorMode: "color-2",
              tagline: "A full-featured storefront and checkout experience with an admin backend.",
              description:
                "A production e-commerce platform covering product catalogs, cart, checkout, and order management, paired with an admin backend for inventory and order fulfillment.",
              highlights: [
                "Cart and checkout flow with saved addresses and order history",
                "Admin backend for inventory, pricing, and order fulfillment",
                "Secure payment integration with webhook-based order confirmation",
                "SEO-friendly product pages with server-side rendering",
              ],
              stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
            },
          ],
        },
      ],
    },
    designs: {
      sectionTitle: "Explore My Designs:",
      viewAllBtn: "View All",
      detailBtn: "View details",
      categories: [
        {
          title: "Website Designs",
          desc: "Modern, high-conversion landing pages and interactive dashboard layouts crafted using Figma, Canva, and SCSS.",
          items: [
            {
              title: "FINTECH DASHBOARD UI",
              slug: "fintech-dashboard-ui",
              colorMode: "color-2",
              tagline: "A data-dense dashboard UI for a personal finance product.",
              description:
                "A UI design system for a fintech dashboard, balancing dense financial data with a clean, trustworthy visual language. Designed spending breakdowns, transaction lists, and account summary cards for quick scanning.",
              highlights: [
                "Component library for cards, charts, and transaction rows",
                "Accessible color system tested for contrast across light and dark themes",
                "Spending breakdown and budget visualizations",
                "Prototyped end-to-end onboarding flow in Figma",
              ],
              stack: ["Figma", "Design Systems", "Data Visualization"],
            },
            {
              title: "SaaS LANDING PAGE",
              slug: "saas-landing-page",
              colorMode: "color-1",
              tagline: "A high-conversion landing page template for SaaS products.",
              description:
                "A conversion-focused landing page design for SaaS products, structured around a clear value proposition, social proof, and a low-friction call to action, then implemented pixel-accurately in SCSS.",
              highlights: [
                "Above-the-fold hero built around a single, clear value proposition",
                "Social proof and pricing sections designed for quick comparison",
                "Fully responsive grid system built with SCSS mixins",
                "Micro-interactions on buttons and section reveals",
              ],
              stack: ["Figma", "SCSS", "Responsive Design"],
            },
            {
              title: "E-LEARNING PLATFORM UI",
              slug: "e-learning-platform-ui",
              colorMode: "color-3",
              tagline: "Course browsing and lesson-player UI for an online learning product.",
              description:
                "A UI/UX design for an e-learning platform, covering course discovery, a distraction-free lesson player, and progress tracking, designed to keep learners focused and motivated.",
              highlights: [
                "Course catalog with filterable categories and difficulty levels",
                "Distraction-free lesson player layout with progress tracking",
                "Gamified progress indicators to encourage course completion",
                "Design tokens exported for direct use in the React implementation",
              ],
              stack: ["Figma", "UX Research", "Design Tokens"],
            },
            {
              title: "MODERN PORTFOLIO THEME",
              slug: "modern-portfolio-theme",
              colorMode: "color-6",
              tagline: "A minimal, dark-themed portfolio template for developers and designers.",
              description:
                "A minimal, dark-themed portfolio template built for developers and designers, emphasizing typography, generous whitespace, and subtle motion to let the work itself take center stage.",
              highlights: [
                "Typography-first layout with a restrained, high-contrast color palette",
                "Reusable section blocks for work, about, and contact",
                "Subtle scroll-reveal animations for a polished feel",
                "Fully responsive, mobile-first component structure",
              ],
              stack: ["Figma", "SCSS", "Motion Design"],
            },
            {
              title: "HEALTHCARE ADMIN PANEL",
              slug: "healthcare-admin-panel",
              colorMode: "color-5",
              tagline: "A calm, accessible admin UI for clinical staff workflows.",
              description:
                "An admin panel design for a healthcare product, prioritizing clarity and accessibility for clinical staff working through patient records and scheduling under time pressure.",
              highlights: [
                "High-contrast, accessible color palette suited for clinical environments",
                "Patient record layout optimized for fast scanning under time pressure",
                "Appointment scheduling UI with conflict-aware calendar view",
                "Designed to WCAG AA contrast standards",
              ],
              stack: ["Figma", "Accessibility", "Design Systems"],
            },
            {
              title: "BRAND IDENTITY KIT",
              slug: "brand-identity-kit",
              colorMode: "color-4",
              tagline: "A complete logo, color, and typography system for a startup brand.",
              description:
                "A full brand identity kit for a startup, covering logo construction, a primary and secondary color system, typography pairing, and usage guidelines for consistent application across digital and print.",
              highlights: [
                "Logo construction grid and clear-space/usage guidelines",
                "Primary and secondary color palettes with accessibility notes",
                "Typography pairing for headings, body, and UI text",
                "Applied across business cards, social templates, and app icon",
              ],
              stack: ["Affinity", "CorelDRAW", "Brand Design"],
            },
            {
              title: "ECOMMERCE WIREFRAMES",
              slug: "ecommerce-wireframes",
              colorMode: "color-1",
              tagline: "Low-to-high fidelity wireframes for a storefront checkout flow.",
              description:
                "A full set of wireframes for an e-commerce storefront, moving from low-fidelity flow sketches through to high-fidelity mockups for the product listing, cart, and checkout experience.",
              highlights: [
                "User flow mapping from product discovery to order confirmation",
                "Low-fidelity wireframes iterated into high-fidelity mockups",
                "Cart and checkout designed to minimize drop-off friction",
                "Annotated handoff files for engineering implementation",
              ],
              stack: ["Figma", "Wireframing", "UX Flows"],
            },
            {
              title: "REAL ESTATE PORTAL UI",
              slug: "real-estate-portal-ui",
              colorMode: "color-3",
              tagline: "Property search and listing UI for a real estate marketplace.",
              description:
                "A UI design for a real estate marketplace, focused on making property search feel effortless with strong filtering, map integration, and image-forward listing cards.",
              highlights: [
                "Map-integrated search with synced list and pin interactions",
                "Image-forward listing cards with quick-view details",
                "Advanced filter panel for price, location, and amenities",
                "Responsive layout for both agent and buyer-facing views",
              ],
              stack: ["Figma", "Maps UI", "Responsive Design"],
            },
          ],
        },
        {
          title: "Mobile Designs",
          desc: "Cross-platform mobile application interfaces prioritizing smooth UX, built via React Native and Flutter design systems.",
          items: [
            {
              title: "EXPENSE TRACKER APP",
              slug: "expense-tracker-app",
              colorMode: "color-5",
              tagline: "A clean, glanceable UI for tracking daily expenses and budgets.",
              description:
                "A mobile UI for a personal expense tracker, designed around quick entry and glanceable budget summaries, later implemented in React Native with Firebase for real-time sync.",
              highlights: [
                "One-tap quick-add expense entry flow",
                "Glanceable weekly and monthly budget summary cards",
                "Category-based spending breakdown with simple charts",
                "Implemented in React Native with Firebase Realtime Database",
              ],
              stack: ["Figma", "React Native", "Firebase"],
            },
            {
              title: "SOCIAL MEDIA UI KIT",
              slug: "social-media-ui-kit",
              colorMode: "color-6",
              tagline: "A reusable component kit for a short-form social feed app.",
              description:
                "A component-driven UI kit for a short-form social media app, covering the feed, post composer, profile, and notifications screens as a consistent, reusable design system.",
              highlights: [
                "Feed, composer, profile, and notification screen templates",
                "Reusable component kit with defined spacing and elevation scale",
                "Micro-interactions for likes, comments, and follows",
                "Dark-mode-first color system",
              ],
              stack: ["Figma", "Design Systems", "Motion Design"],
            },
            {
              title: "FITNESS TRACKER MOBILE",
              slug: "fitness-tracker-mobile",
              colorMode: "color-4",
              tagline: "Workout logging and progress-tracking UI for a fitness app.",
              description:
                "A fitness tracking app UI covering workout logging, progress charts, and guided routines, designed to keep users motivated with clear visual progress feedback.",
              highlights: [
                "Guided workout flow with rest-timer and set tracking",
                "Progress charts for weight, reps, and streaks over time",
                "Achievement badges to reinforce consistency",
                "Built for both iOS and Android using Flutter's design system",
              ],
              stack: ["Figma", "Flutter", "Data Visualization"],
            },
            {
              title: "DELIVERY LOGISTICS APP",
              slug: "delivery-logistics-app",
              colorMode: "color-2",
              tagline: "Live-tracking UI for delivery drivers and customers.",
              description:
                "A two-sided delivery logistics app UI, with a driver-facing route and task view and a customer-facing live order tracking screen with map-based ETA updates.",
              highlights: [
                "Driver task list with route optimization view",
                "Customer-facing live map tracking with ETA updates",
                "Status timeline from order placed to delivered",
                "Designed for one-handed use on the driver side",
              ],
              stack: ["Figma", "React Native", "Maps UI"],
            },
            {
              title: "CRYPTOCURRENCY WALLET",
              slug: "cryptocurrency-wallet",
              colorMode: "color-1",
              tagline: "A secure, minimal wallet UI for sending and tracking crypto assets.",
              description:
                "A minimal, security-conscious wallet app UI for tracking and transferring crypto assets, with a strong emphasis on clear confirmation steps for irreversible transactions.",
              highlights: [
                "Portfolio overview with live balance and price charts",
                "Multi-step confirmation flow for irreversible transactions",
                "Biometric authentication entry points",
                "QR-based send/receive flow",
              ],
              stack: ["Figma", "Flutter", "Security UX"],
            },
            {
              title: "SMART HOME CONTROLLER",
              slug: "smart-home-controller",
              colorMode: "color-3",
              tagline: "A room-based control UI for connected smart home devices.",
              description:
                "A smart home controller app UI organized around rooms and device groups, letting users control lighting, climate, and security devices from a single, glanceable dashboard.",
              highlights: [
                "Room-based device grouping with quick-toggle controls",
                "Scene builder for combining multiple devices into one action",
                "Live status indicators for security and climate devices",
                "Dark, ambient visual style suited for in-home displays",
              ],
              stack: ["Figma", "Flutter", "IoT UX"],
            },
            {
              title: "DATING APP INTERFACE",
              slug: "dating-app-interface",
              colorMode: "color-6",
              tagline: "A swipe-based matching UI with a focus on safety and clarity.",
              description:
                "A dating app interface centered on a swipe-based discovery flow, with a redesigned match and chat experience that surfaces safety features without cluttering the core flow.",
              highlights: [
                "Swipe-based discovery flow with clear like/pass affordances",
                "Match and chat screens with integrated safety prompts",
                "Profile editor with guided photo and prompt suggestions",
                "Motion-driven match celebration moment",
              ],
              stack: ["Figma", "React Native", "Motion Design"],
            },
            {
              title: "RESTAURANT BOOKING UI",
              slug: "restaurant-booking-ui",
              colorMode: "color-5",
              tagline: "A browse-to-book UI for restaurant discovery and table reservations.",
              description:
                "A restaurant discovery and booking app UI, taking users from browsing menus and photos through to a frictionless table reservation flow with real-time availability.",
              highlights: [
                "Restaurant discovery feed with photo-forward cards",
                "Real-time table availability and reservation flow",
                "Menu browsing with dietary filter tags",
                "Booking confirmation with calendar and reminder integration",
              ],
              stack: ["Figma", "React Native", "Booking UX"],
            },
          ],
        },
      ],
    },
    contact: {
      helpTitle: "How I can help you:",
      helpItems: [
        {
          title: "FULL-STACK DEVELOPMENT",
          desc: "End-to-end development of web and mobile apps using React, Node.js, Flutter, and scalable databases.",
        },
        {
          title: "UI/UX DESIGN & BRANDING",
          desc: "Creation of professional, reusable UI components, logo designs, and layouts via Figma and modern CSS/SCSS.",
        },
        {
          title: "SYSTEM ARCHITECTURE",
          desc: "Designing secure access control, database performance optimization, and deep systems engineering.",
        },
      ],
      contactTitle: "Get in touch with me:",
      contactItems: [
        { value: "+91 959-765-4462" },
        { value: "gokul.sureshkumar06@gmail.com" },
        { value: "LinkedIn" },
        { value: "GitHub" },
      ],
    },
  },
  resume: {
    title: "Resume:",
    subtitle: "Curriculum Vitae and professional experience.",
    downloadBtn: "Download PDF",
    pdfPlaceholder: "Upload your PDF resume here...",
  },
  otherPages: {
    aboutTitle: "About",
    projectsTitle: "Projects",
    designsTitle: "Designs",
    resumeTitle: "Resume",
    comingSoon: "Content coming soon...",
  },
  aboutPage: {
    header: {
      title: "About",
      subtitle: "Seja muito bem-vindo(a) ao meu portfólio. Conheça a minha trajetória:",
    },
    profile: {
      name: "Gokul Sureshkumar",
      pronouns: "He/Him",
      bio: "Full-Stack Developer and Designer with 3+ years building production web and mobile apps using React, Next.js, Node.js, FastAPI, Flutter, and more. I design secure APIs, role-based systems, and real-time interfaces that are fast and purposeful. Beyond shipping products, I go deep — I've built a custom JSX compiler, a React Fiber clone, a memory allocator in C, and a Git engine from scratch. I bridge engineering and design using Figma, Affinity, and CorelDRAW to create experiences that look as good as they work.",
    },
    workExperience: {
      title: "Work Experience",
      items: [
        {
          company: "Maitreya Technologies Pvt. Ltd",
          companyUrl: "https://maits.in/",
          role: "Full-Stack Developer & Designer",
          date: "Apr 2023 – Present",
          location: "Hosur, India • Remote",
          achievements: [
            "Built 4+ production applications across web and mobile platforms using React.js, Next.js, Node.js, FastAPI, React Native, Flutter, MySQL, PostgreSQL, Firebase, and SCSS.",
            "Developed 50+ reusable UI components in React.js and SCSS, enforcing consistent design patterns and reducing redundant development effort across multiple product modules.",
            "Designed secure RESTful APIs using Node.js and FastAPI with JWT authentication and RBAC, managing controlled access across 5+ user roles.",
            "Built role-specific dashboards for administrative, academic, and operational users, implementing context-aware access levels that streamlined workflows and improved team productivity.",
            "Developed cross-platform mobile apps using React Native and Flutter, integrating Firebase Authentication and Realtime Database for real-time expense tracking and data synchronization.",
            "Built real-time monitoring interfaces with dynamic waveform rendering and live signal dashboards for continuous embedded hardware data streams.",
            "Optimized MySQL and PostgreSQL performance via query restructuring and indexing, achieving 30–40% faster data retrieval while contributing to Agile development and stable production releases."
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: [
        {
          name: "Programming Languages",
          values: "C, C++, Rust, TypeScript, JavaScript, Python"
        },
        {
          name: "Frameworks & Libraries",
          values: "React, Next.js, Node.js, React Native, MySQL, PostgreSQL, Firebase, Git"
        },
        {
          name: "Concepts & Design",
          values: "System Design, Design Patterns, Logo design, Microservices"
        },
        {
          name: "Tools",
          values: "Figma, Affinity, CorelDRAW, Adobe, Canva"
        }
      ]
    }
  },
};

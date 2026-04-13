import { title } from "process";

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
            { title: "ZENITIX JS LIBRARY", colorMode: "color-1" },
            { title: "REACT FIBER CLONE", colorMode: "color-2" },
            { title: "MEMORY ALLOCATOR", colorMode: "color-3" },
            { title: "GIT VERSION CONTROL", colorMode: "color-4" },
          ],
        },
        {
          title: "Websites",
          desc: "Production-ready, full-stack web applications featuring role-based dashboards, secure APIs, and responsive components.",
          items: [
            { title: "ACADEMIC DASHBOARD", colorMode: "color-4" },
            { title: "OPERATIONS PORTAL", colorMode: "color-5" },
            { title: "ADMIN CONTROL PANEL", colorMode: "color-6" },
            { title: "REAL-TIME MONITORING", colorMode: "color-1" },
            { title: "E-COMMERCE PLATFORM", colorMode: "color-2" },
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
            { title: "FINTECH DASHBOARD UI", colorMode: "color-2" },
            { title: "SaaS LANDING PAGE", colorMode: "color-1" },
            { title: "E-LEARNING PLATFORM UI", colorMode: "color-3" },
            { title: "MODERN PORTFOLIO THEME", colorMode: "color-6" },
            { title: "HEALTHCARE ADMIN PANEL", colorMode: "color-5" },
            { title: "BRAND IDENTITY KIT", colorMode: "color-4" },
            { title: "ECOMMERCE WIREFRAMES", colorMode: "color-1" },
            { title: "REAL ESTATE PORTAL UI", colorMode: "color-3" },
          ],
        },
        {
          title: "Mobile Designs",
          desc: "Cross-platform mobile application interfaces prioritizing smooth UX, built via React Native and Flutter design systems.",
          items: [
            { title: "EXPENSE TRACKER APP", colorMode: "color-5" },
            { title: "SOCIAL MEDIA UI KIT", colorMode: "color-6" },
            { title: "FITNESS TRACKER MOBILE", colorMode: "color-4" },
            { title: "DELIVERY LOGISTICS APP", colorMode: "color-2" },
            { title: "CRYPTOCURRENCY WALLET", colorMode: "color-1" },
            { title: "SMART HOME CONTROLLER", colorMode: "color-3" },
            { title: "DATING APP INTERFACE", colorMode: "color-6" },
            { title: "RESTAURANT BOOKING UI", colorMode: "color-5" },
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

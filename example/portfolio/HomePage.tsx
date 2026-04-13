import { h } from "../../src/index";
import { navigate } from "./Home.state";
import { portfolioText } from "./text";

export default function HomePage() {
  const { home } = portfolioText;

  return (
    <div>
      {/* Header */}
      <section class="portfolio-header scroll-reveal">
        <h1>{home.header.title}</h1>
        <p>{home.header.subtitle}</p>
        <div class="portfolio-header-actions">
          <button class="portfolio-btn" onClick={() => window.open('https://www.linkedin.com/in/gokul-sureshkumar/', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            {home.header.btnAbout}
          </button>
          <button class="portfolio-btn" onClick={() => window.open('https://github.com/Goku1-Dev', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            {home.header.btnCv}
          </button>
        </div>
      </section>

      {/* About */}
      <div class="portfolio-section-title scroll-reveal delay-100">{home.about.sectionTitle}</div>
      <p class="scroll-reveal delay-100" style={{ fontSize: "12px", color: "var(--portfolio-text-muted)", marginBottom: "15px" }}>
        {home.about.welcomePhrase}
      </p>
      <section class="portfolio-about scroll-reveal delay-200">
        <div class="portfolio-about-years">{home.about.yearsTitle}</div>
        <div class="portfolio-about-text">{home.about.yearsDesc}</div>
      </section>

      {/* Skills */}
      <div class="portfolio-section-title scroll-reveal delay-300">{home.skills.sectionTitle}</div>
      <section class="portfolio-skills scroll-reveal delay-400">
        {home.skills.items.map((skill, index) => (
          <div class={`portfolio-skill-card ${index === 0 ? 'primary' : ''}`}>
            <div class="portfolio-skill-icon">
              {index === 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              )}
              {index === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
                </svg>
              )}
              {index === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              )}
              {index === 3 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
                </svg>
              )}
            </div>
            <div class="portfolio-skill-title">
              {skill.title.split('\n').map((line, i) => (
                <>{line}{i === 0 && <br />}</>
              ))}
            </div>
            <div class="portfolio-skill-desc">{skill.desc}</div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <div class="portfolio-section-title scroll-reveal delay-500">{home.projects.sectionTitle}</div>

      {home.projects.categories.map((category) => (
        <div class="scroll-reveal delay-400">
          <div class="portfolio-works-header">
            <div class="portfolio-section-title" style={{ margin: 0 }}>{category.title}</div>
            <a href="/projects" class="portfolio-works-view-all" onClick={(e: any) => { e.preventDefault(); navigate('/projects'); }}>
              {home.projects.viewAllBtn}
            </a>
          </div>
          <section class="portfolio-works-grid">
            {category.items.map((item) => (
              <div class="portfolio-work-card">
                <div class={`portfolio-work-img ${item.colorMode}`}></div>
                <div class="portfolio-work-content">
                  <div class="portfolio-work-title">{item.title}</div>
                  <div class="portfolio-work-desc" dangerouslySetInnerHTML={{ __html: category.desc }}></div>
                  <button class="portfolio-work-btn">{home.projects.detailBtn}</button>
                </div>
              </div>
            ))}
          </section>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "-20px", marginBottom: "40px" }}>
            <button class="portfolio-nav-btn" onClick={(e: any) => { const g = e.currentTarget.parentElement.previousElementSibling; if (g) g.scrollBy({ left: -(g.querySelector('.portfolio-work-card').clientWidth + 20), behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button class="portfolio-nav-btn" onClick={(e: any) => { const g = e.currentTarget.parentElement.previousElementSibling; if (g) g.scrollBy({ left: (g.querySelector('.portfolio-work-card').clientWidth + 20), behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      ))}

      {/* Designs */}
      <div class="portfolio-section-title scroll-reveal delay-500">{home.designs.sectionTitle}</div>

      {home.designs.categories.map((category) => (
        <div class="scroll-reveal delay-400">
          <div class="portfolio-works-header">
            <div class="portfolio-section-title" style={{ margin: 0 }}>{category.title}</div>
            <a href="/designs" class="portfolio-works-view-all" onClick={(e: any) => { e.preventDefault(); navigate('/designs'); }}>
              {home.designs.viewAllBtn}
            </a>
          </div>
          <section class="portfolio-works-grid">
            {category.items.map((item) => (
              <div class="portfolio-work-card">
                <div class={`portfolio-work-img ${item.colorMode}`}></div>
                <div class="portfolio-work-content">
                  <div class="portfolio-work-title">{item.title}</div>
                  <div class="portfolio-work-desc" dangerouslySetInnerHTML={{ __html: category.desc }}></div>
                  <button class="portfolio-work-btn">{home.designs.detailBtn}</button>
                </div>
              </div>
            ))}
          </section>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "-20px", marginBottom: "40px" }}>
            <button class="portfolio-nav-btn" onClick={(e: any) => { const g = e.currentTarget.parentElement.previousElementSibling; if (g) g.scrollBy({ left: -(g.querySelector('.portfolio-work-card').clientWidth + 20), behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button class="portfolio-nav-btn" onClick={(e: any) => { const g = e.currentTarget.parentElement.previousElementSibling; if (g) g.scrollBy({ left: (g.querySelector('.portfolio-work-card').clientWidth + 20), behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      ))}


    </div>
  );
}

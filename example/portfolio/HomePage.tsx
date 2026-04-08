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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            {home.header.btnAbout}
          </button>
          <button class="portfolio-btn" onClick={() => window.open('https://github.com/Goku1-Dev', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
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
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              )}
              {index === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              )}
              {index === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              )}
              {index === 3 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
                </svg>
              )}
            </div>
            <div class="portfolio-skill-title">
               {skill.title.split('\n').map((line, i) => (
                 <>{line}{i === 0 && <br/>}</>
               ))}
            </div>
            <div class="portfolio-skill-desc">{skill.desc}</div>
          </div>
        ))}
      </section>

      {/* Works */}
      <div class="portfolio-section-title scroll-reveal delay-500">{home.works.sectionTitle}</div>

      {home.works.categories.map((category) => (
        <div class="scroll-reveal delay-400">
          <div class="portfolio-works-header">
            <div class="portfolio-section-title" style={{margin: 0}}>{category.title}</div>
            <a href="/works" class="portfolio-works-view-all" onClick={(e: any) => { e.preventDefault(); navigate('/works'); }}>
              {home.works.viewAllBtn}
            </a>
          </div>
          <section class="portfolio-works-grid">
            {category.items.map((item) => (
              <div class="portfolio-work-card">
                <div class={`portfolio-work-img ${item.colorMode}`}></div>
                <div class="portfolio-work-content">
                  <div class="portfolio-work-title">{item.title}</div>
                  <div class="portfolio-work-desc" dangerouslySetInnerHTML={{ __html: category.desc }}></div>
                  <button class="portfolio-work-btn">{home.works.detailBtn}</button>
                </div>
              </div>
            ))}
          </section>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "-20px", marginBottom: "40px" }}>
            <button class="portfolio-nav-btn" onClick={(e: any) => { const g = e.currentTarget.parentElement.previousElementSibling; if(g) g.scrollBy({ left: -(g.querySelector('.portfolio-work-card').clientWidth + 20), behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button class="portfolio-nav-btn" onClick={(e: any) => { const g = e.currentTarget.parentElement.previousElementSibling; if(g) g.scrollBy({ left: (g.querySelector('.portfolio-work-card').clientWidth + 20), behavior: 'smooth' }); }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Contact Section */}
      <div class="portfolio-bottom-grid scroll-reveal delay-500">
        <div>
          <div class="portfolio-section-title">{home.contact.helpTitle}</div>
          <div class="portfolio-help-list">
            {home.contact.helpItems.map((help, idx) => (
              <div class="portfolio-help-item">
                <div class="portfolio-help-icon">
                  {idx === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>
                    </svg>
                  )}
                </div>
                <div class="portfolio-help-info">
                  <h4>{help.title}</h4>
                  <p>{help.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div class="portfolio-section-title">{home.contact.contactTitle}</div>
          <div class="portfolio-contact-card">
            {home.contact.contactItems.map((contact, idx) => (
              <div class="portfolio-contact-item" style={{ cursor: 'pointer' }} onClick={() => {
                if (idx === 0) window.open('tel:+919597654462', '_self');
                if (idx === 1) window.open('mailto:gokul.sureshkumar06@gmail.com', '_self');
                if (idx === 2) window.open('https://www.linkedin.com/in/gokul-sureshkumar/', '_blank');
                if (idx === 3) window.open('https://github.com/Goku1-Dev', '_blank');
              }}>
                {idx === 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                )}
                {idx === 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                )}
                {idx === 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                )}
                {idx === 3 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                )}
                {contact.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

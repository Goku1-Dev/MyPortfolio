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
          <button class="portfolio-btn">{home.header.btnAbout}</button>
          <button class="portfolio-btn">{home.header.btnCv}</button>
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
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              )}
              {index === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/>
                </svg>
              )}
              {index === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )}
              {index === 3 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-9h-5V5h-7"/><path d="M14 17h3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
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
                      <path d="m10 7 5 3-5 3Z"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
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
              <div class="portfolio-contact-item">
                {idx === 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
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

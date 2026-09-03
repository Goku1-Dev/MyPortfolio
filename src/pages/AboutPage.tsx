import { portfolioText } from "../data/portfolioText";

export default function AboutPage() {
  const data = portfolioText.aboutPage;

  return (
    <div className="portfolio-about-page fade-in">
      <div className="portfolio-about-page-header">
        <h2 className="portfolio-section-title">{data.header.title}</h2>
        <p>{data.header.subtitle}</p>
      </div>

      <div className="portfolio-about-banner-container">
        <img className="portfolio-about-banner" src="/banner.png" alt="Banner background" />
        <img className="portfolio-about-avatar" src="/profile.png" alt="Profile picture" />
      </div>

      <div className="portfolio-about-profile">
        <div className="portfolio-about-name-row">
          <h3>{data.profile.name}</h3>
          <span className="portfolio-about-pronouns">{data.profile.pronouns}</span>
        </div>
        <p className="portfolio-about-bio">{data.profile.bio}</p>
      </div>

      <div className="portfolio-about-section">
        <h4 className="portfolio-section-title">{data.workExperience.title}</h4>
        {data.workExperience.items.map((item) => (
          <div className="portfolio-experience-item" key={item.company}>
            <div className="portfolio-experience-header">
              <h5>
                {item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "inherit", textDecoration: "none" }} className="portfolio-company-link">
                    {item.company}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                ) : (
                  item.company
                )}
              </h5>
              <span className="portfolio-experience-role">{item.role}</span>
              <span className="portfolio-experience-date">{item.date}</span>
            </div>
            <div className="portfolio-experience-location">{item.location}</div>
            <ul className="portfolio-experience-list">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="portfolio-about-section">
        <h4 className="portfolio-section-title">{data.skills.title}</h4>
        <div className="portfolio-skills-list">
          {data.skills.categories.map((category) => (
            <div className="portfolio-skill-item" key={category.name}>
              <h6>{category.name}</h6>
              <p>{category.values}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

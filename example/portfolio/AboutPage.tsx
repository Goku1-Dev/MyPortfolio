import { h } from "../../src/index";
import { portfolioText } from "./text";

export default function AboutPage() {
  const data = portfolioText.aboutPage;

  return (
    <div class="portfolio-about-page fade-in">
      <div class="portfolio-about-page-header">
        <h2 class="portfolio-section-title">{data.header.title}</h2>
        <p>{data.header.subtitle}</p>
      </div>

      <div class="portfolio-about-banner-container">
        <img class="portfolio-about-banner" src="/portfolio/Public/banner.png" alt="Banner background" />
        <img class="portfolio-about-avatar" src="/portfolio/Public/profile.jpeg" alt="Profile picture" />
      </div>

      <div class="portfolio-about-profile">
        <div class="portfolio-about-name-row">
          <h3>{data.profile.name}</h3>
          <span class="portfolio-about-pronouns">{data.profile.pronouns}</span>
        </div>
        <p class="portfolio-about-bio">{data.profile.bio}</p>
      </div>

      <div class="portfolio-about-section">
        <h4 class="portfolio-section-title">{data.workExperience.title}</h4>
        {data.workExperience.items.map((item) => (
          <div class="portfolio-experience-item">
            <div class="portfolio-experience-header">
              <h5>{item.company}</h5>
              <span class="portfolio-experience-role">{item.role}</span>
              <span class="portfolio-experience-date">{item.date}</span>
            </div>
            <div class="portfolio-experience-location">{item.location}</div>
            <ul class="portfolio-experience-list">
              {item.achievements.map((achievement) => (
                <li>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div class="portfolio-about-section">
        <h4 class="portfolio-section-title">{data.skills.title}</h4>
        <div class="portfolio-skills-list">
          {data.skills.categories.map((category) => (
            <div class="portfolio-skill-item">
              <h6>{category.name}</h6>
              <p>{category.values}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

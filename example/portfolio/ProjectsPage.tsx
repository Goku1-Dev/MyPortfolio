import { h } from "../../src/index";
import { portfolioText } from "./text";

export default function ProjectsPage() {
  return (
    <div>
      <div class="portfolio-section-title">{portfolioText.otherPages.projectsTitle}</div>
      <p style={{ color: "var(--portfolio-text-muted)" }}>{portfolioText.otherPages.comingSoon}</p>
    </div>
  );
}

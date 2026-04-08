import { h } from "../../src/index";
import { portfolioText } from "./text";

export default function WorksPage() {
  return (
    <div>
      <div class="portfolio-section-title">{portfolioText.otherPages.worksTitle}</div>
      <p style={{ color: "var(--portfolio-text-muted)" }}>{portfolioText.otherPages.comingSoon}</p>
    </div>
  );
}

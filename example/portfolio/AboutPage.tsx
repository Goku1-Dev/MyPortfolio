import { h } from "../../src/index";
import { portfolioText } from "./text";

export default function AboutPage() {
  return (
    <div>
      <div class="portfolio-section-title">{portfolioText.otherPages.aboutTitle}</div>
      <p style={{ color: "var(--portfolio-text-muted)" }}>{portfolioText.otherPages.comingSoon}</p>
    </div>
  );
}

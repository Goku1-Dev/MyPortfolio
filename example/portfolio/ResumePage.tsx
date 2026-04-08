import { h } from "../../src/index";
import { portfolioText } from "./text";

export default function ResumePage() {
  return (
    <div>
      <div class="portfolio-section-title">{portfolioText.otherPages.resumeTitle}</div>
      <p style={{ color: "var(--portfolio-text-muted)" }}>{portfolioText.otherPages.comingSoon}</p>
    </div>
  );
}

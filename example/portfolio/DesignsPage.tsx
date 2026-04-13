import { h } from "../../src/index";
import { portfolioText } from "./text";

export default function DesignsPage() {
  return (
    <div>
      <div class="portfolio-section-title">{portfolioText.otherPages.designsTitle}</div>
      <p style={{ color: "var(--portfolio-text-muted)" }}>{portfolioText.otherPages.comingSoon}</p>
    </div>
  );
}

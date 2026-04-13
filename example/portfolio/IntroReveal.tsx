import { h } from "../../src/index";

export default function IntroReveal() {
  return (
    <div class="portfolio-intro-overlay">
       <div class="portfolio-intro-container">
          <div class="portfolio-intro-shape"></div>
          <img src="/logo.svg" alt="LogoMorph" class="portfolio-intro-logo" />
       </div>
    </div>
  );
}

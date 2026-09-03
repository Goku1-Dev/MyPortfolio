import Sidebar from "../components/Sidebar";
import ContactFooter from "../components/ContactFooter";
import IntroReveal from "../components/IntroReveal";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import DesignsPage from "./DesignsPage";
import ResumePage from "./ResumePage";
import { toggleSidebar, useHomeStore } from "../state/homeStore";
import "../styles/PortfolioStyles.scss";

export default function Home() {
  const { currentRoute } = useHomeStore();

  const renderPage = () => {
    if (currentRoute.startsWith("/projects")) return <ProjectsPage />;
    if (currentRoute.startsWith("/designs")) return <DesignsPage />;

    switch (currentRoute) {
      case "/home":
      case "/":
        return <HomePage />;
      case "/about":
        return <AboutPage />;
      case "/resume":
        return <ResumePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="portfolio-layout">
      {/* Intro Reveal Animation */}
      <IntroReveal />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="portfolio-main">
        {/* Mobile Header Menu Button */}
        <div className="portfolio-mobile-header">
          <img src="/logo.svg" alt="logo" className="portfolio-logo-img" style={{ maxHeight: "32px", margin: 0 }} />
          <button className="portfolio-menu-btn" onClick={() => toggleSidebar()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>

        {renderPage()}
        <ContactFooter />
      </main>
    </div>
  );
}

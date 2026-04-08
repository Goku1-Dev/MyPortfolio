import { h } from "../../src/index";
import Sidebar from "./Sidebar";
import { currentRoute, toggleSidebar } from "./Home.state";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import WorksPage from "./WorksPage";
import ResumePage from "./ResumePage";
import ContactFooter from "./ContactFooter";
import "./PortfolioStyles.css";

export default function Home() {
  const renderPage = () => {
    switch (currentRoute) {
      case "/home":
      case "/":
        return <HomePage />;
      case "/about":
        return <AboutPage />;
      case "/works":
        return <WorksPage />;
      case "/resume":
        return <ResumePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div class="portfolio-layout">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main class="portfolio-main">
        {/* Mobile Header Menu Button */}
        <div class="portfolio-mobile-header">
          <button class="portfolio-menu-btn" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </div>

        {() => renderPage()}
        <ContactFooter />
      </main>
    </div>
  );
}

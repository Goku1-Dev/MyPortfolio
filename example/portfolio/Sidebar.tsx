import { h } from "../../src/index";
import { currentRoute, navigate, isSidebarOpen, toggleSidebar } from "./Home.state";
import { portfolioText } from "./text";

export default function Sidebar() {
  const { navItems, logo } = portfolioText.sidebar;

  const getActiveIndex = () => {
    return navItems.findIndex(i => `/${i.toLowerCase()}` === currentRoute);
  };

  return (
    <div>
      {/* Mobile Overlay */}
      <div 
        class={() => (isSidebarOpen ? "portfolio-sidebar-overlay active" : "portfolio-sidebar-overlay")}
        onClick={() => toggleSidebar()}
      ></div>

      <aside class={() => (isSidebarOpen ? "portfolio-sidebar open" : "portfolio-sidebar")}>
        <div class="portfolio-logo">{logo}</div>
        <nav class="portfolio-nav">
          <div 
            class="portfolio-nav-indicator" 
            style={() => `transform: translateY(${getActiveIndex() !== -1 ? getActiveIndex() * 56 : 0}px); opacity: ${getActiveIndex() !== -1 ? 1 : 0}`}
          ></div>
          {navItems.map((item) => {
            const routePath = `/${item.toLowerCase()}`;
            return (
              <a
                class={() => (currentRoute === routePath ? "portfolio-nav-item active" : "portfolio-nav-item")}
                onClick={(e: Event) => {
                  e.preventDefault();
                  navigate(routePath);
                  if (window.innerWidth <= 768) {
                    toggleSidebar();
                  }
                }}
                href={routePath === '/home' ? '/' : routePath}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}

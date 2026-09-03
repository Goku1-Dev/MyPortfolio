import { navigate, toggleSidebar, useHomeStore } from "../state/homeStore";
import { portfolioText } from "../data/portfolioText";

export default function Sidebar() {
  const { currentRoute, isSidebarOpen } = useHomeStore();
  const { navItems, logo } = portfolioText.sidebar;

  const isRouteActive = (routePath: string) =>
    currentRoute === routePath || currentRoute.startsWith(`${routePath}/`);

  const getActiveIndex = () => {
    return navItems.findIndex((i) => isRouteActive(`/${i.toLowerCase()}`));
  };

  const activeIndex = getActiveIndex();

  return (
    <div>
      {/* Mobile Overlay */}
      <div
        className={isSidebarOpen ? "portfolio-sidebar-overlay active" : "portfolio-sidebar-overlay"}
        onClick={() => toggleSidebar()}
      ></div>

      <aside className={isSidebarOpen ? "portfolio-sidebar open" : "portfolio-sidebar"}>
        <div className="portfolio-logo">
          <img src="/logo.svg" alt={logo} className="portfolio-logo-img" />
        </div>
        <nav className="portfolio-nav">
          <div
            className="portfolio-nav-indicator"
            style={{
              transform: `translateY(${activeIndex !== -1 ? activeIndex * 56 : 0}px)`,
              opacity: activeIndex !== -1 ? 1 : 0,
            }}
          ></div>
          {navItems.map((item) => {
            const routePath = `/${item.toLowerCase()}`;
            return (
              <a
                key={item}
                className={isRouteActive(routePath) ? "portfolio-nav-item active" : "portfolio-nav-item"}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  navigate(routePath);
                  if (window.innerWidth <= 768) {
                    toggleSidebar();
                  }
                }}
                href={routePath === "/home" ? "/" : routePath}
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

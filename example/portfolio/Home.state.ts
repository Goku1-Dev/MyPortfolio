export let currentRoute = window.location.pathname === '/' ? '/home' : window.location.pathname;
export let isSidebarOpen = false;

window.addEventListener('popstate', () => {
  currentRoute = window.location.pathname === '/' ? '/home' : window.location.pathname;
});

export function navigate(route: string) {
  if (currentRoute === route) return;
  currentRoute = route;
  window.history.pushState({}, "", route === '/home' ? '/' : route);
}

export function toggleSidebar() {
  isSidebarOpen = !isSidebarOpen;
}

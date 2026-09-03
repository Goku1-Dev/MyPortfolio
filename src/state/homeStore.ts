import { useSyncExternalStore } from "react";

/**
 * Tiny external store that mirrors the original module-level reactive
 * state (currentRoute / isSidebarOpen). Any component that calls
 * useHomeStore() re-renders whenever navigate()/toggleSidebar() run.
 */

type HomeState = {
  currentRoute: string;
  isSidebarOpen: boolean;
};

function getInitialRoute() {
  return window.location.pathname === "/" ? "/home" : window.location.pathname;
}

let state: HomeState = {
  currentRoute: getInitialRoute(),
  isSidebarOpen: false,
};

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

window.addEventListener("popstate", () => {
  state = { ...state, currentRoute: getInitialRoute() };
  emit();
});

export function navigate(route: string) {
  if (state.currentRoute === route) return;
  state = { ...state, currentRoute: route };
  window.history.pushState({}, "", route === "/home" ? "/" : route);
  emit();
}

export function toggleSidebar() {
  state = { ...state, isSidebarOpen: !state.isSidebarOpen };
  emit();
}

export function useHomeStore() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

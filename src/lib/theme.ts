export type Theme = "light" | "dark" | "system";

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
}

export function applyTheme(theme: Theme) {
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
}

export function setTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
  window.dispatchEvent(new CustomEvent<Theme>("theme-change", { detail: theme }));
}

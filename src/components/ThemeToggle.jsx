import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
    >
      {darkMode ? (
        <Sun size={19} strokeWidth={2} />
      ) : (
        <Moon size={19} strokeWidth={2} />
      )}
    </button>
  );
};

export default ThemeToggle;
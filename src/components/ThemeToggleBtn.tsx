"use client";
import { useTheme } from "@/context/themeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="dark:text-white p-2 border dark:border-[#323745] rounded-md max-md:hidden"
    >
      {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

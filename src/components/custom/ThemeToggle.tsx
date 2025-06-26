import React from "react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-row w-full  justify-end ">
      <button
        onClick={toggleTheme}
        className="text-[var(--primary)] bg-[var(--background)]  rounded "
      >
        {theme === "dark" ? "☀️ Claro" : "🌙 Oscuro"}
      </button>
    </div>
  );
}

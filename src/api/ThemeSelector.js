import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSelector = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSelector;
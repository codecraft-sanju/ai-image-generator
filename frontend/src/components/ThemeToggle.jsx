import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center justify-center gap-2">
      <label className="font-semibold">Theme:</label>
      <button
        className="btn btn-primary flex items-center gap-2"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <>
            <FaMoon /> Switch to Dark
          </>
        ) : (
          <>
            <FaSun /> Switch to Light
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;

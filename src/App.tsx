import { useEffect, useState } from "react";
import { DarkToggle } from "./components/DarkToggle/DarkToggle";

function App() {
  const [theme, setTheme] = useState("");

  const handleThemeChange = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (!currentTheme) {
      const isDark: boolean = window.matchMedia(
        "prefers-color-scheme: dark"
      ).matches;
      const initialTheme = isDark ? "dark" : "light";
      setTheme(initialTheme);
      localStorage.setItem("theme", initialTheme);
    } else setTheme(currentTheme);
  }, []);
  return (
    <div
      className={`${theme} dark:bg-dark-gray-1 h-[100dvh] w-[100dvw] flex justify-center items-center`}
    >
      <DarkToggle setDarkMode={handleThemeChange} />
    </div>
  );
}

export default App;

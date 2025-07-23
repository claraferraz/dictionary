import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<
  | {
      theme: string;
      toggleTheme: () => void;
    }
  | undefined
>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme can only be used inside theme provider");
  }
  return context;
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const loadedTheme = localStorage.getItem("theme");

    if (!loadedTheme) {
      const isDark: boolean = window.matchMedia(
        "prefers-color-scheme: dark"
      ).matches;
      const initialTheme = isDark ? "dark" : "light";
      setTheme(initialTheme);
    } else {
      setTheme(loadedTheme);
    }
  }, []);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export enum FontsEnum {
  sans = "sans",
  serif = "serif",
  mono = "mono",
}

export const ThemeContext = createContext<
  | {
      theme: string;
      toggleTheme: () => void;
      font: string;
      changeFont: (value: FontsEnum) => void;
    }
  | undefined
>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme can only be used inside theme provider");
  }
  return context;
};

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("");
  const [font, setFont] = useState("Sans Serif");

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

  const changeFont = (value: FontsEnum) => {
    switch (value) {
      case FontsEnum.sans:
        setFont("font-inter");
        break;
      case FontsEnum.serif:
        setFont("font-lora");
        break;
      case FontsEnum.mono:
        setFont("font-inconsolata");
        break;
      default:
        setFont("font-inter");
        break;
    }
  };

  return (
    <ThemeContext value={{ theme, toggleTheme, font, changeFont }}>
      {children}
    </ThemeContext>
  );
};

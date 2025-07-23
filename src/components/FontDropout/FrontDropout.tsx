import { useState } from "react";
import ArrowDown from "../../assets/images/icon-arrow-down.svg";
import { useTheme } from "../../context/ThemeContext";
import { FontsEnum } from "../../context/ThemeContext";

export const FontDropout = () => {
  const [open, setOpen] = useState(false);
  const [fontName, setFontName] = useState("Sans Serif");
  const { font, changeFont } = useTheme();

  const handleFontChange = (value: string, key: FontsEnum) => {
    setFontName(value);
    changeFont(key);
  };

  return (
    <div className="relative font-bold">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-4.5 cursor-pointer h-9"
      >
        <p className={`dark:text-white ${font}`}>{fontName}</p>
        <img src={ArrowDown} alt="arrow down" />
      </div>

      {open && (
        <div className="absolute mt-3 right-0 bg-white dark:bg-dark-gray-1 dark:text-white w-45 p-6 flex flex-col gap-4.5 rounded-2xl shadow-light dark:shadow-dark">
          <p
            onClick={() => handleFontChange("Sans Serif", FontsEnum.sans)}
            className="hover:text-purple cursor-pointer font-inter"
          >
            Sans Serif
          </p>
          <p
            onClick={() => handleFontChange("Serif", FontsEnum.serif)}
            className="hover:text-purple cursor-pointer font-lora"
          >
            Serif
          </p>
          <p
            onClick={() => handleFontChange("Mono", FontsEnum.mono)}
            className="hover:text-purple cursor-pointer font-inconsolata"
          >
            Mono
          </p>
        </div>
      )}
    </div>
  );
};

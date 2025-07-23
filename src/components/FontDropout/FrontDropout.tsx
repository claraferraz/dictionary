import { useState } from "react";
import ArrowDown from "../../assets/images/icon-arrow-down.svg";

export const FontDropout = () => {
  const [open, setOpen] = useState(false);
  const [font, setFont] = useState("Sans Serif");

  const handleFontChange = (value: string) => {
    setFont(value);
  };

  return (
    <div className="relative font-bold">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-4.5 cursor-pointer h-9"
      >
        <p className="dark:text-white">{font}</p>
        <img src={ArrowDown} alt="arrow down" />
      </div>

      {open && (
        <div className="absolute mt-3 right-0 bg-white dark:bg-dark-gray-1 dark:text-white w-45 p-6 flex flex-col gap-4.5 rounded-2xl shadow-light dark:shadow-dark">
          <p
            onClick={() => handleFontChange("Sans Serif")}
            className="hover:text-purple cursor-pointer font-inter"
          >
            Sans Serif
          </p>
          <p
            onClick={() => handleFontChange("Serif")}
            className="hover:text-purple cursor-pointer font-lora"
          >
            Serif
          </p>
          <p
            onClick={() => handleFontChange("Mono")}
            className="hover:text-purple cursor-pointer font-inconsolata"
          >
            Mono
          </p>
        </div>
      )}
    </div>
  );
};

import type { PropsWithChildren } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Body = ({ children }: PropsWithChildren) => {
  const { theme, font } = useTheme();
  return (
    <div
      className={`${theme} ${font} dark:bg-dark-gray-1 h-full min-h-[100dvh] w-full flex justify-center transition-colors`}
    >
      <div className="w-94 m-6 md:w-3xl sm:mx-10 sm:mt-17 md:mt-14">
        {children}
      </div>
    </div>
  );
};

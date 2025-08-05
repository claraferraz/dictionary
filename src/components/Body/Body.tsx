import type { PropsWithChildren } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Body = ({ children }: PropsWithChildren) => {
  const { theme, font } = useTheme();
  return (
    <div
      className={`${theme} ${font} dark:bg-dark-gray-1 h-full min-h-[100dvh] w-full  flex justify-center transition-colors`}
    >
      <div className="w-3xl mt-17">{children}</div>
    </div>
  );
};

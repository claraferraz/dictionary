import { useTheme } from "../../context/ThemeContext";

export const DarkToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex w-20 items-center justify-between">
      <div
        onClick={toggleTheme}
        className={`bg-light-gray-1 dark:bg-purple w-10 h-5 flex justify-start dark:justify-end items-center rounded-2xl px-0.5 cursor-pointer transition-all`}
      >
        <div className="bg-white rounded-full w-3.5 h-3.5"></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <path
          fill="none"
          stroke={theme === "light" ? "#838383" : "#a445ed"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};

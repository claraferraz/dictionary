import { DarkToggle } from "../DarkToggle/DarkToggle";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-9 bg-amber-100">
      <img src="src/assets/images/logo.svg" alt="book doodle" />
      <div></div>
      <div className="flex w-27 ml-6.5 items-center justify-between">
        <div className="w-0.5 h-8 bg-light-gray-2"></div>
        <DarkToggle />
        <img
          className="dark:stroke-purple"
          src="src/assets/images/icon-moon.svg"
          alt="dark mode indicator"
        />
      </div>
    </div>
  );
};

import { DarkToggle } from "../DarkToggle/DarkToggle";
import { FontDropout } from "../FontDropout/FrontDropout";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-9">
      <img src="src/assets/images/logo.svg" alt="book doodle" />
      <div className="flex items-center">
        <div>
          <FontDropout />
        </div>
        <div className="flex w-27 ml-6.5 items-center justify-between">
          <div className="w-0.5 h-8 bg-light-gray-2"></div>
          <DarkToggle />
        </div>
      </div>
    </div>
  );
};

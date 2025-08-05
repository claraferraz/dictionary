import { DarkToggle } from "../DarkToggle/DarkToggle";
import { FontDropout } from "../FontDropout/FrontDropout";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-8 sm:h-9">
      <img src="src/assets/images/logo.svg" alt="book doodle" />
      <div className="flex items-center">
        <div>
          <FontDropout />
        </div>
        <div className="flex w-22 gap-4 ml-4 sm:w-27 sm:gap-6.5 sm:ml-6.5 items-center">
          <div className="w-[0.0625rem] h-8 bg-light-gray-2" />
          <DarkToggle />
        </div>
      </div>
    </div>
  );
};

import { twJoin } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import NewWindowIcon from "/src/assets/images/icon-new-window.svg";

type Props = {
  sourceUrls: string[];
};

export const Source = ({ sourceUrls }: Props) => {
  const { font } = useTheme();
  return (
    <div>
      <div className="bg-light-gray-2 dark:bg-dark-gray-4 w-full h-[0.0625rem] mt-8 sm:mt-10" />
      <div className="mt-5 sm:flex sm:items-baseline sm:gap-5">
        <span
          className={twJoin(
            "text-light-gray-1 underline mb-2",
            font === "font-inconsolata" && "sm:no-underline"
          )}
        >
          Source
        </span>
        {sourceUrls.map((s, i) => {
          return (
            <div key={i}>
              <Link
                className="cursor-pointer flex flex-wrap items-center gap-4 sm:gap-2"
                to={s}
                target="_blank"
              >
                <span
                  className={twJoin(
                    "dark:text-white",
                    (font === "font-inter" || font === "font-lora") &&
                      "underline"
                  )}
                >
                  {s}
                </span>

                <img
                  className="cursor-pointer"
                  src={NewWindowIcon}
                  alt="new window icon"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

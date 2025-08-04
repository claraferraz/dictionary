import { twJoin } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";

type Props = {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
  synonyms: string[];
  index: number;
};

export const Meanings = ({
  partOfSpeech,
  definitions,
  synonyms,
  index,
}: Props) => {
  const { font } = useTheme();
  return (
    <div>
      <div className="flex items-center gap-5 my-10">
        <h2
          className={twJoin(
            "font-bold dark:text-white",
            font === "font-inter" && "italic",
            font === "font-lora" && "font-normal"
          )}
        >
          {partOfSpeech}
        </h2>
        <div className="bg-light-gray-2 dark:bg-dark-gray-4 w-full h-[0.0625rem]" />
      </div>
      <p className="mb-6 text-light-gray-1">Meaning</p>
      <ul className="pl-5 ">
        {definitions.map((d, i) => {
          return (
            <li
              className="list-disc list-outside pl-5 marker:text-purple"
              key={i}
            >
              <p className="py-3 dark:text-white">{d.definition}</p>
              {d.example && <p className="text-light-gray-1">"{d.example}"</p>}
            </li>
          );
        })}
      </ul>
      {synonyms[index] && (
        <div className="flex items-start gap-5 mt-16">
          <p className="text-light-gray-1">Synonyms</p>
          <h3 className="text-purple font-bold">
            {
              synonyms.join(", ")
              //ajustar para ser links
            }
          </h3>
        </div>
      )}
    </div>
  );
};

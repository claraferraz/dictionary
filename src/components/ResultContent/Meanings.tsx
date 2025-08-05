import { twJoin } from "tailwind-merge";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [synonymsList, setSynonymsList] = useState<string[] | undefined>(
    undefined
  );

  const separateSynonyms = (list: string[]): string[] => {
    const reducedList = list.reduce((final, s) => {
      if (s.includes(",")) {
        const synonyms = s.split(", ");
        return [...final, ...synonyms];
      } else {
        return [...final, s];
      }
    }, [] as string[]);
    return reducedList;
  };

  useEffect(() => {
    const newSynonymsList = separateSynonyms(synonyms);
    setSynonymsList(newSynonymsList);
  }, [synonyms]);
  return (
    <div key={index}>
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
      {synonyms[index] && synonymsList && (
        <div className="flex items-start gap-5 mt-16">
          <p className="text-light-gray-1">Synonyms</p>
          <div className="text-base">
            {synonymsList.map((s, i) => {
              const urlWord = s.replace(" ", "-");
              if (i === synonymsList.length - 1) {
                return (
                  <Link
                    to={`/${urlWord}`}
                    className="text-purple font-bold text-[1.25rem] hover:underline "
                  >
                    {s}
                  </Link>
                );
              }
              return (
                <Link
                  to={`/${urlWord}`}
                  className="text-purple font-bold text-[1.25rem] mr-1 hover:underline"
                >
                  {s},
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

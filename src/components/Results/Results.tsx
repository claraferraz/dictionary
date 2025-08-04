import type { DictionaryEntry } from "../../service/DictionaryEntryType";
import NewWindowIcon from "/src/assets/images/icon-new-window.svg";
import { useTheme } from "../../context/ThemeContext";
import { twJoin } from "tailwind-merge";
import { Link } from "react-router-dom";
import { AudioButton } from "../AudioButton/AudioButton";

type Props = {
  result: DictionaryEntry[];
};
/*
type Dictionary = {
  word: string;
  phonetic?: string;
  audio?: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
    }[];
    synonyms: string[];
  }[];
  sourceUrls: string[];
};
*/

export const Results = ({ result }: Props) => {
  const { font } = useTheme();

  return (
    <div className="pb-28">
      {result &&
        result.map((r, i) => {
          const audio = r.phonetics.find((p) => p.audio != "");
          console.log(audio?.audio);
          return (
            <div key={i} className="mt-11">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="dark:text-white">{r.word}</h1>
                  <h2 className="text-purple mt-2">{r.phonetic || null}</h2>
                </div>
                {audio?.audio && <AudioButton audio={audio.audio} />}
              </div>
              <div>
                {r.meanings.map((m, i) => {
                  return (
                    <div key={i}>
                      <div className="flex items-center gap-5 my-10">
                        <h2
                          className={twJoin(
                            "font-bold dark:text-white",
                            font === "font-inter" && "italic",
                            font === "font-lora" && "font-normal"
                          )}
                        >
                          {m.partOfSpeech}
                        </h2>
                        <div className="bg-light-gray-2 dark:bg-dark-gray-4 w-full h-[0.0625rem]" />
                      </div>
                      <p className="mb-6 text-light-gray-1">Meaning</p>
                      <ul className="pl-5 ">
                        {m.definitions.map((d, i) => {
                          return (
                            <li
                              className="list-disc list-outside pl-5 marker:text-purple"
                              key={i}
                            >
                              <p className="py-3 dark:text-white">
                                {d.definition}
                              </p>
                              {d.example && (
                                <p className="text-light-gray-1">
                                  "{d.example}"
                                </p>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                      {m.synonyms[i] && (
                        <div className="flex items-center gap-5 mt-16">
                          <p className="text-light-gray-1">Synonyms</p>
                          <h3 className="text-purple font-bold">
                            {
                              m.synonyms.join(", ")
                              //ajustar para ser links
                            }
                          </h3>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="bg-light-gray-2 dark:bg-dark-gray-4 w-full h-[0.0625rem] mt-10" />
              <div className="flex items-center gap-5 mt-4">
                <span
                  className={twJoin(
                    "text-light-gray-1",
                    (font === "font-inter" || font === "font-lora") &&
                      "underline"
                  )}
                >
                  Source
                </span>
                {r.sourceUrls.map((s, i) => {
                  return (
                    <div key={i}>
                      <Link
                        className=" cursor-pointer flex items-center gap-2"
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
        })}
    </div>
  );
};

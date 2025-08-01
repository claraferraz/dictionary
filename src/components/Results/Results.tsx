import type { DictionaryEntry } from "../../service/DictionaryEntryType";
import NewWindowIcon from "/src/assets/images/icon-new-window.svg";

type Props = {
  result: DictionaryEntry[];
};

export const Results = ({ result }: Props) => {
  return (
    <div>
      {result &&
        result.map((r, i) => {
          return (
            <div key={i} className="mt-11 pb-28">
              <h1 className="dark:text-white">{r.word}</h1>
              <h2 className="text-purple mt-2">{r.phonetic || null}</h2>
              <div>
                {r.phonetics.map((p, i) => {
                  return (
                    <div key={i}>
                      <p>{p.audio}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {r.meanings.map((m, i) => {
                  return (
                    <div key={i}>
                      <div className="flex items-center gap-5 my-10">
                        <h2 className="italic font-bold dark:text-white">
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
                <span className="text-light-gray-1">Source</span>
                <div className="flex items-center gap-2">
                  <span className="dark:text-white">{r.sourceUrls}</span>
                  <img src={NewWindowIcon} alt="new window icon" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

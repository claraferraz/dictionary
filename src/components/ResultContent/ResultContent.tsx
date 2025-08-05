import { ResultHeader } from "./ResultHeader";
import { Meanings } from "./Meanings";
import { Source } from "./Source";
import type { Dictionary } from "../../service/DictionaryEntryType";

type Props = {
  dictionary: Dictionary;
  index: number;
};

export const ResultContent = ({ dictionary, index }: Props) => {
  return (
    <div key={index} className="pb-21 sm:pb-28">
      <div className="mt-6 sm:mt-11">
        <ResultHeader
          word={dictionary.word}
          phonetic={dictionary.phonetic}
          audio={dictionary.audio}
          index={index}
        />
        {dictionary.meanings.map((m, i) => {
          return (
            <div key={i}>
              <Meanings
                partOfSpeech={m.partOfSpeech}
                definitions={m.definitions}
                synonyms={m.synonyms}
                index={i}
              />
            </div>
          );
        })}
      </div>
      <Source sourceUrls={dictionary.sourceUrls} />
    </div>
  );
};

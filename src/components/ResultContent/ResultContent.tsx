import { ResultHeader } from "./ResultHeader";
import { Meanings } from "./Meanings";
import { Source } from "./Source";
import type { Dictionary } from "../../service/DictionaryEntryType";

type Props = {
  dictionary: Dictionary;
};

export const ResultContent = ({ dictionary }: Props) => {
  return (
    <div className="pb-28">
      <div className="mt-11">
        <ResultHeader
          word={dictionary.word}
          phonetic={dictionary.phonetic}
          audio={dictionary.audio}
        />
        {dictionary.meanings.map((m, i) => {
          return (
            <Meanings
              partOfSpeech={m.partOfSpeech}
              definitions={m.definitions}
              synonyms={m.synonyms}
              index={i}
            />
          );
        })}
      </div>
      <Source sourceUrls={dictionary.sourceUrls} />
    </div>
  );
};

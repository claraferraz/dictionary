import { ResultContent } from "../components/ResultContent/ResultContent";
import type {
  DictionaryEntry,
  Dictionary,
} from "../service/DictionaryEntryType";

type Props = {
  result: DictionaryEntry[];
};

export const ResultPage = ({ result }: Props) => {
  const filteredResult: Dictionary[] = result.map((r) => {
    const phonetic = r.phonetics.find((phonetic) => phonetic.audio != "");
    const meanings = r.meanings.map((m) => {
      const definitions = m.definitions.map((d) => {
        return {
          definition: d.definition,
          example: d.example || undefined,
        };
      });
      return {
        partOfSpeech: m.partOfSpeech,
        definitions: definitions,
        synonyms: m.synonyms,
      };
    });
    return {
      word: r.word,
      phonetic: r.phonetic || undefined,
      audio: phonetic?.audio || undefined,
      meanings: meanings,
      sourceUrls: r.sourceUrls,
    };
  });

  return (
    <div className="pb-28">
      {filteredResult &&
        filteredResult.map((r) => {
          return <ResultContent dictionary={r} />;
        })}
    </div>
  );
};

/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type {
  Dictionary,
  DictionaryEntry,
} from "../service/DictionaryEntryType";
import { getWord } from "../service/search";

export const WordContext = createContext<
  | {
      word: string;
      deleteWord: () => void;
      definition?: Dictionary[];
      deleteDefinition: () => void;
      searchWord: (word: string) => void;
    }
  | undefined
>(undefined);

export const useWord = () => {
  const context = useContext(WordContext);

  if (!context) {
    throw new Error("useWord can only be used inside word provider");
  }
  return context;
};

export const WordProvider = ({ children }: PropsWithChildren) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState<Dictionary[] | undefined>(
    undefined
  );
  const [result, setResult] = useState<DictionaryEntry[] | undefined>(
    undefined
  );

  const searchWord = async (newWord: string) => {
    setWord(newWord);
    try {
      const response = await getWord(newWord);
      setResult(response);
    } catch {
      throw new Error("something went wrong");
    }
  };
  useEffect(() => {
    if (result) {
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

      setDefinition(filteredResult);
    }
  }, [result]);
  const deleteDefinition = () => {
    setDefinition(undefined);
  };
  const deleteWord = () => {
    setWord("");
  };

  return (
    <WordContext
      value={{ word, definition, searchWord, deleteDefinition, deleteWord }}
    >
      {children}
    </WordContext>
  );
};

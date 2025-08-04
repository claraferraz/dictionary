export type DictionaryEntry = {
  word: string;
  phonetic?: string;
  phonetics: {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
};

export type Dictionary = {
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

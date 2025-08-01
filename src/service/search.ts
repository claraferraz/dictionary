import axios from "axios";
import type { DictionaryEntry } from "./DictionaryEntryType";

export const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
});

export const getWord = async (word: string): Promise<DictionaryEntry[]> => {
  const response = await api.get<DictionaryEntry[]>(word);
  return response.data;
};

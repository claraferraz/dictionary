import SearchIcon from "../assets/images/icon-search.svg";
import { useForm } from "react-hook-form";
import { twJoin } from "tailwind-merge";
import { Results } from "../components/Results/Results";
import { getWord } from "../service/search";
import { useState } from "react";
import type { DictionaryEntry } from "../service/DictionaryEntryType";
import { NotFoundMessage } from "../components/NotFoundMessage/NotFoundMessage";

type FormInputs = {
  word: string;
};

export const Home = () => {
  const [definition, setDefinition] = useState<DictionaryEntry[] | undefined>(
    undefined
  );
  const [notFound, setNotFound] = useState<boolean | undefined>(undefined);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: { word: "" },
  });

  const onSubmit = async (data: FormInputs) => {
    if (!data.word || data.word === " ") {
      setError("word", { message: "Woops, can't be empty... " });
      setNotFound(undefined);
      setDefinition(undefined);
      return;
    }
    try {
      const response = await getWord(data.word);
      setDefinition(response);
      setNotFound(false);
    } catch {
      setDefinition(undefined);
      setNotFound(true);
    }
  };

  return (
    <div className="mt-12.5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            {...register("word")}
            type="text"
            name="word"
            className={twJoin(
              "w-full h-16 pl-6 pr-13 rounded-2xl font-bold border-0 bg-light-gray-3 dark:bg-dark-gray-2 text-dark-gray-3 dark:text-white focus:outline-purple focus:outline-1",
              errors.word &&
                "outline-red focus:outline-none border-1 border-red "
            )}
            placeholder="Search for any word..."
          />
          <div className="absolute h-full bottom-0 right-6 cursor-pointer flex items-center">
            <img src={SearchIcon} alt="search icon" />
          </div>
        </div>
        {errors.word && (
          <h3 className="text-red mt-2">{errors.word.message}</h3>
        )}
      </form>
      {definition && <Results result={definition} />}
      {notFound && <NotFoundMessage />}
    </div>
  );
};

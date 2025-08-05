import SearchIcon from "../../assets/images/icon-search.svg";
import { useForm } from "react-hook-form";
import { twJoin } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useWord } from "../../context/WordContext";

type FormInputs = {
  word: string;
};

export const SearchBar = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: { word: "" },
  });
  const { searchWord, deleteDefinition, deleteWord } = useWord();
  const navigate = useNavigate();

  const onSubmit = async (data: FormInputs) => {
    if (!data.word || data.word === " ") {
      setError("word", { message: "Woops, can't be empty... " });
      navigate("/");
      deleteDefinition();
      deleteWord();
      return;
    }
    try {
      await searchWord(data.word);
      navigate(`/${data.word}`);
    } catch {
      navigate("/not-found");
      deleteDefinition();
      deleteWord();
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
    </div>
  );
};

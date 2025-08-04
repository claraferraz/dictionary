import { SearchBar } from "../pages/SearchBar";
import { ResultPage } from "../pages/ResultPage";
import { Header } from "../components/Header/Header";
import { useTheme } from "../context/ThemeContext";

export const Home = () => {
  const { theme, font } = useTheme();
  return (
    <div
      className={`${theme} ${font} dark:bg-dark-gray-1 h-full min-h-[100dvh] w-full  flex justify-center transition-colors`}
    >
      <div className="w-3xl mt-17">
        <Header />
        <SearchBar />
        <ResultPage />
      </div>
    </div>
  );
};

export const Result = () => {
  const { theme, font } = useTheme();
  return (
    <div
      className={`${theme} ${font} dark:bg-dark-gray-1 h-full min-h-[100dvh] w-full  flex justify-center transition-colors`}
    >
      <div className="w-3xl mt-17">
        <Header />
        <SearchBar />
        <ResultPage />
      </div>
    </div>
  );
};

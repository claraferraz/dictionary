import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, font } = useTheme();

  return (
    <div
      className={`${theme} ${font} dark:bg-dark-gray-1 h-[100dvh] w-[100dvw]  flex justify-center transition-colors`}
    >
      <div className="w-3xl mt-17">
        <Header />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

import { Header } from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} dark:bg-dark-gray-1 h-[100dvh] w-[100dvw] flex justify-center items-center transition-colors`}
    >
      <div className="w-3xl">
        <Header />
      </div>
    </div>
  );
}

export default App;

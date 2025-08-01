import { Header } from "./components/Header/Header.tsx";
import { useTheme } from "./context/ThemeContext.tsx";
import { Home } from "./pages/Home";

function App() {
  const { theme, font } = useTheme();

  return (
    <div
      className={`${theme} ${font} dark:bg-dark-gray-1 h-full min-h-[100dvh] w-full  flex justify-center transition-colors`}
    >
      <div className="w-3xl mt-17">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;

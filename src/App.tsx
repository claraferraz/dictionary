import { Body } from "./components/Body/Body.tsx";
import { Header } from "./components/Header/Header.tsx";
import { SearchBar } from "./components/SearchBar/SearchBar.tsx";
import { MainRoutes } from "./routes/MainRoutes.tsx";

function App() {
  return (
    <Body>
      <Header />
      <SearchBar />
      <MainRoutes />
    </Body>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Home, Result } from "./index";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:word" element={<Result />} />
    </Routes>
  );
};

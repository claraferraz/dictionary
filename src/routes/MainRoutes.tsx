import { Routes, Route } from "react-router-dom";
import { Result, NotFound } from "./index";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/:word" element={<Result />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

import { Routes, Route } from "react-router-dom";
import { Result, NotFound, Home } from "./index";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:word" element={<Result />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

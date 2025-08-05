/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { ResultContent } from "../components/ResultContent/ResultContent";
import { useWord } from "../context/WordContext";
import { useEffect } from "react";

export const ResultPage = () => {
  const { definition, word, searchWord } = useWord();
  const url = useParams();
  const urlWord = url.word;
  const navigate = useNavigate();

  useEffect(() => {
    if (urlWord && urlWord != word) {
      try {
        searchWord(urlWord);
      } catch {
        navigate("/not-found");
      }
    }
  }, [searchWord, urlWord, word]);

  return (
    <div className="pb-28">
      {definition &&
        definition.map((d, i) => {
          return <ResultContent dictionary={d} index={i} />;
        })}
    </div>
  );
};

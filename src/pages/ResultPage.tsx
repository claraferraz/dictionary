import { ResultContent } from "../components/ResultContent/ResultContent";
import { useWord } from "../context/WordContext";

export const ResultPage = () => {
  const { definition } = useWord();

  return (
    <div className="pb-28">
      {definition &&
        definition.map((d, i) => {
          return <ResultContent dictionary={d} index={i} />;
        })}
    </div>
  );
};

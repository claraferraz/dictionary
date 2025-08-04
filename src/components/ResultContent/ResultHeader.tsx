import { AudioButton } from "../AudioButton/AudioButton";

type Props = {
  word: string;
  phonetic?: string;
  audio?: string;
  index: number;
};

export const ResultHeader = ({ word, phonetic, audio, index }: Props) => {
  return (
    <div key={index} className="flex items-center justify-between">
      <div>
        <h1 className="dark:text-white">{word}</h1>
        <h2 className="text-purple mt-2">{phonetic || null}</h2>
      </div>
      {audio && <AudioButton audio={audio} />}
    </div>
  );
};

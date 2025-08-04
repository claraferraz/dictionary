import { AudioButton } from "../AudioButton/AudioButton";

type Props = {
  word: string;
  phonetic?: string;
  audio?: string;
};

export const ResultHeader = ({ word, phonetic, audio }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="dark:text-white">{word}</h1>
        <h2 className="text-purple mt-2">{phonetic || null}</h2>
      </div>
      {audio && <AudioButton audio={audio} />}
    </div>
  );
};

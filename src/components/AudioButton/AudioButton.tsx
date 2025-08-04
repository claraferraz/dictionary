import Play from "../../assets/images/icon-play.svg";
import PlayHover from "../../assets/images/icon-play-hover.svg";
import { useState } from "react";

type Props = {
  audio: string;
};

export const AudioButton = ({ audio }: Props) => {
  const track = new Audio(audio);
  const [hover, setHover] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`cursor-pointer`}
        onClick={() => track.play()}
      >
        {!hover && <img src={Play} alt="play button" />}
        {hover && <img src={PlayHover} alt="play button" />}
      </button>
    </div>
  );
};

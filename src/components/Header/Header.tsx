import { DarkToggle } from "../DarkToggle/DarkToggle";

type Props = {
  setDarkMode: () => void;
};

export const Header = ({ setDarkMode }: Props) => {
  return (
    <div>
      <DarkToggle setDarkMode={setDarkMode} />
    </div>
  );
};

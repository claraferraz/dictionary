type Props = {
  setDarkMode: () => void;
};

export const DarkToggle = ({ setDarkMode }: Props) => {
  return (
    <div
      onClick={setDarkMode}
      className={`bg-light-gray-1 dark:bg-purple w-10 h-5 flex justify-start dark:justify-end items-center rounded-2xl px-0.5 cursor-pointer`}
    >
      <div className="bg-white rounded-full w-3.5 h-3.5"></div>
    </div>
  );
};

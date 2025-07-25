import SearchIcon from "../../assets/images/icon-search.svg";
export const SearchBar = () => {
  return (
    <div className={`mt-12.5 relative`}>
      <form action="submit">
        <input
          type="text"
          className="peer w-full h-16 pl-6 rounded-2xl font-bold bg-light-gray-3 dark:bg-dark-gray-2 text-dark-gray-3 dark:text-white focus:outline-purple focus:outline-1 invalid:outline-red"
          placeholder="Search for any word..."
        />
        <button
          type="submit"
          className="absolute right-6 top-1/4 cursor-pointer"
        >
          <img src={SearchIcon} alt="search icon" />
        </button>
        <h3 className="text-red mt-2">Whoops, can't be empty...</h3>
      </form>
    </div>
  );
};

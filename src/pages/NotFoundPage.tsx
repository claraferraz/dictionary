export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-33 ">
      <h1>😕</h1>
      <h3 className="font-bold dark:text-white mt-6 sm:mt-11 mb-6">
        No Definitions Found
      </h3>
      <p className="text-light-gray-1 text-center">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

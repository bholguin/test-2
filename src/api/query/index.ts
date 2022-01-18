import useQueryPersons from "./People";
import useQueryFilms from "./Films";
const useQueryString = () => {
  return {
    useQueryPersons,
    useQueryFilms,
  };
};

export default useQueryString;

import useQueryPersons from "./Persons";
import useQueryFilms from "./Films";
const useQueryString = () => {
  return {
    useQueryPersons,
    useQueryFilms,
  };
};

export default useQueryString;

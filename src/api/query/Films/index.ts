import { gql } from "@apollo/client";

const useQueryFilms = () => {
  const FILMS_QUERY = gql`
    {
      allFilms {
        films {
          title
          releaseDate
        }
      }
    }
  `;

  return {
    FILMS_QUERY,
  };
};

export default useQueryFilms;

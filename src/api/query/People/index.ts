import { gql } from "@apollo/client";

const useQueryPersons = () => {
  const PERSONS_QUERY = gql`
    {
      allPeople {
        people {
          id
          name
          birthYear
        }
      }
    }
  `;

  const DETAIL_PERSON_QUERY = gql`
    query getPerson($idPerson: ID!) {
      person(id: $idPerson) {
        id
        name
        birthYear
        eyeColor
        gender
        hairColor
        mass
        skinColor
        homeworld {
          name
        }
        species {
          name
        }
        filmConnection {
          films {
            title
            episodeID
            director
            releaseDate
            planetConnection {
              planets {
                name
              }
            }
          }
        }
      }
    }
  `;

  return {
    PERSONS_QUERY,
    DETAIL_PERSON_QUERY,
  };
};

export default useQueryPersons;

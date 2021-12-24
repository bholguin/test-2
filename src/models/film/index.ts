import { IPlanet } from "../planet";

export interface IFilm {
  __typename: string;
  director: string;
  episodeID: number;
  planetConnection: { __typename: string; planets: Array<IPlanet> };
  releaseDate: string;
  title: string;
}

import { IFilm } from "../film";
import { IPlanet } from "../planet";

export interface IPerson {
  id: string;
  birthYear?: string;
  eyeColor?: string;
  filmConnection?: { __typename: string; films: Array<IFilm> };
  gender?: string;
  hairColor?: string;
  homeworld?: IPlanet;
  mass?: number;
  name?: string;
  skinColor?: string;
  species?: { __typename: string; name: string };
}


export interface IPeople{
  person: IPerson,
  list: Array<IPerson>
}
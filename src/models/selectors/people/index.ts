import { createSelector } from "@reduxjs/toolkit";
import { RootStateOrAny } from "react-redux";
import {IPeople, IPerson} from "../../interfaces/person";

export const usePeopleSelector = () => {
    const personSelector = createSelector(
        (state: RootStateOrAny) => state.people,
        (people: IPeople): IPerson => people.person
    );

    return { personSelector };
}
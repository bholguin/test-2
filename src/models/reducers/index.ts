import { combineReducers } from "redux";
import { usePeopleReducer } from "./people";

export const useReducers = () => {
    const { people } = usePeopleReducer();

    return combineReducers({ people });
};




import { IPeople } from "../../interfaces/person";

export const usePeopleInitialState = () => {
    const initialStatePeole: IPeople = {
        list: [],
        person: {
            id: ""
        }
    };

    return {
        initialStatePeole,
    };
};
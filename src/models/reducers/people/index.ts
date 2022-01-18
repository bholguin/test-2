import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useInitialStates from "../../initialStates";
import {IPeople, IPerson} from "../../interfaces/person";

export const usePeopleReducer = () => {

    const {useCreateReducer} = useHelpers();
    const {createReducer} = useCreateReducer();

    const {usePeopleInitialState} = useInitialStates()
    const {initialStatePeole} = usePeopleInitialState()

    const {usePeopleTypes} = useStrings()
    const {GET_PEOPLE} = usePeopleTypes()

    const people = createReducer(initialStatePeole, {
        [GET_PEOPLE](state: IPeople, action: { payload: IPerson }) {
            return {
                ...state,
                person: action.payload,
            };
        },
    })


    return{
        people
    }
}
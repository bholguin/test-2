import useServices from "../../services";
import {Dispatch} from "@reduxjs/toolkit";
import useStrings from "../../../strings";

export const usePeopleActions = () => {

    const {usePeopleTypes} = useStrings()
    const {GET_PEOPLE} = usePeopleTypes()
    const {usePeopleServices} = useServices()
    const {getPeopleServices} = usePeopleServices()

    const actGetPeople = (idPerson: string) => async (dispatch: Dispatch) => {
        try{
            const res: any = await getPeopleServices(idPerson)
            dispatch({
                type: GET_PEOPLE,
                payload: res.data.person
            })
        }  catch (error) {
            console.log(error)
        }
    }

    return{
        actGetPeople
    }
}
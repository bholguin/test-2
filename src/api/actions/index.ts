import {usePeopleActions} from "./People";
import {useDispatch} from "react-redux";

const useActions = () => {
    const dispatch = useDispatch()
    return{
        dispatch,
        usePeopleActions
    }
}

export default  useActions
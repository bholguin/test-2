import { usePeopleSelector } from "./people";
import {useSelector} from "react-redux";

const useSelectors = () => {
    return {
        useSelector,
        usePeopleSelector,
    };
};

export default useSelectors;
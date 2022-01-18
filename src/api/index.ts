import useActions from "./actions";
import useServices from "./services";
import useQueryString from "./query";
const useApi = () => {
    return{
        useActions,
        useServices,
        useQueryString
    }
}

export default useApi
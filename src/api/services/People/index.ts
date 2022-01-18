import useQueryString from "../../query";
import { useApolloClient } from "@apollo/client";

export const usePeopleServices = () => {
    const {useQueryPersons} = useQueryString()
    const { DETAIL_PERSON_QUERY} = useQueryPersons()
    const client = useApolloClient();

    const getPeopleServices = (idPerson : string) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await client.query({
                    query: DETAIL_PERSON_QUERY,
                    variables: { idPerson },
                }))
            } catch (error) {
                reject(error);
            }
        });
    }

    return{
        getPeopleServices
    }
}
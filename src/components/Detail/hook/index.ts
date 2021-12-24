import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import useQueryString from "../../../query";
import { IPerson } from "../../../models/person";

export const useDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const client = useApolloClient();
  const [person, setPerson] = useState<IPerson>();
  const [loading, setLoading] = useState(false);
  const { useQueryPersons } = useQueryString();
  const { DETAIL_PERSON_QUERY } = useQueryPersons();
  const goBack = () => navigate("/");

  const getData = useCallback(
    async (idPerson: string) => {
      try {
        const res: any = await client.query({
          query: DETAIL_PERSON_QUERY,
          variables: { idPerson },
        });
        setPerson(res.data.person);
        setLoading(false);
      } catch (e: any) {
        console.log(e);
      }
    },
    [DETAIL_PERSON_QUERY, client]
  );

  useEffect(() => {
    if (id) {
      setLoading(true);
      getData(id);
    }

    return () => setPerson({ id: "" });
  }, [id, getData]);

  return {
    id,
    loading,
    person,
    goBack,
  };
};

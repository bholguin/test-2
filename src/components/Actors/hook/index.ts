import { useQuery } from "@apollo/client";
import useQueryString from "../../../query";
import { useNavigate } from "react-router-dom";
export const useActors = () => {
  const { useQueryPersons } = useQueryString();
  const { PERSONS_QUERY } = useQueryPersons();
  const { data, loading } = useQuery(PERSONS_QUERY);
  const navigate = useNavigate();
  const goToDetail = (id: string) => navigate(`/${id}`);

  return {
    data,
    loading,
    goToDetail,
  };
};

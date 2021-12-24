import { useQuery } from "@apollo/client";
import useQueryString from "../../../query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const useActors = () => {
  const { useQueryPersons } = useQueryString();
  const { PERSONS_QUERY } = useQueryPersons();
  const { data, loading } = useQuery(PERSONS_QUERY);
  const navigate = useNavigate();
  const goToDetail = (id: string) => navigate(`/${id}`);

  useEffect(() => {
    const header = document.getElementById("header-page");
    if (header) {
      const sticky = header.offsetTop;
      console.log(sticky, window.pageYOffset);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }, []);

  return {
    data,
    loading,
    goToDetail,
  };
};

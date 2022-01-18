import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IPerson } from "../../../models/interfaces/person";
import useApi from "../../../api";
import useSelectors from "../../../models/selectors";

export const useDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {useActions} = useApi()
  const {dispatch, usePeopleActions} = useActions()
  const {actGetPeople} = usePeopleActions()

  const {useSelector, usePeopleSelector} = useSelectors()
  const {personSelector} = usePeopleSelector()

  const person = useSelector(personSelector)

  const goBack = () => navigate("/");

  useEffect(()=> {
    if(id){
      dispatch(actGetPeople(id))
    }
  }, [id, dispatch])

  return {
    id,
    loading: false,
    person,
    goBack,
  };
};

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../features/userDetailsSlice";

function CreateUserhtmlForm() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.user);
//   console.log(getData);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return <div></div>;
}

export default CreateUserhtmlForm;

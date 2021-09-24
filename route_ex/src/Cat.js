import React from "react";
import { useParams } from "react-router";

const Cat = (props) => {
  const cat_name = useParams();
  return <div>고양이화면입니다.</div>;
};

export default Cat;

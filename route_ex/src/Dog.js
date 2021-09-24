import React from "react";

const Dog = (props) => {
  return (
    <div
      onClick={() => {
        props.history.push("/");
      }}
    >
      강아지 화면입니다.
    </div>
  );
};

export default Dog;

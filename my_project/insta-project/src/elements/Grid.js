import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, width, margin, padding, bg, children } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

//is_flex 플렉스인지 아닌지. 패딩마진 있으면 props로 받아올건데 일단 false
Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

//width=> props 받아올 때 이런식으로.  패딩=> 상황따라 삼항연산자
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
`;

export default Grid;

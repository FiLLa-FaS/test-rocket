import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <Wrapper {...props} />;
};

const Wrapper = styled.input`
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

export default Input;

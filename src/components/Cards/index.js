import React from "react";
import styled from "styled-components";
import { Card } from "..";

const Cards = ({ data, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>
        {data.map((post, i) => {
          return <Card key={i} post={post} />;
        })}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & + & {
    margin-top: 100px;
  }
`;

const Title = styled.h2`
  margin: 30px 0;
  font-weight: 700;
  font-size: 42px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export default Cards;

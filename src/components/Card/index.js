import React from "react";
import styled from "styled-components";
import useUsers from "../../hooks/use-users";

const Card = ({ post }) => {
  const { users } = useUsers();

  const getUsername = () => {
    const user = users.find((item) => item.id === post.userId);
    return (
      <Author>
        <AuthorNickname>{user.username}</AuthorNickname>
        <AuthorName>({user.name})</AuthorName>
      </Author>
    );
  };

  return (
    <Wrapper>
      <Title>{post.title}</Title>
      {users ? getUsername() : <div>loading</div>}
      <Body>{post.body}</Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px 30px;
`;
const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 28px;
`;
const Author = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const AuthorNickname = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const AuthorName = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-left: 10px;
`;

const Body = styled.p`
  margin: 20px 0 0;
  font-size: 20px;
`;

export default Card;

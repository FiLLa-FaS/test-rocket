import React, { useState, useEffect } from "react";
import styled from "styled-components";
import usePosts from "./hooks/use-posts";
import { debounce } from "lodash";
import { Cards, Input } from "./components";

function App() {
  const { posts } = usePosts();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(
    debounce(() => {
      if (searchTerm) {
        const resultsTitle = posts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm)
        );
        const resultsPosts = posts.filter((post) =>
          post.body.toLowerCase().includes(searchTerm)
        );
        const results = resultsTitle.concat(resultsPosts);
        setSearchResults(results);
      }
    }, 2000),
    [searchTerm]
  );

  const showSearchResults = (searchResults) => {
    if (searchResults.length > 0) {
      return <Cards title="Найденные результаты" data={searchResults} />;
    } else return <ErrorMessage>Результатов не найдено</ErrorMessage>;
  };

  return (
    <Wrapper>
      <Title>Тестовое задание</Title>
      <Input
        value={searchTerm}
        placeholder="Введите текст"
        onChange={handleChange}
      />
      {showSearchResults(searchResults)}
      {posts ? (
        <Cards title="Список постов" data={posts} />
      ) : (
        <div>loading</div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Roboto", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 48px;
`;

const ErrorMessage = styled.h2`
  font-weight: 700;
  font-size: 42px;
`;

export default App;

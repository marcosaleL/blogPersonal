import React from "react";
import styled from "styled-components";

import Header from "../Components/Header/HeaderComponent";
import Login from "../Components/Login/LoginComponent";
import Article from "../Components/Article/ArticleComponent";

const HomeUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`;

function Home() {
  const article = {
    title: "Article title",
    subtitle: "Article subtitle",
    content: "Article content",
    comments: "Article comments",
    likes: "Article likes",
    dislikes: "Article dislikes",
    tags: "Article tags",
  };

  return (
    <HomeUI>
      <Header />
      <div>
        <Login />
        <Article article={article} />
      </div>
    </HomeUI>
  );
}

export default Home;

import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import ArticleInfo from "../ArticleInfo/ArticleInfoComponent";
import styled from "styled-components";

const TitleUI = styled.div`
  height: 50px;
  width: 310px;
  font-size: 45px;
  font-weight: bold;
  margin: 10px 0px 10px 0px;
  color: #360568;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: red;
`;

const SubtitleUI = styled.div`
  height: 30px;
  width: 310px;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: left;
  color: #5b2a86;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: blue;
`;

const ArticleInfoUI = styled(ArticleInfo)`
  height: px;
  width: px;
`;

const ArticleUI = styled.div`
  height: 648px;
  width: 348px;
  background: linear-gradient(0deg, #9ac6c5 0%, #000000 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  border: 1px #000000 solid;
`;

function Article({ article }) {
  const [articleState, setArticleState] = useState({
    title: "A Title",
    subtitle: "A Subtitle",
    comments: "",
    content:
      "Exercitation sit commodo ullamco anim enim veniam ullamco ut magna eiusmod velit. Reprehenderit sit nisi reprehenderit officia ut pariatur laboris elit exercitation fugiat dolor proident mollit. Qui labore ipsum enim dolore duis in deserunt aliqua dolor dolore non ut.",
  });

  useEffect(() => {
    function handleSetState() {
      setArticleState({
        title: article.title,
        subtitle: article.subtitle,
        comments: article.comments,
        content: article.content,
      });
      return articleState;
    }
    if (article) {
      setArticleState(handleSetState());
    }
  }, [articleState, article]);

  return (
    <ArticleUI>
      <TitleUI>{articleState.title}</TitleUI>
      <SubtitleUI>{articleState.subtitle}</SubtitleUI>
      <ArticleInfoUI
        content={articleState.content}
        comment={articleState.comments}
      />
    </ArticleUI>
  );
}
export default Article;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ArticleBar from "../ArticleBar/ArticleBarComponent";
import Content from "../Content/ContentComponent";

const ArticleBarUI = styled(ArticleBar)`
  height: 25px;
  margin-bottom: 0px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

const ArticleInfoUI = styled.div`
  margin: 25px;
  background-color: #d1c4e9;
  border-radius: 35px;
  padding: 10px 25px 0px 25px;
`;

function ArticleInfo({ comments, content }) {
  const [commentsState, setCommentsState] = useState({
    Author: "Robert",
    comments: {},
  });
  const [contentState, setContentState] = useState("");

  useEffect(() => {
    if (content) {
      setContentState(content);
    }
  }, [content]);

  useEffect(() => {
    if (comments) {
      setCommentsState(comments);
    }
  }, [comments]);

  return (
    <ArticleInfoUI>
      <Content content={contentState} />
      <ArticleBarUI comment={commentsState} />
    </ArticleInfoUI>
  );
}

export default ArticleInfo;

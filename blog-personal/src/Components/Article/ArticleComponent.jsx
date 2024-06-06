import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import ArticleInfo from "../ArticleInfo/ArticleInfoComponent";
import styled from "styled-components";

const ArticleUI = styled.div`
    height: 650px;
    width: 350px;
    background: linear-gradient(0deg, #9ac6c5 0%, #000000 20%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50px;
    border: 1px #000000 solid;
`;

const TitleUI = styled.div`
    height: 50px;
    width: 310px;
    font-size: 50px;
    font-weight: bold;
    margin: 20px 10px 20px 10px;
    color: #360568;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`;

const SubtitleUI = styled.div`
    height: 30px;
    width: 310px;
    font-size: 30px;
    font-weight: bold;
    margin: 20px 10px 20px 10px;
    display: flex;
    justify-content: left;
    color: #5b2a86;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`;
function Article({ article }) {
    const [articleState, setArticleState] = useState({
      title: "A Title",
      subtitle: "A Subtitle",
      comments: "",
      content: "Exercitation sit commodo ullamco anim enim veniam ullamco ut magna eiusmod velit. Reprehenderit sit nisi reprehenderit officia ut pariatur laboris elit exercitation fugiat dolor proident mollit. Qui labore ipsum enim dolore duis in deserunt aliqua dolor dolore non ut.",
    });

    const [titleState, setTitleState] = useState("");
    const [subtitleState, setSubtitleState] = useState("");
  
    useEffect(() => {
      if (article) {
        setTitleState(article.title);
      }
    }, [article]);
  
    useEffect(() => {
      if (article) {
        setSubtitleState(article.subtitle);
      }
    }, [article]);
  
    useEffect(() => {
      if (article) {
        setArticleState(article);
      }
    }, [article]);
  
    return (    
        <ArticleUI>
            <TitleUI>{titleState}</TitleUI>
            <SubtitleUI>{subtitleState}</SubtitleUI> 
            <ArticleInfo content={articleState.content} comment={articleState.comments} />
        </ArticleUI>
    );
}
export default Article;
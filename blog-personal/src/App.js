import React from 'react';
import styled from 'styled-components'

import './App.css';
import Login from './Components/Login/LoginComponent';
import Article from './Components/Article/ArticleComponent';
import Spacer from './Components/Spacer/SpacerComponent';
import ArticleBar from './Components/ArticleBar/ArticleBarComponent';

const AppUI = styled.div({
  display: 'grid',
  flexDirection: 'row',
})

function App() {

  const article = {
    title: "Article title",
    subtitle: "Article subtitle",
    content: "Article content",
    comments: "Article comments",
    likes: "Article likes",
    dislikes: "Article dislikes",
    tags: "Article tags",
  }

  return (
    <AppUI className="App">
      <header className="App-header">
        <Spacer />
        <div>
          <Login type="large" />
          <Article article={article}/>
          <ArticleBar />
        </div>
        <Spacer />
      </header>
    </AppUI>
  );
}

export default App;

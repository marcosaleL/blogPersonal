import React from 'react';

import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/LoginComponent';
import Article from './Components/Article/ArticleComponent';
import Spacer from './Components/Spacer/SpacerComponent';
import styled from 'styled-components'

const AppUI = styled.div({
  display: 'grid',
  flexDirection: 'row',
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Spacer></Spacer>
        <div>
          <Login type="large" />
          <Article />
        </div>
        <Spacer></Spacer>

      </header>
    </div>
  );
}

export default App;

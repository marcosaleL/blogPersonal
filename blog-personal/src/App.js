import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/LoginComponent';
import Article from './Components/Article/ArticleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crear Usuario</h1>
        <Login type="large" />
        <Article />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crear Usuario</h1>
        <Login type="large" />
      </header>
    </div>
  );
}

export default App;

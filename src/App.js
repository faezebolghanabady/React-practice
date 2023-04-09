import logo from './logo.svg';
import './App.css';

function App() {

    const users = "faeze";

  return (
    <div className="App">
      {users? <h1>welcome {users}</h1> : <h1> welcome user</h1>}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {

    const user = [
      {
        firstname :'mina'
      },
      {
        firstname : 'sina'
      },
      {
        firstname : 'ali'
      }
    ]

  return (
    <div className="App">
      {user.map(name => (<h1>{name.firstname}</h1>))}
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

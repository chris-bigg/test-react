import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-green-500 p-8 rounded-full">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="my-5 bg-red-500 border-2 hover:bg-transparent hover:border-green-500 py-2 px-4 rounded-full transition-all"
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

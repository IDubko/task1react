import logo from './logo.svg';
import './App.css';
import './index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    //декларативный
        <p>
          Edit <code>src/App.js</code> and save to reload. 
    //императивный
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
            //декларативный стиль
        >
          Learn React
        </a>
      </header>
      <footer>
        <p>&copy; {currentYear} Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;

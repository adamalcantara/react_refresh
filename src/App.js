import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    // array of names
    const names = ['Bob', 'Adam', 'Dave', 'Kevin'];

    // get a random number between 0 and 3
    const int = Math.floor(Math.random() * 4);

    // return the nth number (int) from names
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;

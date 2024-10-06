import React from 'react';
import Quiz from './components/Quiz'; // Correct import path
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Quiz App</h1>
      </header>
      <main className="App-main">
        <Quiz />
      </main>
      <footer className="App-footer">
        <p>Created by: saddam sheikh</p>
        <p>Copyright: 2023</p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './sneaky-cat.png';
import './App.css';
import QuoteBox from './QuoteBox';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>O CAT FACTS O</h1>
      </div>
      <img src={logo} alt="cat logo" className="App-logo" />
      <QuoteBox />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meter from '../src/Components/meter.js'

function App() {


  return (
    <div className="App">
      <header className="App-header" id="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         MultiMeter Bluetooth App
        </p>
      </header>

    <Meter />


      <footer className="App-footer" id="App-footer">Icons made by 
        <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="_blank" rel="noopener noreferrer">Smashicons</a> from 
        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a> is licensed by 
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
      </footer>
    </div>
    
  );
}

export default App;
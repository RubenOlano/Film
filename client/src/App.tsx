import React from 'react';
import './App.css';
import Game from './components/Game/Game';
import NavBar from './components/Navbar/Navbar';
;


function App() {
  return (
    <div className="App">
      <NavBar />
      <Game />
    </div>
  );
}

export default App;

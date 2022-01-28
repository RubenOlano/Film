import React from 'react';
import './App.css';
import Movies from './features/movies/Movies';
import NavBar from './components/Navbar/Navbar';
;


function App() {
  return (
    <div className="App">
      <NavBar />
      <Movies />
    </div>
  );
}

export default App;

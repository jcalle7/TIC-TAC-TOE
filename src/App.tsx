import React from 'react';
import Game from './Game';
import './App.css'

const App: React.FC = () => {
  return  (
    <div className="App">
      <h1 className="game-title">Bienvenidos a:</h1>
      <Game />
    </div>
  );
};

export default App;
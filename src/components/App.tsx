import React from 'react';
import './App.css';
import Bord from './Bord';
import { relative } from 'path';
import { GAME_SIZE } from '../settings/constants';


function App() {
  return (
    <div className="App">
      <div 
        style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE
          
        }}
      >
          <Bord/>
      </div>
    </div>
  );
}

export default App;

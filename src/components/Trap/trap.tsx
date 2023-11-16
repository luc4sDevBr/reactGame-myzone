import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './trap.css'

function Trap() {
    return (
        <div 
          style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage: "url(./assets/TRAP.png)",
            backgroundRepeat:"no-repeat",
            animation: 'demon-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom:INITIAL_POSITION_Y*4,
            left:INITIAL_POSITION_X
          }}
        />
    );
}


export default Trap;

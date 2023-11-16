import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './minidemon.css'

function MiniDemon() {
    return (
        <div 
          style={{
            width:TILE_SIZE,
            height:TILE_SIZE+12,
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat:"no-repeat",
            animation: 'demon-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom:INITIAL_POSITION_Y*2,
            left:INITIAL_POSITION_X,
            backgroundPosition: `0PX -${TILE_SIZE-12}px`
          }}
        />
    );
}


export default MiniDemon;

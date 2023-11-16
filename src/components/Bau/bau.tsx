import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './bau.css'

function Bau() {
    return (
        <div 
          style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage: "url(./assets/CHEST.png)",
            backgroundRepeat:"no-repeat",
            //animation: 'bau-animation 1s steps(3) infinite',
            position: 'absolute',
            bottom:INITIAL_POSITION_Y*5,
            left:INITIAL_POSITION_X
          }}
        />
    );
}


export default Bau;

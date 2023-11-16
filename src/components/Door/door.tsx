import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './door.css'

function Door() {
    return (
        <div 
          style={{
            width:TILE_SIZE*4,
            height:100,
            backgroundImage: "url(./assets/DOOR.png)",
            backgroundRepeat:"no-repeat",
            //animation: 'door-animation 3s steps(4) infinite',
            
            position: 'absolute',
            bottom:INITIAL_POSITION_Y*8+92,
            left:INITIAL_POSITION_X*4,
            opacity:0
          }}
        />
    );
}


export default Door;

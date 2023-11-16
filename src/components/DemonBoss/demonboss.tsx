import React from 'react';
import { DEMON_TILE, INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './demonboss.css'

function DemonBoss() {
    return (
        <div 
          style={{
            width:DEMON_TILE,
            height:100,
            backgroundImage: "url(./assets/DEMON.png)",
            backgroundRepeat:"no-repeat",
            animation: 'boss-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom:INITIAL_POSITION_Y*3,
            left:INITIAL_POSITION_X
          }}
        />
    );
}


export default DemonBoss;

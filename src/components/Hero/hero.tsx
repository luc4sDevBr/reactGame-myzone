import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './index.css'

function Hero() {
    return (
        <div 
          style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage: "url(./assets/HERO.png)",
            backgroundRepeat:"no-repeat",
            animation: 'hero-standart 1s steps(4) infinite',
            position: 'absolute',
            bottom:INITIAL_POSITION_Y,
            left:INITIAL_POSITION_X
          }}
        />
    );
}

export default Hero;

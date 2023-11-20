import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './minidemon.css'
import { useMovimentHero } from '../Hooks/useHeroActions';

function MiniDemon() {
  const heroStateinitial = {
    x: 3,
    y: 10
  }

  let retorno = useMovimentHero(heroStateinitial);
  
    return (
        <div 
          style={{
            width:TILE_SIZE,
            height:TILE_SIZE+12,
            backgroundImage: "url(./assets/MINI-DEMON.png)",
            backgroundRepeat:"no-repeat",
            animation: 'demon-animation 1s steps(4) infinite',
            position: 'absolute',
            bottom: TILE_SIZE * retorno.positionAtual.y,
            left: TILE_SIZE * retorno.positionAtual.x,
            backgroundPosition: `0PX -${TILE_SIZE-12}px`,
            transform:`scaleX(${retorno.directionAtual == 'RIGHT'? 1 : -1})`,
            
          }}
        />
    );
}


export default MiniDemon;

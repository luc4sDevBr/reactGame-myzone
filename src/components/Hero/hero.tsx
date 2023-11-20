import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_HERO_OFFSET, TILE_SIZE } from '../../settings/constants';
import './index.css';
import useEventListener from '@use-it/event-listener';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import {useMovimentHero} from '../Hooks/useHeroActions'

function Hero() {
  const heroStateinitial = {
    x: 3,
    y: 2
  }
  
 let positionAtual =  useMovimentHero(heroStateinitial);


  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + TILE_HERO_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        animation: 'hero-standart 1s steps(4) infinite',
        position: 'absolute',
        bottom: TILE_SIZE * positionAtual.positionAtual.y,
        left: TILE_SIZE * positionAtual.positionAtual.x,
        backgroundPosition: `0px -${TILE_SIZE - TILE_HERO_OFFSET}px`,
        transform:`scaleX(${positionAtual.directionAtual == 'RIGHT'? 1 : -1})`,
        zIndex:`1`
      }}
    />
  );
}


export default Hero;



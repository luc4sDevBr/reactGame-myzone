import React from 'react';
import { INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_HERO_OFFSET, TILE_SIZE } from '../../settings/constants';
import './index.css';
import useEventListener from '@use-it/event-listener';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function moviemento(e, decevento ,positionAtual, ateraposition, x, y){
  if (e.key == decevento) {
    const px = positionAtual.x + x;
    const py = positionAtual.y + y;
    const newPosition = { x: px, y: py };
    ateraposition(newPosition)
  }
}


function Hero() {
  const heroStateinitial = {
    x: 3,
    y: 2
  }
  const [heropositionAtual, heropositionState] = React.useState(heroStateinitial);

  useEventListener('keydown', function evento(e: KeyboardEvent) {

    moviemento(e, 'ArrowRight',heropositionAtual, heropositionState, 1,0);
    moviemento(e, 'ArrowLeft',heropositionAtual, heropositionState, (-1),0);
    moviemento(e, 'ArrowUp',heropositionAtual, heropositionState, 0,1);
    moviemento(e, 'ArrowDown',heropositionAtual, heropositionState, 0, (-1));
   
  })

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + TILE_HERO_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        animation: 'hero-standart 1s steps(4) infinite',
        position: 'absolute',
        bottom: TILE_SIZE * heropositionAtual.y,
        left: TILE_SIZE * heropositionAtual.x,
        backgroundPosition: `0px -${TILE_SIZE - TILE_HERO_OFFSET}px`
      }}
    />
  );
}


export default Hero;

import React from 'react';
import useEventListener from '@use-it/event-listener';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function moviemento(e, decevento: any, positionAtual, ateraposition, x, y, updateDirection) {


  if (e.key == decevento) {
    const px = positionAtual.x + x;
    const py = positionAtual.y + y;
    const newPosition = { x: px, y: py };
    ateraposition(newPosition)
  }
}

export function useMovimentHero(startPosition) {
  const [heropositionAtual, heropositionState] = React.useState(startPosition);
  const [direction, updateDirectionSatte] = React.useState("LEFT");
  

  useEventListener('keydown', function evento(e: any) {
    
    moviemento(e, 'ArrowRight', heropositionAtual, heropositionState, 1, 0, updateDirectionSatte);
    moviemento(e, 'ArrowLeft', heropositionAtual, heropositionState, (-1), 0, updateDirectionSatte);
    moviemento(e, 'ArrowUp', heropositionAtual, heropositionState, 0, 1, updateDirectionSatte);
    moviemento(e, 'ArrowDown', heropositionAtual, heropositionState, 0, (-1), updateDirectionSatte);

    switch(e.key){
      case 'ArrowRight':
        updateDirectionSatte('RIGHT')
      break;
      case 'ArrowLeft':
        updateDirectionSatte('LEFT')
      break;
    }
  
  })

  const myreturn = {
    positionAtual: heropositionAtual,
    directionAtual: direction
  }

  return myreturn;

}
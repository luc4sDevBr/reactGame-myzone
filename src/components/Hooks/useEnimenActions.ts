import React from 'react';
import useEventListener from '@use-it/event-listener';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

function moviemento(e, decevento, positionAtual, ateraposition, x, y) {
  if (e.key == decevento) {
    const px = positionAtual.x + x;
    const py = positionAtual.y + y;
    const newPosition = { x: px, y: py };
    ateraposition(newPosition)
  }
}

export function useMovimentEnimen(startPosition) {
  const [heropositionAtual, heropositionState] = React.useState(startPosition);

  useEventListener('keydown', function evento(e: KeyboardEvent) {
    console.log("Passou aqui")
    console.log(e.key)
    moviemento(e, 'ArrowRight', heropositionAtual, heropositionState, 1, 0);
    moviemento(e, 'ArrowLeft', heropositionAtual, heropositionState, (-1), 0);
    moviemento(e, 'ArrowUp', heropositionAtual, heropositionState, 0, 1);
    moviemento(e, 'ArrowDown', heropositionAtual, heropositionState, 0, (-1));

  })

  return useMovimentEnimen;

}
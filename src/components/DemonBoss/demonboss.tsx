import React from 'react';
import { DEMON_TILE, INITIAL_POSITION_X, INITIAL_POSITION_Y, TILE_SIZE } from '../../settings/constants';
import './demonboss.css'
import { useMovimentHero } from '../Hooks/useHeroActions';

function DemonBoss() {

  const heroStateinitial = {
    x: 3,
    y: 7
  }

  let positionAtual = useMovimentHero(heroStateinitial);

  return (
    <div
      style={{
        width: DEMON_TILE,
        height: 100,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        animation: 'boss-animation 1s steps(4) infinite',
        position: 'absolute',
        bottom: TILE_SIZE * positionAtual.positionAtual.y,
        left: TILE_SIZE * positionAtual.positionAtual.x,
        transform:`scaleX(${positionAtual.directionAtual == 'RIGHT'? 1 : -1})`,
      }}
    />
  );
}


export default DemonBoss;

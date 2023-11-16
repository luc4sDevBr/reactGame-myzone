import React from 'react';
import Hero from '../Hero/hero';
import { GAME_SIZE } from '../../settings/constants';

function Bord() {
    return (
        <div>
            <Hero />
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Bord;

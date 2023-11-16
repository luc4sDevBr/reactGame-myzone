import React from 'react';
import Hero from '../Hero/hero';
import { GAME_SIZE } from '../../settings/constants';
import MiniDemon from '../MiniDemon/miniDemon';
import DemonBoss from '../DemonBoss/demonboss';
import Trap from '../Trap/trap';
import Bau from '../Bau/bau';
import Door from '../Door/door';

function Bord() {
    return (
        <div>
            <Hero />
            <MiniDemon/>
            <DemonBoss/>
            <Trap/>
            <Bau/>
            <Door/>
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE} />
        </div>
    );
}

export default Bord;

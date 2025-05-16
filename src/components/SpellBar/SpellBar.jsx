import React from 'react';

import styles from './spellBar.module.css';

import Spell from "../Spell/Spell.jsx";

import quas from '../../assets/imgs/invoker_quas.png';
import wex from '../../assets/imgs/invoker_wex.png';
import exort from '../../assets/imgs/invoker_exort.png';
import noSpell from '../../assets/imgs/no_spell.png';
import invoke from '../../assets/imgs/invoker_invoke.png';

const SpellBar = () => {
    return (
        <div className={styles.spellBar}>
            <Spell imgSrc={quas} alt='quas.png' keyBind='q'/>
            <Spell imgSrc={wex} alt='wex.png' keyBind='w'/>
            <Spell imgSrc={exort} alt='exort.png' keyBind='e'/>
            <Spell imgSrc={noSpell} alt='no_spell.png' keyBind='d'/>
            <Spell imgSrc={noSpell} alt='no_spell.png' keyBind='f'/>
            <Spell imgSrc={invoke} alt='invoke.png' keyBind='r'/>
        </div>
    );
};

export default SpellBar;
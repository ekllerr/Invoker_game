import React from 'react';
import styles from './GameContainer.module.css';

import SpellBar from "../SpellBar/SpellBar.jsx";

import invokerImg from '../../assets/imgs/invoker.png';
import ActiveCombo from "../ActiveCombo/ActiveCombo.jsx";


const GameContainer = () => {
    return (
        <div className={styles.gameContainer}>
            <h1>Invoker game</h1>
            <img src={invokerImg} alt="invoker.png" className={styles.invokerImg}/>
            <ActiveCombo/>
            <SpellBar/>
        </div>
    );
};

export default GameContainer;
import React from 'react';
import Orb from "../Orb/Orb.jsx";

import styles from './activeCombo.module.css';

import quas from '../../assets/imgs/invoker_quas.png';
import wex from '../../assets/imgs/invoker_wex.png';
import exort from '../../assets/imgs/invoker_exort.png';

import useGameStore from "../../store/useGameStore.js";

const ActiveCombo = () => {
    const activeCombo = useGameStore(state => (state.activeCombo));

    const orbImgs = {
        'quas': quas,
        'wex': wex,
        'exort': exort
    }
    // console.log(activeCombo)

    return (
        <div className={styles.activeComboContainer}>
            {activeCombo.map((orb,index) => {
                return(<Orb imgSrc={orbImgs[orb]} key={index}/>);
            })}
        </div>
    );
};

export default ActiveCombo;
import React from 'react';

import styles from './Orb.module.css';

const Orb = ({imgSrc}) => {
    if(!imgSrc){
        return (
            <div className={styles.orb}></div>
        )
    }
    return (
        <div className={styles.orb}>
            <img src={imgSrc} className={styles.orbImg} alt='orb.png'/>
        </div>
    );
};

export default Orb;
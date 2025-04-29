import React from 'react';

import styles from './castedSpell.module.css';

const CastedSpell = ({imgSrc}) => {
    if(!imgSrc){
        return (
            <div className={styles.castedSpell}></div>
        )
    }
    return (
        <div className={styles.castedSpell}>
            <img src={imgSrc} className={styles.castedSpellImg} alt='castedSpell.png'/>
        </div>
    );
};

export default CastedSpell;
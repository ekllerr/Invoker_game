import React from 'react';

import styles from './spell.module.css';

const Spell = ({imgSrc, alt, keyBind}) => {
    return (
        <div className={styles.spell}>
            <p className={styles.keyBind}>{keyBind.toUpperCase()}</p>
            <img src={imgSrc} alt={alt} className={styles.spellImg}/>
        </div>
    );
};

export default Spell;
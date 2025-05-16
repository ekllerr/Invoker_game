import {useEffect, useState} from 'react'
import styles from './App.module.css';
import GameContainer from "./components/GameContainer/GameContainer.jsx";
import useGameStore from "./store/useGameStore.js";

function App() {

    useEffect(() => {
        const {orbBindings, addOrbToCombo} = useGameStore.getState();

        const handleKeyDown = (e) => {
            const key = e.key.toLowerCase();

            const orbEntry = Object.entries(orbBindings).find(([orbName, bindKey]) => bindKey === key);

            if(orbEntry){
                const [orbName] = orbEntry;
                addOrbToCombo(orbName);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    })

  return (
      <div className={styles.container}>
        <GameContainer/>
      </div>
  )
}

export default App

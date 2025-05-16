import { create } from 'zustand';

const orbBindings = {
    quas: 'q',
    wex: 'w',
    exort: 'e',
}

const keyBindings = {
    ...orbBindings,
    invoke: 'r'
}

const useGameStore = create(set => ({
    orbBindings,
    keyBindings,

    activeCombo: ['','',''],

    addOrbToCombo: (orbName) => set(state => {
        const newCombo = [...state.activeCombo, orbName];
        if(newCombo.length > 3) newCombo.shift();
        // console.log('new combo: ' + newCombo);
        return {activeCombo: newCombo};
    }),

    invoke:() => set(state => {
        
    }),

    clearCombo: () => set({activeCombo: []}),

    setBindings: (orbName, newKey) => set(state => ({
        orbBindings:{
            ...state.orbBindings,
            [orbName]:newKey.toLowerCase(),
        }
    }))

}));

export default useGameStore;
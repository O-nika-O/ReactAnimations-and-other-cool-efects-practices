const { atom } = require ('recoil');

export const darkModeState = atom({
    key: 'darkModeState',
    default: false
})

export const toggleDarkModeState = selector({
    key: 'darkModeToggle',
    set: () => {
            
    }
})
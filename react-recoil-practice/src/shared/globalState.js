import ArticleService from './ArticleService';

const { atom, selector, selectorFamily } = require ('recoil');

export const darkModeState = atom({
    key: 'darkModeState',
    default: false
})

export const articleState = atom({
    key: 'acticleState',
    default: []
})

export const articleQuery = selector({
    key: 'articleQuery',
    get: async () => {
        const articles = await ArticleService.getAll();

        return articles;
    }
})

export const toggleDarkModeState = selector({
    key: 'darkModeToggle',
    set: ({ get, set }) => {
        const currentValue = get(darkModeState);

        set(darkModeState, !currentValue);
    }
})

// export const articleByIdQuery = selectorFamily({
//     key: 'articleByIdQuery',
//     get: (id) => async () => {
//         const article = await ArticleService.getById(id)
//         return article;
//     }
// })
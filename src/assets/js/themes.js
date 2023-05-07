// import {oneDark} from '@codemirror/theme-one-dark'
// import {dracula} from 'thememirror/dist/themes/dracula';

export default {
    onedark: {
        instance: require('@codemirror/theme-one-dark').oneDark,
        name: 'One Dark',
    },
    dracula: {
        instance: require('thememirror/dist/themes/dracula.js').dracula,
        name: 'Dracula',
    },
    boysandgirls: {
        instance: require('thememirror/dist/themes/boys-and-girls.js').boysAndGirls,
        name: 'Boys and Girls',
    },
    birdsofparadise: {
        instance: require('thememirror/dist/themes/birds-of-paradise.js').birdsOfParadise,
        name: 'Birds of Paradise',
    }
}

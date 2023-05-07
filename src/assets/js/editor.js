import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import {javascript} from "@codemirror/lang-javascript"
import {syntaxHighlighting} from "@codemirror/language"
import {EditorState} from '@codemirror/state';
// import {StateEffect} from "@codemirror/state"
import {dracula} from '../../../node_modules/thememirror/dist/index.js'
import {boysAndGirls} from '../../../node_modules/thememirror/dist/index.js'
import {defaultKeymap} from "@codemirror/commands"
// import {oneDark} from '@codemirror/theme-one-dark';
// import themes from './themes.json'
import themes from './themes'


const initThemes = () => {
    // for (const [key, value] of Object.entries(themes)) {
    //     console.log(key, value)
    //     // console.log(`${key}: ${value}`);
    // }
    // for (const [name, module] in themes) {
    //     themes[name]  = require(module);
    //
    //
    // }
    console.log(themes.oneDark);
}

window.addEventListener("DOMContentLoaded", (event) => {

    const doc = `
    
    import {EditorView} from '@codemirror/view';
import {EditorState} from '@codemirror/state';
import {dracula} from 'thememirror';

`;

  //   const state = EditorState.create({
  //       doc: doc,
  //       extensions: [], //[boysAndGirls],
  //   });
  //
  //   // EditorView.theme(oneDark, { dark: true})
  //
  //
  //   // let theme = Object.values(dracula)[0]
  //   // let highlighting = Object.values(dracula)[1]
  //   // console.log('theme', oneDark)
  //   // initThemes();
  //   let extensions = []
  //
  //   const editor = new EditorView({
  //       state,
  //       extensions: [
  //           basicSetup,
  //           keymap.of([indentWithTab]),
  // //          javascript()
  //       ],
  //       parent: document.querySelector("#editor")
  //   })
  //
  //   const state2 = EditorState.create({
  //       doc: doc,
  //       extensions: [themes.boysandgirls]
  //   });
  //
  //   // console.log(themes.onedark)
  //   //extensions.push(themes.dracula)
  //
  //   // extensions.push(boysAndGirls)
  //   editor.setState(state2);


    //  console.log('test', themes.oneDark)
    // editor.theme(EditorState.boysAndGirls, {})
    // EditorView.theme('darcula', {  })
    // console.log('EditorView', editor.viewState)
    // editor.dispatch({
    //     effects: StateEffect.reconfigure.of('extensions', ['dracula'])
    // })
});
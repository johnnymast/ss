<template>


    <div class="flex justify-items-center w-full">
        <div class="flex-auto">One</div>
        <div class="flex-auto">Two</div>
        <div class="flex-auto">
            <select id="countries" @input="changeTheme"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="(value, name, index) in themes" key="value" :value="name">{{ value.name }}</option>
            </select></div>
    </div>


  <!--            <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">-->
  <!--                <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>-->
  <!--                <p class="pb-1">Laraben:Devprojects laraben$</p>-->
  <!--            </div>-->


    <div class="w-full">
        <div class="w-full relative shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
            <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
                 id="headerTerminal">
                <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                     id="closebtn">
                </div>
                <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                </div>
                <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                </div>
                <div class="mx-auto pr-16" id="terminaltitle">
                    <p class="text-center text-sm">Terminal</p>
                </div>

            </div>

            <div class="h-auto h-full backdrop-blur-2  text-green-200 font-mono text-xs bg-black" id="console">
                <div class="h-full bg-red-600 " id="editor"></div>
                <Capture/>
            </div>
        </div>
    </div>

    <img src="" id="img"/>

</template>

<script>

import {basicSetup} from "codemirror"
import {EditorView, keymap} from "@codemirror/view"
import {indentWithTab} from "@codemirror/commands"
import EditorThemes from './../themes'
// const InputText = require'./InputText.vue').default
// const InputTextarea = require'./InputTextarea.vue').default

// import InputText from './InputText.vue'
// import InputTextarea from './InputTextarea.vue'
import {defineProps} from 'vue'
import {EditorState} from "@codemirror/state";

// defineProps({
//     themes: {
//         type: Object,
//         default: true
//     },
//
// })

const init = async () => {
    console.log('init')
    console.log(props.no);
}

export default {
    props: {
        no: {
            type: Number,
            default: 0
        },
        allThemes: {
            type: String,
            default: true
        }
    },
    data() {
        return {
            themes: EditorThemes,
            editor: null,
        };
    },
    // components: {
    //     InputText,
    //     // InputTextarea
    // },
    name: 'Editor',
    methods: {
        createState(theme) {
            const doc = ''
            const state = EditorState.create({
                doc: this.editor.state.doc.toString(),
                extensions: [this.themes[theme].instance],
            });
            return state;
        },
        changeTheme(e) {

            this.editor.setState(this.createState(e.target.value));
            // console.log(e.target.value)
            // document.getElementById('editor').className = e.target.value
        }
    },
    mounted() {
        const doc = `import {EditorView} from '@codemirror/view';
import {EditorState} from '@codemirror/state';
import {dracula} from 'thememirror';`;
        const state = EditorState.create({
            doc: doc,
            extensions: [], //[boysAndGirls],
        });



        this.editor = new EditorView({
            state,
            extensions: [
                basicSetup,
                keymap.of([indentWithTab]),
                // javascript()
            ],
            parent: document.querySelector("#editor")
        })

        const fixedHeightEditor = EditorView.theme({
            "&": {height: "300px"},
            ".cm-scroller": {overflow: "auto"}
        })



      //  this.editor.setState(this.createState("dracula"));
        // console.log(this.editor.state.doc.toString())
        // const state2 = EditorState.create({
        //     doc: doc,
        //     extensions: [this.themes.boysandgirls.instance]
        // });

        // console.log(themes.onedark)
        //extensions.push(themes.dracula)

        // extensions.push(boysAndGirls)

    },
    computed: {
        // themes: function () {
        //     return JSON.parse(this.$props.allThemes)
        // }
    }
}
</script>


<style scoped>

</style>
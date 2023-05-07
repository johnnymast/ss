import {createApp, Vue } from 'vue'
import Editor from './components/Editor.vue'
import InputText from './components/InputText.vue'
import Capture from "./components/Capture.vue";
import './editor'
// import components from "@/assets/js/components";

//
// import plugin from '@yourname/yourlibrary'



const app = createApp(Editor, {
    no: 10,
    allThemes: JSON.stringify({
        dracula: 'dracula',
        boysandgirls: 'Boys and girls',
    })
})
    //.use(plugin)
//.mount('#app')

app.component('InputText', InputText)
app.component('Capture', Capture)
app.mount('#app')






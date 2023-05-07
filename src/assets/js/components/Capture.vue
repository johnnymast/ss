<template>


    <button type="button" class="absolute flex bottom-2 right-2 justify-center items-center select-none bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold p-2 m-2 rounded-full shadow h-8 w-8 focus:outline-none focus:shadow-outline">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/>
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/>
            </svg>
    </button>

        <input type="button"
               class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
               value="capture" @click="capture"/>
</template>

<script>
import * as htmlToImage from 'html-to-image';


export default {
    methods: {
        exec(id) {
            htmlToImage.toPng(document.getElementById(id))
                .then(function (dataUrl) {
                    console.log(dataUrl);
                    document.getElementById('img').src = dataUrl;

//                    saveAs(dataUrl, 'my-node.png');
                });
        },
        capture() {
            this.exec('editor')
        }
    }
}
</script>


<style scoped>

</style>
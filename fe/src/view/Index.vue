<template>
    <div>
        <h1 class="text-3xl font-bold underline">Cobaan</h1>
        <button @click="warn('Test', $event)" type="button"
            class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150">Show</button>
    </div>
</template>
<script setup>
import { useLoaderStore } from '../store/loader'

const loaderStore = useLoaderStore()

function warn(message, event) {
    if (event) event.preventDefault()
    alert(message)
}

function click(e) {
    if (e) e.preventDefault()
    loaderStore.loading()
}
</script>
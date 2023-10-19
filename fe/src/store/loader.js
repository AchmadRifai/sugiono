import { defineStore } from "pinia"

export const useLoaderStore = defineStore('loader', {
    actions: {
        loading() {
            this.load = true
        }, loaded() {
            this.load = false
        }
    }, state: () => ({ load: true }),
})
import { defineStore } from 'pinia'

export const useTitleStore = defineStore('titles',  {
    state: () => ({
        titles: ''
    }),
    actions: {
        change(newTitle) {
            this.title = newTitle;
        }
    }
})

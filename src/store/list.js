import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore("listStore", () => {
    const titles = ref([]);
    function increment() {
        titles.value++
    }
    return {
        titles,
        increment
    }
}) 

// import { defineStore } from 'pinia'

// export const useListStore = defineStore('list', {
//   state: () => ({
//     /** @type {{ text: string }[]} */
//     list: [],
//   }),
//   actions: {
//     // any amount of arguments, return a promise or not
//     addlist(text) {
//       // you can directly mutate the state
//       this.list.push({ text })
//     },
//   },
// })

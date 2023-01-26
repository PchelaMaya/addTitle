import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCountVisit = defineStore('visits', () => {
    const visits = ref(1)

    function increment() {
        visits.value++
    }

    return { visits, increment }
})
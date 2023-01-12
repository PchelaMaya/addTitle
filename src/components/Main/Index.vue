<template>

    <div class="counter">
        <h1 class="title_counter">Список задач</h1>
        <ul>
            <li class="list__title">{{ title }}</li>
        </ul>
        <h1 class="title_counter">Просмотры: {{ countVisiting }}</h1>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useTitleStore } from '@/store/addtitle'
    import { useCountVisit } from '@/store/list'
    import './style.css'
    const title = useTitleStore().title
    const visits = useCountVisit()
    const countVisiting = ref(visits.visits)

    onMounted(() => visits.increment())


</script>
<style scoped>

</style>
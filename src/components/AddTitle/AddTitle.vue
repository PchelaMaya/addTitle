<script setup>
import { ref } from 'vue'
import { useTitleStore } from '@/store/addtitle'
import './style.css'

const storeTitle = useTitleStore()

const title = ref('')

</script>

<template>
  <form class="form" @submit.prevent="storeTitle.change(title)">
    <div>
      <label for="title" class="form__title">Введите название</label>
      <input class="form__input-div" type="text" id="title" placeholder="Задача 1" v-model="title">
    </div>
    <button type="submit">Добавить</button>
  </form>
</template>


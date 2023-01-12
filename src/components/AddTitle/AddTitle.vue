<script setup>

import { useTitleStore } from '@/store/addtitle'
import './style.css'
const storeTitle = useTitleStore()

function onInput(e) {
    storeTitle.change(e.target.innerText)
}

</script>

<template>

        <div class="form">
          <h1 class="form__title">Введите название</h1>
          <input class="form__input-div" v-model="storeTitle.title"/>
          <button>Сохранить</button>
      </div>
</template>

<style scoped>

</style>
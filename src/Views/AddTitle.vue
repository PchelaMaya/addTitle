<script setup>

import { useTitleStore } from './../store/addtitle'

const storeTitle = useTitleStore()

function onInput(e) {
    storeTitle.change(e.target.innerText)
}

</script>

<template>

        <div class="form">
          <h1 class="form__title">Введите название</h1>
          <div class="form__input-div" @keyup="onInput" contenteditable="true">{{ storeTitle.title }}</div>
          <button>Сохранить</button>
      </div>
</template>

<style scoped>

.form {
    background: #2f4765;
    padding: 20px;
    border-radius: 10px;
  }
  .form__title {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
  }
  .form__input-div {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    padding: 10px;
    border: 0;
    border-bottom: 2px solid #ddd;
    width: 100%;
    box-sizing: border-box;
    background-color: #2f4765;
    color: #bbb;
  }

  button {
    display: block;
    margin: 20px auto 0;
    background-color:#776e6a ;
    
    color: #bbb;
    padding: 10px;
    border: 0;
    border-radius: 7px;
    font-size: 16px;
  }
  button:hover {
    background-color: #35df90 !important;
    transition: color 0.2s ease-in;
}
</style>
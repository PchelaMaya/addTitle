<script setup>

import Nav from '../components/Nav.vue';

import { ref } from 'vue'
// import { useAddStore } from '../store/addtitle'

// const addStore = useAddStore();

const newtitle = ref('')
let titles = ref([])

function addTitle() {
  titles.value.push({ text: newtitle.value})
  newtitle.value = ''
}


</script>

<template>
    <form @submit.prevent="addTitle">
        <label>Введите название</label>
        <input type="text" v-model="newtitle">
        <button>Сохранить</button>
      </form>
        <ul>
          <li v-for="title in titles">
            {{ title.text }}
          </li>
        </ul>

</template>

<style>
form {
    background: #2f4765;
    padding: 20px;
    border-radius: 10px;
  }
  label {
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
  }
  input {
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
  textarea {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    background-color: #2f4765;
    border: 2px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
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
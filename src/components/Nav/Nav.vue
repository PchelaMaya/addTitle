
<template>
  <header class="header">
    <div class="container">

      <nav class="header-nav">
        <router-link :to="{name: 'Index'}" class="navbar__link">Все задачи</router-link>
        <router-link :to="{name: 'AddTitle'}" class="navbar__link">Добавить задачу</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
    @import './style.css'
</style>

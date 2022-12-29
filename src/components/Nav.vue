<script>
export default {}


</script>

<template>
  <nav class="main-nav">
    <router-link :to="{name: 'Index'}">Все задачи</router-link>
    <router-link :to="{name: 'AddTitle'}">Добавить задачу</router-link>
</nav>
  
</template>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 16px;
}
a.router-link-active {
  border-bottom: 2px solid #35df90;
  padding-bottom: 4px;
  color: #35df90;
}

</style>

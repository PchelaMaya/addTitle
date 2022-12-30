<template>
    <div class="main">
        <div v-if="projects.length"></div>
        <div class="counter">
            <h1 class="title_counter">Просмотры:</h1>
            <a href="http://www.warlog.ru/" target="_blank">
            <img border="0" 
            src="http://www.warlog.ru/counter/?i=246" alt="счетчик посещений" title="счетчик посещений" /></a>
        </div>
        <ul>
            <li v-for="title in titles">
              {{ title.text }}
            </li>
          </ul>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import AddTitle from './AddTitle.vue';
import { useListStore } from '../store/list.js'
// import { useAddStore } from '../store/addtitle'
export default {
    setup() {
        const list = useListStore()

        list.titles++
        list.$patch({titles: list.titles + 1})
        list.increment()
    },
    name: 'Index',
    data() {
        return{
            projects: [],
            current: 'all'
        }
    },
    computed: {
    }

}

</script>
<style>
.counter{
    margin: 20px auto;
    padding-bottom: 5px;
  }
.counter h1 {
    text-decoration: none;
    color: #999;
    font-size: 18px;
  }
.counter img {
    height: 14px;
    width: 100px;
}
</style>
<template>
<div id="movieapp" >
  <v-app>
    <MovieSearch></MovieSearch>
    <SideBar></SideBar>
    <router-view/>
  </v-app>
</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import MovieSearch from '@/components/MovieSearch.vue'
//import Home from '@/components/Home.vue'


export default {
  name: 'App',
  components: {
    SideBar,
    MovieSearch,
    //Home
  },
  created () {
    this.$router.push(`/`)
  }
};
</script>

<style>
#search {
  position:absolute;
  right: 0px;
}

.container{
  background-color:black;
}

</style>
<template>
<div id="overlay">
    <div id="content">
        <v-card>
            <v-img v-bind:src="'http://image.tmdb.org/t/p/w780/'+ movie.poster_path" max-height="100%" max-width="50%" id="img"></v-img>
            <p>{{movie.title}}</p>
            <p>{{movie.overview}}</p>
        <v-btn @click="close">close</v-btn>
    </v-card>
    </div>
</div>
</template>

<script>
export default {
    name:'movie-modal',
    props:['movie'],
    methods:{
        close(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:50%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}

#img{
    position:relative;
    left:25%;
}
</style>
<template>
<div id="overlay" >
    <div id="content" style="overflow:auto; max-height:100%">
        <v-card>
            <v-img v-bind:src="'http://image.tmdb.org/t/p/w780/'+ movie.poster_path" max-height="100%" max-width="50%" id="img" style="top:10px"></v-img>
            <p style="padding-top:10px">{{movie.title}}</p>
            <p id="overview">{{movie.overview}}</p>
            <v-rating length="10" :value="rating" background-color="white" color="yellow accent-4" dense half-increments size="18" readonly></v-rating>
        <v-btn @click="close" style="margin:10px;">close</v-btn>
    </v-card>
    </div>
</div>
</template>

<script>
export default {
    name:'movie-modal',
    props:['movie'],
    data(){
        return{
            rating:0
        }
    },
    created(){
        this.rating=this.movie.vote_average
    },
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
  background-color:rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:60%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}


#overview{
    margin:0 10%;
}

#img{
    position:relative;
    left:25%;
}
</style>

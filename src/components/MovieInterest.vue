<template>
<div>
<v-list class="overflow-y-auto mx-auto my-10"
        width="100%"
        max-height="600"
        max-width="94%">
    <v-container>
        <v-row>
            <draggable></draggable>
            <v-col cols="12"  sm="6" md="4" lg="3" v-for="(item,i) in this.movies[0]" :key="i">
                <v-list-item>
                <v-img v-bind:src="'http://image.tmdb.org/t/p/w300/'+ item.poster_path" @click="openModal(item)" :id="'item'+i" ></v-img>
                </v-list-item>
                <movieModal :movie="postItem" v-show="showContent" @close="closeModal"></movieModal>
            </v-col>
        </v-row>
    </v-container>
    <v-pagination
        id="pagenation"
        v-model="page"
      :length="totalpage"
      :total-visible="7"
      @input="selectPage"
    ></v-pagination>
</v-list>
</div>
</template>


<script>
import axios from 'axios'
import movieModal from '@/components/Modal.vue'
import draggable from 'vuedraggable'
//import {PerfectScrollbar} from 'vue2-perfect-scrollbar'


export default {
    name:'home',
    components:{
        movieModal,
        draggable
    },
    data(){
        return{
            movies:[],
            apiKey:'c8fa43424433d5c17925bf849111bbae',
            showContent:false,
            postItem:"",
            totalpage:0,
            page:1
            
        }
    },
    created(){
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
        .then((res)=>{
            this.movies=[]
            this.movies.push(res.data.results)
            console.log(res.data)
            this.totalpage=res.data.total_pages
            console.log(this.totalpage)
            //console.log(this.movies[0][0])
            //this.$router.push(`/result/${this.keyword}`)
        })
        .catch((e)=>{
            alert(e);
        })
    },
    methods: {
        openModal(item){
            this.showContent=true
            this.postItem=item
            
        },
        closeModal(){
            this.showContent=false
        },
        selectPage(e) {
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=${e}`)
            .then((res)=>{
                this.movies=[]
                this.movies.push(res.data.results)
            })
            .catch((e)=>{
                alert(e);
            })
            window.scrollTo({
                top:0,
                behavior:"smooth"
            })
        }

    }
}
</script>
<style scoped>
#pagenation{
    z-index:10;
}
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>
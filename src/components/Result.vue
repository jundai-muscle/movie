<template >
    <div id="now" style="width: 80%; margin-top:100px;">
        <v-container style="overflow:scroll;" fluid >
                <v-row>
                    <v-col cols="12"  sm="6" md="4" lg="3" v-for="(item,i) in this.movies[0]" :key="i" style="width:80%;">
                        <v-dialog transition="dialog-top-transition" max-width="600">
                            <template v-slot:activator="{on,attrs}">
                            <v-img :key="i" v-bind:src="'http://image.tmdb.org/t/p/w300/'+ item.poster_path" :id="'item'+i"  style="width:80%;" v-bind="attrs" v-on="on" @click="openModal(item)"></v-img>
                            </template>
                            <template v-slot:default="dialog">
                                <movieModal :movie="postItem" v-show="showContent" @close="dialog.value=false" :value="dialog"></movieModal>
                            </template>
                        </v-dialog>
                    </v-col>
                </v-row>
            <v-pagination
                id="pagenation"
                v-model="page"
            :length="totalpage"
            :total-visible="7"
            @input="selectPage"
            ></v-pagination>
        </v-container>
    </div>
</template>


<script>
import axios from 'axios'
import movieModal from '@/components/Modal.vue'
export default {
    name:'result',
    components:{movieModal},
    beforeRouteUpdate(to,from,next){
        //console.log(to)
        const k=to.params.keyword
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${k}`)
        .then((res)=>{
            this.movies=[]
            this.movies.push(res.data.results)
            //console.log(this.movies[0][0])
            //this.$router.push(`/result/${this.keyword}`)
        })
        .catch((e)=>{
            alert(e);
        })
        next()
    },
    data(){
        return{
            movies:[],
            apiKey:'c8fa43424433d5c17925bf849111bbae',
            showContent:false,
            postItem:"",
            totalpage:0
        }
    },
    created(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=ja-JP&query=${this.$route.params.keyword}`)
        .then((res)=>{
            this.movies=[]
            this.movies.push(res.data.results)
            console.log(res)
            this.totalpage=res.data.total_pages
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
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${this.$route.params.keyword}&page=${e}`)
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



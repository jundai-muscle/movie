<template>
<div >
    <v-app id="home">
        <v-btn-toggle multiple>
            <v-btn @click="favorite">お気に入り</v-btn>
            <v-btn @click="interest">気になる</v-btn>
        </v-btn-toggle>
        <div >
            <component :is="currentComp"></component>
        </div>
    </v-app>
</div>
</template>


<script>
import Favorite from './MovieFavo'
import Interest from './MovieInterest'

export default{
    components:{
        Favorite,
        Interest
    },

    data(){
        return{
            currentComp:'Favorite'
        }
    },

    methods:{
        favorite(){
            this.currentComp="Favorite"
        },
        interest(){
            this.currentComp="Interest"
        }
    }
}

</script>
<style scoped>
#home{
    position:absolute;
    left:200px;
    top:15%;
    height:85%;
    width:90%;
    z-index:0;
}
#pagenation{
    z-index:10;
}
</style>
<template>
<div id="search">
    <v-col cols="12">
        <v-text-field required v-model="keyword">
            <template v-slot:append>
                <v-btn @click="search">検索</v-btn>
            </template>
        </v-text-field>
    </v-col>
</div>
</template>

<script>
export default {
    name:'movie-search',
    data(){
        return{
            keyword:'',
            movies:[]
        }
    },
    methods:{
        search(){
            this.$router.push(`/result/${this.keyword}`)
            this.keyword = ''
        }
    }
}
</script>


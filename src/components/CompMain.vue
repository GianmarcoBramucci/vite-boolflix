<template>
    <div class="main-cont">
        <div>
            <h2>Film</h2>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <CompCard v-for="movie in store.movies.results" :img="store.imgPath + movie.poster_path" 
                    :tvTittle="movie.title" :origianlTvTittle="movie.original_title" :originalLang="movie.original_language"
                    :voteAverege="movie.vote_average" :overview="movie.overview"/>
            </div>
        </div>
        <div>
            <h2>Serie Tv</h2>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <CompCard v-for="movie in store.serieTv.results" :img="store.imgPath + movie.poster_path" 
                    :tvTittle="movie.name" :origianlTvTittle="movie.original_name" :originalLang="movie.original_language"
                    :voteAverege="movie.vote_average" :overview="movie.overview"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {store} from '../store.js';
    import CompCard from './CompCard.vue'
    export default {
        name: 'CompMain',
        data(){
            return{
                store 
            }
        },
        components:{
            CompCard
        }    
    }
</script>

<style lang="scss" scoped>
    .main-cont{
        height: 100vh;
        margin-left: 10px;
    }
</style>
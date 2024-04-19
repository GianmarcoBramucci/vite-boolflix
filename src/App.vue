<template>
    <CompHeader @queryCheck="setQuery"/>
    <CompMain/>
</template>

<script>
import {store} from './store.js';
import axios from 'axios';
import CompHeader from './components/CompHeader.vue';
import CompMain from './components/CompMain.vue';
  export default {
    name: 'App',
    data(){
      return{
        store,
      }
    },
    components:{
      CompHeader,
      CompMain
    },
    methods:{
      getMovies: function(){
        axios.get(this.store.urlApi+ this.store.endPoint.movie,this.store.options).then((ris)=>{
          console.log(ris.data);
          this.store.movies = ris.data;
        })
      },
      getSerie: function(){
        axios.get(this.store.urlApi+ this.store.endPoint.serieTv,this.store.options).then((ris)=>{
          console.log(ris.data);
          this.store.serieTv = ris.data;
        })
      },
      setQuery: function(){
        this.store.options.params.query = this.store.searchBar;
        console.log(this.store.options.params.query);
        this.getMovies();
        this.getSerie();
      }
    },
    created(){
      
    }
  }
</script>
  
<style lang="scss" scoped>

</style>
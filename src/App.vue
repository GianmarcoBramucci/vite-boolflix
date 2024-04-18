<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import {store} from './store.js'
import axios from 'axios';
  export default {
    name: 'App',
    data(){
      return{
        store
      }
    },
    components:{

    },
    methods:{
      getMovies: function(){
        axios.get(this.store.urlApi+ this.store.endPoint.movie,this.store.options).then((ris)=>{
          console.log(ris.data);
        })
      },
      getSerie: function(){

      }
    },
    created(){
      this.getMovies()
    }
  }
</script>
  
<style lang="scss" scoped>

</style>
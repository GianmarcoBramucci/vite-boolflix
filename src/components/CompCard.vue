<template>
    <div class="col h-100"> 
        <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img :src="img">
              </div>
              <div class="flip-card-back">
                <h3>{{ tvTittle }}</h3>
                <h5>{{ origianlTvTittle }}</h5>
                <div> <img :src="`../img/${originalLang}.png`" ></div>
                <div>
                    <i class="fa-star" :class="{'fa-solid': n <= checkStar,'fa-regular': n > checkStar}" v-for="n in 5"></i>
                </div>
                <p>{{ overview }}</p>
              </div>
            </div>
          </div>          
    </div>
</template>

<script>
    export default {
        name: 'CompCard',
        props:[
            'img',
            'tvTittle',
            'origianlTvTittle',
            'originalLang',
            'voteAverege',
            'overview'
        ],
        data(){
            return{
                
            }
        },
        computed:{
            checkStar: function(){
                return  Math.ceil(this.voteAverege / 2);
            }
        }
    }

</script>

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 342px;
    height: 513px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }
  
  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
  
  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  /* Style the back side */
  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    overflow-y: scroll;
    transform: rotateY(180deg);
  }
  i{
    color: red;
  }
</style>
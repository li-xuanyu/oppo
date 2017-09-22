<template>
  <div id="app">
    <Headers v-model="isShows" @events="handleClick2" @event="handleClick"></Headers>
    <Sideleft v-model="isShows"></Sideleft>
    <Sideright v-model="isHide" @event="handleClick"></Sideright>
    <section>
      <router-view></router-view>
    </section>
    

    
  </div>
</template>

<script>

import Headers from "@/components/header"
import Sideleft from "@/components/sideleft"
import Sideright from "@/components/sideright"

export default {
  name: 'app',
  data(){
    return{
      isShows:false,
      isHide:false
    }
    
  },
  components:{
    Headers,
    Sideleft,
    Sideright
  },
  methods:{
    handleClick(){
      this.isHide=!this.isHide;
      this.isShows=false;
    },
    handleClick2(){
      this.isShows=!this.isShows;
      this.isHide=false;
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;

  }

  html,body{
    width:100%;
    box-sizing: border-box;
    background: #efefef;
  }
  ul,li{
  list-style:none;
  }
  a{
    text-decoration:none;
  }
  .l{
    float:left;
  }
  .r{
    float:right;
  }
  section{
    position: relative;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding:0;
    margin:0;
  }

</style>

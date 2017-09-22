<template>
  <div class="scrolltop" v-show="Show" @click="handleClick">
    <img src="http://shopfs.myoppo.com/cn/assets/images/backtop-icon.png" />
  </div>
</template>

<script>
export default {

  name: 'scrolltop',

  data () {
    return {
      Show:false
    };
  },
  
  methods:{
    handleClick(){
      document.doucmentElement.scrollTop=0
    },
    show(){
      this.isShow=true
    },
    hide(){
      this.isShow=false
    }
  }
};
</script>

<style lang="scss" scoped>
.scrolltop{
  width: 0.48rem;
    height: 0.48rem;
  font-size: 0.2rem;
  position:fixed;
  right: 0.15rem;
  bottom: 0.3rem;
  z-index: 50;
  background: #eee;

  img{
    display: block;
    margin: 0.14rem auto;
    width: 0.2rem;
      height: 0.2rem;
  }
}
</style>
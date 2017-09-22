<template>
	<div id="left" v-show="value" @click="handleClick">
		<router-link to="/home" >首页</router-link>
		<router-link to="/product" >产品</router-link>
		<router-link to="/shopping" >商城</router-link>
		<router-link to="/" >体验店</router-link>
		<router-link to="/" >服务</router-link>
		<router-link to="/" >ColorOS</router-link>
		<router-link to="/" >社区</router-link>
		<router-link to="/" >云服务</router-link>
		<router-link to="/" >Global</router-link>
	</div>

	
</template>

<script>
export default {

  name: 'sideleft',

  data () {
    return {

    };
  },
  props:["value"],

  methods:{
  	handleClick(){
  		this.$emit("input",!this.value);
  	}
  }
};
</script>

<style lang="scss" scoped>
#left{
	width: 100%;
    height: 0.6rem;
    position: fixed;
    top: 0.5rem;
    white-space: nowrap;
    overflow: scroll;
    z-index: 9;
	font-size: 0.18rem;
	text-align: center;
	background: rgba(255, 255, 255, 0.8);
    a{
		color:#1f8657;
		padding: 0 0.2rem;
		display: inline-block;
    	line-height: 0.6rem;
	}

	
}



</style>
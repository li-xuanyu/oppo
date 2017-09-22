<template>
	<div id="header">
		<div class="open-menur l" @click="handleClick">
			<a class="open-menu-bar top" :class="{xia:value}"></a>
			<a class="open-menu-bar" v-show="value==false?true:false"></a>
			<a class="open-menu-bar bottom" :class="{shang:value}"></a>
		</div>
		<div class="logo">
			<img src="http://shopfs.myoppo.com/cn/media/images/logo.svg" />
		</div>
		<div class="r" @click="handleRight">
			<img src="http://shopfs.myoppo.com/cn/media/images/icon-menu-user.png" />
		</div>
	</div>
</template>

<script>
export default {

  name: 'header',

  	data () {
  	  return {

  		}
    },
    props:["value"],

  	methods:{
  		handleClick(){
  			this.$emit("events");
  		},
  		handleRight(){
  			this.$emit("event");
  		}
  	}
	
}
</script>

<style lang="scss" scoped>
#header{
	width:100%;
	height: 0.48rem;
	font-size: 0.2rem;
	box-shadow: 0 0.01rem 0.01rem rgba(0, 0, 0, 0.3);
  border-radius: 0.01rem;
	position:fixed;
	top:0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
	.logo {
    	text-align: center;
    	height: 0.18rem;
    	margin: 0 auto;
    	padding-top: 0.15rem;
    	width: 60%;
    	img{
    		height: 0.18rem;
    	}
	}
	
	.open-menur {
    	width: 0.2rem;
    	height: 0.48rem;
    	position: relative;
    	left: 0.15rem;
    	.open-menu-bar {
    		height: 0.03rem;
    		width: 0.2rem;
    		background: #1f8657;
    		-webkit-border-radius: 0.03rem;
    		position: absolute;
    		left: 0;
    		top: 0.22rem;
    		-webkit-transition: all .3s ease-in-out;
		}
		.top{
			top: 0.14rem;
		}
		.bottom{
			top: 0.30rem;
		}
		.shang{
			-webkit-transform: rotate(45deg) translate3d(-0.03rem, 0.02rem, 0);
    		-webkit-transform-origin: 100% 50%;
		}
		.xia{
			-webkit-transform: rotate(-45deg) translate3d(-0.03rem, -0.02rem, 0);
    		-webkit-transform-origin: 100% 50%;
		}
		
	}

	.r{
    	width: 0.2rem;
    	height: 0.48rem;
    	position: relative;
    	right: 0.15rem;
    	top: -0.2rem;

    	img{
    		width: 0.2rem;
    	}
	}
}
</style>
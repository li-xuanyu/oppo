<template>
	<div id="intro">
		<div class="hear">
			<a class="name" href="javascript:history.go(-1)">
				{{this.$route.query.oppo}}
			</a>
			<span class="logo" @click="handleClick" :class="{shang:rotate}">
				<img src="http://shopfs.myoppo.com/cn/product/r11/images/1080/button_trigger_reverse.png?20170630" alt="">
			</span>
			<p class="goumai" @click="handleTo">
				<span>购买 {{this.$route.query.oppo}}</span>
			</p>
		</div>
		<div class="menu" :class="{active:rotate}">
			<ul>
				<li> <a href="index.html" class="active">首页</a></li>
				<li> <a href="camera.html">拍照</a></li>
				<li> <a href="design.html">设计</a></li>
				<li> <a href="performance.html">性能</a></li>
				<li> <a href="coloros.html">系统</a></li>
				<li> <a href="params.html">参数</a></li>
			</ul>
		</div>
		<swipe class="my-swipe">
		  <swipe-item class="item" v-for="data in looplist" :key="data.id">
		  	 <img :src="data.url"/>
		  </swipe-item>
		</swipe>
		<div class="wrapper">
			<div class="sec-texts sec-1-text sec-1-text-1">
				<div class="sec-text sec-text-suptitle text-init animate white">
					<span class="digit">R11 &amp; R11 Plus </span>
				</div>
				<div class="sec-text sec-text-title text-init animate white">
					前后 <span class="digit">2000 </span>万，<br>拍照更清晰。
				</div>
			</div>
		</div>
		<div class="oppo-R11">
        	<img v-for="(data,index) in oppolist" :key="index" :src="data.url" >
        </div>
	</div>
</template>

<script>
import router from "../router";
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {

  name: 'intro',
  components:{
  	"swipe":Swipe,
  	"swipe-item":SwipeItem
  },
  data () {
    return {
    	rotate:false,
    	looplist:[
    		{
    			id:2,
    			url:'http://shopfs.myoppo.com/cn/product/r11/images/1080/sec-1-slide-2.jpg?20170630'
    		},
    		{
    			id:3,
    			url:'http://shopfs.myoppo.com/cn/product/r11/images/1080/sec-1-slide-3.jpg?20170630'
    		},
    		{
    			id:4,
    			url:'http://shopfs.myoppo.com/cn/product/r11/images/1080/sec-1-slide-4.jpg?20170630'
    		}
    	],
    	oppolist:[],
    	top:false
    };
  },
  methods:{
  	handleClick(){
  		this.rotate=!this.rotate
  	},
  	handleTo(){
  		document.documentElement.scrollTop=0;
  		var url=this.$route.query.url;
  		var name=this.$route.query.oppo;
  		router.push({name: 'details', query: { oppo:name , url:url , pic:3199}});
  		
  	}
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	axios.get("/api/details").then(res=>{
  		this.oppolist=res.data[0].oppolist;
  	});
  }
};
</script>

<style lang="scss" scoped>
#intro{
	width: 100%;
	height: 100%;
	position: relative;
	top:0;
	font-size: 0.16rem;
	z-index: 150;

	.menu {
		height: 0.4rem;
		width: 100%;
		position: fixed;
		top: 0.48rem;
		z-index: 112;
	    background-color: #1b1b1b;
	    width: 100%;
	    font-size: 0.14rem;
	    opacity:0;
	    transition: all 0.5s linear;
	}

	.active{
		transition: all 0.5s linear;
		opacity:1;
	}
	.menu ul li {
		float: left;
	    line-height: 0.4rem;
	    width: 16.5%;
	    text-align: center;

	    a{

	    	color: #fff;
	    }
	}

	.my-swipe {
		width: 100%;
		height: 6.1666rem;
		position: absolute;
		top:0.5rem;
		z-index: 110;
		img {
  			width: 100%;
  			height:100%;
		}
  		
	}
	.oppo-R11{
		width: 100%;
		img{
			width: 100%;
			float: left;
		}
		.bars{
			width: 100%;
			padding: 0.1rem 0;
			background: #fff;
 			img{
				height: 0.05rem; 
			}
		}
	}

	.hear{
		position:fixed;
		top:0;
		z-index: 150;
		width: 100%;
		text-align: center;
		background: #1b1b1b;
		color: #fff;
		height: 0.5rem;
		font-size: 0.16rem;
		
		.name {
			height: 0.5rem;
			line-height: 0.5rem;
			float: left;
			display: inline-block;
			width: 35%;
			color: #fff;
		}
		.logo {
			height: 0.5rem;
			float: left;
			display: inline-block;
			width: 29.9%;
			img{
				display: inline-block;
				margin: 0.16rem auto;
				height: 0.14rem;
			}
		}
		.goumai {
			font-size: 0.12rem;
			float: left;
			display: inline-block;
			width: 35%;
			height: 0.5rem;
			span {
				padding: 0.02rem 0.12rem;
				background: #fff;
				display: inline-block;
				margin: 0.12rem auto;
				color: #000;
				height: 0.22rem;
				line-height: 0.22rem;
				border-radius: 0.12rem;
			}
		}
	}
	.shang{
        -webkit-transform: rotate(180deg);
        -webkit-transform-origin: 50% 50%;
    }

    .wrapper {
    	width: 100%;
    	z-index: 111;
    	padding: 0 13%;
    	height: 100%;
	    margin: 0 auto;
	    position: absolute;
	    top:0;
	    box-sizing: border-box;

		.sec-1-text-1 {
			width: 74%;
		    position: absolute;
		    padding-top: 1.0277778rem;
		    text-align: left;
		}
		.sec-texts {
		    z-index: 3;
		}
		.sec-1-text-1 .sec-text-suptitle {
		    font-size: 0.36rem;
		    line-height: 1.8em;
		}
		.sec-text-title {
		    font-size: 0.24rem;
		}

	}
	

}
</style>
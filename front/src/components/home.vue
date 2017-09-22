<template>
	<div id="home">
		<swipe class="my-swipe">
		  <swipe-item class="item" v-for="data in looplist" :key="data.id">
		  	 <img :src="data.url"/>
		  </swipe-item>
		</swipe>
		<div class="box-brick">
		<div class="brick-m">
			<div class="bar" v-for="data in bricklist" :key="data.id">
				<img v-show="data.logo==''?logoHide:logoShow" :src="data.logo" class="one" ></img>
				<img :src="data.url" class="two">
				<a>{{data.name}}</a>
				<h3>￥{{data.pic}}.00</h3>
			</div>
		</div>
		</div>
		<div class="scrolltop" v-show="isTop" @click="handleTop">
    		<img src="http://shopfs.myoppo.com/cn/assets/images/backtop-icon.png" />
  		</div>
		<div class="features" >
		<img v-for="data in featurelist" :src="data.url" :key="data.id"/>
		</div>
  		<Sidebottom></Sidebottom>
	</div>
</template>

<script>
import Sidebottom from "./footer";
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {

  name: 'home',

  data () {
    return {
    	logoShow:true,
    	logoHide:false,
    	isTop:false,
		looplist:[],
		featurelist:[],
		bricklist:[]
    };
  },
  components:{
  	"swipe":Swipe,
  	"swipe-item":SwipeItem,
  	Sidebottom
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	axios.get("/api/home").then(res=>{
  		this.looplist=res.data[0].loop,
  		this.featurelist=res.data[0].feature,
  		this.bricklist=res.data[0].brick
  	});
  	window.onscroll=()=>{
  		// console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop>360){
    		this.isTop=true;
    	}else{
    		this.isTop=false;
    	};
    }
  },
  methods:{
  	handleTop(){
  		var id=setInterval(()=>{
            document.documentElement.scrollTop-=200
            if(document.documentElement.scrollTop==0){
                clearInterval(id)
            }
        },100)
  	}
  }
};
</script>

<style lang="scss" scoped>
div#home{
	font-size: 0.2rem;
	width: 100%;
	position: relative;
	top:0;
	left:0;
	
	.my-swipe {
		width: 100%;
		height: 5.7rem;
		img {
  			width: 100%;
  			height:100%;
		}
  		
	}
	
	.features{
		width: 100%;
		img{
			width: 100%;
		}
	}
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
	.box-brick{
		width: 100%;
		background: #fff;
		height: 2rem;
		.brick-m{
			width: 100%;
			height: 100%;
			overflow-x:scroll;
			white-space: nowrap;
			border-top: 0.02rem solid #ccc;
			border-bottom: 0.02rem solid #ccc;
			text-align: center;
		.bar{
				display: inline-block;
				width: 1rem;
				height: 1.7rem;
				padding: 0.2rem 0.05rem 0.05rem 0.05rem;
				position: relative;
				.one{
					position: absolute;
					top:0;
					right:0;
					width: 0.24rem;
					height: 0.28rem;
				}
				.two{
					display: block;
					width: 1rem;
					height: 1rem;
					margin: 0.1rem auto;
				}
				a{
					display: block;
					width: 100%;
					height: 0.24rem;
					text-align: center;
					font-size: 0.12rem;

				}
				h3{
					width: 100%;
					position: absolute;
					bottom: 0.15rem;
					left: 0;
	    			color: #1f8657;
	    			font-size: 0.2rem;
	    			font-size: 0.12rem;
				}
			}
		}
	}
	
}
</style>
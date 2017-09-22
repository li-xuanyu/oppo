<template>
<div id="shopping">
	<div class="logos">
		<img src="http://static.oppo.com/archives/201709/2017091909090359c07753b4af2.jpg" alt="">
	</div>
	<div class="box-brick">
		<div class="brick-m">
			<div class="bar" v-for="data in bricklist" :key="data.id" @click="handleClick(data.id,data.name,data.pic,data.url)">
				<img v-show="data.logo==''?logoHide:logoShow" :src="data.logo" class="one" ></img>
				<img :src="data.url" class="two">
				<a>{{data.name}}</a>
				<h3>￥{{data.pic}}.00</h3>
			</div>
		</div>
	</div>
	<div class="box-brick">
		<div class="brick-m">
			<div class="bar" v-for="data in parts" :key="data.id">
				<img :src="data.url" class="two">
				<a>{{data.name}}}</a>
				<div>￥{{data.pic}}.00</div>
			</div>
		</div>
	</div>
	<div class="logos">
		<img src="http://shopfs.myoppo.com/shop/assets/images/content/others/sercices_1080x530.png" alt="">
	</div>
    <div class="scrolltop" v-show="isTop" @click="handleTop">
    	<img src="http://shopfs.myoppo.com/cn/assets/images/backtop-icon.png" />
  	</div>
    <Sidebottom></Sidebottom>
</div>
</template>

<script>
import router from "../router";
import Sidebottom from "./footer";
export default {

  name: 'shopping',
  components:{
    Sidebottom
  },
  data () {
    return {
    	logoShow:true,
    	logoHide:false,
    	bricklist:[],
    	parts:[],
    	isTop:false
    };
  },
  mounted(){
    document.documentElement.scrollTop=0;
    window.onscroll=()=>{
	    if(document.documentElement.scrollTop>360){
	    		this.isTop=true;
	    }else{
	    		this.isTop=false;
	    };
	};
    axios.get("/api/shop").then(res=>{
        this.bricklist=res.data[0].brick,
        this.parts=res.data[0].parts
    });
    
  },
  methods:{
    handleClick(id,name,pic,url){
        document.documentElement.scrollTop = 0;
        router.push({name: 'details' , query: {oppoid:id , oppo:name , pic:pic , url:url}})
    },
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
#shopping{
	font-size: 0.16rem;
	width: 100%;
	box-sizing: border-box;
	position: relative;
    top:0;

    .logos{
		width:100%;
		img{
			display: block;
			width:100%;
		}
	}
	.box-brick{
		width: 100%;
		padding: 0.2rem 0;
		background: #fff;
		height: 14rem;
		.brick-m{
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			padding: 0 0.12rem;

		.bar{
				float: left;
				border: 0.01rem solid #ccc;
				width: 1.435rem;
				height: 2.8rem;
				padding: 0.5rem 0.15rem 0.15rem 0.15rem;
				position: relative;
				.one{
					position: absolute;
					top:0;
					right:0;
					width: 0.44rem;
					height: 0.48rem;
				}
				.two{
					display: block;
					width: 1.45rem;
					height: 1.45rem;
					margin: 0.2rem auto;
				}
				a{
					display: block;
					width: 100%;
					height: 0.24rem;
					text-align: center;
				}
				h3{
					position: absolute;
					bottom: 0.2rem;
					right: 0.45rem;
	    			color: #1f8657;
	    			font-size: 0.2rem;
				}
				div{
					display: block;
					width: 1.45rem;
					position: absolute;
					bottom: 0.2rem;
	    			color: #1f8657;
	    			font-size: 0.2rem;
	    			text-align: center;
				}
			}
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
	
}
</style>
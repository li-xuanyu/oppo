<template>
	<div id="details">
		<swipe class="my-swipe" :showIndicators="false">
		  <swipe-item class="item" v-for="(data,index) in looplist" :key="index">
		  	 <img :src="data.url"/>
		  </swipe-item>
		</swipe>
		<div class="fenye">
			<span>1</span>/4
		</div>
		<div class="name">
            <h1>{{this.$route.query.oppo}}</h1>
            <h3>撞出新红蓝！</h3>
            <div class="price">￥{{this.$route.query.pic}}.00</div>
        </div>
        <div class="attributes">
        	<span>已选</span>
        	<p>巴萨限量版 / 全网通 / 4G+64G <a> 1件</a></p>
        	<h4></h4>
        </div>
        <div class="attributes">
        	<span>赠品</span>
        	<p>运动蓝牙耳机QY7 白色</p>
        	<h4></h4>
        </div>
        <div class="attributes">
        	<span>服务</span>
        	<p>请选择延保、屏碎保、意外保</p>
        	<h4></h4>
        </div>
        <div class="attributes">
        	<span>分期</span>
        	<p class="red">购买R系列 专享3、6、12期免息</p>
        </div>
        <div class="fenqi">
        	<img src="http://shopfs.myoppo.com/shop/assets/images/huabei-mobile-more.png"/>
        </div>
        <div class="ulList">
            <ul class="list" :class="{tops:top}">
            	<li><a class="lis">商品详情</a></li>
                <li><a>产品规格</a></li>
                <li><a>用户评价(200)</a></li>
            </ul>
        </div>
        <div class="oppo-R11">
        	<div class="bars">
        		<img src="http://static.oppo.com/archives/201708/20170824010858599e66ae14327.jpg" />
        	</div>
        	<img v-for="(data,index) in oppolist" :key="index" :src="data.url" >
        </div>
        <div class="carts">
        	<img src="http://shopfs.myoppo.com/shop/mobile/images/icon-advisory.png?201761150923"></img>
        	<span @click="handleClick" class="cart">加入购物车</span>
        	<span>立即抢购</span>
        </div>
        <div class="scrolltop" v-show="isTop" @click="handleTop">
    		<img src="http://shopfs.myoppo.com/cn/assets/images/backtop-icon.png" />
  		</div>
	</div>
</template>

<script>
import router from "../router";
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';
export default {

  name: 'details',

  data () {
    return {
    	isTop:false,
    	top:false,
    	looplist:[],
		oppolist:[]
    };
  },
  components:{
  	Swipe, 
  	SwipeItem
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	axios.get("/api/details").then(res=>{
  		this.looplist=res.data[0].looplist;
  		this.oppolist=res.data[0].oppolist;
  	})
  	window.onscroll=()=>{
  		document.documentElement.scrollTop>810?
  		this.top=true
  		:
  		this.top=false;
  		if(document.documentElement.scrollTop>360){
    		this.isTop=true;
    	}else{
    		this.isTop=false;
    	};
  	}
  	var span=document.querySelector(".fenye span");
  	var num= span.innerHTML;
  	setInterval(function(){
  		num++;
  		if(num>4){
  			num=1
  		}
  		span.innerHTML=num;
  	},3000)
  },
  methods:{
  	handleTop(){
  		var id=setInterval(()=>{
            document.documentElement.scrollTop-=200
            if(document.documentElement.scrollTop==0){
                clearInterval(id)
            }
        },100)
  	},
  	handleClick(){
  		alert("成功加入购物车")
  		var url=this.$route.query.url;
  		var name=this.$route.query.oppo;
  		var pic=this.$route.query.pic;

  		document.documentElement.scrollTop=0
  		router.push('/cart');
  		axios.post("/api/cartid",{
  			tel:localStorage.getItem("name"),
			name:name,
			number:1,
			url:url,
			pic:pic
  		}).then(res=>{
  			console.log(res.data)
  		})
  	}
  }
};
</script>

<style lang="scss" scoped>
#details{
	font-size: 0.2rem;
	width: 100%;
	position: relative;
	top:0.5rem;

	.my-swipe {
		box-sizing: border-box;
		width: 100%;
		height: 3.375rem;
		background: #fff;
		padding: 0 0.1825rem;
		img {
  			width: 3.375rem;
			height: 3.375rem;
		}
	}
	.fenye{
		background: #fff;
		width:100%;
		text-align: center;
		font-size: 0.14rem;
	}
	.name {
    	padding: 0.2rem 0.1rem 0.1rem;
		background: #fff;
		margin-bottom: 0.1rem;
    	h1{
    		font-size: 0.2rem;
    	}
    	h3{
    		font-size: 0.14rem;
    		padding-top: 0.05rem;
    		color: #646464;
    		margin-bottom: 0.1rem; 
    	}
    	.price{
    		border-top: 0.01rem solid #ccc;
    		line-height: 0.36rem;
    		font-size: 0.2rem;
    		color: #f30;
    	}
	}

	.attributes{
		box-sizing: border-box;
		padding: 0.1rem 0.1rem;
		background: #fff;
		margin-bottom: 0.05rem;
		font-size: 0.14rem;
		span{
			display: inline-block;
			color: #00925f;
		}
		p{
			margin-left: 0.12rem; 
			font-size: 0.15rem;
			display: inline-block;
			width: 75%;
			a{
				float: right;
			}
		}
		h4{
			width: 0.12rem;
			height: 0.2rem;
			display: inline-block;
			float: right;
			background: url(http://shopfs.myoppo.com/shop/mobile/images/attribute-arrow-icon.png) no-repeat;
			background-size: 100% 100%;
		}
		.red{
			color: #f30;
		}	
	}

	.fenqi{
		width: 100%; 
		margin: 0.15rem 0 0.1rem;
		img{
			width: 100%;
		}
	}
	.ulList{
        width: 100%;
        height: 0.5rem;

        .list{
            width: 100%;
            height: 0.5rem;
            background: #eee;
            text-align: center;
            font-size: 0.16rem;
            background: #fff;
            border-bottom: 0.01rem solid #ccc;

            li{
                width: 32% ;
                float:left;
                height: 0.5rem;

            }
            a{
            	display: inline-block;
            	height: 0.47rem;
            	line-height: 0.47rem;
            	border-bottom: 0.03rem solid #fff;
            }
            .lis{
                border-bottom: 0.02rem solid #1f8657;
                color: #1f8657;
                font-weight: 600;
            }
            li:last-of-type{
            	width: 36% ;
            }
        }
    }
	
	.tops{
		position:fixed;
		top:0;
		z-index: 162;
	}

	.bars{
		position: relative;
		top:0;
		width: 100%;
		padding: 0.1rem 0;
		background: #fff;
 		img{
 			float: left;
			width: 100%;
			height: 0.05rem; 
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

	.carts{
		width: 100%;
		height: 0.4rem;
		position: fixed;
		bottom:0;
		left:0;
		padding: 0.1rem 0;
		background: #fff;
		z-index: 20;
		img{
			float: left;
			display: inline-block;
			width: 0.52rem;
			height: 0.4rem;
			margin: 0 0.1rem; 
		}
		span{
			float: left;
			display: inline-block;
			height: 0.4rem;
			width: 1.4rem;
			text-align: center;
			line-height: 0.4rem;
			color: #fff;
    		background-color: #fb5e5e;
    		border-radius: 0.05rem;
    		font-size: 0.14rem;
			margin-right: 0.1rem;
		}
		.cart{
			color: #00925f;
    		background-color: #d4eee1; 
    		
		}
	}

	.scrolltop{
 		width: 0.48rem;
 		height: 0.48rem;
 		font-size: 0.2rem;
 		position:fixed;
 		right: 0.15rem;
 		bottom: 0.6rem;
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
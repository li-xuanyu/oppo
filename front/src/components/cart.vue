<template>
<div id="cart">
	<div class="wrapper">
		<div class="brick">
			<ul class="steps">
				<li class="active">购物车<i></i></li>
				<li>填写订单<i></i></li>
				<li>支付</li>
			</ul>
			<ul class="gradient">
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="cart-reversion">
			<div class="fl">
    	    	<a class="logs" :class="{choosed:isShow}" @click="handleClick">.</a>
    	    	<a class="check">全部</a>               
    		</div>
    		<div class="guang" v-show="cartlist.length>0?false:true">
    			购物车空空的，去<span class="greed" @click="handleTo">逛逛</span>吧
    		</div>
    		<div class="cart-product" v-show="cartlist.length>0?true:false">
    			<div class="description" v-for="(data,index) in cartlist" :key="index">
    				<input type="checkbox" class="logs" v-model="numbers" :value="data" />
    				<img :src="data.url"/>
    				<h3>{{data.name}}</h3>
    				<p>巴萨限量版|全网通|64G</p>
    				<span class="pic l">￥{{data.pic}}.00</span>
    				<span class="remove r rem" @click="handleRemove(index)"></span>
    				<div class="num r">
    					<span class="prep" @click="handlePrep(index)">-</span>
    					<span class="nums" v-model="count">{{data.number}}</span>
    					<span class="add" @click="handleAll(index)">+</span>
    				</div>
    			</div>
    			<div class='cart-fee'>
    			    <ul>
    			      <li>
    			        <span class='cart-fee-title'>商品数量：</span>
    			        <span class='cart-fee-data total-amount'>{{nums}}</span>
    			      </li>
    			      <li>
    			        <span class='cart-fee-title'>小计：</span>
    			        <span class='cart-fee-data total-fee'>￥{{all}}.00</span>
    			      </li>
    			      <li class='cart-alipay-hb'>
    			        <span class='cart-fee-title'><i class='icon-hb'>.</i> 订单满600可使用花呗分期3/6/12期</span>
    			      </li>
    			    </ul>
    			</div>
    		</div>
    		<div class="shop" @click="handleTo">
    			<a>继续购买 >> </a>
    		</div>
			
		</div>
	</div>
	<div class="jiesuan">
		结 算
	</div>
	<Sidebottom></Sidebottom>
	
</div>
</template>

<script>
import router from "../router"
import Sidebottom from "./footer";
export default {

  name: 'cart',
  components:{
    Sidebottom
  },
  data () {
    return {
    	isShow:false,
    	cartlist:[],
    	numbers:[],
    	count:[]
    };
  },
  methods:{
  	handleClick(){
  		console.log(1)
  		this.isShow=!this.isShow;
  		if(this.isShow==true){
  			this.numbers=true
  		}else{
  			this.numbers=[];
  		}
  		
  	},
  	handleAll(index){
  		var nums=document.querySelectorAll(".num .nums");
  		nums[index].innerHTML++;

  		//console.log(nums[index].innerHTML);
  		axios.post("/api/cartAdd",{
  			tel:this.cartlist[index].tel,
  			name:this.cartlist[index].name,
  			number:nums[index].innerHTML
  		}).then(res=>{
  			console.log(res.data)
  		})
  		setTimeout(()=>{
				axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  				//console.log(res.data[0]);
  				this.cartlist=res.data;
  			})
  		},200)
  	},
  	handlePrep(index){
  		var nums=document.querySelectorAll(".num .nums");
  		nums[index].innerHTML--;
  		if(nums[index].innerHTML<1){
			nums[index].innerHTML=1
  		}
  		axios.post("/api/cartAdd",{
  			tel:this.cartlist[index].tel,
  			name:this.cartlist[index].name,
  			number:nums[index].innerHTML
  		}).then(res=>{
  			console.log(res.data)
  		})
  		setTimeout(()=>{
				axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  				//console.log(res.data[0]);
  				this.cartlist=res.data;
  			})
  		},200)
  	},
  	handleTo(){
  		router.push("/shopping")
  	},
  	handleRemove(index){
  		//console.log(nameRemove);
  		axios.post("/api/cartRem",{
  			tel:this.cartlist[index].tel,
  			name:this.cartlist[index].name,
  			url:this.cartlist[index].url,
  			pic:this.cartlist[index].pic,
  			number:this.cartlist[index].number
  		}).then(res=>{
  			console.log(res.data)
  		});
  		setTimeout(()=>{
				axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{
  				//console.log(res.data[0]);
  				this.cartlist=res.data;
  			})
  		},100)

  	}
  },
  mounted(){
  	document.documentElement.scrollTop=0;
  	axios.get("/api/cart?tel="+localStorage.getItem("name")).then(res=>{  
  		console.log(res.data);
  		this.cartlist=res.data;
  	})
  },
  computed:{
  	nums:function(){
        var sum = 0;
        if(this.numbers==true){
        	for(var i in this.cartlist){
          		sum+=parseInt(this.cartlist[i].number);
        	}
        }else{
        	for(var i in this.numbers){
          		sum+=parseInt(this.numbers[i].number);
        	}
        }
        
        return sum;

    },
    all:function(){
        var sum = 0;
        if(this.numbers==true){
        	for(var i in this.cartlist){
          		sum+=parseInt(this.cartlist[i].number*this.cartlist[i].pic);
    		} 
        }else{
        	for(var i in this.numbers){
          		sum+=parseInt(this.numbers[i].number*this.numbers[i].pic);
        	}
        }
        
    	return sum;
    }
  }
};
</script>

<style lang="scss" scoped>
#cart{
	width: 100%;
	position: relative;
	top:0.5rem;
	font-size: 0.14rem;

	.wrapper {
		position: relative;
	    padding: 0 0.075rem;
	    width: 100%;
	    height: 100%;
	    box-sizing: border-box;
		padding-bottom: 0.2rem;
		

	    .brick {
	    	width: 100%;
	    	height: 100%;
    		background: #fff;
			
			.steps {
				width: 100%;
			    border: 0.01rem solid #E2E2E2;
			    border-bottom: none;
				height: 0.76rem;
			    .active {
			    	position: relative;
				    background: #fff;
				    color: #000;
				    i{
				    	display: inline-block;
				    	width: 0.2rem;
				    	height: 0.76rem;
				    	position:absolute;
				    	right: -0.2rem;
				    	z-index: 1;
				    	background: url(http://shopfs.myoppo.com/shop/assets/images/steps-sprite.png?999) no-repeat -11px -10px ;

				    }
				}

				li {
					float: left;
				    display: inline-block;
				    width: 33.3%;
				    text-align: center;
				    height: 0.76rem;
				    line-height: 0.76rem;
				    position: relative;
				    background: #f7f7f7;
				    color: #ccc;

				}
				li:nth-of-type(2){
					i{
				    	display: inline-block;
				    	width: 0.2rem;
				    	height: 0.76rem;
				    	position:absolute;
				    	right: -0.2rem;
				    	z-index: 10;
				    	background: url(http://shopfs.myoppo.com/shop/assets/images/steps-sprite.png?999) no-repeat -65px -13px ;
					}
				}
			}
			.gradient{
				width: 100%;
				height: 0.05rem;
				border: 0.01rem solid #ccc;
				li{
					width: 33.3%;
					height: 0.05rem;
				}
				li:nth-of-type(1){
					background: linear-gradient(to right,#f7a847 0,#e85446 100%);
				}
			}


		}
	
	.cart-reversion{
		height: 100%;
		width: 100%;
		.guang{
			border-bottom: 0.02rem solid #ccc;
			border-top: 0.02rem solid #ccc;
			background: #f7f7f7;
			width: 100%;
			height: 0.5rem;
			line-height: 0.5rem;
			text-align: center;
			font-size: 0.24rem;
			font-weight: 600;
			.greed{
				color: #2aad6f;
			}
		}
		.fl{
			position: relative;
			box-sizing: border-box;
			background: #fff;
			padding: 0.2rem 0.1rem ;
			height: 100%;
			width: 100%;
    		color: #898989;
    		
    		.logs{
    			display: inline-block;
    			width: 0.16rem;
    			height: 0.16rem;
    			border: 0.01rem solid #ccc;
    			background: #fff;
    			margin-right: 0.1rem;
    			color: #fff;
    		}
    		.choosed {
    			display: inline-block;
			    background: url(https://id.oppo.com/resources/images_wap/checked.png) no-repeat;
			    width: 0.16rem;
    			height: 0.16rem;
    			background-size: 0.16rem auto;
			}
			.check{
				width: 0.5rem;
				display: inline-block;
				font-size: 0.16rem;
			}
				
		}
	}	
	
	.cart-product{
		position: relative;
		box-sizing: border-box;
		padding: 0.1rem 0.1rem ;
		height: 100%;
		width: 100%;
    	color: #3e3e3e;
    	background: #fafafa;

    	.description{
    		width: 100%;
    		height: 0.81rem;
    		padding: 0.4rem 0;
    		border-bottom: 1px solid #ccc;

    		.logs{
    			float: left;
    			display: inline-block;
    			width: 0.16rem;
    			height: 0.16rem;
    			border: 0.01rem solid #ccc;
    			background: #fff;
    			margin-right: 0.1rem;
    			color: #fff;
    		}
    		.choosed {
    			display: inline-block;
			    background: url(https://id.oppo.com/resources/images_wap/checked.png) no-repeat;
			    width: 0.16rem;
    			height: 0.16rem;
    			background-size: 0.16rem auto;
			}

			img{
				float: left;
				width: 0.7rem;
				height: 0.7rem;
				margin-right: 0.1rem;
			}

			h3{
				float: left;
				width: 1.9rem;
				height: 0.17rem;
				font-size: 0.14rem;
				color: #3e3e3e;
			}

			p{
				float: left;
				width: 1.7rem;
				height: 0.17rem;
				font-size: 0.14rem;
				margin: 0.1rem 0;
			}

			.remove{
				display: inline-block;
				width: 0.34rem;
				height: 0.34rem;
				background: #fff;
				position: absolute;
				right: 0.1rem;
			}

			.rem{
				display: inline-block;
				width: 0.34rem;
				height: 0.34rem;
				background: url(http://shopfs.myoppo.com/shop/assets/images/sprite-icons.svg) no-repeat -179px -761px ;
			}

			.pic{
				width: 1rem;
			}
			.num{
				width: 0.92rem;
				height: 0.28rem;
				border: 0.01rem solid #ccc;
				border-radius: 0.05rem;

				span{
					float: left;
					width: 33.3%;
					height: 0.28rem;
					text-align: center;
					line-height: 0.28rem;
				} 
			}
    	}
	}		
	
	.cart-fee {
    	padding: 0.2rem 0.1rem;
    	background: #fff;
    	ul{
    		width: 100%;
    		height: 0.83rem;
    		li{
    			width: 100%;
    			margin-top: 0.1rem;
    		}
    		.cart-alipay-hb span{
    			width: 100%;

    			.icon-hb {
    				margin: 0 0.05rem;
    				color: #fff;
			    	width: 0.19rem;
			    	height: 0.19rem;
			    	background: url(http://shopfs.myoppo.com/shop/assets/images/icon-hb.png) no-repeat left;
			    	display: inline-block;
				}
    		}
    		li span {
			    font-size: 0.16rem;
			    text-align: right;
			    display: inline-block;
			}
			.cart-fee-title {
			    float: left;
			    width: 50%;
			    text-align: left;
			}
			.cart-fee-data {
			    width: 50%;
			}
			.total-fee {
			    color: #e20000;
			    font-size: 0.18rem;
			}
			
    	}

	}

	.shop{
		background: #f7f7f7;
		width: 100%;
		padding: 0.1rem 0.1rem;
		box-sizing: border-box;
		a{
			font-size: 0.16rem;
			color: #00925f;
		}
	}



	}

	.jiesuan{
		position: fixed;
		bottom:0;
		z-index: 2;
		width: 100%;
		height: 0.5rem;
		line-height: 0.5rem;
		text-align: center;
		background: #2aad6f;
		color: #fff;
		font-size: 0.2rem;
	}
}

</style>
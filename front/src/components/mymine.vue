<template>
	<div class="my">
		<div class="viewport">
			<div class="user-information">
				<div class="user-img">
					<div>
						<img src="http://shopfs.myoppo.com/cn/media/images/icon-menu-user.png"/>
					</div>
				</div>
				<p class="user-name">{{name}}</p>
				<p class="user-level">普卡会员</p>
			</div>
			<div class="user-order">
				<a href="" class="allorder">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-order-6554dcaada.png"/>
					全部订单
					</span>

				</a>
				<a href="" class="wait-pay">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-pay-f87d302e5e.png"/>
					代付款
					</span>
				</a>
				<a href="" class="wait-shouhuo">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-shouhuo-cd53963af4.png"/>
					待收货
					</span>
				</a>
				<a href="" class="wait-return">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-return-7b44cdea8c.png"/>
					退换货
					</span>
				</a>
			</div>	
			<div class="user-money">
				<a>
				<strong>0</strong>
				<span>积分</span>
				</a>
				<a>
				<strong>0.00</strong>
				<span>银元</span>
				</a>
				<a>
				<strong>0.00</strong>
				<span>余额</span>
				</a>
			</div>
			<div class="user-other">
				<a class="yt-uc-card">
					<img src="https://h5.yintai.com/m/images/index/user-center-img-3-47c1a8ce6f.png"/>
					<div class="user-center-catlog">
						<span class="yt-center-title">oppo卡</span>
						<span class="yt-center-val">以登记0张</span>
					</div>
				</a>
				<a class="yt-uc-card">
					<img src="https://h5.yintai.com/m/images/index/user-center-img-1-b45a9b7992.png"/>
					<div class="user-center-catlog">
						<span class="yt-center-title">优惠券</span>
						<span class="yt-center-val">0张有效</span>
					</div>
				</a>
				<a class="yt-uc-card">
					<img src="https://h5.yintai.com/m/images/index/user-center-img-2-700ce37aff.png"/>
					<div class="user-center-catlog">
						<span class="yt-center-title">oppo账户</span>
						<span class="yt-center-val">{{name}}</span>
					</div>
				</a>
				<a class="yt-uc-card">
					<img src="https://h5.yintai.com/m/images/index/user-center-img-4-432d596d3b.png"/>
					<div class="user-center-catlog">
						<span class="yt-center-title">手机号</span>
						<span class="yt-center-val">{{name}}</span>
					</div>
				</a>
			</div>
			<div class="user-other boder-top-bottom">
    		    <a class="yt-uc-shoucang yt-uc-sign-title">
    		    	<i class="yt-card"><img src="https://h5.yintai.com/m/images/index/user-center-img-7-3fc29d7205.png" alt=""></i>
    		        <div class="user-center-catlog"><span class="yt-center-title">收藏</span></div>
    		    </a>
    		    <a class="yt-uc-lookhis yt-uc-sign-title">
    		    	<i class="yt-card"><img src="https://h5.yintai.com/m/images/index/user-center-img-8-b3238d9bad.png" alt=""></i>
    		        <div class="user-center-catlog"><span class="yt-center-title">浏览记录</span></div>
    		    </a>
    		    <a class="yt-uc-paypass yt-uc-sign-title">
    		    	<i class="yt-card"><img src="https://h5.yintai.com/m/images/index/user-center-img-9-4d3cc040c3.png" alt=""></i>
    		        <div class="user-center-catlog"><span class="yt-center-title">支付密码</span></div>
    		    </a>
    		    <a class="yt-uc-savadd yt-uc-sign-title">
    		    	<i class="yt-card"><img src="https://h5.yintai.com/m/images/index/user-center-img-10-1b0480e288.png" alt=""></i>
    		        <div class="user-center-catlog"><span class="yt-center-title">收货地址</span></div>
    		    </a>
    		</div>
    		<div class="user-common">
        		<a class="hc-helpCenter" href="https://h5.yintai.com/helpcenter/index.html#helpcenter?type=html5">
        			帮助中心
        		    <em></em>
        		</a>
        		<a class="yintai-tel tui" @click="handleClick">
        			退出账户
        		</a>
    		</div>
		</div>
    </div>
</template>

<script>
import router from "../router"
export default {

  name: 'mymine',

  data () {
    return {
    	name:''
    };
  },
  mounted(){
  	this.name=localStorage.getItem("name")
  	
  },
  methods:{
  	handleClick(){
  		this.name=localStorage.removeItem("name");
  		alert("退出账户");  
  		router.push("/mine");
  	}
  }
};
</script>

<style lang="scss" scoped>
.my{
	width: 100%;
	position: relative;
	top:0.5rem;
	font-size: 0.16rem;

	.viewport {
    	width: 100%;

    .user-information {
    	background-color: #2aad6f; 
    	width: 100%;
    	height: 1.3rem;
    	position: relative;

    	.user-img {
    		width: 100%;
    		height: 0.7rem;
    		text-align: center;
    		padding: 0.1rem 0 0.08rem;
			
			div{
				display: inline-block;
				margin: 0 auto;
    			width: 0.7rem;
    			height: 0.7rem;
    			border-radius: 0.35rem;
    			background:#fff;
    			img {
    				display: inline-block;
    				margin: 0.05rem auto;
    				width: 0.6rem;
    				height: 0.6rem;
    				border-radius: 0.3rem;

				}
			}
    		
		}

		.user-name {
    		text-align: center;
    		color: #fff;
    		font-size: 0.16rem;
    		margin: 0.1rem 0;
		}

		.user-level {
    		position: absolute;
    		right: 0.1rem;
    		top: 0.1rem;
    		color: #710028;
    		font-size: 0.14rem;
		}
	}
	.boder-top-bottom, .user-common, .user-logout, .user-order {
    	border-top: 0.01rem solid #d5d5d5;
	}
	.user-common, .user-logout, .user-money, .user-order, .user-other a {
    	border-bottom: 0.01rem solid #d5d5d5;
	}
	.user-order {
		width: 100%;
		height: 0.79rem;
    	background-color: #fff!important;
	}
	.user-order a {
    	width: 25%;
    	margin: 0.15rem 0 0.15rem -0.01rem;
    	color: #333;
    	font-size: 0.14rem;
    	
	}
	.user-money a, .user-order a, .user-other a {
    	text-align: center;
    	border-left: 0.01rem solid #d5d5d5;
    	float: left;
    	text-decoration: none;
	}
	.user-order img {
		display: block;
		width: 0.3rem;
    	margin: 0 auto;
    	margin-bottom: 0.05rem;
	}
	.user-money {
		height: 0.62rem;
    	margin-top: 0.1rem;
    	background:#fff;
    	font-size: 0.14rem;
	}
	.user-money a {
    	width: 33.3%;
    	margin: 0.1rem 0 0.1rem -0.01rem;
    	padding: 2px 0;
	}
	.user-money a strong {
    	display: block;
    	color: #333;
    	font-weight: 500;
    	margin-bottom: 0.02rem;
	}
	.user-money a span {
    	display: block;
    	color: #666;
    	font-size: 0.12rem;
	}	
	.user-other {
    	background-color: #fff;
    	margin-bottom: 0.1rem;
    	height: 1.16rem;
	}
	.user-other a {
    	width: 49%;
    	padding: 0.1rem 0;
    	color: #333;
    	display: flex;
    	display: -webkit-flex;
    	font-size: 0.14rem;
	}
	.user-other a img {
		display: block;
		margin: 0 auto;
    	width: 0.26rem;
    	height: 0.2rem;
    	margin: 0.1rem 0.1rem 0 0.4rem;
	}
	.user-center-catlog {
		margin: 0 auto;
    	flex: 1;
    	margin-left: 0.05rem;
	}
	.user-other a span {
    	display: block;
    	position: relative;
    	text-align: left;
	}
	.user-other a.yt-uc-card i {
	    width: 40%;
	    height: 0.36rem;
	    margin-right: 0.5rem;
	}
	.user-center-catlog, .user-other a i {
	    display: inline-block;
	    vertical-align: middle;
	}
	.user-other a.yt-uc-shoucang i img{
    	width: 0.25rem ;
    	height: 0.19rem;
	}
	.user-center-catlog {
	    flex: 1;
	    margin-left: 0.05rem;
	}
	.yt-uc-sign-title .yt-center-title {
	    height: 0.36rem;
	    line-height: 0.38rem;
	}
	.user-common a {
		background-color: #fff;
	    display: block;
	    text-decoration: none;
	    color: #666;
	    font-size: 0.14rem;
	    position: relative;
	}
	.user-common .tui{
		background: #2aad6f; 
		text-align: center;
		color: #fff;
		line-height: 0.4rem;
		height: 0.4rem;
		margin-bottom: 0;
	}
	.user-common a{
		margin-bottom: 0.1rem;
	    line-height: 0.26rem;
	    padding: 0 0.1rem;
	    border-bottom: 0.01rem solid #ccc;
	}
	.user-common a em {
	    display: block;
	    position: absolute;
	    width: 0.08rem;
	    height: 0.14rem;
	    top: 0.06rem;
	    right: 0.1rem;
	    background: url(https://h5.yintai.com/m/images/index/bai-12-d26f311133.png) no-repeat;
	    background-size: 100% auto;
	}
}
}
</style>
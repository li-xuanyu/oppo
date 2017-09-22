<template>
	<div id="sidebottom">
		<div class="contact-tel">
			<div class="left l">
				<p class="one">4001-666-888</p>
				<p class="two">(24小时全国服务热线)</p>
			</div>
			<div class="right r">
				<img src="http://shopfs.myoppo.com/cn/assets/images/content/others/icon-online.png" />
			</div>
		</div>
		<div class="wrapper">
			<div class="footer-linear"></div>
		</div>
		<div class="footer-info">
			<div class="footer-focus">
				<p class="mine">
					<span class="one">关注我们：</span>
					<a href="http://weibo.com/oppo" class="two"><i></i></a>
					<span class="three" @click="handleWei"><i></i>
					<img src="http://shopfs.myoppo.com/cn/media/images/qrcode-wx.jpg" class="wei" v-show="wei"/>
					</span>
					<span class="four" @click="handleZhi"><i></i>
					<img src="http://shopfs.myoppo.com/cn/media/images/qrcode-fwc.jpg" class="zhi" v-show="zhi"/>
					</span>
				</p>
			</div>
			<p class="copy">© 2005 - 2017 OPPO 版权所有 粤ICP备08130115号-1 联系方式：4001-666-888</p>
			<div class="cation"><i></i></div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'sidebottom',

  data () {
    return {
    	wei:false,
    	zhi:false
    };
  },
  methods:{
  	handleWei(){
  		this.wei=!this.wei; 
  		this.zhi=false; 		
  	},
  	handleZhi(){
  		this.zhi=!this.zhi;
  		this.wei=false;
  	}
  }
};
</script>

<style lang="scss" scoped>
#sidebottom{
	width: 100%;
	font-size: 0.16rem;
	position: relative;

	.contact-tel{
		width: 100%;
		padding: 0.24rem 0;
		height: 0.6rem;

		.left{
			width: 49%;
			text-align: center;
			margin-left: 0.05rem;
			.one{
				font-size: 0.26rem;
			}
			.two{
				font-size: 0.16rem;
			}
		}
		.right{
			width: 49%;
			img{
				width: 90%;
				display: block;
				margin: 0.1rem auto;
			}
		}
	}

	.wrapper {
    	width: 100%;
    	
    	.footer-linear {
    		width: 95%;
    		display: block;
    		margin: 0 auto;
    		height: 0.02rem;
    		background-color: #cfcfcf;
		}
	}

	.footer-info{
		width: 100%;
		padding: 0.15rem 0;
		height: 1.6rem;
		color: #7b7b7b;

		.footer-focus{
			width: 3.51rem;
			margin: 0.2rem auto;
			height: 0.3rem;
			position: relative;

			span{
				margin-right: 0.15rem;
			}
			.one{
				display:inline-block;
				height: 0.5rem;
				line-height: 0.5rem;
				position: absolute;
				top:0;
				left:0;
			}
			.two{
				display: inline-block;
				width: 0.3rem;
    			height: 0.3rem;
    			position: absolute;
				top: 0.1rem;
				left: 1rem;
				background-color: #d9595c;
				border-radius: 0.15rem;
    			i{
    				display: inline-block;
    				width: 0.25rem;
    				height: 0.25rem;
    				background: url(http://shopfs.myoppo.com/cn/assets/images/sprite-icons.svg) no-repeat -1.29rem -2.41rem;

					border-radius: 0.125rem;
					margin-top: 0.025rem;
					margin-left: 0.025rem;
    			}
				
				
			}
			.three{
				display: inline-block;
				width: 0.3rem;
    			height: 0.3rem;
    			position: absolute;
				top: 0.1rem;
				left: 1.5rem;
				background-color: #00925f;
				border-radius: 0.15rem;

    			i{
    				display: inline-block;
    				width: 0.25rem;
    				height: 0.25rem;
    				background: url(http://shopfs.myoppo.com/cn/assets/images/sprite-icons.svg) no-repeat -1.28rem -3.5rem;

					border-radius: 0.125rem;
					margin-top: 0.025rem;
					margin-left: 0.025rem;
    			}
				
				.wei{
					display: block;
					position: absolute;
					top: -2.25rem;
					left: -0.5rem;
				}
				
			}
			.four{
				display: inline-block;
				width: 0.3rem;
    			height: 0.3rem;
    			position: absolute;
				top: 0.1rem;
				left: 2rem;
    			i{
    				display: inline-block;
    				width: 0.25rem;
    				height: 0.25rem;
    				background: url(http://shopfs.myoppo.com/cn/assets/images/sprite-icons.svg) no-repeat -0.87rem -3.15rem;

					border-radius: 0.125rem;
					margin-top: 0.02rem;
					margin-left: 0.02rem;
    			}
				background-color: #1caceb;
				border-radius: 0.15rem;
				.zhi{
					display: block;
					position: absolute;
					top: -2.25rem;
					left: -0.5rem;
				}
				
			}
		}

		.copy{
			width: 3.51rem;
			text-align: center;
			margin: 0.25rem auto;
			font-size: 0.15rem;
		}
		.cation{
			display: block;
			width: 0.24rem;
			height: 0.25rem;
			margin: 0 auto;
			i{
				display: block;
				width: 0.24rem;
				height: 0.25rem;
				background: url(http://shopfs.myoppo.com/cn/assets/images/content/others/icon-identification.png) no-repeat left;
			}
		}

	}

}
</style>
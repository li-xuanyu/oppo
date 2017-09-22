<template>
	<div id="product">
		<div class="logo">
			<img src="http://static.oppo.com/archives/201706/20170611120637593c1e7119de6.jpg"/>
		</div>
        <div class="ulList">
            <ul class="list" :class="{tops:isTop}">
                <li :class="{lis:one}"  @click="handleOne(362)">R系列</li>
                <li :class="{lis:two}"  @click="handleOne(1211)">A系列</li>
                <li :class="{lis:three}" @click="handleOne(2070)">Find系列</li>
                <li :class="{lis:four}" @click="handleOne(2456)">N系列</li>
            </ul>
        </div>
		
		<div class="brick">
			<div class="brick-item" v-for="data in Rlist" :key="data.id" @click="handleClick(data.url)">
				<div class="brick-img">
					<img :src="data.url"/>
				</div>
				<div class="brick-content">
					<div class="brick-title">{{data.name}}</div>
					<p class="brick-desc">{{data.action}}</p>
					<a class="brick-learn">了解产品</a>
				</div>

			</div>
		</div>
		<div class="brick-mobile-more">
          <a>R系列更多产品  >></a>
        </div>
        <div class="brick">
			<div class="brick-item" v-for="data in Alist" :key="data.id" @click="handleClick(data.id,data.name)">
				<div class="brick-img">
					<img :src="data.url"/>
				</div>
				<div class="brick-content">
					<div class="brick-title">{{data.name}}</div>
					<p class="brick-desc">{{data.action}}</p>
					<a class="brick-learn">了解产品</a>
				</div>

			</div>
		</div>
		<div class="brick-mobile-more">
          <a>A系列更多产品  >></a>
        </div>
        <div class="brick">
			<div class="brick-item" v-for="data in Findlist" :key="data.id" @click="handleClick(data.url)">
				<div class="brick-img">
					<img :src="data.url"/>
				</div>
				<div class="brick-content">
					<div class="brick-title">{{data.name}}</div>
					<p class="brick-desc">{{data.action}}</p>
					<a class="brick-learn">了解产品</a>
				</div>

			</div>
		</div>
		<div class="oppo-feature">
			<img src="http://static.oppo.com/archives/201601/201601211001243YG3UFpx23RdhMt0.jpg" />
			<img src="http://static.oppo.com/archives/201601/20160121100120Nobg0mg0q08c8ThO.jpg" />
		</div>
		<div class="other-link">
		    <a>对比手机</a>
		    <span>|</span>
		    <a>商城</a>
		    <span>|</span>
		    <a>产品使用</a>
		    <span>|</span>
		    <a>全部产品</a>
		</div>
		<div class="scrolltop" v-show="isTop" @click="handleTop">
    		<img src="http://shopfs.myoppo.com/cn/assets/images/backtop-icon.png" />
  		</div>
        <Sidebottom></Sidebottom>
	</div>

</template>

<script>
import router from "../router"
import Sidebottom from "./footer";
export default {

  name: 'product',
  components:{
    Sidebottom
  },
  data () {
    return {
    	isTop:false,
    	one:false,
    	two:false,
    	three:false,
    	four:false,
    	Rlist:[],
    	Alist:[],
    	Findlist:[]
    };
  },
  mounted(){
    document.documentElement.scrollTop=0;
    axios.get("/api/product").then(res=>{
        //console.log(res.data)
        this.Rlist=res.data[0].Rlist,
        this.Alist=res.data[0].Alist,
        this.Findlist=res.data[0].Findlist
    })
  	window.onscroll=()=>{
  		//console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop>360){
    		this.isTop=true;
    	}else{
    		this.isTop=false;
    	};
    	if(document.documentElement.scrollTop>360 && document.documentElement.scrollTop<1210){
    		this.one=true;
    	}else{
    		this.one=false;
    	};
    	if(document.documentElement.scrollTop>1210 && document.documentElement.scrollTop<2069){
    		this.two=true;
    	}else{
    		this.two=false;
    	};
    	if(document.documentElement.scrollTop>2069 && document.documentElement.scrollTop<2455){
    		this.three=true;
    	}else{
    		this.three=false;
    	};
    	if(document.documentElement.scrollTop>2455 && document.documentElement.scrollTop<2840){
    		this.four=true;
    	}else{
    		this.four=false;
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
  	},
  	handleOne(index){
  		document.documentElement.scrollTop=index
  	},
    handleClick(url){
        document.documentElement.scrollTop=0;
        router.push({name: 'intro' , query: { url:url, oppo: 'R11 热力红' }})
    }
  }
};
</script>

<style lang="scss" scoped>
#product{
	font-size: 0.16rem;
	width: 100%;
	box-sizing: border-box;
	position: relative;
    top:0.5rem;
	.logo{
		width:100%;
		img{
			display: block;
			width:100%;
		}
	}
    .ulList{
        width: 100%;
        height: 0.48rem;
        .list{
            width: 100%;
            height: 0.5rem;
            background: #eee;
            text-align: center;
            font-size: 0.16rem;
    
            li{
                width: 24.99%;
                float:left;
                height: 0.48rem;
                line-height: 0.48rem;
                border-bottom: 0.02rem solid #eee;
            }
            .lis{
                border-bottom: 0.02rem solid #1f8657;
                color: #1f8657;
                font-weight: 600;
            }
        }
    }
	
	.tops{
		position:fixed;
		top:0;
		z-index: 162;
	}

	.brick{
		width: 100%;

		.brick-item {
    		background-color: #fff;
    		width: 100%;
    		height: 1.48rem;
    		padding-top: 0.2rem;
    		padding-bottom: 0.2rem;
    		margin-bottom: 0.06rem;
    		border-bottom: #e3e2e2 solid 0.01rem;
    		box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.1);

    		.brick-img {
    			float: left;
    			width: 45%;

    			img {
    				display: block;
    				margin: 0 auto;
    				width: 1.28rem;
    				height: 1.48rem;
				}
			}
			.brick-content {
    			float: left;
    			width: 55%;

    			.brick-title {
    				text-align: center;
    				color: #141414;
    				font-size: 0.16rem;
    				margin-top: 0.35rem;
    				line-height: 0.2rem;
				}
				.brick-desc {
    				text-align: center;
    				color: #a0a0a0;
    				font-size: 0.12rem;
    				line-height: 0.18rem;
    				margin-top: 0.04rem;
				}
				.brick-learn {
    				display: block;
    				text-align: center;
    				color: #00925f;
    				font-size: 0.13rem;
    				width: 60%;
    				padding: 0.05rem;
    				margin: 0 auto;
    				margin-top: 0.15rem;
    				border: 0.01rem solid #00925f;
    				border-radius: 0.04rem;
				}
			}
			
    		
		}
	}

	.brick-mobile-more {
	    display: block;
	    background-color: #fff;
	    text-align: center;
	    color: #3c3c3c;
	    line-height: 0.6rem;
	    width: 100%;
	    margin-bottom: 0.12rem;
	    border-bottom: #e3e2e2 solid 0.01rem;
	    box-shadow: 0 0 0.05rem rgba(0, 0, 0, 0.1);

	}

	.oppo-feature{
		width: 100%;

		img{
			width: 100%;
		}
	}

	.other-link {
		width: 100%;
	    color: #1f8657;
	    text-align: center;
	    padding: 0.3rem 0 0.2rem 0;
	    font-size: 0.16rem;
	    height: 0.24rem;
	    background: #fff;

	    a {
		    width: 23.5%;
		    text-align: center;
		    display: block;
		    float: left;
		}
		span{
			float:left;
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
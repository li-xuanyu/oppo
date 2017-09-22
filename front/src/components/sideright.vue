<template>
	<div id="sideright" v-show="value" @click="handleClick">
		<ul>
			<router-link to="/"	tag="li">我的订单</router-link>
			<router-link to="/"	tag="li">配送地址</router-link>
			<router-link to="/"	tag="li">优惠券</router-link>
			<router-link to="/mine/my"	tag="li">账户信息</router-link>
			<router-link to="/cart"	tag="li">购物车</router-link>
			<router-link to="/mine"	tag="li">登录</router-link>
		</ul>
	</div>
</template>

<script>
export default {

  name: 'sideright',

  data () {
    return {

    };
  },
  props:["value"],
  methods:{
    handleClick(){
        this.$emit("event")
    }
  }
};
</script>

<style lang="scss" scoped>
#sideright{
	float: right;
	height: 3.05rem;
	width: 0.9rem;
	position: fixed;
	top: 0.6rem;
    right: 0.1rem;
	font-size: 0.18rem;
	opacity: 1;
    display: block;
    z-index: 21;
    background: rgba(255, 255, 255, 0.9);

    ul{
    	width: 0.9rem;
    	li{
    		margin: 0 0.05rem;
    		border-bottom: solid 1px #b1d7a8;
    		width: 0.8rem;
    		text-align: center;
    		color: #008b56;
    		font-size: 0.16rem;
    		line-height: 0.5rem;
    	}
    }
}
</style>
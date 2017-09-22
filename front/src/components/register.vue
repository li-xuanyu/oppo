<template>
<div class="login">
	<div class="logo">
		 注册OPPO账
    </div>
    <div class="login_area">
        <div class="login_form" >
            <div class="input_area">
                <input maxlength="11" type="text" class="username ico_input" placeholder="请输入手机号/用户名" />
                <div class="error_tip" id="info_username"></div>
            </div>
            <div class="input_area">
                <input type="password" class="pw pwd ico_input" placeholder="请输入帐"/>
                <div class="error_tip" id="info_pwd"></div>
            </div>
            <div class="input_area">
                <input type="password" class="pws pwd ico_input" placeholder="请确认密码"/>
                <div class="error_tip" id="info_pwd"></div>
            </div>
            <div class="fl">
                <a class="logs" :class="{choosed:isShow}" @click="handleClick"></a>
                <span class="check">已阅读并同意</span>
                <span class="gree">《OPPO帐号注册协议》</span>
                
            </div>
            <input type="submit" class="button mt30" value="立刻注册" @click="handleLogin"/>
                        
       	</div>
    </div>
    <div class="footer_info">
      <p>© 2005 - 2017 东莞市永盛通信科技有限公司 版权所有 粤ICP备08130115号-1</p>
    </div>
</div>
</template>

<script>
import router from "../router"
export default {

  name: 'login',

  data () {
    return {
    	isShow:true
    };
  },
  methods:{
  	handleClick(){
  		this.isShow=!this.isShow;
  	},
  	handleLogin(){
		var user=document.querySelector(".input_area .username").value;
		var password=document.querySelector(".input_area .pw").value;
    	var pConfirm=document.querySelector(".input_area .pws").value;

    	checkUser();
    	checkPw();
    	if(checkUser()===true && checkPw()===true){
    		axios.post('/api/login',{
    			tel:user,
    			password:password
    		}).then(res=>{
				if(res.data){
					alert("注册成功");
					router.push("/mine");
				}
				else{
					alert("该用户名已被注册");
				}
    		})
    	}	

    	function checkUser(){
    	if (user === '') {
       	alert("用户名不能为空");
       	return false;
    	}
   	 	else if (!(/^1(3|4|5|7|8)\d{9}$/.test(user))) {
       	alert("用户名为11位手机号");
       	return false;
    	}
    	else {
    	   	return true;
    	}
		}
    	function checkPw(){
    	if(password===''){
    	    alert("密码不能为空");
    	    return false;
    	}
    	else if(!(/^(?!\d+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(password))){
    	    alert("密码为6到12位，英文+数字");
    	    return false;
    	}
    	else if(!(password===pConfirm)){
    	    alert("密码前后不一致");
    	    return false;
    	}
    	else{
    	    return true;
    	}
    	}
		}
  }
};
</script>

<style lang="scss" scoped>
.login{
	width: 100%;
	position: relative;
	top:0.5rem;
	font-size: 0.16rem;

	.logo{
		width: 100%;
		text-align: center;
		height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.3rem;
		color: #1f8657;
		margin: 0.2rem auto; 
	}
	.login_area {
    	width: 84%;
    	margin: 0.46rem auto 0.1rem;

		.login_form{
			width: 100%;

			.input_area {
    			position: relative;
			}
			.input_area input {
			    border-radius: 0.03rem;
			    display: block;
			    height: 0.42rem;
			    line-height: 0.2rem;
			    -webkit-box-sizing: border-box;
			    padding: 0.11rem 0.14rem 0.11rem 0.14rem;
			    font-size: 0.14rem;
			    background: #fff;
			    width: 100%;
			    border: 0.01rem solid rgba(219, 219, 219, .5);
			}
			.error_tip {
				height: 0.1rem;
			    font-size: 0.11rem;
			    color: red;
			    padding-top: 0.05rem;
			    text-indent: 0.04rem;
			    padding-bottom: 0.01rem;
			}
			.button {
			    display: block;
			    text-align: center;
			    width: 100%;
			    height: 0.42rem;
			    line-height: 0.42rem;
			    font-size: 0.18rem;
			    cursor: pointer;
			    border-radius: 0.03rem;
			    -webkit-box-sizing: border-box;
			}
			.mt30 {
    			margin-top: 0.3rem;
    			color: #fff;
			    background: #50c58e;
			}
			.fl{
				padding: 0.2rem 0 ;
				width: 100%;
    			color: #898989;
    			font-size: 0.13rem;
    			position:relative;
    			.logs{
    				display: inline-block;
    				width: 0.16rem;
    				height: 0.16rem;
    				line-height: 0.16rem;
    				border: 0.01rem solid #ccc;
    				background: #fff;
    				position:absolute;
    				left:0;
    				bottom:0;
    				margin-right: 0.1rem;
    			}
    			.choosed {
    				display: inline-block;
				    background: url(https://id.oppo.com/resources/images_wap/checked.png) no-repeat;
				    width: 0.16rem;
    				height: 0.16rem;
    				background-size: 0.16rem auto;

				}
				.check{
					position:absolute;
    				left:0.3rem;
    				bottom:0;
				}
				.gree{
					color: #1f8657;
					position:absolute;
					left:1.1rem;
    				bottom:0;
				}
				
			}
		}
		input {
    		outline: 0;
    		border: 0;
		}

	}
	.footer_info {
		    color: #7b7b7b;
		    font-size: 0.12rem;
		    text-align: center;
		    margin-top: 0.4rem;
		    padding: 0.24rem 8%;
		    position: relative;
		}
	input, button {
	    vertical-align: middle;
	    font-family: inherit;
	    font-size: 100%;
	    -webkit-appearance: none;
	}

}

</style>

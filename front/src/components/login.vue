
<template>
    <div id="register">
        <div class="logo">
            登录
        </div>
        <div class="login_area">
            <div class="login_form" >
                <div class="input_area">
                    <em class="username_em"></em>
                    <input type="text" maxlength="11" id="phone" class="username ico_input" placeholder="请输入手机号/用户名" />
                    <div class="error_tip" id="info_username"></div>
                </div>
                <div class="input_area">
                    <em class="pwd_em"></em>
                    <input type="password" id="pws" class="pwd ico_input" placeholder="请输入帐号密码"/>
                    <div class="error_tip" id="info_pwd"></div>
                </div>
                <div class="field">
                    <a class="r" >登录遇到问题</a>
                </div>
                <input type="submit" class="button mt30" value="登录" @click="handleRegister"/>
                <input type="button" class="register_button button" value="注册OPPO帐号" @click="handleLogin"/>
                <div class="inks_area">
                    <div class="tit">
                        其他方式登录
                    </div>
                    <div class="links">
                        <a class="ico_qq"><i></i></a>
                        <a class="ico_wb"><i></i></a>
                        <a class="ico_alipay"><i></i></a>
                    </div>
                </div>                  
            </div>
        </div>

        <div class="footer_info">
          <p>© 2005 - 2017 东莞市永盛通信科技有限公司 版权所有 粤ICP备08130115号-1</p>
        </div>
    </div>
</template>

<script>
import router from "../router";
export default {

  name: 'register',

  data () {
    return {

    };
  },
  methods:{
    handleLogin(){
        router.push("/mine/register");
    },
    handleRegister(){
        var user=document.querySelector("#phone").value;
        var password=document.querySelector("#pws").value;
        axios.post('/api/register',{
            tel:user,
            password:password
        }).then(res=>{
            if(res.data){
                localStorage.setItem("name",user);
                alert('登入成功，即将跳转mine页');
                router.push("/mine/my");
            }else{
                alert('用户名/密码输入错误');
                router.push('/mine');
            }
        })
    }
  }
};
</script>

<style lang="scss" scoped>
#register{
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
            .input_area em {
                position: absolute;
                left: 0.14rem;
            }
            .username_em {
                width: 0.16rem;
                height: 0.16rem;
                background: url(https://id.oppo.com/resources/images_wap/ico_username_s.png) no-repeat;
                background-size: 100% 100%;
                top: 0.13rem;
            }
            .pwd_em {
                width: 0.15rem;
                height: 0.17rem;
                background: url(https://id.oppo.com/resources/images_wap/ico_pwd_s.png) no-repeat;
                background-size: 100% 100%;
                top: 0.14rem;
            }
            .input_area input.ico_input{
                padding-left: 0.44rem;
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
            .field {
                height: 0.16rem;
                line-height: 0.16rem;
                margin-top: 0.1rem;
                font-size: 0.12rem;
                color: #45bc83;

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
            .register_button {
                margin-top: 0.15rem;
                background: #fff;
                border: 0.01rem solid rgba(219, 219, 219, .5);
                color: #363636;
            }
            .inks_area{
                width: 100%;
                margin-top: 0.2rem;
                text-align: center;
                .links {
                    width: 80%;
                    margin: 0.2rem auto;
                    a {
                        height: 0.32rem;
                        width: 0.32rem;
                        display: inline-block;
                        margin: 0 0.14rem;

                        i{
                            display: inline-block;
                            height: 0.32rem;
                            width: 0.32rem;
                        }
                    }
                    .ico_qq i{
                        background: url(https://id.oppo.com/resources/images_wap/ico_qq.png) no-repeat;
                    }
                    .ico_wb i{
                        background: url(https://id.oppo.com/resources/images_wap/ico_wb.png) no-repeat;
                    }
                    .ico_alipay i{
                        background: url(https://id.oppo.com/resources/images_wap/ico_alipay.png) no-repeat;
                    }

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

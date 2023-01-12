<template>
  <div>
    <div class="content">
      <div class="form">
        <div class="head">
          <h1>Hello!</h1>
        </div>
        <div class="container">
          <div>
            <input v-model="mobile" class="username" placeholder="手机号" @change="sjFn">
            <input class="username" placeholder="验证码" v-model="codes">
            <button class="bottom" :disabled="disables" @click="code" :class="{ disable:disables}">{{codeMsg}}</button>
          </div>
        </div>
        <div>
          <button class="btn" @click="login">登录</button>
        </div>
    </div>
    <div class="mobile" :class="{active:mobileShow}">
      <div class="cation">
        <h1>{{ info }}</h1>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/style.css'

export default {
  data:function(){
        return{
          codes:'',
          second:5,
          codeMsg:'发送验证码',
          disables:false,
          mobile:'',
          info:'',
          mobileShow:false,
          keys:'',
          creataCode:''

      }
  },
  methods:{
    code:function(){
      if(!/\d{11}/.test(this.mobile)){
        return this.sjFn()
      }
      let num = parseInt(Math.random()*100000+10000)+""
      num = num.slice(0,5)
      this.yxcode(num)
      this.disables = true
      this.creataCode = num
      let time = setInterval(()=>{
        this.second--;
        this.codeMsg = this.second   
          if (this.second == 0) {
            clearInterval(time)
            setTimeout(()=>{ 
              this.codeMsg = '发送验证码'
              this.disables = false
              this.second = 5;
            },1000)
          }
        
      },1000)
    },
    sjFn:function(){
      if (!/\d{11}/.test(this.mobile)) {
        this.info = '输入手机号不正确'
        this.mobileShow = true
        setTimeout(()=>{ 
          this.mobileShow = false
          this.mobile = ''
          this.info = ''
        },2000)
      }
    },
    yxcode:function(num){
      let httpUrl = `https://gyytz.market.alicloudapi.com/sms/smsSend?mobile=${this.mobile}&param=**code**:${num},**minute**%3A5&smsSignId=2e65b1bb3d054466b82f0c9d125465e2&templateId=908e94ccf08b4476ba6c876d13f084ad`
      fetch(httpUrl,{
        method:'POST',
        headers:{
          "Authorization":"APPCODE 4d7a3d98f8db41509806da3f1fdeaaf5"
        }
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    },
    login:function(){
      if(this.codes == this.creataCode){
        this.$router.push('/user')
      }else{
        this.info = '输入验证码不正确'
          this.mobileShow = true
          setTimeout(()=>{ 
              this.mobileShow = false
              this.mobile = ''
              this.info = ''
          },2000)
      }
    }
  }
}
</script>

<style>
.disable{
  opacity: 0.4;
}
.mobile{
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255,0.2);
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  
}

.mobile.active{
  display: flex;
}
.cation{
  width: 200px;
  height: 50px;
  background-color: rgb(200, 96, 100);
  margin: auto;
  border-radius: 10px;
  line-height: 50px;
  color: azure;
  
}

.cation h1{font-size: 16px;}
</style>
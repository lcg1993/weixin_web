<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 text-center left__section">
        <div class="lanrensky ps">
          <h1 class="heading my-5">用户登陆</h1>
          <p class="paragraph">请使用电子邮箱或第三方账号登陆</p>
          <form action="" class="mt-4">
            <div class="input-group my-4">
              <div class="input-group-prepend">
                <label class="d-block mx-auto"><img src="static/images/8dq.svg" width="18" height="18" class="mt-2"></label>
              </div>
              <input type="text" class="form-control" placeholder="请输入电子邮箱" aria-label="" aria-describedby="basic-addon1" v-model="login.username">
            </div>
            <div class="input-group my-4">
              <div class="input-group-prepend">
                <label class="d-block mx-auto"><img src="static/images/8dT.svg" width="18" height="18" class="mt-2"></label>
              </div>
              <input type="password" class="form-control" placeholder="请输入密码" aria-label="" aria-describedby="basic-addon1" v-model="login.password">
            </div>
            <div class="input-group my-4">
              <div>
                <input class="form-control-yanzhengma" type="text" placeholder="请输入验证码" v-model="login.code">
              </div>
              <div class="form-control-div">
                <VerificationCode :changeCode.sync='identifyCode'></VerificationCode>
              </div>

            </div>
            <div class="d-flex justify-content-between align-items-center">
              <a href="javascript:" class="link">忘记密码？</a>
              <button type="button" class="btn btn-primary" @click="submit">登陆</button>
            </div>
<!--            <div class="form-check float-left my-3">-->
<!--              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">-->
<!--              <label class="form-check-label" for="defaultCheck1">记住我</label>-->
<!--            </div>-->
          </form>
<!--          <div class="col-12 my-4">-->
<!--            <span class="divider">或者</span>-->
<!--          </div>-->
<!--          <div class="btn-group" role="group" aria-label="Basic example">-->
<!--            <button type="button" class="btn btn-primary ">-->
<!--              <img src="static/images/8fh.svg" width="20" height="20" alt="">-->
<!--            </button>-->
<!--            <button type="button" class="btn btn-primary btn-facebook">QQ账号登陆</button>-->
<!--          </div>-->
          <label style="text-align: center; color: rgba(53, 53, 53, 0.7);" v-text="login.message"></label>
          <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
      </div>

<!--      <div class="col-12 col-sm-12 col-md-12 col-lg-7">-->
<!--        <div class="bg"></div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import VerificationCode from './common/VerificationCode.vue'
import md5 from 'js-md5';

export default {
  name: 'Login',
  components: {
    VerificationCode
  },
  data () {
    return {
      identifyCode: '',
      login: {
        username: '',
        password: '',
        code: '',
        message: '',
      }
    }
  },
  mounted () {
    //初始化前的准备数据
  },
  created () {
    //初始化
  },
  methods: {
    //页面调用的方法
    submit () {
      debugger
      if (this.login.code.toUpperCase() != this.identifyCode.toUpperCase()) {
        this.login.message = '验证码错误';
        return;
      }

      //md5加密
      this.login.password = md5(this.login.password);

      this.$http.post(this.baseURL+"/Login", this.login).then((response) => {
        if (response.data.success == true) {
          debugger;
          alert("登录成功");
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  element.style {
    left: 0px;
    bottom: 0px;
  }
  .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
  }
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  div {
    display: block;
  }
  .no-gutters>.col, .no-gutters>[class*=col-] {
    padding-right: 0;
    padding-left: 0;
  }
  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
/*  @media (min-width: 992px){
    .col-lg-7 {
      -ms-flex: 0 0 58.333333%;
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }
  @media (min-width: 768px){
      .col-md-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
      }
  }
  @media (min-width: 576px){
    .col-sm-12 {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
    }
  }*/
  .text-center {
    text-align: center!important;
  }
  .lanrensky {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
  }
  .ps {
    overflow: hidden!important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }
  .ps__rail-x {
    display: none;
    opacity: 0;
    transition: background-color .2s linear,opacity .2s linear;
    -webkit-transition: background-color .2s linear,opacity .2s linear;
    height: 15px;
    bottom: 0;
    position: absolute;
  }
  .ps__rail-y {
    display: none;
    opacity: 0;
    transition: background-color .2s linear,opacity .2s linear;
    -webkit-transition: background-color .2s linear,opacity .2s linear;
    width: 15px;
    right: 0;
    position: absolute;
  }
  .ps__thumb-x {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color .2s linear,height .2s ease-in-out;
    -webkit-transition: background-color .2s linear,height .2s ease-in-out;
    height: 6px;
    bottom: 2px;
    position: absolute;
  }
  .heading {
    font-family: 'Lato', sans-serif;
    color: #2196f3;
    letter-spacing: -2px;
  }
  .mt-2, .my-2 {
    margin-top: .5rem!important;
  }
  .mb-3, .my-3 {
    margin-bottom: 1rem!important;
  }
  .mt-3, .my-3 {
    margin-top: 1rem!important;
  }
  .mb-4, .my-4 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important;
  }
  .mt-4, .my-4 {
    margin-top: 1.5rem!important;
    margin-bottom: 1.5rem!important;
  }
  .mb-5, .my-5 {
    margin-bottom: 3rem!important;
  }
  .h1, h1 {
    font-size: 2.5rem;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
  }
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;
  }
  .paragraph {
    color: rgba(53, 53, 53, 0.7);
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  form {
    width: 270px;
    margin: 80px auto;
  }
  form .input-group-prepend {
    border: 1px solid #ced4da;
    width: 50px;
  }
  .input-yanzhengma {
    border: 1px solid #ced4da;
    width: 120px;
  }
  .input-group {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
  }
  .input-group>.custom-select:not(:first-child), .input-group>.form-control:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .input-group>.custom-file, .input-group>.custom-select, .input-group>.form-control {
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }
  form .form-control {
    border-radius: 0;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  .form-control {
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .form-control-yanzhengma {
    width:120px;
    height:38px;
    border: 1px solid #ced4da;
    padding: .375rem .75rem;
  }
  .form-control-div {
    margin-left: 50px;
  }
  .form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
  }
  .form-check-input {
    opacity: 0;
  }
  .form-check-input {
    position: absolute;
    margin-top: .3rem;
    margin-left: -1.25rem;
  }
  .form-check-label {
    color: rgba(53, 53, 53, 0.7);
    margin: 0 0 0 10px;
  }
  .form-check-label {
    margin-bottom: 0;
  }
  .btn-group .btn+.btn, .btn-group .btn+.btn-group, .btn-group .btn-group+.btn, .btn-group .btn-group+.btn-group, .btn-group-vertical .btn+.btn, .btn-group-vertical .btn+.btn-group, .btn-group-vertical .btn-group+.btn, .btn-group-vertical .btn-group+.btn-group {
    margin-left: -1px;
  }
  button, input {
    overflow: visible;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn-group, .btn-group-vertical {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
  }
  group>.btn:not(:last-child):not(.dropdown-toggle) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn-group>.btn-group:not(:first-child)>.btn, .btn-group>.btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .btn-group>.btn:first-child {
    margin-left: 0;
  }
  .btn-facebook {
    background-color: #0062cc;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn-group-vertical>.btn, .btn-group>.btn {
    position: relative;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
  }
  [type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
  }
  input[type=checkbox], input[type=radio] {
    box-sizing: border-box;
    padding: 0;
  }
  .btn-primary {
    border-radius: 0;
    position: relative;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    -webkit-box-shadow: 0 24px 10px -20px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 24px 10px -20px rgba(0, 0, 0, 0.5);
    -o-box-shadow: 0 24px 10px -20px rgba(0, 0, 0, 0.5);
    box-shadow: 0 24px 10px -20px rgba(0, 0, 0, 0.5);
  }
  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  button, select {
    text-transform: none;
  }
  button, input {
    overflow: visible;
  }
  button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  button {
    border-radius: 0;
  }
  button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  .input-group-prepend {
    margin-right: -1px;
  }
  .input-group-append, .input-group-prepend {
    display: -ms-flexbox;
    display: flex;
  }
  .align-items-center {
    -ms-flex-align: center!important;
    align-items: center!important;
  }
  .justify-content-between {
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
  }
  .d-flex {
    display: -ms-flexbox!important;
    display: flex!important;
  }
  .link {
    color: rgba(53, 53, 53, 0.7);
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  .divider {
    color: rgba(53, 53, 53, 0.7);
    position: relative;
    width: 270px;
    display: block;
    margin: 0 auto;
  }
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  .ml-auto, .mx-auto {
    margin-left: auto!important;
  }
  .mr-auto, .mx-auto {
    margin-right: auto!important;
  }
  .d-block {
    display: block!important;
  }
  .float-left {
    float: left!important;
  }
  label {
    display: inline-block;
    margin-bottom: .5rem;
  }

  .col-12 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }

  .bg {
    background: url(/static/images/bg.jpg) no-repeat;
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

</style>

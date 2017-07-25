<style scoped lang="scss">

// .login{
// 	position: relative;
//     width: 450px;
//     height: 500px;
//     float: left;
//     // padding: 50px 65px 20px;
// }
.header {
    position: absolute;
    width: 430px;
    top: 0;
    left: 0;
    color: #526069;
    font-size: 18px;
    line-height: 50px;
    background: #f7f7f7;
    padding-left: 20px;
    .close {
        position: absolute;
        left: 410px;
        top: 5px;
        height: 30px;
        line-height: 30px;
        font-size: 30px;
        width: 30px;
        font-weight: lighter;
        cursor: pointer;
        text-align: center;
    }
    .close:hover {
        color: #ff7e7e;
    }
}

</style>

<template>

<div class="login">
    <div class="header">
        <span class="title">登录</span>
        <div class="close" ng-click="close()">×</div>
		<v-input></v-input>
    </div>
    <div class="box-text" style="margin-top:55px">
        <input class="text" id="input_username" placeholder="手机号/注册邮箱/用户名">
    </div>
</div>

</template>

<script>
import Input from './Input.vue'
export default {
	components : {
		'v-input' : Input
	}
}

</script>

<style lang="scss">

a {
    text-decoration: none;
}

input {
    outline: none;
}

.login-box {
	user-select:none;
    position: fixed;
	margin-left: -225px;
	margin-top: -180px;
	left:50%;
	top:50%;
	width: 450px;
	height:360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
	box-shadow: 5px 5px 50px #ccc;
    .header {
        width: 100%;
        color: #526069;
        font-size: 18px;
        line-height: 50px;
        background: #f7f7f7;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .close {
            width: 20px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 30px;
            color: #ccd5db;
            font-weight: lighter;
            cursor: pointer;
            text-align: center;
        }
        .close:hover {
            color: #ff7e7e;
        }
    }
    input {
        width: 100%;
        height: 36px;
        padding: 0 10px 0 15px;
        border-radius: 3px;
        border: 1px solid #ccd5db;
        font-size: 12px;
        color: #76838f;
    }
    .main-box {
        width: 320px;
        .submit {
            width: 100%;
            height: 36px;
            margin-top: 20px;
            color: #fff;
            background-color: #59c7f9;
            border-radius: 3px;
            border-width: 0;
			cursor: pointer;
        }
        .submit:hover {
            background-color: #28b6f7;
        }
        .action {
            margin-left: 5px;
            color: #59c7f9;
			cursor: pointer;
        }
        .action:hover {
            color: #08a1ef;
        }
        .remember {
            display: flex;
            justify-content: flex-end;
            color: #76838f;
            font-size: 12px;
        }
        .remember a {
            color: #76838f;
        }
        .remember:hover {
            color: #08a1ef;
        }
        .error {
			width: 100%;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 12px;
            color: #fff;
			float: left;
            margin-top: 10px;
            background: #ff7e7e;
			// visibility:hidden;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #a3afb7;
            text-align: center;
        }
    }
}

.mt20 {
    margin-top: 20px;
}

.fade-enter, .fade-leave-to /* .fade-leave-active 在 <2.1.8 中 */ {
  opacity: 0
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
</style>
<template>

<div>
    <Login v-if="islogin" @change="val=>islogin=val"></Login>
    <sign-up v-if="!islogin" @change="val=>islogin=val"></sign-up>
</div>

</template>

<script>

import Login from './Login.vue'
import SignUp from './Signup.vue'
export default {
	data : function(){
		return {
			islogin : true
		}
	},
    components: {
        Login,
        SignUp
    }
}

</script>

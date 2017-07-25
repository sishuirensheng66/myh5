

<template>

<section class="login-box">
    <div class="header">
        <span class="title">登录</span>
        <div class="close">×</div>
    </div>
    <div class="main-box">
        <transition name="fade">
            <div v-if="msg" class="error">{{msg}}</div>
        </transition>
        <div class="box-text" style="margin-top:55px;">
            <input type='text' v-model="username" placeholder="账号">
        </div>
        <div class="box-text mt20">
            <input type='password' v-model="password" placeholder="密码">
        </div>
        <div class="submit-box">
            <input type="submit" @click="login" class="submit" value="登录">
        </div>
        <div class="footer">
            <span>还没有账号</span>
            <a class="action" @click="$emit('change', false)">去注册</a>
        </div>
    </div>
</section>

</template>

<script>
import $ from 'jQuery'
export default {
    data: function() {
        return {
            username: '',
            password: '',
            msg: '',
			clear : ''
        }
    },
    methods: {
		changeToast(v){
			this.msg = v;
			clearTimeout(this.clear)
			this.clear = setTimeout(()=>{
				this.msg = ''
			}, 2000)
		},
        login: function() {
            $.ajax({
                url: '/api/login/login',
                type: 'get',
                data: {
                    username: this.username,
                    password: this.password,
                },
                success: (rs) => {
                    console.log(rs);
                    if (rs.status == 1) {
                        setTimeout(function() {
                            location.href = rs.href;
                        }, 500)
                    } else {
                        this.changeToast(rs.msg)
                    }
                }
            });
        }
    }
}

</script>

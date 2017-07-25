

<template>

<section class="login-box">
    <div class="header">
        <span class="title">注册</span>
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
            <input type="submit" @click="signup" class="submit" value="注册">
        </div>
        <div class="footer">
            <span>已有账号</span>
            <a class="action" @click="$emit('change', true)">去登录</a>
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
            clear: ''
        }
    },
    methods: {
        changeToast(v) {
                this.msg = v;
                clearTimeout(this.clear)
                this.clear = setTimeout(() => {
                    this.msg = ''
                }, 2000)
            },
            signup: function() {
                $.ajax({
                    url: '/api/login/signup',
                    type: 'get',
                    data: {
                        username: this.username,
                        password: this.password,
                    },
                    success: (rs) => {
                        console.log(rs);


                        this.changeToast(rs.msg)

                    }
                });
            }
    }
}

</script>

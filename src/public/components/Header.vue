<style scoped lang="scss">

header {
    height: 50px;
    // background: #333;
	background: #fff;
    color: #d5d5d5;
    display: flex;
    justify-content: space-between;
    .logo-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 126px;
    }
    .opt-panel,
    .ctrl-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 10px;
            transition: 0.5s;
            position: relative;
            cursor: pointer;
            svg {
                font-size: 20px;
            }
            span {
                font-size: 12px;
            }
        }
        li:hover {
            color: #ff5e5e;
        }
    }
}

</style>

<template>

<header>
    <div class="logo-wrap">
        <a href="//localhost:8080/list" style="display:block;width:100%;height:100%;">
            <img src="/public/images/logo.png" />
        </a>
    </div>
    <ul class="ctrl-panel" v-if="page != 'list'">
        <li @click="addItem({type : types.TXT})">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wenben"></use>
            </svg>
            <span>文本</span>
        </li>

        <li @click="_panelShow(types.PIC)">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tupian"></use>
            </svg>
            <span>图片</span>
        </li>
        <li @click="addItem({type : types.HOT_SPACE})">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinle"></use>
            </svg>
            <span>热区</span>
        </li>
        <li @click="_panelShow(types.QRCODE)">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-x-mpg"></use>
            </svg>
            <span>二维码</span>
        </li>
        <li @click="_panelShow(types.MUSIC)">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-x-mpg"></use>
            </svg>
            <span>音乐</span>
        </li>
    </ul>
    <ul class="opt-panel">
        <li v-if="page != 'list'" @click="changeSetLayer(true)">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-baocun"></use>
            </svg>
            <span>设置</span>
        </li>
        <li v-if="page != 'list'">
            <a target="_blank" style="position:absolute;color:#fff;display:block;width:100%;height:100%;" :href="'http://localhost:8080/show?id=' +  work_id"></a>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-baocun"></use>
            </svg>
            <span>预览</span>
        </li>
        <li v-if="page != 'list'" @click="savePhoneData()">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-baocun"></use>
            </svg>
            <span>保存</span>
        </li>

        <li @click="signout">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fabu"></use>
            </svg>
            <span>退出</span>
        </li>
    </ul>

</header>

</template>

<script>

import {
    mapGetters,
    mapActions
}
from 'vuex'

import * as types from '../../page/edit/tpl/types.js'
import $ from 'jQuery'
export default {
    props: {
        page: {
            type: String,
            default: 'edit'
        }
    },
    methods: {
        ...mapActions(['cancelSelect', 'addItem', 'panelShow', 'savePhoneData', 'changeSetLayer']),
            signout: function() {
                $.ajax({
                    url: '/api/login/signout',
                    type: 'get',
                    success: (rs) => {
                        console.log(rs);
                    }
                });
            },
			_panelShow(type){
				this.cancelSelect();
				this.panelShow(type);
			}
    },
    data() {
        return {
            types: types,
            work_id: window.work_id
        }
    },
}

</script>

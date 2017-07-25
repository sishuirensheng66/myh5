<style scoped lang="scss">
.sitelist {
    padding-top: 20px;
    .item {
        font-size: 12px;
        position: relative;
        display: inline;
        float: left;
        overflow: hidden;
        width: 280px;
        height: 360px;
        margin-right: 20px;
        margin-bottom: 20px;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        .image {
            overflow: hidden;
            width: 280px;
            height: 260px;
            .overlay {
                font-size: 12px;
                position: absolute;
                z-index: 1;
                top: 0;
                width: 100%;
                height: 280px;
                transition: opacity .2s ease, transform .2s ease;
                transform: translateY(-20px);
                text-align: center;
                opacity: 0;
                color: #fff;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                background-color: rgba(0, 0, 0, .8);
                .edit-same {
                    display: inline-block;
                    margin-top: 73px;
                    padding: 0 10px;
                    cursor: pointer;
                    color: #fff;
                    em {
                        display: block;
                        font-size: 26px;
                        border-radius: 50%;
                        background-color: hsla(0, 0%, 100%, .2);
                        text-align: center;
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        margin-bottom: 10px;
                    }
                    em:hover {
                        background-color: #59c7f9;
                        border-color: #59c7f9
                    }
                }
            }
        }
        .project-info {
            background-color: #fff;
            position: absolute;
            height: 100px;
            width: 100%;
            text-align: center;
            z-index: 1;
            padding: 20px;
            transition: transform .2s ease;
            p {
                padding: 10px 0 15px;
                font-size: 14px;
            }
            .buttons {
                position: absolute;
                left: 0;
                bottom: -8px;
                z-index: 2;
                opacity: 0;
                width: 100%;
                padding: 0 10px;
                transition: transform .2s ease, opacity .2s ease;
                .erweima {
                    float: left;
                    background-color: #f0f3f4;
                    border-radius: 3px;
                    color: #526069;
                    cursor: pointer;
                    font-size: 12px;
                    width: 30px;
                    height: 30px;
                    display: inline-block;
                    overflow: hidden;
                    text-align: left;
                    transition: all .3s;
                    line-height: 28px;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    em {
                        line-height: 28px;
                        font-size: 20px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    span {
                        margin-right: 10px;
                        color: #fff;
                    }
                }
                .erweima:hover {
                    background-color: #59c7f9;
                    color: #fff;
                }
            }
        }
    }
    .item:nth-child(4n) {
        margin-right: 0;
    }
    .item:hover .buttons {
        transform: translateY(27px);
        opacity: 1;
    }
}

.square-scene .item:hover .overlay {
    transform: translateY(0);
    opacity: 1;
}

.square-scene li:hover .buttons {
    transform: translateY(27px);
    opacity: 1
}

.square-scene li:hover .project-info {
    transform: translateY(-40px)
}

.slide-fade-enter {
    opacity: 0;
    transform: scale(0.1);
}

.slide-fade-enter-active {
    transition: all .5s;
}

.qrcode-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    img {
        width: 180px;
        height: 180px;
    }
}

.goods_ul_create {
    display: block;
    width: 280px;
    float: left;
    height: 400px;
    margin-right: 20px;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: white;
    position: relative;
    border-radius: 2px;
    div {
        width: 100%;
        height: 100%;
        color: #76838f;
        padding-top: 140px;
        text-align: center;
        box-sizing: border-box;
        border: 1px dashed #ccd5db;
        cursor: pointer;
    }
}
.square-scene .set {
    float: right;
	display: flex;
    justify-content: center;
    align-items: center;
	.button {
	    font-size: 12px;
	    width: 30px;
	    height: 30px;
	    display: inline-block;
	    overflow: hidden;
		line-height: 30px;
	    cursor: pointer;
	    border: 1px solid #ccd5db;
	    border-radius: 3px;
	    text-align: left;
	    margin-left: 5px;
	    transition: background-color .3s, color .3s, width .3s;
	    padding-left: 2px;
		svg{
			font-size: 22px;
			line-height: 30px;
			padding-top: 6px;
		}
		span{
			margin-left: 5px;
		    color: #fff
		}

	}
	.button:hover {
	    background-color: #59c7f9;
	    color: #fff;
	    border-color: #59c7f9;
	    width: 70px
	}
	.delete:hover{
		background-color: #ff7e7e;
		border-color: #ff7e7e
	}
	.release:hover{
		background-color: #48d5b2;
		border-color: #48d5b2
	}
	.copy:hover {
		background-color: #48d5b2;
		border-color: #48d5b2
	}
}
</style>

<template>

<ul class="sitelist square-scene" id="sitelist">
    <li class="item goods_ul_create" @click="addPage">
        <div>
            <i class="eqf-plus2"></i>
            <span>创建一个空白场景</span>
        </div>
    </li>
    <li class="item" v-for="i in list">
        <div class="image">
            <div v-if="!i.showQRCode" style="height:280px;background-size: cover; background-image: url(/page/list/images/1.png);"></div>
            <transition name="slide-fade">
                <div class="qrcode-wrap" v-if="i.showQRCode">
                    <img src="/page/list/images/qrcode.png" />
                </div>
            </transition>
            <div v-show="!i.showQRCode" class="overlay">
                <div class="edit">
                    <a class="edit-same" :href="'http://localhost:8080/show?id=' + i.work_id">
                        <em>
							<svg class="icon" aria-hidden="true">
				                <use xlink:href="#icon-yulan"></use>
				            </svg>
						</em>
                        <span>预览</span>
                    </a>
                    <a class="edit-same" :href="'http://localhost:8080/edit/' + i.work_id">
                        <em>
							<svg class="icon" aria-hidden="true">
				                <use xlink:href="#icon-tupian"></use>
				            </svg>
						</em>
                        <span>编辑</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-info">
            <p class="ellipsis">{{i.data && i.data.set && i.data.set.title || '未命名场景'}}</p>
            <div class="buttons">
                <a class="erweima" @mousemove="$set(i, 'showQRCode',true)" @mouseout="$set(i, 'showQRCode',false)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-erweima"></use>
                    </svg>
                </a>
                <div class="set">
                    <a class="delete button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-tupian"></use>
                        </svg>
                        <span>删除</span>
                    </a>
                    <a class="copy button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fuzhi"></use>
                        </svg>
                        <span>复制</span>
                    </a>
                    <a class="release button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-fabu"></use>
                        </svg>
                        <span>发布</span>
                    </a>
                    <a class="set button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shezhi"></use>
                        </svg>
                        <span>设置</span>
                    </a>
                </div>
            </div>
        </div>
    </li>
</ul>

</template>

<script>

import $ from 'jQuery'
import {
    mapGetters,
    mapActions
}
from 'vuex'
import Pullload from 'Pullload'
export default {
    name: 'List',
    computed: {
        ...mapGetters(['list'])
    },
    mounted: function() {
        new Pullload({
            container: '#sitelist',
            onScrollEnd: (pullload) => {
                this.loadMore((len) => {
                    if (len == 0) {
                        pullload.stop();
                    } else {
                        pullload.tick();
                    }
                });
            }
        })
    },
    methods: {
        ...mapActions(['addPage', 'loadMore']),

    }
}

</script>

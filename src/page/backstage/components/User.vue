<style lang="scss">



</style>

<template>

<!--
<div>
    <div @click="delall">删除所有用户</div>
    <ul>
        <li v-for='i in list'>
			<p>
				<label>昵称</label>{{i.username}}
			</p>
		</li>
    </ul>
</div> -->
<table id="example2" class="table table-bordered table-hover">
    <thead>
        <tr>
            <th>用户名</th>
            <th>权限</th>
            <th>创建时间</th>
            <th>最近登录时间</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for='i in list'>
            <td>{{i.username}}</td>
            <td>{{i.admin}}</td>
            <td>{{i.createTime}}</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

</template>

<script>

/**
 * 用户管理
 * 添加用户
 *
 * @type {String}
 */
import Pagination from 'vuejs-pagination'
export default {
    name: 'App',
    components: {
        Pagination
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        delall() {
            $.ajax({
                url: '/api/user/delall',
                success: (rs) => {
                    console.log(rs)
                        // this.list = rs.data.data;
                }
            })
        }
    },
    mounted() {
        $.ajax({
            url: '/api/user/get',
            success: (rs) => {
                console.log(rs)
                this.list = rs.data.data;
            }
        })
    }
}

</script>

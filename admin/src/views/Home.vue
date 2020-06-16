<template>
    <el-container class="page-home">
        <el-header>
            <router-link tag="h1" to="/">后台管理系统</router-link>
            <div class="status">
                <span>您好</span>
                <b>{{$store.state.username}}</b>
                <span>welcome</span>
                <a href="/admin.logout">退出</a>
            </div>
        </el-header>
        <el-container>
            <el-aside width="250px">
            	<!-- router属性，若使用router属性menu-item的index将对应router的path属性 -->
                <el-menu :router="true">
                    <el-submenu v-for="(item, index) in menu" :key="index" :index="String(index)">
                        <template #title>
                            <i class="el-icon-menu"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="childItem in item.children" :key="childItem.link" :index="childItem.link">{{childItem.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<style lang="scss">
.page-home {
    height: 100%;

    .el-header,
    .el-aside,
    .el-main {
        background-color: #fff;
    }

    .el-header {
        margin-bottom: 10px;
        display: flex;

        h1 {
            flex: 1;
        }

        .status {
            margin-top: 30px;
        }
    }

    .el-main {
        margin-left: 10px;
    }

    .page-title {
        font-size: 24px;
        font-weight: normal;
        padding: 5px 10px 15px;
        margin: 0;
        margin-bottom: 30px;
        border-bottom: 1px solid lightgreen;
    }

    .el-input,
    .el-textarea,
    .el-select {
        width: 50%;
    }
    .el-select .el-input {
        width: 100%;
    }
    .upload-text-tip {
        margin-left: 10px;
        color: #999;
    }
    .upload-img {
        margin-top: 10px;
        max-height: 150px;
        max-width: 100%;
    }
}
</style>
<script>
export default {
    data() {
        return {
            menu: [{
                    name: '商品模块',
                    children: [
                        { name: '创建商品', link: '/product/create' },
                        { name: '商品列表', link: '/product/list/1' },
                    ]
                },
                {
                    name: '首页模块',
                    children: [
                        { name: '首页广告', link: '/home/ads' },
                        { name: '分类按钮', link: '/home/types' },
                    ]
                },
                {
                    name: '用户模块',
                    children: [
                        { name: '创建用户', link: '/user/create' },
                        { name: '用户列表', link: '/user/list/1' },
                    ]
                }
            ]
        }
    }
}
</script>
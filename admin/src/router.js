//引入路由插件
import Router from 'vue-router';
//引入vue
import Vue from 'vue';

import Home from '@v/Home';

import Main from '@v/Main';

//安装路由
Vue.use(Router);

//实例化并暴露接口
export default new Router({
    routes: [{
        path: '/',
        component: Home,
        children: [
            { path: '/product/create', component: () => import('@v/product/Create') },
            { path: '/product/list/:page', component: () => import('@v/product/List') },
            { path: '/product/edit/:id', component: () => import('@v/product/Edit') },
            { path: '/home/ads', component: () => import('@v/home/Ads') },
            { path: '/home/types', component: () => import('@v/home/types') },
            { path: '/user/create', component: () => import('@v/user/Create') },
            { path: '/user/list/:page', component: () => import('@v/user/List') },
            { path: '/user/edit/:id', component: () => import('@v/user/Edit') },
            { path: '*', component: Main }
        ]
    }]
})
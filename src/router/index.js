/*
* 路由模块
* 路由器管理路由
* 路由就是映射关系 键值对：
* key代表path
* value :
*   1.后台请求
*   2.前台组件
*
* 编写使用路由的3步
* 1.定义路由组件
* 2.注册路由
* 3.使用路由
*   <router-link>和<router-view>
* */

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news/:id',
                    component: News
                },
                {
                    path: 'message/:id',
                    component: Message
                }
            ]
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})
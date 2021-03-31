import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let routes=[
    {
        path:'/',
        component:()=>import(/* webpackChunkName:"route-root" */ '../views/home/index.vue'),
        children:[
            {
                path:'/',
                redirect:'home',
            },
            {
                path: 'home',
                name:'home',
                component:()=>import(/* webpackChunkName:"route-home" */ '../views/home/index.vue')
            }
        ]

    }
    ]

let router=new Router({
    mode:'history',
    routes:routes
})

export default router;


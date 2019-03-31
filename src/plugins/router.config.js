//引入vue
import Vue from 'vue';

//引入vue-router
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/components/Home';
import Follow from '@/components/Follow';
import Column from '@/components/Column';
import User from '@/components/User';
import Login from '@/components/Login';
import Reg from '@/components/Reg';
import Detail from '@/components/Detail';
import AppError from '@/common/AppError';


let routes=[
    {path:'/home',component:Home},
    {path:'/follow',component:Follow},
    {path:'/column',component:Column},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/detail/',component:Detail,
    children:[{name:"detail",path:"detail/:id",component:Detail}]
    },
    {path:'/',redirect:'/home'},
    {path:'*',component:AppError},
];

const router = new VueRouter({
    mode:'history',
    routes   
});

export default router;
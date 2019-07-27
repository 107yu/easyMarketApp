import React from "react"
import Loadable from "react-loadable"
function Loading(){
    return <div className="loading">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3201738150,2092078290&fm=26&gp=0.jpg" alt=""/>
    </div>
}
const Login=Loadable({
    loader:()=>import('../views/login'),
    loading:Loading
})
const Pages=Loadable({
    loader:()=>import('../views/indexPage'),
    loading:Loading
})
const Page=Loadable({
    loader:()=>import('../views/pages/page'),
    loading:Loading
})
const Special=Loadable({
    loader:()=>import('../views/pages/special'),
    loading:Loading
})
const Classify=Loadable({
    loader:()=>import('../views/pages/classify'),
    loading:Loading
})
const Shopping=Loadable({
    loader:()=>import('../views/pages/shopping'),
    loading:Loading
})
const My=Loadable({
    loader:()=>import('../views/pages/my'),
    loading:Loading
})
const TopicalDetail=Loadable({
    loader:()=>import("../views/pages/special/topicalDetail"),
    loading:Loading
})
const TopicalComment=Loadable({
    loader:()=>import("../views/pages/special/allRelated"),
    loading:Loading
})
const TopicCommentWrite=Loadable({
    loader:()=>import("../views/pages/special/topicCommentWrite"),
    loading:Loading
})
const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/pages',
    component: Pages,
    children: [{
        icon:'iconfont icon-fangzi',
        path: '/pages/page',
        name:'首页',
        component: Page
    }, {
        icon:'iconfont icon-zhuanti',
        path: '/pages/special',
        name:'专题',
        component: Special
    }, {
        icon:'iconfont icon-leimupinleifenleileibie',
        path: '/pages/classify',
        name:'分类',
        component: Classify
    }, {
        icon:'iconfont icon-icon_gouwuchexi',
        path: '/pages/shopping',
        name:'购物车',
        component: Shopping
    }, {
        icon:'iconfont icon-wode',
        path: '/pages/my',
        name:'我的',
        component: My
    }]
},{
    path:'/topicalDetail/:id',
    component:TopicalDetail
},{
    path:'/topicalComment',
    component:TopicalComment
},{
    path:'/topicCommentWrite',
    component:TopicCommentWrite
}]

export default routes


// import Living from '../views/pages/page/living'
// import Hutch from '../views/pages/page/hutch'
// import Clothing from '../views/pages/page/clothing'
// import Incliinstion from '../views/pages/page/inclination'
// import Accessories from '../views/pages/page/accessories'


// ,
//         children:[{
//             path:'/pages/page/living',
//             component:Living
//         },{
//             path:'/pages/page/hutch',
//             component:Hutch
//         },{
//             path:'/pages/page/clothing',
//             component:Clothing
//         },{
//             path:'/pages/page/inclination',
//             component:Incliinstion
//         },{
//             path:'/pages/page/accessories',
//             component:Accessories
//         }]

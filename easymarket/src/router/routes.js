import React from "react"
import Loadable from "react-loadable"
import Catego from "../views/classify/categoItem/categoItem"
import ProductDetail from "../views/classify/productDetail/productDetail"
//import Login from '../views/login'
function Loading(){
    return <div className="loading">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564210029472&di=3da7da476dc8bd9ac1d42afaa7c05d9a&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658" alt=""/>
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
    loader:()=>import('../views/classify'),
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
const GoodsSearch=Loadable({
    loader:()=>import("../views/classify/goodsSearch/index"),
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
},{
    path:'/catego_detail',
    component:Catego
},
{
    path:'/productDetail',
    component:ProductDetail
},{
    path:'/goodSearch',
    component:GoodsSearch
}
]

export default routes


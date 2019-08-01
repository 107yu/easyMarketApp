import React from "react"
import Loadable from "react-loadable"
import { Toast} from 'antd-mobile';
function Loading(){
    return <div className="loading">
      {/* { Toast.loading('loading',1)} */}
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
const Collectdetail=Loadable({
    loader:()=>import("../views/pages/my/collectdetail"),
    loading:Loading
})
const Addressdetail=Loadable({
    loader:()=>import("../views/pages/my/addressdetail"),
    loading:Loading
})
const GoodsSearch=Loadable({
    loader:()=>import("../views/classify/goodsSearch/index"),
    loading:Loading
})
const Catego=Loadable({
    loader:()=>import('../views/classify/categoItem/categoItem'),
    loading:Loading
})
const ProductDetail=Loadable({
    loader:()=>import('../views/classify/productDetail/productDetail'),
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
    path:'/catego_detail/:id',
    component:Catego
},
{
    path:'/productDetail/:id',
    component:ProductDetail
},{
    path:'/collectdetail',
    component:Collectdetail
},{
    path:'/addressdetail',
    component:Addressdetail
},{
    path:'/goodSearch',
    component:GoodsSearch
}
]

export default routes


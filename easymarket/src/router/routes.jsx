import Login from '../views/login'
import Pages from '../views/indexPage'



// import Living from '../views/pages/page/living'

import TopicalDetail from "../views/pages/special/topicalDetail"


import TopicalComment from "../views/pages/special/allRelated"
import TopicCommentWrite from "../views/pages/special/topicCommentWrite"
import Page from '../views/pages/page'
import Special from '../views/pages/special'
import Classify from '../views/classify/index'
import Shopping from '../views/pages/shopping'
import My from '../views/pages/my'
import Catego from "../views/classify/categoItem/categoItem"
import ProductDetail from "../views/classify/productDetail/productDetail"
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

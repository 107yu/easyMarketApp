import Login from '../views/login'
import Pages from '../views/indexPage'

import Page from '../views/pages/page'
import Special from '../views/pages/special'
import Classify from '../views/pages/classify'
import Shopping from '../views/pages/shopping'
import My from '../views/pages/my'
import TopicalDetail from "../views/pages/special/topicalDetail"
import TopicalComment from "../views/pages/special/allRelated"
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
}]

export default routes

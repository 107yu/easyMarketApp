import Page from '../views/page'
import Special from '../views/special'
import Classify from '../views/classify'
import Shopping from '../views/shopping'
import My from '../views/my'
import Catego from "../views/classify/categoItem/categoItem"

const routes = [{
    path:'/page',
    component:Page
},{
    path:'/special',
    component:Special
},{
    path:'/classify',
    component:Classify
},{
    path:'/shopping',
    component:Shopping
},{
    path:'/my',
    component:My
},{
    path:'/catego_detail',
    component:Catego
}]

export default routes

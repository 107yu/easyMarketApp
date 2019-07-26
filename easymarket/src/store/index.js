//引入模块
import Login from "./modules/login"
import Special from "./modules/special"
import Classify from "./modules/classify"
import Product from "./modules/productDetail"
//实例化
let login=new Login()
let special=new Special()
//分类页所有数据
const classify=new Classify()
//产品详情
const product=new Product()
export default{
    login,
    special,
    classify,
    product
}
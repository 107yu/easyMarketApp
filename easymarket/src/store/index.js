//引入模块
import Login from "./modules/login"
import Special from "./modules/special"
import Page from "./modules/page"
import Classify from "./modules/classify"
import Product from "./modules/productDetail"
import ShopCar from "./modules/shopCar"
//实例化
let login=new Login()
let special=new Special()
let page=new Page()
<<<<<<< HEAD
=======


>>>>>>> a68f643272646f3e1dce2b2c8603f9bb78d144dd
//分类页所有数据
const classify=new Classify()
//产品详情
const product=new Product()
<<<<<<< HEAD
let shopCar =new ShopCar()
=======

>>>>>>> a68f643272646f3e1dce2b2c8603f9bb78d144dd
export default{
    login,
    special,
    classify,
    product,
<<<<<<< HEAD
    page,
    shopCar
=======
    page
    // my
>>>>>>> a68f643272646f3e1dce2b2c8603f9bb78d144dd
}
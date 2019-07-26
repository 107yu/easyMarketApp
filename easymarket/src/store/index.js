//引入模块
import Login from "./modules/login"
import Special from "./modules/special"
import Page from "./modules/page"
//实例化
let login=new Login()
let special=new Special()
let page=new Page()
export default{
    login,
    special,
    page
}
//引入模块
import Login from "./modules/login"
import Special from "./modules/special"
import Page from "./modules/page"
// import My from "./modules/my"
//实例化
let login=new Login()
let special=new Special()
let page=new Page()
// let my=new My()
export default{
    login,
    special,
    page
    // my
}
//引入模块
import Login from "./modules/login"
import Special from "./modules/special"
//实例化
let login=new Login()
let special=new Special()
export default{
    login,
    special
}
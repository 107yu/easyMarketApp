import {login} from "../../../services/index"
import {observable,action} from "mobx"
export default class Login{
    //@observable修饰属性：
     @observable data = -1;
    //@action修饰方法：
    @action sendLogin=  (info)=>{
        login(info).then(res => {
            if(res.errno === 0) {
                // alert('登录成功')
               localStorage.setItem("token",res.data.sessionKey)
                this.data = res.errno
            } else {
                alert(res.errmsg)
                this.data = res.errno
            }
        })
    }
} 
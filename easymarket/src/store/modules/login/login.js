import {observable,action} from "mobx"
export default class Login{
    //@observable修饰属性：
    // @observable 
    //@action修饰方法：
    @action eventLogin(){
        console.log(1)
    }
}
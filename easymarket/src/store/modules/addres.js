import {getaddres} from "../../services/index"
import {observable,action} from "mobx"

export default class addres{
    @observable getaddresList={}; 
    //获取我的收藏列表
    @action getaddresData=  (info)=>{
        getaddres(info).then(res => {
           this.getaddresList=res
           console.log(res)
        })
    }
}
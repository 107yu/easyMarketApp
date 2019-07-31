import {getbrand} from "../../services/index"
import {observable,action} from "mobx"

export default class brand{
    @observable getbrandList={}; 
    //获取我的收藏列表
    @action getbrandData= (info)=>{
        getbrand(info).then(res => {
           this.getbrandList=res.brand
        })
    }
}
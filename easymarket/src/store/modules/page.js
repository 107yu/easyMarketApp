import {getpage} from "../../services/index"
import {observable,action} from "mobx"

export default class Page{
    @observable getpageList={}; 
    //获取专题列表
    @action getpageData=  (info)=>{
        getpage(info).then(res => {
           this.getpageList=res
        //    console.log(res)
        })
    }
}
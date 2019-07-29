import {getcollect} from "../../services/index"
import {observable,action} from "mobx"

export default class collect{
    @observable getcollectList=[]; 
    //获取我的收藏列表
    @action getcollectData=  (info)=>{
        getcollect(info).then(res => {
           this.getcollectList=res
        })
    }
}
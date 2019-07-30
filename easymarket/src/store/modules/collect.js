import {getcollect,removeCollect} from "../../services/index"
import {observable,action} from "mobx"

export default class collect{
    @observable getcollectList=[]; 
    //获取我的收藏列表
    @action getcollectData=  (info)=>{
        getcollect(info).then(res => {
           this.getcollectList=res
        })
    }
     //取消收藏
     @action cancelCollect= async (info)=>{
       let data=await  removeCollect(info)
       if(data.errno===0){
        this.getcollectData({typeId:0})
       }
    }
}
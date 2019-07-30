import {getcollect,addCollect,removeCollect} from "../../services/index"
import {observable,action} from "mobx"

export default class collect{
    @observable getcollectList=[]; 
    @observable collectInfo; 
    //获取我的收藏列表
    @action getcollectData=  (info)=>{
        getcollect(info).then(res => {
           this.getcollectList=res
        })
    }
    //添加收藏
    @action addcollect =async(params)=>{
        const data=await addCollect(params)
        this.collectInfo=data.data.type==="delete"?0:1
    }
    //删除收藏：
    @action cancelCollect =async(params)=>{
        const data=await removeCollect(params)
        if(data.errno===0){
            this.getcollectData({typeId:0})
        }
    }
}
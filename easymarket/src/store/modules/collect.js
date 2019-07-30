<<<<<<< HEAD
import {getcollect,addCollect} from "../../services/index"
=======
import {getcollect,removeCollect} from "../../services/index"
>>>>>>> yu
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
<<<<<<< HEAD
    //添加收藏
    @action addcollect =async(params)=>{
        const data=await addCollect(params)
        this.collectInfo=data.data.type==="delete"?0:1
        console.log(data.data.type,"collect")
=======
     //取消收藏
     @action cancelCollect= async (info)=>{
       let data=await  removeCollect(info)
       if(data.errno===0){
        this.getcollectData({typeId:0})
       }
>>>>>>> yu
    }
}
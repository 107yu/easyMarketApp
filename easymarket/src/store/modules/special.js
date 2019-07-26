<<<<<<< HEAD
import {getTopicList, getTopicDetail,getTopicRelated,getComment,addComment} from "../../services/index"
=======
import {getTopicList, getTopicDetail,getTopicRelated,getComment} from "../../services/index"
>>>>>>> klf
import {observable,action} from "mobx"
export default class Special{
    @observable topicList=[]; //专题列表
    @observable detail={};      //专题的详情
    @observable relateds=[];    //与本专题相关的专题
    @observable comments=[];    //本专题或商品的评论
<<<<<<< HEAD
    @observable Allcomments=[];    //本专题或商品的评论
    @observable commentStatus=-1;    //添加评论是否成功----状态
=======
>>>>>>> klf
    //获取专题列表
    @action getTopicData=  (info)=>{
        getTopicList(info).then(res => {
           this.topicList=res.data
        })
    }
    //获取本专题的详细信息
    @action topicalDetail=(payload)=>{
        getTopicDetail(payload).then(res=>{
            this.detail=res;
            // console.log(res)
        })
    }
    //获取与本专题相关的专题
    @action topicalRelated=(payload)=>{
        getTopicRelated(payload).then(res=>{
            this.relateds=res;
            // console.log(res)
        })
    }
    //获取评论
    @action topicalComment=(payload)=>{
        getComment(payload).then(res=>{
            this.comments=res.data;
<<<<<<< HEAD
            // console.log(res)
        })
    }
    //获取所有的评论
    @action topicalAllComment=(payload)=>{
        getComment(payload).then(res=>{
            this.Allcomments=res.data;
            console.log(res)
        })
    }
     //添加评论
     @action setComments= async (payload)=>{
       let data=await  addComment(payload)
        if(data.errno===0){
            this.commentStatus=0
        }
    }
}
=======
            console.log(res)
        })
    }
} 
>>>>>>> klf

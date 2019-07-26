import {getTopicList, getTopicDetail,getTopicRelated,getComment} from "../../services/index"
import {observable,action} from "mobx"
export default class Special{
    @observable topicList=[]; //专题列表
    @observable detail={};      //专题的详情
    @observable relateds=[];    //与本专题相关的专题
    @observable comments=[];    //本专题或商品的评论
    @observable Allcomments=[];    //本专题或商品的评论
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
            // console.log(res)
        })
    }
    @action topicalAllComment=(payload)=>{
        getComment(payload).then(res=>{
            this.Allcomments=res.data;
            console.log(res)
        })
    }
} 
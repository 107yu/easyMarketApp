import {observable,action} from "mobx"
import {getClassify} from "../services/index"


class Classify{
    @observable categoryList;
    //初始化state
    constructor(){
        //分类页初始化数据
        this.categoryList=[]
    }
    @action getClassify_data(){
        getClassify().then(res=>{
            this.categoryList=res.data.categoryList
        })
    }
}
export default Classify
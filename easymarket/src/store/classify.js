import {observable,action} from "mobx"
import {getTypeInit,getClassifyNav,getClassifyChild,getproductInfo} from "../services/index"


class Classify{
    @observable categoryList;
    @observable categoryChild;
    @observable ProductInfo;
    //初始化state
    // constructor(){
    //     //分类页初始化数据
    //     this.categoryList=[],
        
    // }
    //分类页左侧导航
    @action getClassify_Nav(id){
        getClassifyChild(id).then(res=>{
            console.log(res)
            this.categoryChild=res.data.currentCategory
        })
    }

    @action getClassify_data(){
        getTypeInit().then(res=>{
          
            this.categoryList=res.data.categoryList
        })
    }

    @action getproduct_Info(id){
        getproductInfo(id).then(res=>{
            console.log(res.data.data)
            this.ProductInfo=res.data.data
        })
    }
}
export default Classify
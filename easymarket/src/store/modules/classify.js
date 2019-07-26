import {observable,action} from "mobx"
import {getTypeInit,getClassifyNav,getClassifyChild,getproductInfo} from "../../services/index"



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
    @action  getClassify_Nav=async(id)=>{
        const data=await getClassifyChild(id)
        console.log(data)
        this.categoryChild=data.currentCategory
        // getClassifyChild(id).then(res=>{
        //     console.log(res)
        //     this.categoryChild=res.currentCategory
        // })
    }

    @action getClassify_data(){
        getTypeInit().then(res=>{
            this.categoryList=res.categoryList
        })
    }

    @action getproduct_Info(id){
        getproductInfo(id).then(res=>{
            this.ProductInfo=res.data
        })
    }
}
export default Classify
import {observable,action} from "mobx"
import {getTypeInit,getClassifyNav,getClassifyChild,getproductInfo} from "../../services/index"

class Classify{
    @observable categoryList;
    @observable categoryChild;
    @observable ProductInfo=[];

    //分类页左侧导航
    @action  getClassify_Nav=async(id)=>{
        const data=await getClassifyChild(id)
        this.categoryChild=data.currentCategory
    }
    /**
     * 子分类页导航信息
     */

    // @action getinfo=async(id)=>{
    //     const data=await getClassifyNav(id)
    //     console.log(data,"getClassifyNa")
    // }

     /**
     * 分类页初始数据
     */
    @action getClassify_data=async()=>{
        const data=await getTypeInit()
        this.categoryList=data.categoryList 
    }
    /**
     * 子分类页点击导航数据
     */
    @action getproduct_Info(id,size,page){
        getproductInfo(id,size,page).then(res=>{
            this.ProductInfo=res.data
            // if(!this.ProductInfo.length){
            //     this.ProductInfo=res.data
            // }else{
            //     this.ProductInfo.push(...res.data)
            // }
            
        })
    }
}
export default Classify
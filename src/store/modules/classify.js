import {observable,action} from "mobx"
import {getTypeInit,getClassifyNav,getClassifyChild,getproductInfo} from "../../services/index"

class Classify{
    @observable categoryList=[];
    @observable categoryChild=[];
    @observable NavInfo=[];

    // 分类数据
    @observable ProductInfo=[];
    @observable page = 1;
    @observable hasMore = false;


    //分类页左侧导航
    @action  getClassify_Nav=async(id)=>{
        const data=await getClassifyChild(id)
        this.categoryChild=data.currentCategory
    }
    /**
     * 子分类页导航信息
     */

    @action getinfo=async(id)=>{
        const data=await getClassifyNav(id)
        this.NavInfo=data.brotherCategory
    }

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
    @action getproduct_Info = async (id,page,size=10)=>{
        const data = await getproductInfo(id, size, page);

        // 更新page
        this.page = page;
        // 判断数据是追加还是替换
        if (page == 1){
            this.ProductInfo = data.data;
        }else{
            this.ProductInfo = [...this.ProductInfo, ...data.data];
        }
        // 判断是否还有更多
        this.hasMore = data.totalPages == page;
    }
    @action getproduct_Info(id,size,page){
        getproductInfo(id,size,page).then(res=>{
            this.ProductInfo=res.data
        })
    }
}
export default Classify
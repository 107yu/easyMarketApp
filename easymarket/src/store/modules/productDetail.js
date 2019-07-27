import {getProduct,getRelated} from "../../services/index"
import {observable,action} from "mobx"

class Product{
    //产品信息
    @observable productInfo;
    @observable relatedInfo;

    @action async products(id){
        const data=await getProduct(id)
        this.productInfo=data
        console.log(data,"produvt11")
    }
    @action async relatedProducts(id){
        const data=await getRelated(id)
        this.relatedInfo=data
        console.log(data,"relate")
    }
}
export default Product;
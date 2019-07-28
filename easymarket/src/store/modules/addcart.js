import {observable,action} from "mobx"
import {addCart,goodscount} from "../../services/index"
class Addcart{
    @observable mes;
    @observable number=0;
    @observable totalNum=0;
    @action async addGoods(params){
        const data=await addCart(params)
        console.log(data)
    }
    //点击减
    @action  up(params){
        this.number--;
        if(this.number<0){
            this.number=0
        }
    }
    //点击加
    @action  add(params){
        this.number++
        
    }
    //获取购物车商品总量
    @action async getNum(){
        const data=await goodscount()
        this.totalNum=data.cartTotal.goodsCount 
    }
}
export default Addcart
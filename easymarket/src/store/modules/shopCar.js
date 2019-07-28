import {getShopCar} from "../../services/index"
import {observable,action} from "mobx"
export default class ShopCar{
    @observable shopList={}; //够驱车的数据；
   
     @action getShopCarList= async ()=>{
        let data=await  getShopCar()
        console.log(data)
        this.shopList=data;
      
    }
}

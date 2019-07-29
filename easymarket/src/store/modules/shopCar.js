import {getShopCar,changeChecked} from "../../services/index"
import {observable,action} from "mobx"
export default class ShopCar{
    @observable shopList={}; //够驱车的数据；
    @observable newShopList={}; //够驱车的数据；
    @action getShopCarList= async ()=>{
        let data=await  getShopCar()
        console.log(data)
        this.shopList=data;
      
    }
    @action checkedGoods= async (payload)=>{
        let data=await  changeChecked(payload)
        console.log(data.data)
        this.shopList=data.data
    }
}

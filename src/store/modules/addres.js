import {getaddres,addAddress,removeAddress} from "../../services/index"
import {observable,action} from "mobx"

export default class addres{
    @observable getaddresList={}; 
    //获取我的地址列表
    @action getaddresData=  ()=>{
        getaddres().then(res => {
           this.getaddresList=res
        })
    }
     //添加---修改我的地址
     @action changeAddress=async (info)=>{
       let data=await addAddress(info)
       if(data.errno===0){
           this.getaddresData()
       }
    }
    //删除地址
    @action deleteAddress=async (info)=>{
        let data=await removeAddress(info)
       if(data.errno===0){
        this.getaddresData()
       }
     }
}
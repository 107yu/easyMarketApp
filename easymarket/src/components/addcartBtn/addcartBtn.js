import React, { Component } from 'react'
import "./addcartBtn.scss"
import {inject,observer} from "mobx-react"
@inject("product","addCart")
@observer

class AddcartBtn extends Component {
    addCart(){
        let {productInfo}=this.props.product;
        let data=productInfo.productList.filter((item)=>{
            return item.goods_specification_ids===`${this.props.addCart.colorId.id}_${this.props.addCart.attarId.id}`
        })
        if(data&&data[0].goods_number>this.props.addCart.number){
            this.props.addCart.addGoods({goodsId:productInfo.info.id+"",number:this.props.addCart.number,productId:data&&data[0].id})
        }else{
            alert("error")
        }
    }
    render() {
        return (
            <div className="goods_standed_btn">
                <button className="good_standed_add" onClick={()=>{this.addCart()}}>加入购物车</button>
                <button className="good_standed_order">立即下单</button>
            </div>
        )
    }
}
export default AddcartBtn;

import React, { Component } from 'react'
import "./addcartBtn.scss"
import {inject,observer} from "mobx-react"
@inject("product","addCart")
@observer

class AddcartBtn extends Component {
    addCart(){
        let {productInfo}=this.props.product;
        this.props.addCart.addGoods({goodsId:productInfo.info.id+"",number:this.props.addCart.number,productId:productInfo.productList[0].id})
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

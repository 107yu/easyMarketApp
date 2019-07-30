import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import AddcartBtn from "../addcartBtn/addcartBtn"
import "./productStanded.scss";
import ProductAttar from '../productAttar';
@inject("product","addCart","shopCar")
@observer

 class ProductStanded extends Component {
    closeModule(){
        this.props.close()
    }
    render() {
        let {productInfo} =this.props.product
        return (
            <div className="goods_standed_wrapper">
                <div className="goods_standed_info">
                    <div className="goods_standed_detail">
                        <div className="goods_standed_left">
                            <div className="goods_standed_img">
                            <img src={productInfo.info.primary_pic_url} alt=""/>
                        </div>
                        <div className="goods_standed_info">
                            <div className="goods_standed_price">
                                单价：<span>￥{productInfo.info.retail_price}</span>
                            </div>
                            <div className="goods_standed_price">
                                库存：<span>{productInfo.info.goods_number}件</span>
                            </div>
                            <div className="goods_standed_price">
                                已选择：<span style={{color:"#2196f3"}}>{this.props.addCart.colorId&&this.props.addCart.colorId.value}</span><span>{this.props.addCart.attarId&&this.props.addCart.attarId.value}</span>
                            </div>
                        </div>
                        </div>
                        
                        <div className="goods_standed_close">
                            <i onClick={()=>{this.closeModule()}}>x</i>
                        </div>
                    </div>
                    {productInfo&&productInfo.specificationList.map((item)=>{ 
                        return <ProductAttar key={item.specification_id} item={item}></ProductAttar>
                    })} 
                    
                    <div className="goods_standed_num">
                        <p>数量</p>
                        <div>
                            <div className="standed_btn" onClick={()=>{this.props.addCart.up()}}>-</div>
                            <div className="standed_btn">{this.props.addCart.number}</div>
                            <div className="standed_btn" onClick={()=>{this.props.addCart.add()}}>+</div>
                        </div>
                    </div>
                </div>
                <AddcartBtn></AddcartBtn>
            </div>
        )
    }
}
export default ProductStanded;
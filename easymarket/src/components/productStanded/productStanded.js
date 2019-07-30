import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import AddcartBtn from "../addcartBtn/addcartBtn"
import "./productStanded.scss";
@inject("product","addCart")
@observer

 class ProductStanded extends Component {
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
                                已选择：<span></span>
                            </div>
                        </div>
                        </div>
                        
                        <div className="goods_standed_close">
                            <i>x</i>
                        </div>
                    </div>
                    {productInfo&&productInfo.specificationList.map((item)=>{
                        return <div className="goods_standed_num goods_standed_color" key={item.specification_id}>
                                    <p>{item.name}</p>
                                    <ul>
                                       {item.valueList.map((item)=>{
                                           return <li key={item.id}>{item.value}</li>
                                       })}
                                    </ul>
                                </div>
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
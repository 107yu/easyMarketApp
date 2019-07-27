import React, { Component } from 'react'
import { inject } from 'mobx-react';
import Header from "../../../components/Header/index"
import "./productDetail.scss"
@inject("product")

 class ProductDetail extends Component {
    componentDidMount(){
        let id=window.location.search.slice(1).split("=")[1];
        //根据商品id获取到相关商品
        this.props.product.product(id)

    }
    render() {
        let {product}=this.props
        return (
            <div className="product_wrap">
                <Header title={product.productInfo&&product.productInfo.info.name} flag={true}></Header>
                {console.log(product.productInfo&&product.productInfo.info.name,"111")}
                shangpinhgxiangqinag 
            </div>
        )
    }
}
export default ProductDetail

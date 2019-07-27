import React, { Component } from 'react'
import { inject } from 'mobx-react';
import Header from "../../../components/Header/index"
import "./productDetail.scss"
@inject("product")

 class ProductDetail extends Component {
    componentDidMount(){
        let id=window.location.search.slice(1).split("=")[1];
        //根据商品id获取到相关商品
        this.props.product.products(id)

    }
    render() {
        return (
            <div className="product_wrap">
                <Header title={this.props.product.productInfo&&this.props.product.productInfo.info.name} flag={true}></Header>
                {console.log(this.props.product.productInfo,"1111111")}
                shangpinhgxiangqinag 
            </div>
        )
    }
}
export default ProductDetail

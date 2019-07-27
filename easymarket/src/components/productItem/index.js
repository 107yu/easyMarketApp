import React, { Component } from 'react'
import "./product.scss"
import {withRouter} from "react-router-dom"
import { inject } from 'mobx-react';

class ProductInfo extends Component {
    constructor(props){
        super(props)
    }
    goToDetail(id){
        this.props.history.push(`/productDetail?id=${id}`)
        
    }
    render() {
        let {item}=this.props
        return (
            <div className="pro_wrap" onClick={()=>{this.goToDetail(item.id)}}>
                <img src={item.list_pic_url}/>
                <p>{item.name}</p>
                <p style={{color:"#f00",textAlign:"center"}}>{`￥${item.retail_price}元`}</p>
            </div>
        )
    }
}
export default withRouter(ProductInfo)

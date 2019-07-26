import React, { Component } from 'react'
import "./product.scss"

export default class ProductInfo extends Component {
    constructor(props){
        super(props)

    }
    render() {
        let {item}=this.props
        return (
            <div className="pro_wrap">
                <img src={item.list_pic_url}/>
                <p>{item.name}</p>
                <p>{item.name}</p>
            </div>
        )
    }
}

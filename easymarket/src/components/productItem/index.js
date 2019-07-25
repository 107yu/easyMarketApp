import React, { Component } from 'react'

export default class ProductInfo extends Component {
    constructor(props){
        super(props)

    }
    render() {
        let {item}=this.props
        return (
            <div>
                <img src={item.list_pic_url} style={{width:100,height:100}}/>
                <p>{item.name}</p>
            </div>
        )
    }
}

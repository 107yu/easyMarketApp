import React, { Component } from 'react'
import "./catego_Item.scss"

export default class CategoItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let {item}=this.props
        return (
            <div className="CategoItem">
                <img src={item&&item.wap_banner_url}/>
                <div className="sub_content_item">
                    {item.name}
                </div>
            </div>
        )
    }
}


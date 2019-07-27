import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import "./catego_Item.scss"

class CategoItem extends Component {
    constructor(props){
        super(props)
    }
    catego_page(id,catego_id){
        this.props.history.push(`/catego_detail?id=${id}&&catego_id=${catego_id}`)
    }
    render() {
        let {item,id}=this.props
        console.log(item,"item11")
        return (
            <div className="CategoItem" onClick={()=>{this.catego_page(id,item.id)}}>
                <img src={item&&item.wap_banner_url}/>
                <div className="sub_content_item">
                    {item.name}
                </div>
            </div>
        )
    }
}
export default  withRouter(CategoItem)
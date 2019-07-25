import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import CategoItem from "../../components/catego_Item/index"
import "./classify.scss"
// import { Item } from '_antd-mobile@2.2.14@antd-mobile/lib/tab-bar';
// import { url } from 'inspector';
@inject("classify")
@observer

class CategoContent extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let data=this.props.classify.categoryChild
        return (
            <div className="Catego_Content">
                 <div className="Catego_banner" style={{backgroundImage:`url(${data&&data.banner_url})`,backgroundSize:"100%"}}>
                     {data&&data.front_desc}
                 </div>
                 <div className="Catego_title">
                     <div>
                         <div className="line"></div>
                         <div>{data&&data.name}</div>
                        <div className="line"></div>
                     </div>
                 </div>
                 <div className="sub_content">
                    {data&&data.subCategoryList.map((item,index)=>{
                        return <CategoItem key={item.id} item={item} id={data.id}></CategoItem>
                     })}
                 </div>
            </div>
        )
    }
}
export default CategoContent


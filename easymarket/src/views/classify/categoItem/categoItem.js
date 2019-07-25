import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import ProductInfo from "../../../components/productItem/index"
import Header from "../../../components/Header/index"
import "./categoItem.scss"
@inject("classify")
@observer
 class CategoItem extends Component {
    componentDidMount(){
        let id=window.location.search.slice(1).split("=")[1];
        this.props.classify.getClassify_Nav(id)
    }
    changeCon(id){
        this.props.classify.getproduct_Info(id)
    }
    render() {
        return (
            <div className="catego_wrapper">
                <Header title={"奇趣分类"} flag={true}></Header>
                <div className="CategoItem_nav">
                    <ul className="CategoItem_wrap">
                        {console.log(this.props.classify)}
                        {this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList.map((item,index)=>{
                            {console.log(item)}
                            return <li key={item.id} onClick={()=>{this.changeCon(item.id)}}>{item.name}</li>
                        })}
                    </ul>
                </div>
                <div>

                </div>
                <div>
                    {console.log(this.props.classify.ProductInfo)}
                    {this.props.classify.ProductInfo&&this.props.classify.ProductInfo.map((item,index)=>{
                        return <ProductInfo key={item.id} item={item}></ProductInfo>
                    })}
                    
                </div>
            </div>
        )
    }
}
export default CategoItem

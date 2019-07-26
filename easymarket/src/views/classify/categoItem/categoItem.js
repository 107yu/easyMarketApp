import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import ProductInfo from "../../../components/productItem/index"
import Header from "../../../components/Header/index"
import "./categoItem.scss"
@inject("classify")
@observer
 class CategoItem extends Component {
    constructor(props){
        super(props)
        this.state={
            ind:0
        }
    }
    componentDidMount(){
        let id=window.location.search.slice(1).split("=")[1];
        this.props.classify.getClassify_Nav(id)
        this.props.classify.getproduct_Info(1008002)
    }
    changeCon(id,ind){
        this.setState({
            ind:ind
        })
        console.log(id)
        this.props.classify.getproduct_Info(id)
    }
    render() {
        return (
            <div className="catego_wrapper">
                <Header title={"奇趣分类"} flag={true}></Header>
                <div className="CategoItem_nav">
                    <ul className="CategoItem_wrap">
                        {this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList.map((item,index)=>{
                            return <li className={index===this.state.ind?"active":""} key={item.id} onClick={()=>{this.changeCon(item.id,index)}}>{item.name}</li>
                        })}
                    </ul>
                </div>
                <div className="CategoItem_content">
                    <div className="CategoItem_title">
                        <div className="CategoItem_detail">{this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList[this.state.ind].name}</div>
                        <div className="CategoItem_sub_title">{this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList[this.state.ind].front_name}</div>
                    </div>
                    <div className="CategoItem_con">
                        {this.props.classify.ProductInfo&&this.props.classify.ProductInfo.map((item,index)=>{
                            return <ProductInfo key={item.id} item={item}></ProductInfo>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default CategoItem
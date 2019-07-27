import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import ProductInfo from "../../../components/productItem/index"
import Header from "../../../components/Header/index"
import BScroll from "better-scroll"
import "./categoItem.scss"

@inject("classify")
@observer
 class CategoItem extends Component {
    constructor(props){
        super(props)
        this.state={
            ind:0,
            page:1,
            size:10,
            catego_scroll:null,
            id:-1
        }
        this.catego = React.createRef();
    }
    componentDidMount(){
        //获取地址栏参数，需要改进
        let paramsArray = window.location.search.substr(1).split('&'), 
        i,
        paramsObj = {};

        paramsArray.forEach((item) => {
            i = item.indexOf('=');
            paramsObj[item.slice(0, i)] = item.slice(i+1);
        })
        let id=window.location.search.slice(1).split("=")[1];
        this.props.classify.getClassify_Nav(id)
        this.props.classify.getproduct_Info(id,this.state.size,this.state.page) 
        //实例化轮播图
        let el=this.catego.current;
        this.setState({
            catego_scroll:new BScroll(el,{
                click:true
            })
        })  
        this.setState({
            id:Number(paramsArray[2].split("=")[1])
        })
    }
    changeCon(id,ind){
        this.setState({
            ind:ind
        })
        this.props.classify.getproduct_Info(id)
        this.setState({
            id:id
        })
    }
    render() {
        
        return (
            <div className="catego_wrapper">
                <Header title={"奇趣分类"} flag={true}></Header>
                <div className="CategoItem_nav">
                    <ul className="CategoItem_wrap">
                        {this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList.map((item,index)=>{
                            return <li className={this.state.id===item.id?"active":""} key={item.id} onClick={()=>{this.changeCon(item.id,index)}}>{item.name}</li>
                        })}
                    </ul>
                </div>
                <div className="CategoItem_content" ref={this.catego}>
                    <div style={{position:"relative"}}>
                        <div>
                            <div className="CategoItem_title">
                                <div className="CategoItem_detail">{this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList[this.state.ind].name}</div>
                                <div className="CategoItem_sub_title">{this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList[this.state.ind].front_name}</div>
                            </div>
                            <div className="CategoItem_con">
                                {this.props.classify.ProductInfo&&this.props.classify.ProductInfo.map((item)=>{
                                    return <ProductInfo key={item.id} item={item}></ProductInfo>
                                })}
                            </div>
                        </div>
                        <p className="info_box">上拉加载更多...</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CategoItem
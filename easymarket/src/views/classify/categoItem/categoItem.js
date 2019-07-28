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
            categoScroll:null,
            id:-1,
            info:"上拉加载...",
            flag:false
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
        //实例化scroll
        let el=this.catego.current;
        this.setState({
            categoScroll:new BScroll(el,{
                click:true,
                probeType:2 
            }),
            id:Number(paramsArray[2].split("=")[1])
        })  
        let that=this
        setTimeout(()=>{
            //滚动开始
            that.state.categoScroll.on("scroll",function(){
                if(this.y<this.maxScrollY-40){
                    that.setState({
                        flag:true,
                        info:"释放刷新"
                    })
                }else{
                    that.setState({
                        flag:false,
                        info:"上拉加载..."
                    })
                }
            })
            //滚动结束事件
            that.state.categoScroll.on("scrollEnd",function(){
                if(that.state.flag){
                    that.state.page++;
                    console.log(that.state.page++)
                    that.props.classify.getproduct_Info(id,that.state.size,that.state.page) 
                    this.refresh()
                }
            })
        })
    }
    changeCon(id,ind){
        this.setState({
            ind:ind,
            id:id
        })
        this.props.classify.getproduct_Info(id)
    }
    render() {
        console.log(this.state.id)
        return (
            <div className="catego_wrapper">
                <Header title={"奇趣分类"} flag={true}></Header>
                <div className="CategoItem_nav">
                    <ul className="CategoItem_wrap">
                        {this.props.classify.categoryChild&&this.props.classify.categoryChild.subCategoryList.map((item,index)=>{
                            return <li className={this.state.id===item.id?"active":""} key={index} onClick={()=>{this.changeCon(item.id,index)}}>{item.name}</li>
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
                                {this.props.classify.ProductInfo&&this.props.classify.ProductInfo.map((item,index)=>{
                                    return <ProductInfo key={index} item={item}></ProductInfo>
                                })}
                            </div>
                        </div>
                        <p className="info_box">{this.state.info}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default CategoItem
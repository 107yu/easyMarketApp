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
        let categoId=props.match.params.id
        super(props)
        this.state={
            ind:0,
            page:1,
            size:10,
            categoScroll:null,
            id:Number(categoId),
            info:"上拉加载...",
            flag:false
        }
        this.catego = React.createRef();
    }
    componentDidMount(){
        //获取id
        let categoId=this.props.match.params.id
        let obj=JSON.parse(sessionStorage.getItem("categoInfo"));
        this.props.classify.getClassify_Nav(categoId)
        this.props.classify.getproduct_Info(obj.id.toString(),this.state.size,this.state.page) 
        this.props.classify.getinfo(categoId)
        //实例化scroll
        let el=this.catego.current;
        this.setState({
            categoScroll:new BScroll(el,{
                click:true,
                probeType:2 
            }),
            id:Number(categoId)
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
                    that.props.classify.getproduct_Info(obj.id,that.state.size,that.state.page) 
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
        return (
            <div className="catego_wrapper">
                <Header title={"奇趣分类"} flag={true} path={"/pages/classify"}></Header>
                <div className="CategoItem_nav">
                    <ul className="CategoItem_wrap">
                        {this.props.classify.NavInfo&&this.props.classify.NavInfo.map((item,index)=>{
                            return <li className={this.state.id===item.id?"active":""} key={index} onClick={()=>{this.changeCon(item.id,index)}}>{item.name}</li>
                        })}
                    </ul>
                </div>
                <div className="CategoItem_content" ref={this.catego}>
                    <div style={{position:"relative"}}>
                        <div>
                            <div className="CategoItem_title">
                                <div className="CategoItem_detail">{this.props.classify.NavInfo&&this.props.classify.NavInfo[this.state.ind].name}</div>
                                <div className="CategoItem_sub_title">{this.props.classify.NavInfo&&this.props.classify.NavInfo[this.state.ind].front_name}</div>
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
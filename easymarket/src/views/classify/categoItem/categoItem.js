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
            flag:false,
            pflag:false
        }
        this.catego = React.createRef();
    }

    componentDidMount(){
        //获取id
        let categoId=this.props.match.params.id
        let obj=JSON.parse(sessionStorage.getItem("categoInfo"));
        this.props.classify.getClassify_Nav(categoId).then(res=>{
            console.log(this.catego.current);
        })
        this.props.classify.getproduct_Info(obj.id.toString(), this.props.classify.page) 
        this.props.classify.getinfo(categoId)
       
        this.setState({
            id:Number(categoId)
        })  
    }

    componentDidUpdate(){
        if (this.catego.current && !this.scroll){
            let obj=JSON.parse(sessionStorage.getItem("categoInfo"));
            let {getproduct_Info, page} = this.props.classify;

            //实例化scroll
            let el=this.catego.current;
            // 初始化better-scroll
            this.scroll = new BScroll(el,{
                click:true,
                probeType:2,
                pullDownRefresh: {
                    threshold: 50,
                    stop: 20
                },
                pullUpLoad: {
                    threshold: 50
                },
                pullingDown: async function(){
                    console.log(123);
                    // 下拉刷新
                    await getproduct_Info(obj.id, 1)
                    this.finishPullDown()
                },
                pullingUp: async function(){
                    console.log(456);
                    // 上拉加载
                    
                }
            });
            this.scroll.on('pullingUp', async ()=>{
                // 拼接上拉后续请求参数
                console.log('pullingup')
                await getproduct_Info(obj.id, this.props.classify.page+1)
                this.scroll.finishPullUp();
            })

            this.scroll.on('pullingDown', async ()=>{
                // 拼接下拉后续请求参数
                console.log('pullingDown')
                await getproduct_Info(obj.id, 1)
                this.scroll.finishPullDown()
            })
        }
    }

    // 分类切换
    changeCon(id,ind){
        this.setState({
            ind:ind,
            id:id
        })
        this.props.classify.getproduct_Info(id, 1);
    }

    render() {
        if (!this.props.classify.NavInfo.length){
            return null;
        }
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
                        {this.props.classify.hasMore?<p className="info_box" style={this.props.classify.ProductInfo?{display:"block"}:{display:"none"}}>上拉加载...</p>: null}
                    </div>
                </div>
            </div>
        )
    }
}
export default CategoItem
import React from 'react';
import {inject,observer} from "mobx-react"
import CategogContent from "../../components/classify/index"
import Loading from "../../components/common/Loading"
import "./classify.scss"
@inject("classify","loading")
@observer
class Classify extends React.Component{
    constructor(){
        super()
        this.state={
            ind:0
        }
    }
    componentDidMount(){
        //获取分类页数据
        this.props.loading.changeLoading(true);
        this.props.classify.getClassify_data()
        this.props.classify.getClassify_Nav(1005000)
        this.props.loading.changeLoading(false);
    }
    changeStyle(ind,id){
        //点击左侧菜单切换样式
        this.props.loading.changeLoading(true);
        this.setState({
            ind:ind
        })
        this.props.classify.getClassify_Nav(id)
        this.props.loading.changeLoading(false);
    }
    //点击跳转搜索页面
    goToSearch(){
        let {history}=this.props;
        history.push("/goodsearch")
    }
    render(){
        //获取到分类页初始化数据
        let data=this.props.classify.categoryList
        return <div className="classify_wrap">
            <div className="classify_search">
                <p onClick={()=>{this.goToSearch()}}>搜索商品，共239款好商品</p>
            </div>
            <div className="classify_wrapper">
                <ul className="classify_left">
                    {data&&data.map((item,index)=>{
                    return <li key={item.id} onClick={()=>{this.changeStyle(index,item.id)}}
                    className={index===this.state.ind?"active":""}>{item.name}</li>
                    })}
                </ul>
                <div className="classify_right">
                    <CategogContent ind={this.state.ind}></CategogContent>
                </div>  
            </div>
        </div>
    }
}
export default Classify;
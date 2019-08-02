import React, { Component } from 'react'
import "./goosSearch.scss"
import {inject,observer} from "mobx-react"
import ProductItem from "../../../components/productItem/index"
@inject("search")
@observer
 class GoodsSearch extends Component {
    constructor(props){
        super(props)
        this.state={
            val:"",
            flag:false,
            historyFlag:false,
            productFlag:false,
            ind:0,
            keyword:"",
            style:"componse",
            typeFlag:false,
            allTypeFlag:false,
            priceStyle:null
        }
    }
    componentDidMount(){
        //获取关键字数据
        this.props.search.getKeywords()
    }
    goBack(){
        this.props.history.push("/pages/classify")
    }
    /**
     * input双向绑定
     */
    changeVal(e){
        this.setState({
            val:e.target.value,
            flag:true,
            historyFlag:true
        })
        if(e.target.value){
            this.props.search.Search(e.target.value)
        }
        //如果input 为空，则不渲染searchList
        if(e.target.value===""){
            this.props.search.Search()
            this.setState({
                historyFlag:false,
                flag:false
            })
        }
    }
    /**
     * 
     * 查询搜索相关标题列表
     */
    goSearch(e){
        if(e.keyCode===13){
            this.props.search.searchRelated({keyword:this.state.val})
            this.setState({
                productFlag:true,
                keyword:this.state.val
            })
        }
        
    }
    goToSearch(val){
        this.props.search.searchRelated({keyword:val})
        this.setState({
            flag:true,
            historyFlag:true,
            productFlag:true,
            val:val,
            keyword:val
        })
    }
    /**
     * 点击取消
     */
    cancel(){
        this.setState({
            flag:false,
            historyFlag:false,
            productFlag:false
        })
    }
    /**
     * 删除历史记录
     */
    clearhistory(){
        this.setState({
            historyFlag:true
        })
        this.props.search.clearSearch()
    }
    /**
     * 根据分类
    */
    getType(ind,id){
        this.setState({
            ind:ind
        })
        //根据id去请求数据
        this.props.search.getType({categoryId:id,keyword:this.state.keyword}) 
    }
    /**
     * 点击全部，价格，全部分类
     */
    changeList(e,val){
        if(e.target.tagName==="B"){
            if(e.target.innerHTML==="∨"){
                this.setState({
                    priceStyle:!this.state.priceStyle
                })

            }else if(e.target.innerHTML==="∧"){
                this.setState({
                    priceStyle:!this.state.priceStyle
                })
            }
            
        }
        this.setState({
            style:val
        })
        if(val==="componse"){
            this.props.search.searchRelated({keyword:this.state.val})
            this.setState({
                allTypeFlag:false,
                priceStyle:""
            })
        }else if(val==="price"){
            this.setState({
                typeFlag:!this.state.typeFlag,
                allTypeFlag:false,
                priceStyle:!this.state.priceStyle
            },()=>{
                this.props.search.searchRelated({keyword:this.state.val,sort:"price",order:this.state.typeFlag?"asc":"desc"})
            })
        }else if(val==="allType"){
            this.setState({
                allTypeFlag:!this.state.allTypeFlag,
                priceStyle:""
            })
        }
    }
    render() {
        let {defaultKeyword,historyKeywordList,hotKeywordList,searchList}=this.props.search
        return (
            <div className="search_wrapper">
                <div className="search_header">
                    <span className="search_goback" onClick={()=>{this.goBack()}}>&lt;</span>
                    <div className="search_input">
                        <i className=""></i>
                        <input type="text" placeholder={defaultKeyword&&defaultKeyword.keyword} value={this.state.val} onChange={(e)=>{this.changeVal(e)}} 
                        onKeyDown={(e)=>{this.goSearch(e)}} />
                    </div>
                    <span className="search_cancel" onClick={()=>{this.cancel()}}>取消</span>
                    <ul className={searchList?"search_list show":"search_list"}>
                        {searchList&&searchList.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className="search_history" style={this.state.historyFlag?{display:"none"}:{display:"block"}}>
                    <div>历史记录 <i onClick={()=>{this.clearhistory()}}>x</i></div>
                    <ul>
                        {historyKeywordList&&historyKeywordList.map((item,index)=>{
                            return <li onClick={()=>{this.goToSearch(item)}} key={index}>{item}</li>
                        })}
                    </ul>
                </div>
                <div className="search_history" style={this.state.flag?{display:"none"}:{display:"block"}}>
                    <div>热门搜索</div>
                    <ul>
                        {hotKeywordList&&hotKeywordList.map((item,index)=>{
                            return <li onClick={()=>{this.goToSearch(item.keyword)}}  className={item.is_hot?"active":""} key={index}>{item.keyword}</li>
                        })}
                    </ul>
                </div>
                <div className="related_info" style={this.state.productFlag?{display:"block"}:{display:"none"}}>
                    <ul className="related_info_title">
                        <li className={this.state.style==="componse"?"type":""} onClick={(e)=>{this.changeList(e,"componse")}}>综合</li>
                        <li className={this.state.style==="price"?"type":""} onClick={(e)=>{this.changeList(e,"price")}}>价格<span><b className={this.state.priceStyle===true?"style":""} onClick={()=>{this.changePrice("asc")}}>∨</b><b className={this.state.priceStyle===false?"style":""} onClick={()=>{this.changePrice("desc")}}>∧</b></span></li>
                        <li className={this.state.style==="allType"?"type":""} onClick={(e)=>{this.changeList(e,"allType")}}>全部分类</li>
                    </ul>
                    <div className="all_classify_list" style={this.state.allTypeFlag?{display:"block"}:{display:"none"}}>
                        {this.props.search.filterCategory&&this.props.search.filterCategory.map((item,index)=>{
                            return <span className={this.state.ind===index?"active":""} key={index}
                            onClick={()=>{this.getType(index,item.id)}}
                            >{item.name}</span>
                        })}
                    </div>
                    <div className="related_info_content">
                        {this.props.search.related&&this.props.search.related.map((item,index)=>{
                            return <ProductItem key={index} item={item}></ProductItem>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default GoodsSearch

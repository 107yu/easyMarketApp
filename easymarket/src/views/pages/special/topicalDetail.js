import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import {NavLink} from "react-router-dom"
import "./special.css"
@inject('special')
@observer
 class TopicalDetail extends Component {
    componentDidMount(){
        let id=this.props.match.params.id;
        //获取专题详情
        this.props.special.topicalDetail({id:id*1})
        this.props.special.topicalRelated({id:id*1})
        this.props.special.topicalComment({valueId:id*1,typeId:1})
        //返回上级
        this.goBack=this.goBack.bind(this)
    }
    goBack(){
        this.props.history.goBack()
    }
    render() {
        let relateds=this.props.special.relateds
        let comments= this.props.special.comments
        return (
            <div className="topical_detail">
               <div className="topical_detail_header">
                   <div className="topical_detail_header_left" onClick={()=>{this.goBack()}}>{"<"}</div>
                   <div className="topical_detail_header_title">{this.props.special.detail.title}</div>
               </div>
               <div  dangerouslySetInnerHTML={{__html:this.props.special.detail.content}} className="topical_detail_main">
               </div>
               <div>
                   <div>
                       <span>精选留言</span>
                   </div>
                   <ul className="topical_detail_related">
                       {
                        comments&&comments.map(item=>{
                               return <li key={item.id}>
                                   <p>
                                       <b>匿名用户</b>
                                       <span>{item.add_time}</span>
                                   </p>
                                   <p>{item.content}</p>
                               </li>
                           })
                       }
                   </ul>
               </div>
               <div>
                   <h3 style={{textAlign:'center',padding:".3rem 0"}}>推荐专题</h3>
                   {
                        relateds&&relateds.map((item)=>{
                            return <NavLink key={item.id} className="topicItem" to={"/topicalDetail/"+item.id}>
                                <img src={item.scene_pic_url} alt=""/>
                                <div className="topicItemTitle">{item.title}</div>
                                <div className="topicItemSubtitle">{item.subtitle}</div>
                                <div className="topicItemPrice">{item.price_info}元起</div>
                            </NavLink>
                        })
                    }
               </div>
            </div>
        )
    }
}
export default TopicalDetail
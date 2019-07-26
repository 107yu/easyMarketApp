import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./special.css"
import Guestbook from "../../../components/topical/guestbook"
import Recommend from "../../../components/topical/recommend"
import Goback from "../../../components/goback/goBack"
import {inject,observer} from "mobx-react"
@inject('special')
@observer
 class TopicalDetail extends Component {
    componentDidMount(){
        let id=this.props.match.params.id;
        //获取专题详情
        this.props.special.topicalDetail({id:id*1})
        this.props.special.topicalRelated({id:id*1})
        this.props.special.topicalComment({valueId:id*1,typeId:1,page:1,size:5})
    }
    render() {
        return (
            <div className="topical_detail">
               <Goback title={this.props.special.detail.title} {...this.props}></Goback>
               <div  dangerouslySetInnerHTML={{__html:this.props.special.detail.content}} className="topical_detail_main"></div>
               <Guestbook {...this.props}></Guestbook>
               <Recommend></Recommend>
            </div>
        )
    }
}
export default TopicalDetail
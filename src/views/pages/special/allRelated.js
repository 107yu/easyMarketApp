import React, { Component } from 'react'
import Goback from "../../../components/goback/goBack"
import {inject,observer} from "mobx-react"
import List from "../../../components/topical/guestbookList"
import "./special.css"
@inject('special')
@observer
 class AllRelated extends Component {
     componentDidMount(){
        let id=this.props.location.pathname.split("/")[2];
        let typeId=this.props.location.state.typeId;
        this.props.special.topicalAllComment({valueId:id*1,typeId})
     }
    render() {
        let comments= this.props.special.Allcomments
        return (
            <div className="allComment">
                <Goback title="查看更多评论" {...this.props}></Goback>
               <div className="allComment_list">
                    <List comments={comments&&comments}></List>
               </div>
            </div>
        )
    }
}

export default AllRelated 
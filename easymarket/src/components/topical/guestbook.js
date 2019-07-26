import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
import List from "./guestbookList"
import "./topical.css"
@inject('special')
@observer
 class Guestbook extends Component {
     getAllRelated(){
        let id=this.props.match.params.id;
        this.props.history.push({pathname:"/topicalComment/"+id,state:{typeId:1}})
     }
    render() {
        let comments= this.props.special.comments
        return (
               <div className="guestbook">
                   <div className="topic_guestbook_header">
                       <span>精选留言</span>
                       <span>写留言</span>
                   </div>
                    <List comments={comments&&comments}></List>
                   <div className="topical_guestbook_more" onClick={()=>{this.getAllRelated()}}>
                       查看更多评论
                   </div>
               </div>
        )
    }
}
export default Guestbook 
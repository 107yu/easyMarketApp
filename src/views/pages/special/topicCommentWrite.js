import React, { Component } from 'react'
import "./special.css"
import { Button} from 'antd-mobile';
import Goback from "../../../components/goback/goBack"
import {inject,observer} from "mobx-react"
@inject('special')
@observer
 class TopicalCommentWrite extends Component {
    constructor(){
        super()
        this.state={
            content:"",
            maxLen:80
        }
    }
    getContent(e){
        this.setState({
            content:e.target.value
        })
    }
    clearn(){
        this.setState({
            content:""
        })
    }
    addMessage(){
        let id=this.props.location.pathname.split("/")[2]
        let {comment}=this.state;
        if(comment){
            let info= {
                "content":this.state.content,
                "typeId":1,
                "valueId":id
            }
            this.props.special.setComments(info)
        }
        this.props.history.goBack()
    }
    render() {
        let {content,maxLen}=this.state;
        return (
            <div className="topical_comment_write">
               <Goback title="填写留言" {...this.props}></Goback>
                <div className="topical_comment_write_textarea">
                    <textarea name="" id="" cols="30" rows="10"  value={content} maxLength={maxLen} onChange={(e)=>{this.getContent(e)}}></textarea>
                    <span className="topical_comment_write_num">{content.length}/{maxLen}</span>
                </div>
                <div className="topical_comment_write_btn">
                    <Button size="small" className={content.length>0?"":"btn_hidden"} onClick={()=>{this.clearn()}}>清空</Button>
                    <Button type="primary" size="small" className="btn_message" onClick={()=>{this.addMessage()}}>留言</Button>    
                </div>
            </div>
        )
    }
}
export default TopicalCommentWrite
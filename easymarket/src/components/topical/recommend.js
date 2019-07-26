import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./topical.css"
import {inject,observer} from "mobx-react"
@inject('special')
@observer
 class Recommend extends Component {
    render() {
        let relateds=this.props.special.relateds
        return (
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
        )
    }
}
export default Recommend
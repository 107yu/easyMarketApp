import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./topical.css"
 class Recommend extends Component {
    render() {
        let {relateds,isShow}=this.props
        return (
            <>
                {
                    relateds&&relateds.map((item)=>{
                        return <NavLink key={item.id} className={isShow?"topicItem":"topicItem topicItemShow"} to={"/topicalDetail/"+item.id}>
                            <img src={item.scene_pic_url} alt=""/>
                            <div className={isShow?"topicItemTitle":"topicItemTitle topicItemIsShow"}>{item.title}</div>
                            <div className="topicItemSubtitle">{item.subtitle}</div>
                            <div className={isShow?"topicItemPrice":"topicItemPrice topicItemIsShow"}>{item.price_info}元起</div>
                        </NavLink>
                    })
                }
            </>
        )
    }
}
export default Recommend
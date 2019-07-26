import React from 'react';
import {inject,observer} from "mobx-react"
import {NavLink} from "react-router-dom"
import "./special.css"
@inject('special')
@observer
class Special extends React.Component{
    componentDidMount(){
        this.props.special.getTopicData()
    }
    render(){
        let topicalList=this.props.special.topicList
        return <div className="special">
           {
               topicalList&&topicalList.map((item)=>{
                return <NavLink key={item.id} className="topicItem" to={"/topicalDetail/"+item.id}>
                    <img src={item.scene_pic_url} alt=""/>
                      <div className="topicItemTitle">{item.title}</div>
                      <div className="topicItemSubtitle">{item.subtitle}</div>
                      <div className="topicItemPrice">{item.price_info}元起</div>
                </NavLink>
               })
           }
        </div>
    }
}
export default Special;
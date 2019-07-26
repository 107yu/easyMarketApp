import React from 'react';
import {inject,observer} from "mobx-react"
import Recommend from "../../../components/topical/recommend"
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
           <Recommend relateds={topicalList} isShow={true}></Recommend>
        </div>
    }
}
export default Special;
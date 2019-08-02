import React, { Component } from 'react'
import "./goBack.css"
export default class goBack extends Component {
    constructor(){
        super()
        this.goBack=this.goBack.bind(this)
    }
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="goBack">
                <div className="goBack_left" onClick={()=>{this.goBack()}}>{"<"}</div>
                <div className="goBack_title">{this.props.title}</div>
            </div>
        )
    }
}

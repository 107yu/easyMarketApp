import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import "./titleLine.scss"
class TitleLine extends Component {
    constructor(props){
        super(props)
    }
   
    render() {
        let {title}=this.props
        return (
            <div className="line_title">
                <div>
                <div className="line"></div>
                <div>{title&&title}</div>
                <div className="line"></div>
                </div>
            </div>
        )
    }
}
export default withRouter(TitleLine)
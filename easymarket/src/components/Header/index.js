import React, { Component } from 'react'
import "./header.scss"

export default class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let {title,flag}=this.props
        return (
            <div className="header">
                <span className={flag?"show":""}>&lt;</span>
                <p>{title}</p>
                <span></span>
            </div>
        )
    }
}

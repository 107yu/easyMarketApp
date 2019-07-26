import React, { Component } from 'react'

export default class GuestbookList extends Component {
    render() {
        let comments=this.props.comments
        return (
            <ul className="comment_list">
                {
                comments&&comments.map(item=>{
                        return <li key={item.id}>
                            <p>
                                <b>匿名用户</b>
                                <span>{item.add_time}</span>
                            </p>
                            <p>{item.content}</p>
                        </li>
                    })
                }
            </ul>
        )
    }
}

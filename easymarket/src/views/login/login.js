import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
@inject('login')
@observer
class Login extends Component {
    componentDidMount(){
        this.props.login.eventLogin()
    }
    render() {
        return (
            <div>
                登录
            </div>
        )
    }
}
export default Login
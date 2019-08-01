import React from 'react';
import "./login.css"
import {inject,observer} from "mobx-react"
import { Button} from 'antd-mobile';
@inject('login')
@observer
class Login extends React.Component{
    constructor(){
        super()
        this.valRef=React.createRef()
        this.pwdRef=React.createRef()
    }
    componentDidMount(){
        if(localStorage.getItem("token")){
            this.props.history.goBack()
        }
    }
    getInfomation(){
      let info={
        mobile:this.valRef.current.value,
        password:this.pwdRef.current.value
      }
     this.props.login.sendLogin(info)
    }
    render(){
        if(this.props.login.isLogin===0){
            this.props.history.push("/pages/page")
            return;
        }
        return <div className="login_page">
            <div className="login_logo">
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
            <div className="login_main">
                <div>
                    <input type="text" placeholder="请输入手机号" ref={this.valRef}/>
                </div>
                <div>
                    <input type="password" placeholder="请输入密码" ref={this.pwdRef}/>
                </div>
                <div className="login_btn">
                    <Button type="primary" onClick={()=>{this.getInfomation()}}>登录</Button>
                </div>
            </div>
        </div>
    }
}
export default Login;
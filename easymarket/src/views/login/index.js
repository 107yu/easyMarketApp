import React from 'react';
import "./login.css"
import { Button} from 'antd-mobile';
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            val:"",
            ped:"",
        }
    }
    getInfomation(){
        console.log(111)
    }
    render(){
        return <div className="login_page">
            <div className="login_logo">
                <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
            <div className="login_main">
                <div>
                    <input type="text" placeholder="请输入手机号"/>
                </div>
                <div>
                    <input type="password" placeholder="请输入密码"/>
                </div>
                <div className="login_btn">
                    <Button type="primary" onClick={()=>{console.log(11)}}>登录</Button>
                </div>
            </div>
        </div>
    }
}

export default Login;
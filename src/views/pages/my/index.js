import React from 'react';
import './index.scss'
import {Toast} from 'antd-mobile'
import { Link } from 'react-router-dom';
class My extends React.Component {
    constructor() {
        super()
        this.state = {
            isLogin:false,
            myList: [{
                icon: 'icon-wenjianjia',
                name: '我的收藏',
                link: '/collectdetail'
            }, {
                icon: 'icon-weizhi',
                name: '地址管理',
                link: '/addressdetail'
            }, {
                icon: 'icon-icon--copy-copy',
                name: '我的订单'
            }, {
                icon: 'icon-rili',
                name: '周末拼单'
            }, {
                icon: 'icon-youhuiquan',
                name: '优惠券'
            }, {
                icon: 'icon--',
                name: '优选购'
            }, {
                icon: 'icon-hongbao',
                name: '我的红包'
            }, {
                icon: 'icon-vip',
                name: '会员plus'
            }, {
                icon: 'icon-desadanshi',
                name: '邀请返利'
            }, {
                icon: 'icon-yijian',
                name: '意见反馈'
            }, {
                icon: 'icon-a069',
                name: '客服咨询'
            }, {
                icon: 'icon-anquan',
                name: '账户安全'
            }]
        }
    }
    componentDidMount(){
         let token=localStorage.getItem("token")
         if(token){
             this.setState({
                 isLogin:true
             })
         }
         else{
             this.setState({
                 isLogin:false
             })
         }
    }
    showPower(item) {
        let token=localStorage.getItem("token")
       if(!token){
           this.props.history.push({pathname:"/login"})
           return;
       }
        if ('link' in item) {
            this.props.history.push(item.link)
        } else {
            Toast.offline(`${item.name}功能还未解锁，请耐心等候~`, 1)
        }
    }
    loginout(){
        let {isLogin}=this.state;
        if(isLogin){
          window.localStorage.removeItem('token')
          window.localStorage.removeItem('info')
        }
        else{
          this.props.history.push('/login')
        }
        this.setState({
          isLogin:!isLogin
        })
    }
    render() {
        const { myList,isLogin } = this.state
        let info=localStorage.getItem("info")
        return <div className='tabPageContent'>
            <div id='minePage'>
                <div className='userMsgWrap'>
                    <div className='userLogo'></div>
                    <div className='userMsgs'>
                        <div>{info}</div>
                        <div>普通用户</div>
                    </div>
                </div>
            </div>
            <div className='userPower'>
                {
                    myList && myList.map((item, index) => {
                        return <div key={index} className='power' onClick={this.showPower.bind(this, item)} style={'link' in item ? { color: '#2196f3' } : {}}>
                            <i className={`iconfont ${item.icon}`} style={'link' in item ? { color: '#2196f3' } : {}}></i>
                            <div>{item.name}</div>
                        </div>
                    })
                }
                <div className='loginOut' onClick={()=>{
                    this.loginout()
                }}>
                {
                    isLogin?"退出登录":"登录"
                }
                </div>
            </div>
        </div>
    }
}

export default My;
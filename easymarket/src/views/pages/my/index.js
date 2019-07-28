import React from 'react';
import './index.scss'
import {Link} from 'react-router-dom';
class My extends React.Component {
    render() {
        return <div className='tabPageContent'>
            <div id='minePage'>
                <div className='userMsgWrap'>
                    <div className='userLogo'></div>
                    <div className='userMsgs'>
                        <div>18012341523</div>
                        <div>普通用户</div>
                    </div>
                </div>
            </div>
            <div className='userPower'>
                <Link to='/collectdetail' className='power' > 
                    <i className='iconfont icon-wenjianjia'></i>
                    <div>我的收藏</div>
                </Link>
                <Link to='/addressdetail' className='power' > 
                    <i className='iconfont icon-weizhi'></i>
                    <div>地址管理</div>
                </Link>
                <div className='power' > 
                    <i className='iconfont icon-icon--copy-copy'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-rili'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-youhuiquan'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon--'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-hongbao'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-vip'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-desadanshi'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-yijian'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-a069'></i>
                    <div>我的订单</div>
                </div>
                 <div className='power' > 
                    <i className='iconfont icon-anquan'></i>
                    <div>我的订单</div>
                </div>
                <div className='loginOut'>退出登录</div>
            </div>
        </div>
    }
}

export default My;
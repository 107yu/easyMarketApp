import React from 'react';
import './index.scss'
// import '../../../pubilc/font_1314870_1f3uvzdyr5s/iconfont.css'
import { NavLink } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return <div className='footer'>
            <ul>
                <li>
                    <i className='iconfont &#xe663'></i>
                    <NavLink to='page'>首页</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <i></i>
                    <NavLink to='special'>专题</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <i></i>
                    <NavLink to='classify'>分类</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <i></i>
                    <NavLink to='shopping'>购物车</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <i></i>
                    <NavLink to='my'>我的</NavLink>
                </li>
            </ul>
        </div>
    }
}

export default Footer;
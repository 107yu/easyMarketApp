import React from 'react';
import ReactDOM from 'react-dom';
//关联mobx
import { Provider } from "mobx-react"
//引入react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';
//引入路由表
import RouterView from './router/index'
//仓库
import store from "./store/index"
//样式
import "./index.css"
import 'antd-mobile/dist/antd-mobile.css';
import "../node_modules/swiper/dist/css/swiper.min.css"
//iconfonts图标
import './fonts/iconfont.css'



ReactDOM.render(<Provider {...store}>
    <React.Fragment>
        <Router>    
            <RouterView/>
        </Router>
    </React.Fragment>
</Provider>,document.getElementById('root'));


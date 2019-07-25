import React from 'react';
import ReactDOM from 'react-dom';
//关联mobx
import {Provider} from "mobx-react"
//仓库
import  store from "./store/index"
//页面组件
import IndexPage from "./views/indexPage"
//样式
import "./index.css"
// import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(<Provider {...store}>
    <IndexPage />
    </Provider>, 
document.getElementById('root'));


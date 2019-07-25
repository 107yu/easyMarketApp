import React from 'react';
import ReactDOM from 'react-dom';
// import '../public/fonts/demo_index'
import { Provider } from "mobx-react"
import store from "./store/index"
import IndexPage from "./views/indexPage"

ReactDOM.render(
    <Provider {...store}>
    <IndexPage />
    </Provider>, 
document.getElementById('root'));


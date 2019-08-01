import React from 'react';
import {observer, inject} from 'mobx-react'
import "./index.scss"
import { Toast} from 'antd-mobile';

@inject('loading')
@observer
class Loading extends React.Component{
    render(){
        if (!this.props.loading.isLoading){
            return null;
        }
        return <div className="loading">
        { Toast.loading('loading',1)}
      </div>
    }
}

export default Loading;
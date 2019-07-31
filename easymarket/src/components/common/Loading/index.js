import React from 'react';
import {observer, inject} from 'mobx-react'

@inject('loading')
@observer
class Loading extends React.Component{
    render(){
        if (!this.props.loading.isLoading){
            return null;
        }
        return <div className="loading">
           <div className="circle-loader">
                <div className="circle-line">
                    <div className="circle circle-blue"></div>
                    <div className="circle circle-blue"></div>
                    <div className="circle circle-blue"></div>
                </div>
                <div className="circle-line">
                    <div className="circle circle-yellow"></div>
                    <div className="circle circle-yellow"></div>
                    <div className="circle circle-yellow"></div>
                </div>
                <div className="circle-line">
                    <div className="circle circle-red"></div>
                    <div className="circle circle-red"></div>
                    <div className="circle circle-red"></div>
                </div>
                <div className="circle-line">
                    <div className="circle circle-green"></div>
                    <div className="circle circle-green"></div>
                    <div className="circle circle-green"></div>
                </div>
            </div>
        </div>
    }
}

export default Loading;
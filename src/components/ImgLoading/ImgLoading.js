import React, { Component } from 'react'
import "./imgLoading.css"
import {inject,observer} from "mobx-react"
@inject("loading")
@observer

 class ImgLazyLoad extends Component {
    constructor(props){
        super(props)
       
    }
    componentDidMount(){
        this.handle()
    }
   
    render() {
        //需要去判断
        //如果isLoad为true就显示默认 否则就显示图片
        let {imgSrc,initUrl}=this.props
        return (
            <></>
            // <img  className={this.state.isLoad?'imgLazyload loadEnd': 'imgLazyload loading'} src={imgSrc} alt="imgLazyLoad"/>
        )
    }
}
//设置默认图片
ImgLazyLoad.defaultProps = {
    offSetTop: 40,
    initUrl: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg'
  }
export default ImgLazyLoad

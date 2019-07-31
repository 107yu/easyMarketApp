import React, { Component } from 'react'
 class ImgLazyLoad extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoad:false,
            isLoading:false
        }
        this.handle = this.handle.bind(this);
        this.imgs= React.createRef();
    }
    componentDidMount(){
        this.handle()
        // window.addEventListener("scroll",this.handle)
    }
    handle(){
        if(!this.state.isLoading){
            let IMG=this.imgs.current
            //获取页面滚动的距离
            let changedBottom=window.scrollY+document.documentElement.clientHeight;
            //获取图片距离顶部的距离
            let offsetT=IMG.offsetTop;
            // if(offsetT changeBottom){
    
            // }
            let imgObj = new Image()
            imgObj.src = this.props.imgSrc
            this.setState({isLoading: true})
            new Promise((resolve, reject)=>{
            imgObj.onload = function(){
                resolve(imgObj)
            }
            }).then((imgObj)=>{
            this.setState({isLoad: true})
            })
            
            console.log(changedBottom,offsetT,"11111")

        }else{
            window.removeEventListener('scroll', this.handler)
        }
       




    }
    render() {
        //需要去判断
        //如果isLoad为true就显示默认 否则就显示图片

        let {imgSrc,initUrl}=this.props
        return (
            <img ref={this.imgs} className={this.state.isLoad?'imgLazyload loadEnd': 'imgLazyload loading'} src={imgSrc} alt="imgLazyLoad"/>
        )
    }
}
//设置默认图片
ImgLazyLoad.defaultProps = {
    offSetTop: 40,
    initUrl: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg'
  }
export default ImgLazyLoad

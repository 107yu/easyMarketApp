import React from 'react';
import {withRouter} from "react-router-dom"
import ImgLazyload from "../../../utils/imgLoading"
// import LazyLoad from 'react-lazy-load';
import origin from "../../../static/img/market.jpg"

class HotGoods extends React.Component {
    constructor(props){
        super(props)
        this.wrapper=React.createRef()
    }
    goTo(item){
        sessionStorage.setItem("productId",JSON.stringify({id:item.id}))
        this.props.history.push(`/productDetail/${item.id}`) 
    }
    componentDidMount(){
        
    }
    render() {
        let { hotGoodsList } = this.props;
        if(hotGoodsList){
            new ImgLazyload(this.wrapper.current)
        }
        return <div className='hotGoodsBox' ref={this.wrapper}>
            <div className='hotGoodsTitle'>人气推荐</div>
            {
                hotGoodsList && hotGoodsList.map((item, index) => {
                    return <div key={index} className='newGoodsWrap' onClick={()=>{this.goTo(item)}}>
                        <a className='hotGoodsItem'>
                        {/* <img src="origin" data-src="value.CoverPhoto" alt="value.Name"> */}
                            <img className='imgLazyload' src={origin}  data-src={item.list_pic_url} alt="" />
                            {/* <ImgLazyload className='imgLazyload' imgSrc={item.list_pic_url}></ImgLazyload> */}
                            {/* <LazyLoad offsetVertical={0} width={140}>
                                
                            </LazyLoad> */}
                            <div className='hotGoodsInfos'>
                                <div className='hotGoodsName'>{item.name}</div>
                                <div className='hotGoodsInfo'>{item.goods_brief}</div>
                                <div className='hotGoodsPrice'>￥{item.retail_price}</div>
                            </div>
                        </a>
                    </div>
                })
            }
        </div>
    }
}


export default withRouter(HotGoods)
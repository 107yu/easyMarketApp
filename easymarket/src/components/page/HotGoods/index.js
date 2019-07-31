import React from 'react';
import {withRouter} from "react-router-dom"
import ImgLazyload from "../../../components/ImgLoading/ImgLoading"
import LazyLoad from 'react-lazyload';


class HotGoods extends React.Component {
    goTo(item){
        sessionStorage.setItem("productId",JSON.stringify({id:item.id}))
        this.props.history.push(`/productDetail/${item.id}`) 
    }
    render() {
        let { hotGoodsList } = this.props;
        return <div className='hotGoodsBox'>
            <div className='hotGoodsTitle'>人气推荐</div>
            {
                hotGoodsList && hotGoodsList.map((item, index) => {
                    return <div key={index} className='newGoodsWrap' onClick={()=>{this.goTo(item)}}>
                        <a className='hotGoodsItem'>
                            <ImgLazyload className='imgLazyload' imgSrc={item.list_pic_url}></ImgLazyload>
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
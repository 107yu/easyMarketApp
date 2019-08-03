import React from 'react';
import {withRouter} from "react-router-dom"

import Lazyimg, { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js



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
       // 配置
        const config = {
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            threshold: 10000,
            placeholder:"http://downza.img.zz314.com/news/pc/rdtj-1023/2018-03-06/794b93b77c3cb7c5a9343267be9f9e7a.png",
        };
        const Lazy = withLazyimg(config);
        return <div className='hotGoodsBox' ref={this.wrapper}>
            <div className='hotGoodsTitle'>人气推荐</div>
            {
                hotGoodsList && hotGoodsList.map((item, index) => {
                    return <div key={index} className='newGoodsWrap' onClick={()=>{this.goTo(item)}}>
                        <a className='hotGoodsItem'>
                            <Lazy
                                className="lazy"
                                src={item.list_pic_url}
                            />
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
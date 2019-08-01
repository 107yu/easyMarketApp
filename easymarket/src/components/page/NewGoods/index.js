import React from 'react';
import './index.scss'
import {withRouter} from "react-router-dom"
import Lazyimg, { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
// 配置
const config = {
  js_effect: 'transition.fadeIn', // 支持 velocity.js 动画效果
  threshold: 10000,
  placeholder:"http://downza.img.zz314.com/news/pc/rdtj-1023/2018-03-06/794b93b77c3cb7c5a9343267be9f9e7a.png"
};
const Lazy = withLazyimg(config);

class NewGoods extends React.Component {
    goTo(item){
        sessionStorage.setItem("productId",JSON.stringify({id:item.id}))
        this.props.history.push(`/productDetail/${item.id}`) 
    }
    render() {
        let { newGoodsList } = this.props;
        return <div className='newGoodsBox'>
            <div className='newGoodsTitle'>新品首发</div>
            <div className='title'>
                {
                newGoodsList && newGoodsList.map((item, index) => {
                    return <div key={index} className='newGoodsWrap' onClick={()=>{this.goTo(item)}}>
                        <a className='newGoodsItem'>
                            <Lazy
                                className="lazy"
                                src={item.list_pic_url}
                            />
                            <div className='newGoodsName'>{item.name}</div>
                            <div className='newGoodsPrice'>￥{item.retail_price}元</div>
                        </a>
                    </div>
                })
            }
            </div>
        </div>
    }
}


export default withRouter(NewGoods)
import React from 'react';
import './index.scss'
import Lazyimg, { withLazyimg } from 'react-lazyimg-component';
// 引入 volecity.js
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

class TopGoods extends React.Component {
    render() {
        let { topicList } = this.props;
        // 配置
        const config = {
            js_effect: 'transition.shrinkIn', // 支持 velocity.js 动画效果
            threshold: 10000,
            placeholder:"http://downza.img.zz314.com/news/pc/rdtj-1023/2018-03-06/794b93b77c3cb7c5a9343267be9f9e7a.png",
        
        };
        const Lazy = withLazyimg(config);
        return <div className='topGoodsBox'>
            <div className='topGoodsTitle'>专题精选</div>
            {
                topicList && topicList.map((item, index) => {
                    return <div key={index} className='topGoodsWrap'>
                        <div className='slider'>
                            <div className='frame'>
                                <a className='topGoodsItem'>
                                    <Lazy
                                        className="lazy"
                                        src={item.item_pic_url}
                                    />
                                    <div className='topGoodSubTitle'>
                                        {item.title}
                                        <span className='topGoodPrice'>￥{item.price_info}元起</span>
                                    </div>
                                    <div className='topGoodTitle'>{item.subtitle}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default TopGoods
import React from 'react';
import './index.scss'
class TopGoods extends React.Component {
    render() {
        let { topicList } = this.props;
        return <div className='topGoodsBox'>
            <div className='topGoodsTitle'>专题精选</div>
            {
                topicList && topicList.map((item, index) => {
                    return <div key={index} className='topGoodsWrap'>
                        <div className='slider'>
                            <div className='frame'>
                                <a className='topGoodsItem'>
                                    <img src={item.item_pic_url} alt="" />
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
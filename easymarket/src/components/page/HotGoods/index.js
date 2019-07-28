import React from 'react';


class HotGoods extends React.Component {
    render() {
        let { hotGoodsList } = this.props;
        return <div className='hotGoodsBox'>
            <div className='hotGoodsTitle'>人气推荐</div>
            {
                hotGoodsList && hotGoodsList.map((item, index) => {
                    return <div key={index} className='newGoodsWrap'>
                        <a className='hotGoodsItem'>
                            <img className='imgLazyload' src={item.list_pic_url} alt="" />
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


export default HotGoods
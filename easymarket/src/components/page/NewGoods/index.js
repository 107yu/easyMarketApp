import React from 'react';
import './index.scss'
import {withRouter} from "react-router-dom"


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
                            <img src={item.list_pic_url} alt="" />
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
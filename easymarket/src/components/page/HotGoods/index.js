import React from 'react';


class HotGoods extends React.Component {
    render() {
        return <div className='hotGoodsBox'>
            <div className='hotGoodsTitle'>人气推荐</div>
            <div className='newGoodsWrap'>
                <a className='hotGoodsItem'>
                    <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png" alt="" />
                    <div className='hotGoodsInfos'>
                        <div className='hotGoodsName'>双宫茧桑蚕丝被 空调被</div>
                        <div className='hotGoodsInfo'>一级桑蚕丝，吸湿透气柔软</div>
                        <div className='hotGoodsPrice'>￥366</div>
                    </div>
                </a>
                <a className='hotGoodsItem'>
                    <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/a196b367f23ccfd8205b6da647c62b84.png" alt="" />
                    <div className='hotGoodsInfos'>
                        <div className='hotGoodsName'>双宫茧桑蚕丝被 空调被</div>
                        <div className='hotGoodsInfo'>一级桑蚕丝，吸湿透气柔软</div>
                        <div className='hotGoodsPrice'>￥366</div>
                    </div>
                </a>
                <a className='hotGoodsItem'>
                    <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png" alt="" />
                    <div className='hotGoodsInfos'>
                        <div className='hotGoodsName'>双宫茧桑蚕丝被 空调被</div>
                        <div className='hotGoodsInfo'>一级桑蚕丝，吸湿透气柔软</div>
                        <div className='hotGoodsPrice'>￥366</div>
                    </div>
                </a>
            </div>
        </div>
    }
}


export default HotGoods
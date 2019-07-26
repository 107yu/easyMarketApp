import React from 'react';
import Carousel from '../../../components/carousel'
import './index.scss'
import { NavLink } from 'react-router-dom';
class Page extends React.Component {
    render() {
        return <div className='page'>
            <Carousel></Carousel>
            <div className='tab'>
                <NavLink to=''><i className='iconfont icon--'></i>居家</NavLink>
                <NavLink to=''><i className='iconfont icon-yijian'></i>餐厨</NavLink>
                <NavLink to=''><i className='iconfont icon-rili'></i>配件</NavLink>
                <NavLink to=''><i className='iconfont icon-weizhi'></i>服装</NavLink>
                <NavLink to=''><i className='iconfont icon-hongbao'></i>志趣</NavLink>
            </div>
            <div className='list'>
                <h5>品牌制造商直供</h5>
                <div className='img'>
                    <p>
                        <img src=" http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt="" />
                    </p>
                    <p>
                        <img src=" http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg" alt="" />
                    </p>
                    <p>
                        <img src=" http://yanxuan.nosdn.127.net/abcfa79205679db51198adc19c184dd1.jpg" alt="" />
                    </p>
                    <p>
                        <img src=" http://yanxuan.nosdn.127.net/b5cd73d3b310bad02539412f064d4ea1.jpg" alt="" />
                    </p>
                </div>
            </div>
            <div className='list_add'>
                <h5>新品首发</h5>
                <div className='newGoodsWrap'>
                    <a className='newGoodsItem'>
                        <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png" alt="" />
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                    <a className='newGoodsItem'>
                        <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/6c03ca93d8fe404faa266ea86f3f1e43.png" alt="" />
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                    <a className='newGoodsItem'>
                        <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png" alt="" />
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                    <a className='newGoodsItem'>
                        <img className='imgLazyload' src="http://yanxuan.nosdn.127.net/8b30eeb17c831eba08b97bdcb4c46a8e.png" alt="" />
                        <div className='newGoodsName'>蔓越莓曲奇 200克</div>
                        <div className='newGoodsPrice'>￥36</div>
                    </a>
                </div>
                <div className='list_egg'>
                    <h5>人气推荐</h5>
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
            </div>
        </div>
    }
}

export default Page;

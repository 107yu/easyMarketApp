import React from 'react';
import Carousel from '../../../components/carousel'
import './index.scss'
import { NavLink } from 'react-router-dom';

//引入抽离组件
import Brand from '../../../components/page/brand'
import NewGoods from '../../../components/page/NewGoods'
import HotGoods from '../../../components/page/HotGoods'
import TopGoods from '../../../components/page/TopGoods'
import CateGoryGoods from '../../../components/page/CateGoryGoods'

//
import {Link} from 'react-router-dom'

class Page extends React.Component {
    componentDidMount(){
        
    }
    render() {
        return <div className='page'>
            <Carousel></Carousel>
            <div className='channelWrap'>
                <a className='channelItem'>
                    <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                    <div>居家</div>
                </a>
                 <a className='channelItem'>
                    <img src="http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png" alt=""/>
                    <div>餐厨</div>
                </a>
                 <a className='channelItem'>
                    <img src="http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png" alt=""/>
                    <div>配件</div>
                </a>
                 <a className='channelItem'>
                    <img src="http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png" alt=""/>
                    <div>服装</div>
                </a>
                 <a className='channelItem'>
                    <img src="http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png" alt=""/>
                    <div>志趣</div>
                </a>
            </div>

            <Brand></Brand>
            <NewGoods></NewGoods>
            <HotGoods></HotGoods>
            <TopGoods></TopGoods>
           <CateGoryGoods></CateGoryGoods>

           
            <div className='cateGoryBox'>
                <div className='cateGoryName'>厨具</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                        </div>
                        <div className='goodsItemName'>100年传世珐琅锅</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                        </div>
                        <div className='goodsItemName'>100年传世珐琅锅</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                        </div>
                        <div className='goodsItemName'>100年传世珐琅锅</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/49e26f00ca4d0ce00f9960d22c936738.png" alt="" />
                        </div>
                        <div className='goodsItemName'>100年传世珐琅锅</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>饮食</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>配件</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>服装</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>婴童</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>杂货</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>洗护</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
            <div className='cateGoryBox'>
                <div className='cateGoryName'>志趣</div>
                <div className='cateGoryGoodsWrap'>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥268</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                    <a>
                        <div className='goodsItemImg'>
                            <img src="http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png" alt="" />
                        </div>
                        <div className='goodsItemName'>绿茶蛋黄酥 200克/4枚入</div>
                        <div className='goodsItemPrice'>￥599</div>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default Page;





 // <div className='tab'>
            //     <NavLink to='/pages/page/living'><i className='iconfont icon--'></i>居家</NavLink>
            //     <NavLink to='/pages/page/hutch'><i className='iconfont icon-yijian'></i>餐厨</NavLink>
            //     <NavLink to='/pages/page/clothing'><i className='iconfont icon-rili'></i>配件</NavLink>
            //     <NavLink to='/pages/page/inclination'><i className='iconfont icon-weizhi'></i>服装</NavLink>
            //     <NavLink to='/pages/page/accessories'><i className='iconfont icon-hongbao'></i>志趣</NavLink>
            // </div>
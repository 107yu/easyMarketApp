import React from 'react'
import './index.scss'

// import { inject, observer } from "mobx-react"

// @inject('collectdetail')
// @observer

class Collectdetail extends React.Component {
    // componentDidMount() {
    //     this.props.collectdetail.getmyData()
    // }
    render() {
        return <div id='collect'>
            <header className='header'>
                <div className='left'>◁</div>
                <div className='title'>easyLikeGoods</div>
                <div className='right'></div>
            </header>
            <div className='touchClear'>
                <div className='test'>
                    <div className='collectItem'>
                        <img src="http://yanxuan.nosdn.127.net/9126151f028a8804026d530836b481cb.png" alt="" />
                    </div>
                    <div className='collectMsg'>
                        <div>日式素雅纯色流星纹窗帘</div>
                        <div>日式素雅设计 流星纹简约肌理</div>
                        <div>￥299元</div>
                    </div>
                </div>
            </div>
            <div className='touchClear'>
                <div className='test'>
                    <div className='collectItem'>
                        <img src="http://yanxuan.nosdn.127.net/9126151f028a8804026d530836b481cb.png" alt="" />
                    </div>
                    <div className='collectMsg'>
                        <div>日式素雅纯色流星纹窗帘</div>
                        <div>日式素雅设计 流星纹简约肌理</div>
                        <div>￥299元</div>
                    </div>
                </div>
            </div>
            <div className='touchClear'>
                <div className='test'>
                    <div className='collectItem'>
                        <img src="http://yanxuan.nosdn.127.net/9126151f028a8804026d530836b481cb.png" alt="" />
                    </div>
                    <div className='collectMsg'>
                        <div>日式素雅纯色流星纹窗帘</div>
                        <div>日式素雅设计 流星纹简约肌理</div>
                        <div>￥299元</div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Collectdetail
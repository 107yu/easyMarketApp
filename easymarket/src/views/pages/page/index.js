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
import { Link } from 'react-router-dom'

import { inject, observer } from "mobx-react"

@inject('page')
@observer

class Page extends React.Component {
    componentDidMount() {
        this.props.page.getpageData()
    }
    render() {
        let { brandList, newGoodsList, hotGoodsList, topicList, categoryList, channel } = this.props.page.getpageList;
        return <div className='page'>
            <Carousel></Carousel>
            <div className='channelWrap'>
                {
                    channel && channel.map((item, index) => {
                        return <Link to={`/catego_detail/${item.id}`} key={index} className='channelItem'>
                            <img src={item.icon_url} alt="" />
                            <div>{item.name}</div>
                        </Link>
                    })
                }
            </div>
            <Brand brand={brandList}></Brand>
            <NewGoods newGoodsList={newGoodsList}></NewGoods>
            <HotGoods hotGoodsList={hotGoodsList}></HotGoods>
            <TopGoods topicList={topicList}></TopGoods>
            <CateGoryGoods categoryList={categoryList}></CateGoryGoods>
        </div>
    }
}

export default Page;

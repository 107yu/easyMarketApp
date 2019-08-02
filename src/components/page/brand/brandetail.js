import React from 'react';
import './brandetail.scss'
import { Link } from 'react-router-dom'

import { inject, observer } from "mobx-react"

@inject('brandetail')
@observer

class Brandetail extends React.Component {
    componentDidMount() {
        this.props.brandetail.getbrandData({ id: this.props.match.params.id })
    }
    render() {
        let { getbrandList } = this.props.brandetail;
        return <div className='brandetail'>
            <header className='headers'>
                <Link to='/pages/page'>◁</Link>
                <div>{getbrandList.name}</div>
                <div></div>
            </header>
            <div className='section'>
                <img src={getbrandList.list_pic_url} alt="" />
                <p className='breadDesc'>{getbrandList.simple_desc}</p>
            </div>
        </div>
    }
}

export default Brandetail







//  {
//                 getbrandList.length>0 && getbrandList.map((item, index) => {
//                     return <header className='header'>
//                         <Link to='/pages/page'>◁</Link>
//                         <div>{item.name}</div>
//                         <div></div>
//                     </header>
//                 })
//             }
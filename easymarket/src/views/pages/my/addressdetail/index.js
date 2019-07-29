import React from 'react'
import './index.scss'

class Addressdetail extends React.Component {
    render() {
        return <div className='addres'>
            <header className='header'>
                <div>◁</div>
                <div>地址管理</div>
                <div></div>
            </header>
            <section className='section'>
                添加地址
            </section>
            <div className='addAddress'>
                <a role="button" className='am-button'>
                    <span>添加地址</span>
                </a>
            </div>
        </div>
    }
}

export default Addressdetail
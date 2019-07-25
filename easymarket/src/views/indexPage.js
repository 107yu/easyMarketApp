import React, { Component } from 'react'
import RouterView from '../router/index'
import Footer from '../components/footer'
import "./index.scss"
class IndexPage extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className='section'>
                    <RouterView {...this.props} />
                </div>
                <Footer {...this.props}></Footer>
            </div>
        )
    }
}

export default IndexPage
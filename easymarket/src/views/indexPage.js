import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '../router/index'
import Footer from '../components/footer'

class IndexPage extends Component {
    render() {
        return (
            <div className='wrap'>
                <Router>
                    <div>
                        <RouterView/>
                    </div>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default IndexPage
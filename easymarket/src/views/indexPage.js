import React, { Component } from 'react'
import RouterView from '../router/index'
import Footer from '../components/footer'
import "./index.scss"
import {inject,observer} from "mobx-react"
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
//引入loading组件
import Loading from "../components/common/Loading/index"
@inject("loading","page")
@observer
class IndexPage extends Component {
    render() {
        if(!Object.keys(this.props.page.getpageList).length){
            this.props.loading.changeLoading(true);
        }else{
           this.props.loading.changeLoading(false);
        }
        return (
            <div className='wrap'>
                <React.Fragment >
                    <div className='section'>
                        <RouterView {...this.props} />
                    </div>
                    {this.props.loading.isLoading?<Loading/>:null}
                </React.Fragment>
                <Footer {...this.props}></Footer>
            </div>
        )
    }
}
export default IndexPage
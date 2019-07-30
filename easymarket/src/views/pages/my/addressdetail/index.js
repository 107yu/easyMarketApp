import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import Addrest from '../../../../components/addrest/addrest'

import { inject, observer } from "mobx-react"

@inject('addres')
@observer


class Addressdetail extends React.Component {
    constructor(){
        super()
        this.state={
            isaddress:false
        }
    }
    componentDidMount() {
        this.props.addres.getaddresData()
    }
    addresDo() {
        let { isaddress } = this.state;
        this.setState({
            isaddress:!isaddress
        })
    }
    render() {
        let { getaddresList } = this.props.addres;
        let { isaddress } = this.state;
        if(isaddress){
            return <Addrest />
        }
        return <div id='addressPage'>
            <header className='header'>
                <Link to='/pages/my'>◁</Link>
                <div>地址管理</div>
                <div></div>
            </header>
            {
                getaddresList.length>0 && getaddresList.map((item, index) => {
                    return <div className='addressList'>
                        <div className='addressItem'>
                            <div className='isChooseAddress'></div>
                            <div className='addressMsg'>
                                <div className='concatName'>{item.name}</div>
                                <div className='addressDetail'>
                                    <div>{item.mobile}</div>
                                    <div>{item.address}</div>
                                    <div>{item.full_region}</div>
                                </div>
                                <div className='deleteAddress'>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII=" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            <div className='addAddress'
                type="primary"
                onClick={() => {
                    this.addresDo()
                }}>
                <a role="button" className='am-button'>
                    <span>添加地址</span>
                </a>
            </div>
        </div>
    }
}

export default Addressdetail





// <div className='addressMsg'>
//                     <div className='concatName'>XXX</div>
//                     <div className='addressDetail'>
//                         <div>15026346812</div>
//                         <div>XXXXXXX</div>
//                         <div>XXXXXXX</div>
//                     </div>
//                 </div>
//                 <div className='addAddress'>
//                     <a className='am-button'>
//                         <span>新建地址</span>
//                     </a>
//                 </div>
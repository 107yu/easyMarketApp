import React from 'react'
import './index.scss'
import Addrest from '../../../../components/addrest/addrest'
import Header from "../../../../components/goback/goBack"
import { inject, observer } from "mobx-react"
@inject('addres')
@observer
class Addressdetail extends React.Component {
    constructor(){
        super()
        this.state={
            isaddress:false,
            item:null,
        }
    }
    componentDidMount() {
        this.props.addres.getaddresData()
    }
    addresDo(item) {//改变状态--添加地址--更改地址--
        let { isaddress } = this.state;
        this.setState({
            isaddress:!isaddress,
            item,
        })
    }
    delete(id){
        this.props.addres.deleteAddress({id})
    }
    render() {
         let { getaddresList } = this.props.addres;
        let { isaddress,item } = this.state;
        if(isaddress){
        return <Addrest {...this.props} changeAddress={()=>{this.addresDo()}} item={item}/>
    }
        return <div id='addressPage'>
            <Header {...this.props} title="地址管理"></Header>
            <div className='addressList'>
            {
                getaddresList.length>0 && getaddresList.map((item, index) => {
                    return  <div className='addressItem' key={item.id}>
                        <div className={item.is_default?'isChooseAddress':''}></div>
                        <div className='addressMsg'>
                            <div className='concatName'>{item.name}</div>
                            <div className='addressDetail' onClick={()=>{this.addresDo(item)}}>
                                <div>{item.mobile}</div>
                                <div className="addressDetail_address">{item.full_region}</div>
                                <div className="addressDetail_address">{item.address}</div>
                            </div>
                            <div className='deleteAddress' onClick={()=>{this.delete(item.id)}}>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII=" alt="" />
                            </div>
                        </div>
                    </div>
                })
            }
            </div>
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

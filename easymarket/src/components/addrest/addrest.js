import React from 'react';
import './index.scss'
import { Picker, List,Toast} from 'antd-mobile';
import city from './address.js'
import { createForm } from 'rc-form';
import isChecked from "../../static/img/isCheck.png"
import noChecked from "../../static/img/noCheck.png"
import { inject, observer } from "mobx-react"
@inject('addres')
@observer
class Addrest extends React.Component {
    constructor(props){
        super(props)
        this.state={
            ids:[2,37,403],//得到的省市区的id
            arr:["北京","北京市","东城区"],
            name:"",//姓名
            mobile:"",//电话
            address:"",//详细地址
            is_default:false,//是否默认地址
            province_id: null,//省
            city_id:null,//城市
            district_id: null,//区
            id:null,
        }
    }
     componentDidMount(){
        let {item}=this.props;
        if(item){
            this.setState({
                arr:[item.province_name,item.city_name,item.district_name],
                name:item.name,
                mobile:item.mobile,
                address:item.address,
                is_default:item.is_default,
                province_id:item.province_id,
                city_id:item.city_id,
                district_id:item.district_id,
                id:item.id
            })
        }
    }
    cancel() {//取消
        this.props.changeAddress()
    }
    confirm() {//确定
        let {ids,name,mobile,address,is_default,id}=this.state
        if(name===""){
            Toast.fail('姓名不能为空', 1);
            return;
        }
        if(mobile===""){
            Toast.fail('电话号码不能为空', 1);
            return;
        }
        if(mobile&&!/^1[3456789]\d{9}$/.test(mobile)){
            Toast.fail('请输入正确的电话号码', 1);
            return;
        }
       this.props.addres.changeAddress({
            name:name,
            mobile:mobile,
            address:address,
            is_default:is_default,
            province_id:ids[0],
            city_id:ids[1],
            district_id:ids[2],
            id:id,
       })
       this.props.changeAddress()
    }
     pcickerChange(e){
        let arr=[]
        city.filter((item,index)=>{
            if(item.value==e[0]){
                arr.push(item.label)
                item.children.filter((item,index)=>{
                    if(item.value==e[1]){
                        arr.push(item.label)
                            item.children.filter((item,index)=>{
                            if(item.value==e[2]){
                                arr.push(item.label)
                            }
                        })
                    }
                })
            }
        })
        this.setState({
            arr:arr,
            ids:e
        })
    }
    changeName(e){//姓名
        this.setState({
            name:e.target.value
        })
    }
    changeMobile(e){//电话
        if (/^[0-9]*$/.test(e.target.value)){
            this.setState({
                mobile:e.target.value
            })
         }
    }
    changeFullAddress(e){//随意输入的详细地址
        this.setState({
            address:e.target.value
        })
    }
    changeDefault(){//改变选中状态
        let {is_default}=this.state;
        this.setState({
            is_default:!is_default
        })
    }
    render() {
        const { getFieldProps } = this.props.form;
        let {arr,name,mobile,address,is_default}=this.state
        let html=arr.map(item=>item).join("/")
        return <div id='addressPage'>
           <div className="addressPage_header">{this.props.item?"修改地址":"新增地址"}</div>
            <div className='section'>
                <div className='onePx_bottom'>
                    <input type="text" className='addressInput' placeholder='姓名' 
                            value={name} onChange={(e)=>{this.changeName(e)}}/>
                </div>
                <div className='onePx_bottom'>
                    <input type="text" className='addressInput' placeholder='电话号码' 
                        value={mobile} onChange={(e)=>{this.changeMobile(e)}}/>
                </div>
                <div className='onePx_bottom'>
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                        <Picker extra=" "
                            data={city}
                            {...getFieldProps('city', {
                                initialValue: ['340000', '341500', '341502'],
                            }) }
                            onOk={(e)=>{this.pcickerChange(e)}}
                            onDismiss={e => console.log('dismiss', e)}
                            value={arr}
                        >
                            <List.Item arrow="horizontal">{html}</List.Item>
                        </Picker>
                    </List>
                </div>
                <div className='onePx_bottom'>
                    <input type="text" className='addressInput' placeholder='详细地址' 
                        value={address} onChange={(e)=>{this.changeFullAddress(e)}}/>
                </div>
                <div className='onePx_bottom'>
                    <div className='isDefaultAddress'>
                        设置默认地址<img src={is_default?isChecked:noChecked} alt="" onClick={()=>{this.changeDefault()}}/>
                    </div>
                </div>
            </div>
            <div className='addAdd'>
                <span onClick={() => {
                    this.cancel()
                }}>取消</span>
                <span onClick={() => {
                    this.confirm()
                }}>确定</span>
            </div>
        </div>
    }
}
export default createForm()(Addrest)

import React from 'react';
import './index.scss'
import { Picker, List, WhiteSpace, PickerView, Toast } from 'antd-mobile';
import city from './address.js'
import { createForm } from 'rc-form';

class Addrest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            name:'',
            phone:'',
            city:'',
            detail:'',
        }
    }

    closeDo = () => {
        // this.props.history.push('/addressdetail')
        this.props.event(false)
    }
    changeVal(type,e){
            if(type=='name'){
                this.setState({
                    name:e.target.value
                })
            }else if(type=='phone'){
                this.setState({
                    phone:e.target.value
                })
            }else if(type=='detail'){
                this.setState({
                    detail:e.target.value
                })
            }
    }

    submitForm() {
        console.log(this.state
        )
    }

    render() {
        const { getFieldProps } = this.props.form;
        return <div id='addressPage'>
            <header className='header'>
                <div></div>
                <div>新增地址</div>
                <div></div>
            </header>
            <div className='section'>
                <div className='onePx_bottom'>
                    <input type="text" className='addressInput' placeholder='姓名' onChange={(e)=>{this.changeVal('name',e)}}/>
                </div>
                <div className='onePx_bottom'> 
                    <input type="text" className='addressInput' placeholder='电话号码'   onChange={(e)=>{this.changeVal('phone',e)}}/>
                </div>
                <div className='onePx_bottom'>
                    <List style={{ backgroundColor: 'white' }} className="picker-list" >
                        <Picker extra="请选择(可选)"
                            data={city}
                            title="Areas"
                            {...getFieldProps('city', {
                                initialValue: ['340000', '341500', '341502'],
                            }) }
                            onOk={(e) => { this.val(e) }}
                            onDismiss={e => console.log('dismiss', e)} 
                        >
                            <List.Item>
                                {this.state.arr}
                            </List.Item>
                        </Picker>
                    </List>
                </div>
                <div className='onePx_bottom'>
                    <input type="text" className='addressInput' placeholder='详细地址'  onChange={(e)=>{this.changeVal('detail',e)}}/>
                </div>
                <div className='onePx_bottom'>
                    <div className='isDefaultAddress'>
                        设置默认地址
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt="" />
                    </div>
                </div>
            </div>
            <div className='addAdd'>
                <span onClick={this.closeDo.bind(this)}>取消</span>
                <span onClick={this.submitForm.bind(this)}>确定</span>
            </div>
        </div>
    }
    val(e) {
        console.log(e)
        let num = 0
        let arr = []
        city.filter((item, index) => {
            if (item.value == e[0]) {
                console.log(item)
                arr.push(item.label)
                item.children.filter((item, index) => {
                    if (item.value == e[1]) {
                        console.log(item)
                        arr.push(item.label)
                        item.children.filter((item, index) => {
                            if (item.value == e[2]) {
                                console.log(item)
                                arr.push(item.label)
                            }
                        })
                    }
                })
            }
        })
        this.setState({
            arr: arr
        })
    }
}

export default createForm()(Addrest)




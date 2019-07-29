import React from 'react';
import "./index.css"
import {inject,observer} from "mobx-react"
import isChecked from "../../../static/img/isCheck.png"
import noChecked from "../../../static/img/noCheck.png"
@inject('shopCar')
@observer
class Shopping extends React.Component{
    constructor(){
        super()
        this.state={
            allChecked:false,
            edit:true
        }
    }
    componentDidMount(){
        this.props.shopCar.getShopCarList()
    }
    //改变编辑状态：
    changeEdit(){
        let {edit}=this.state;
        this.setState({
            edit:!edit
        })
    }
    //全选全部选： 
    changeAllChecked(){
        let {allChecked}=this.state;
        this.setState({
            allChecked:!allChecked
        })
        let carList=this.props.shopCar.shopList.cartList;
        carList.forEach(item=>{
            console.log(item)
        })
    }
    render(){
        let cartList=this.props.shopCar.shopList.cartList;
        let {allChecked,edit}=this.state
        return <div className="shopCar">
           <div className="shopCar_header">
               <span><b>★</b>30天无忧退货</span>
               <span><b>★</b>48小时快递退款</span>
               <span><b>★</b>满88元包邮</span>
           </div>
           <div className="shopCar_main">
              <div className="shopCar_carWrap">
                  {
                      cartList&&cartList.map(item=>{
                          return <div className="shopCar_item" key={item.goods_id}> 
                                    <div className="shopCar_item_isChecked" 
                                        onClick={()=>{this.props.shopCar.checkedGoods({isChecked:item.checked===1?0:1,productIds:item.product_id})}}>
                                        <img src={item.checked?isChecked:noChecked} alt=""/>
                                    </div>
                                    <div className="shopCar_item_img">
                                        <img src={item.list_pic_url} alt=""/>
                                    </div>
                                    {
                                        edit?<><div className="shopCar_item_msg">
                                        <div>{item.goods_name}</div>
                                        <div></div>
                                        <div className="shopCar_item_price"><span>￥：{item.market_price}</span></div>
                                    </div>
                                    <div>x{item.number}</div></>:<><div className="shopCar_item_msg">
                                        <div>已选择：</div>
                                        <div></div>
                                        <div className="shopCar_item_price">
                                            <span>￥：{item.market_price}</span>
                                            <div className="shopCar_item_doCount">
                                                <div>-</div>
                                                <div>{item.number}</div>
                                                <div>+</div>
                                            </div>
                                        </div>
                                    </div>
                                   </>
                                    }
                                </div>
                      })
                  }
              </div>
           </div>
           <div className="shopCar_do">
                <div className="shopCar_item_isChecked" onClick={()=>{this.changeAllChecked()}}>
                    <img src={allChecked?isChecked:noChecked} alt=""/>
                </div>
                <div className="shopCar_allMsg">
                {edit?'已选（） ￥':'已选（）'} 
                </div>
                <div className="shopCar_edit" onClick={()=>{this.changeEdit()}}>{edit?'编辑':'完成'}</div>
                <div className="shopCar_edit shopCar_pay">{edit?'下单':'删除所选'}</div>
           </div>
        </div>
    }
}

export default Shopping;
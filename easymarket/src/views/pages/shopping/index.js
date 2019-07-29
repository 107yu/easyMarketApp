import React from 'react';
import "./index.css"
import {inject,observer} from "mobx-react"
import isChecked from "../../../static/img/isCheck.png"
import noChecked from "../../../static/img/noCheck.png"
import { Toast} from 'antd-mobile';
@inject('shopCar')
@observer
class Shopping extends React.Component{
    constructor(){
        super()
        this.state={
            edit:false
        }
    }
    componentDidMount(){
        //初始化购物车
        this.props.shopCar.getShopCarList()
    }
    //改变编辑状态-编辑or完成：
    changeEdit(){
        let {edit}=this.state;
        this.setState({
            edit:!edit
        })
        this.props.shopCar.changeEditGoods("完成")
    }
    //全选-or-反选： 
    changeAllChecked(cartList){
        let {edit}=this.state;
        if(!edit){
            let {allChecked}=this.props.shopCar
            //所有的产品id:
            let ids=[]
            cartList.forEach(item=>{
                ids.push(item.product_id)
            })
            //改变商品的选中状态：
            this.props.shopCar.checkedGoods({isChecked:allChecked?0:1,productIds:ids.join(",")})
        }else{
            this.props.shopCar.changeEditGoods()
        }
    }
    //修改商品的数量++--：
    changeCount(item,type){
        let {goods_id,number,product_id}=item
        if(number+type>=1){
            this.props.shopCar.addShop({
                goodsId:goods_id,
                number:type,
                productId:product_id
            })
        }
    } 
    //编辑和非编辑状态的---改变商品的选中状态：
    changeGoodsStutes(item){
        let {edit}=this.state;
        //非编辑状态的商品状态改变
        if(!edit){
            this.props.shopCar.checkedGoods({isChecked:item.checked===1?0:1,productIds:item.product_id})
        }
        else{
            this.props.shopCar.changeEditGoods({productIds:item.product_id})
        }
    }
    //操作-下单or删除
    operate(cartList){
       let {edit}=this.state;
       if(!edit){
        Toast.loading('下单功能还未GET，请耐心等待');
       }
       else{
           let ids=[]
           cartList.forEach(item=>{
               if(item.isDelete){
                   ids.push(item.product_id)
               }
           })
           console.log(ids)
           this.props.shopCar.deleteGoods({productIds:ids.join(",")})
           Toast.loading('loading');
           this.changeEdit()
       }
    }
    render(){
        let{ cartList,cartTotal}=this.props.shopCar.shopList;
        let {allChecked,doAllChecked}=this.props.shopCar
        let {edit}=this.state
        //要删除商品的个数
        let deleteNum=cartList&&cartList.filter(item=>item.isDelete)
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
                                        onClick={()=>{this.changeGoodsStutes(item,cartList)}}>
                                       {
                                           !edit? <img src={item.checked?isChecked:noChecked} alt=""/>: <img src={item.isDelete?isChecked:noChecked} alt=""/>
                                       }
                                    </div>
                                    <div className="shopCar_item_img">
                                        <img src={item.list_pic_url} alt=""/>
                                    </div>
                                    {
                                        !edit?<><div className="shopCar_item_msg">
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
                                                <div onClick={()=>{this.changeCount(item,-1)}}>-</div>
                                                <div>{item.number>0?item.number:1}</div>
                                                <div onClick={()=>{this.changeCount(item,+1)}}>+</div>
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
                <div className="shopCar_item_isChecked" onClick={()=>{this.changeAllChecked(cartList)}}>
                  {
                      !edit?<img src={allChecked?isChecked:noChecked} alt=""/>:<img src={doAllChecked?isChecked:noChecked} alt=""/>
                  }
                </div>
                <div className="shopCar_allMsg">
                {!edit?<>已选({cartTotal&&cartTotal.checkedGoodsCount})￥{cartTotal&&cartTotal.checkedGoodsAmount}</>:<>已选({deleteNum?deleteNum.length:0})</>} 
                </div>
                <div className="shopCar_edit" onClick={()=>{this.changeEdit()}}>{!edit?'编辑':'完成'}</div>
                <div className="shopCar_edit shopCar_pay" onClick={()=>{this.operate(cartList)}}>{!edit?'下单':'删除所选'}</div>
           </div>
        </div>
    }
}
export default Shopping;
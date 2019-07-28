import React, { Component } from 'react'
import { inject,observer } from 'mobx-react';
import { Modal} from 'antd-mobile';
import ProStanded from "../../../components/productStanded/productStanded"
import Header from "../../../components/Header/index"
import ProductInfo from "../../../components/productItem/index"
import TitleLine from "../../../components/titleLine/titleLine"
import "./productDetail.scss"
import Swiper from "swiper"
@inject("product","addCart")
@observer
 class ProductDetail extends Component {
     constructor(props){
         super(props)
         this.banner_Swiper = React.createRef();
         this.state={
             bannerSwiper:null,
             modal2: false, 
         }
     }
    componentDidMount(){
        let id=JSON.parse(sessionStorage.getItem("productId")).id
        console.log(id+"",1)
        // let id1=window.location.search.slice(1).split("=")[1];
        //根据商品id获取到商品详细信息
        this.props.product.products(id+"")
        //根据商品id获取到相关商品
        this.props.product.relatedProducts(id+"")
        //获取购物车商品数量
        this.props.addCart.getNum()
        const node = this.banner_Swiper.current;
        this.setState({
            bannerSwiper:new Swiper(node,{
                autoplay:true,
                observer:true,
                pagination:{
                    el:".swiper-pagination",
                }
            })
        })

    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
    onClose = key => () => {
    this.setState({
        [key]: false,
    });
    }
    
    render() {
        let {product}=this.props;
        return (
            <div className="product_wrap">
                <Header title={product.productInfo&&product.productInfo.info.name} flag={true}></Header>
                <div className="product_content">
                    <div className="swiper-container product_swiper" ref={this.banner_Swiper}>
                        <div className="swiper-wrapper">
                            {product.productInfo&&product.productInfo.gallery.map((item,index)=>{
                                return <div className="swiper-slide" key={item.id}>
                                    <img src={item.img_url} alt=""/>
                                </div>
                            })}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <ul className="product_servicelist">
                        <li>
                            <span>★</span>
                            30天无忧退货
                        </li>
                        <li>
                            <span>★</span>
                            48小时快速退款
                        </li>
                        <li>
                            <span>★</span>
                            满88元免邮费
                        </li>
                    </ul>
                    <div className="goods_message">
                        <div className="goods_title">{product.productInfo&&product.productInfo.info.name}</div>
                        <div className="goods_subTitle">{product.productInfo&&product.productInfo.info.goods_brief}</div>
                        <div className="goods_price">￥{product.productInfo&&product.productInfo.info.retail_price}</div>
                    </div>
                    <div className="goods_size" onClick={this.showModal('modal2')}>
                        <div className="goods_noCon"></div>
                        <div className="goods_totle_price">x 0</div>
                        <div>选择规格<i>&gt;</i></div>
                    </div>
                    <div className="goods_attribute">
                        <TitleLine title={"商品参数"}></TitleLine>
                        <div className="attribute_list">
                            {product.productInfo&&product.productInfo.attribute.map((item,index)=>{
                                return <div className="attribute_item" key={index}>
                                <div className="attribute_item_name">
                                    {item.name}
                                </div>
                                <div className="attribute_item_content">
                                    {item.value}
                                </div>
                            </div>
                            })}
                        </div>
                        <div  dangerouslySetInnerHTML={{__html:product.productInfo&&product.productInfo.info.goods_desc}} className="attribute_des">

                        </div>
                        <div className="attribute_questions">
                            <TitleLine title={"常见问题"}></TitleLine>
                            {product.productInfo&&product.productInfo.issue.map((item)=>{
                                return <div className="attribute_qes_item" key={item.id}>
                                    <div className="attribute_qes_title">
                                        <span className="attribute_mark">√</span>
                                        {item.question}
                                    </div>
                                    <div className="attribute_qes_anwers">
                                        {item.answer}
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="attribute_related">
                            <TitleLine title={"大家都在看"}></TitleLine>
                            <div className="attribute_con">
                                {this.props.product.relatedInfo&&this.props.product.relatedInfo.map((item)=>{
                                    return <ProductInfo key={item.id} item={item}></ProductInfo>
                                })}
                            </div>
                        </div>
                    </div>
                    <Modal
                        popup
                        visible={this.state.modal2}
                        onClose={this.onClose('modal2')}
                        animationType="slide-up"
                        >
                        <ProStanded></ProStanded>
                    </Modal>
                </div>
                <div className="product_footer">
                    <div className="collectBtn">
                        <i className="iconfont icon-xingzhuang60kaobei2"></i>
                    </div>
                    <div className="addcartBtn">
                        <i className="iconfont icon-icon_gouwuchexi"></i>
                        <span className="addcart_num">{this.props.addCart.totalNum}</span>
                    </div>
                    <div className="goods_standed_btn">
                        <button className="good_standed_add" onClick={this.showModal('modal2')}>加入购物车</button>
                        <button className="good_standed_order">立即下单</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail

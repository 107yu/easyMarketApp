import React, { Component } from 'react'
import { inject } from 'mobx-react';
import Header from "../../../components/Header/index"
import "./productDetail.scss"
import Swiper from "swiper"
@inject("product")

 class ProductDetail extends Component {
     constructor(props){
         super(props)
         this.banner_Swiper = React.createRef();
         this.state={
             bannerSwiper:null
         }
     }
    componentDidMount(){
        let id=window.location.search.slice(1).split("=")[1];
        //根据商品id获取到相关商品
        this.props.product.products(id)
        const node = this.banner_Swiper.current;
        this.setState({
            bannerSwiper:new Swiper(node,{
                autoplay:true,
                pagination:{
                    el:".swiper-pagination"
                }
            })
        })

    }
    render() {
        let {product}=this.props;
        return (
            <div className="product_wrap">
                <Header title={product.productInfo&&product.productInfo.info.name} flag={true}></Header>
                <div className="swiper-container product_swiper" ref={this.banner_Swiper}>
                    <div className="swiper-wrapper">
                        {console.log(product)}
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
                    <div className="goods_price">{product.productInfo&&product.productInfo.info.retail_price}</div>
                </div>
                <div className="goods_size">
                    <div className="goods_noCon"></div>
                    <div className="goods_totle_price">x 0</div>
                    <div>选择规格<i>&gt;</i></div>
                </div>
                <div className="goods_attribute">
                    <div className="attribute_title">
                        <div className="line"></div>
                        <div>{111}</div>
                        <div className="line"></div>
                     </div>
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
                        <div className="attribute_title">
                            <div className="line"></div>
                            <div>{111}</div>
                            <div className="line"></div>
                        </div>
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
                        <div className="attribute_title">
                            <div className="line"></div>
                            <div>{111}</div>
                            <div className="line"></div>
                        </div>
                        

                     </div>
                </div>
            </div>
        )
    }
}
export default ProductDetail

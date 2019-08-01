import React, { Component } from 'react'
import { inject,observer } from 'mobx-react';
import { Modal} from 'antd-mobile';
import ProStanded from "../../../components/productStanded/productStanded"
import Header from "../../../components/Header/index"
import ProductInfo from "../../../components/productItem/index"
import TitleLine from "../../../components/titleLine/titleLine"
import "./productDetail.scss"
import Swiper from "swiper"
import BScroll from "better-scroll"
@inject("product","addCart","collect")
@observer
 class ProductDetail extends Component {
     constructor(props){
         super(props)
         this.banner_Swiper = React.createRef();
         this.state={
             bannerSwiper:null,
             modal2: false, 
             flag:false
         }
         this.bsroll=React.createRef()
     }
    componentDidMount(){
        let id=JSON.parse(sessionStorage.getItem("productId")).id
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
        //实例化
        let current=this.bsroll.current;
        new BScroll(current,{
            click:true,
        })
        //清空购物车数量
        this.props.addCart.change()
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
    /**
     * 添加收藏
     */
    addCol(){
        //添加收藏
        this.props.collect.addcollect({typeId:this.props.product.productInfo.userHasCollect,valueId:this.props.product.productInfo.info.id})
    }
    close(){
        this.setState({
            modal2: false,
        });
    }
    render() {
        let {product}=this.props;
        let obj=JSON.parse(sessionStorage.getItem("categoInfo"));
        return (
            <div className="product_wrap">
                <Header title={product.productInfo&&product.productInfo.info.name} flag={true} path={`/catego_detail/${obj.categoId}`}></Header>
                <div className="product_content" ref={this.bsroll}>
                    <div>
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
                            <div className="goods_making" style={product.productInfo&&product.productInfo.brand.name?{display:"block"}:{display:"none"}}><span>{product.productInfo&&product.productInfo.brand.name}</span></div>
                        </div>
                        <div className="goods_size" onClick={this.showModal('modal2')}>
                            <div className="goods_noCon">
                                <span style={product.productInfo&&product.productInfo.specificationList[0]?{display:"block"}:{display:"none"}}>1.{product.productInfo&&product.productInfo.specificationList[0]&&product.productInfo.specificationList[0].valueList[0].value}</span>
                                <span style={product.productInfo&&product.productInfo.specificationList[0]?{display:"block"}:{display:"none"}}>2.{product.productInfo&&product.productInfo.specificationList[1]&&product.productInfo.specificationList[1].valueList[0].value}</span>
                            </div>
                            <div className="goods_totle_price">x {this.props.addCart.number}</div>
                            <div>选择规格<i>&gt;</i></div>
                        </div>
                        <div className="goods_comments">
                            <div className="goods_comments_title">
                                <div>评论<span>{product.productInfo&&product.productInfo.comment.count}</span></div>
                                <a>查看全部&gt;</a>
                            </div>
                            <div className="goods_comments_content">
                                <div className="comments_user_info">
                                    <div>匿名用户</div>
                                    <div>{product.productInfo&&product.productInfo.comment.data.add_time}</div>
                                </div>
                                <div className="comments_default_one">
                                    <div className="user_comments_content">
                                    {product.productInfo&&product.productInfo.comment.data.content}
                                    </div>
                                    <ul className="user_comment_img">
                                    {product.productInfo&&product.productInfo.comment.data.pic_list&&product.productInfo.comment.data.pic_list.map((item)=>{
                                        return <li key={item.comment_id}>
                                            <img src={item.pic_url} alt=""/>
                                        </li>
                                    })}
                                    </ul>
                                </div>
                            </div>
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
                        <Modal
                            popup
                            visible={this.state.modal2}
                            onClose={this.onClose('modal2')}
                            animationType="slide-up"
                            >
                            <ProStanded close={()=>{this.close()}}></ProStanded>
                        </Modal>
                    </div>
                </div>
                <div className="product_footer">
                    <div className={this.props.collect&&this.props.collect.collectInfo?"collect collectBtn":("collectBtn")} onClick={()=>{this.addCol()}}>
                        <i className="iconfont icon-xingzhuang60kaobei2"></i>
                    </div>
                    <div className="addcartBtn" onClick={()=>{this.props.history.push("/pages/shopping")}}>
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
export default (props)=><ProductDetail {...props} key={props.location.pathname}/>

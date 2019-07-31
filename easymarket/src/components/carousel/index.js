import React from "react"
import {Carousel} from "antd"
import './carousel.css'
import 'antd/dist/antd.css'
import ImgLoading from "../imgLoading/imgLoading"
class Carousels extends React.Component{
  constructor(props){
    super(props)
    this.state={
      carousellist:[{
        img:'http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg'
      },{
        img:'http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg'
      },{
        img:'http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg'
      }]
    }
  }
  render(){
    const {carousellist}=this.state
    return <div className="carousel">
         <Carousel autoplay >
           {
              carousellist.length&&carousellist.map((item,index)=>{
                return <dl key={index}>
                    <img src={item.img} alt=""/>
                </dl>
              })
           }
         </Carousel>
    </div>
  }
}
export default Carousels;
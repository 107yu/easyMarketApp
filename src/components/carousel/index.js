import React from "react"
import {Carousel} from "antd"
import './carousel.css'
import 'antd/dist/antd.css'
class Carousels extends React.Component{
  render(){
    const {banner}=this.props
    return <div className="carousel">
         <Carousel autoplay >
           {
              banner&&banner.map((item,index)=>{
                return <dl key={index}>
                    <img src={item.image_url} alt=""/>
                </dl>
              })
           }
         </Carousel>
    </div>
  }
}
export default Carousels;
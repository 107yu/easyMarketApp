import React from "react"
import {Carousel} from "antd"
import './carousel.css'
import 'antd/dist/antd.css'
class Carousels extends React.Component{
  constructor(props){
    super(props)
    this.state={
      carousellist:[{
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2610773359,894980206&fm=26&gp=0.jpg'
      },{
        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2906072269,2725895769&fm=26&gp=0.jpg'
      },{
        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2831471841,3427110066&fm=26&gp=0.jpg'
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
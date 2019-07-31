import React from "react";
import "./touch.css";
class Touch extends React.Component {
    constructor(){
        super()
        this.state={
            startX:null,
            hidden:true,
        }
    }
    touchStart(e){
        let startX=e.touches[0].clientX
        this.setState({
            startX:startX
        })
    }
    touchMove(e){
        let {startX}=this.state;
        let moveingX=e.touches[0].clientX
        if(moveingX>startX){
            this.setState({
                hidden:true
            })
            // this.props.changeHidden(true)
        }
        else{
            this.setState({
                hidden:false
            })
            // this.props.changeHidden(false)
        }
    }
    delete(){
        this.props.changeCollect()
        this.setState({
            hidden:true,
        })
        // this.props.changeHidden(true)
    }
    render() {
        // let {hidden}=this.props;
        let {hidden}=this.state;
        return (
                <div  className='touchClear' 
                    onTouchStart={(e)=>{this.touchStart(e)}}
                    onTouchMove={(e)=>{this.touchMove(e)}}
                >
                    <div className={hidden?"test":"test touchClear_show"}>
                        <div className='collectItem'> <img src={this.props.src} alt="" /> </div>
                        <div className='collectMsg'>
                            <div>{this.props.name}</div>
                            <div>{this.props.goods_brief}</div>
                            <div>￥{this.props.retail_price}元</div>
                        </div>
                    </div>
                    <div className='touch_delete' onClick={()=>{this.delete()}}>删除</div>
            </div>
        );
    }
}

export default Touch;
import React, { Component } from 'react'
import {inject,observer} from "mobx-react"
@inject("addCart")
@observer

class ProductAttar extends Component {
    constructor(props){
        super(props)
        this.state={
            ind:0
        }
    }
    changeStandard(index,val){
        this.setState({
            ind:index
        })
        console.log(val)
        switch(val.name){
            case "颜色":
                this.props.addCart.saveColor(val);
            case "规格":
                this.props.addCart.saveStyle(val);
        }
        
      
    }
    render() {
        let {item}=this.props
        return (
            <div className="goods_standed_num goods_standed_color" >
                <p>{item.name}</p>
                <ul>
                    {item.valueList.map((val,index)=>{
                        return <li className={this.state.ind===index?"active":""} key={val.id} onClick={()=>{this.changeStandard(index,val)}}>{val.value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default ProductAttar;
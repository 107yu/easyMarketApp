import React from "react";
import "./index.scss";
import { Toast} from 'antd-mobile';
import { Link } from "react-router-dom";
import Touch from "../../../../components/touch/touch.js"
import Header from "../../../../components/goback/goBack.js"
import { inject, observer } from "mobx-react";
import { SwipeAction, List } from 'antd-mobile';
@inject("collect")
@observer
class Collectdetail extends React.Component {
  constructor(){
    super()
    this.state={
      hidden:true
    }
  }
  componentDidMount() {
    this.props.collect.getcollectData({ typeId: 0 });
  }
  changeCollect(item){
    let {value_id,type_id}=item;
    this.props.collect.cancelCollect({typeId:type_id,valueId:value_id });
    Toast.loading('loading',1);
  }
  render() {
    let { getcollectList } = this.props.collect;
    return (
      <div id="collect">
        <Header title="easyLikeGoods" {...this.props}></Header>
        <div className="touch_content">
          {
            getcollectList && getcollectList.map((item,index)=>{
              console.log(item)
                return  <SwipeAction
                    key={index}
                    autoClose
                    right={[
                      {
                        text: '删除',
                        onPress: () =>this.changeCollect(item),
                        style: { backgroundColor: '#F4333C', color: 'white' },
                      },
                    ]}
                  >
                    <List.Item>
                      <div  className='touch_list' >
                        <div className='touch_list_img'><img src={item.list_pic_url} alt="" /> </div>
                        <div className='touch_list_msg'>
                            <div>{item.name}</div>
                            <div>{item.goods_brief}</div>
                            <div>￥{item.retail_price}元</div>
                        </div>
                    </div>
                  </List.Item>
                </SwipeAction>
              })
          }
        </div>
      </div>
    );
  }
}
export default Collectdetail
// {
//   getcollectList && getcollectList.map((item,index)=>{
//       return <Touch 
//               key={index}
//               src={item.list_pic_url} 
//               name={item.name} 
//               goods_brief={item.goods_brief}
//               retail_price={item.retail_price}
//               changeCollect={()=>{this.changeCollect(item)}}
//               ></Touch>
//       })
//   }
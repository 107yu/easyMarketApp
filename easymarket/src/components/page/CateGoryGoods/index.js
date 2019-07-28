import React from 'react'
import './index.scss'
class CateGoryGoods extends React.Component {
    render() {
        let { categoryList } = this.props
        return <div className='cateGoryBox'>
            {
                categoryList && categoryList.map((item, index) => {
                    return <div key={index} className='box'>
                        <div className="cateGoryName">{item.name}</div>
                        <div className='Name'>
                            {
                                item.goodsList.map((item, index) => {
                                    return <a key={index}>
                                        <div className='goodsItemImg'>
                                            <img src={item.list_pic_url} alt="" />
                                        </div>
                                        <div className='goodsItemName'>{item.name}</div>
                                        <div className='goodsItemPrice'>￥{item.retail_price}</div>
                                    </a>
                                })
                            }
                            <a className="categoryMoreGoods">
                                <div>更多{item.name}好物</div>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==' alt="more" />
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default CateGoryGoods




// <div className='cateGoryName'>居家</div>
//             <div className='cateGoryGoodsWrap'>
//                 <a>
//                     <div className='goodsItemImg'>
//                         <img src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
//                     </div>
//                     <div className='goodsItemName'>日式和风懒人沙发</div>
//                     <div className='goodsItemPrice'>￥599</div>
//                 </a>
//                 <a>
//                     <div className='goodsItemImg'>
//                         <img src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
//                     </div>
//                     <div className='goodsItemName'>日式和风懒人沙发</div>
//                     <div className='goodsItemPrice'>￥599</div>
//                 </a>
//                 <a>
//                     <div className='goodsItemImg'>
//                         <img src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
//                     </div>
//                     <div className='goodsItemName'>日式和风懒人沙发</div>
//                     <div className='goodsItemPrice'>￥599</div>
//                 </a>
//                 <a>
//                     <div className='goodsItemImg'>
//                         <img src="http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png" alt="" />
//                     </div>
//                     <div className='goodsItemName'>日式和风懒人沙发</div>
//                     <div className='goodsItemPrice'>￥599</div>
//                 </a>
//             </div>
import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom'
class brand extends React.Component {
    render() {
        let { brand } = this.props;
        return <div className='brandBox'>
            <div className='brandTitle'>品牌制造商直供</div>
            <div className='title'>
                {
                    brand && brand.map((item, index) => {
                        return <div className='brandWrap' key={index}>
                            <Link to={`/brandetail/` + item.id}>
                                <div className='brandItemName'>{item.name}</div>
                                <div className='brandItemMinPrice'>￥{item.floor_price}元起</div>
                                <img src={item.new_pic_url} alt="" />
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    }
}


export default brand
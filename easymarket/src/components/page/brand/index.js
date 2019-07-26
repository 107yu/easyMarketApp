import React from 'react';


class brand extends React.Component {
    render() {
        return <div className='brandBox'>
            <div className='brandTitle'>品牌制造商直供</div>
            <div className='brandWrap'>
                <a>
                    <div className='brandItemName'>CK制造商</div>
                    <div className='brandItemMinPrice'>39元起</div>
                    <img src=" http://yanxuan.nosdn.127.net/76638fb8e6990aadf837ce761c3b7399.jpg" alt="" />
                </a>
                <a>
                    <div className='brandItemName'>MUJI制造商</div>
                    <div className='brandItemMinPrice'>39元起</div>
                    <img src=" http://yanxuan.nosdn.127.net/4ea3f1e60dd77c45c218e503d721a1ed.jpg" alt="" />
                </a>
                <a>
                    <div className='brandItemName'>WMF制造商</div>
                    <div className='brandItemMinPrice'>39元起</div>
                    <img src="http://yanxuan.nosdn.127.net/abcfa79205679db51198adc19c184dd1.jpg" alt="" />
                </a>
                <a>
                    <div className='brandItemName'>Coach制造商</div>
                    <div className='brandItemMinPrice'>39元起</div>
                    <img src=" http://yanxuan.nosdn.127.net/b5cd73d3b310bad02539412f064d4ea1.jpg" alt="" />
                </a>
            </div>
        </div>
    }
}


export default brand
import request from '../../utils/request';
//添加到购物车
export function addCart(params) {
    console.log(params)
    return request.post('/cart/add',params);
}
//获取加入购物车商品总量
export function goodscount() {
    return request.get('/cart/goodscount');
}
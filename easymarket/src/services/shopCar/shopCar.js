import request from '../../utils/request';
//获取购物车的数据：
export function getShopCar() {
    return request.get('/cart/index');
  }
//购物车商品的是否选中
export function changeChecked(params) {
    return request.post('/cart/checked',params);
  }
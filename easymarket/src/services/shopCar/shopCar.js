import request from '../../utils/request';
//获取购物车的数据：
export function getShopCar() {
    return request.get('/cart/index');
  }
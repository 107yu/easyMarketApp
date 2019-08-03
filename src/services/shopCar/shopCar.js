import request from '../../utils/request';
//获取购物车的数据：
export function getShopCar() {
    return request.get('/cart/index');
  }
//购物车里的商品-----修改选中状态-
export function changeChecked(params) {
    return request.post('/cart/checked',params);
  }
//修改商品的数量=====重新添加购物车：
export function addShopCart(params){
    return request.post("/cart/add",params)
}
//删除购物车里的商品
export function removeGoods(params){
    return request.post("/cart/delete",params)
}
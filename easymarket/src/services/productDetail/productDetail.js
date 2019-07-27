import request from '../../utils/request';
//获取商品详情：
export function getProduct(id) {
    return request.get(`/goods/detail?id=${id}`);
}
//获取商品相关商品
export function getRelated(id) {
  return request.get(`/goods/related?id=${id}`);
}
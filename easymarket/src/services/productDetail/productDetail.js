import request from '../../utils/request';
//获取商品详情：
export function getProduct(id) {
    return request.get(`/goods/detail?id=${id}`);
  }
import request from '../../utils/request';

// 删除商品查询历史记录
export function clearhistory() {
    return request.get('/search/clearhistory');
}
//获取商品查询相关信息
export function searchKeywords() {
    return request.get('/search/index');
}

//商品模糊查询
export function search(params) {
    return request.get(`/search/helper?keyword=${params}`);
}

//查询相关产品
export function relatedInfo(params) {
    return request.get(`/goods/list`,params);
}

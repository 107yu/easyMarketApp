import request from '../../utils/request';

//获取收藏的商品：
export function getcollect(params) {
    return request.get(`/collect/list?typeId=${params.typeId}`,);
}
//添加收藏
export function addCollect(params) {
    return request.post('/collect/addordelete',params);
}
//取消收藏：
export function removeCollect(params) {
    return request.post('/collect/addordelete',params);
}
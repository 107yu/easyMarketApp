import request from '../../utils/request';

//获取地址列表
export function getaddres() {
    return request.get('/address/list');
}
//添加地址
export function addAddress(params) {
    return request.post('/address/save',params);
}
//删除地址：
export function removeAddress(params) {
    return request.post('/address/delete',params);
}

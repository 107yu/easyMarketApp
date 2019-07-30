import request from '../../utils/request';

//获取首页数据
export function getaddres() {
    return request.get('/address/list');
}
import request from '../../utils/request';

//获取首页数据
export function getbrand(params) {
    return request.get('/brand/detail',params);
}
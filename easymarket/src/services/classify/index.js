import request from '../../utils/request';
//获取分类页初始化信息
export function getTypeInit() {
    return request.get('/catalog/index');
}
//获取分类页左侧导航数据
export function getClassifyNav(id) {
    return request.get(`/goods/category?id=${id}`);
}
//获取当前分类信息和子分类
export function getClassifyChild(id) {
    return request.get(`/catalog/current?id=${id}`);
}
//获取当前分类信息和子分类
export function getproductInfo(id) {
    return request.get(`/goods/list?categoryId=${id}`);
}
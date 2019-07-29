## About
此项目是仿网易严选UI设计的H5App,项目基于React+mobx,运用阿里antd-design-mobile的UI组件
## 技术栈
- React+React-router-dom(核心框架)
- mobx(同redux,是一个数据管理库,可直接修改数据,比redux上手更快)
- better-scroll(使移动端滑动体验更加流畅)
- antd-design-mobile(UI组件)
- axios (请求)

## 项目运行

```
前端

git clone git@github.com:107yu/easyMarketApp.git

cd easyMarketApp

npm install

npm start

后端

git clone git@github.com:jasonandjay/easyMarketServer.git

cd easyMarketServer

npm install

npm start

```
## 功能列表

- [x] 登录验证功能
- [x] 首页
    - [x] 品牌制造页
    - [x] 品牌制造详情页面
    - [x] 新品首发页面
    - [x] 人气推荐页面
    - [x] 各分类列表
    - [x] tab切换
    - [x] 轮播
- [x] 专题
     - [x] 列表渲染
     - [x] 添加评论
     - [x] 添加留言
- [x] 分类
    - [x] tab切换获取相应的数据接口进行渲染
    - [x] 点击详情进入
    - [x] scroll滑动
    - [x] 点击获取相应的数据
    - [x] 搜索功能
        - [x] 历史记录
        - [x] 热门搜索
        - [x] 搜索后列表展示
        - [x] 模糊搜索
        - [x] 商品列表部分包含综合、价格高低进行排序
- [x] 购物车
    - [x] 点击加加减减
    - [x] 编辑进行修改
    - [x] 勾选商品计算总价
    - [x] 编辑进行删除
- [x] 我的
    - [ ] 我的收藏
        - [ ] 渲染相应的收藏商品
        - [ ] touch滑动进行删除
    - [ ] 地址管理
        - [ ] 新建地址
        - [ ] 左滑删除
        - [ ] 设置默认地址
        - [ ] 表单进行详细地址的填写
    - [ ] 退出登录
        - [ ] 删除本地存储的token
## 页面截图

## 未完成功能



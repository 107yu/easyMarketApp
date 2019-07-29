import {clearhistory,searchKeywords,search,relatedInfo} from "../../services/index"
import {observable,action} from "mobx"
class SearchGoods{
    //默认
    @observable defaultKeyword;
    //历史搜索记录
    @observable historyKeywordList;
    //热门搜索
    @observable hotKeywordList;
    //删除提示信息
    @observable mes;
    //根据关键字搜索出商品
    @observable related;
    //用户输入关键字出现相关标题列表
    @observable searchList;
    //分类
    @observable filterCategory;
    @action async clearSearch(){
       await clearhistory()
    }
    @action async getKeywords(){
        const data=await searchKeywords()
        this.defaultKeyword=data.defaultKeyword
        this.historyKeywordList=data.historyKeywordList
        this.hotKeywordList=data.hotKeywordList
    }
    @action async Search(params){
        const data=await search(params)
        this.searchList=data
    }
    @action async searchRelated(params){
        const data=await relatedInfo(params)
        this.related=data.data
        this.filterCategory=data.filterCategory
    }

    @action async getType(params){
        const data=await relatedInfo(params)
        this.related=data.data
    }
    
}
export default SearchGoods
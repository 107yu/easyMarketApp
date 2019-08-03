import { observable, action, autorun } from "mobx";

export default class Loading{
    constructor(){
        autorun(()=>{
            console.log('isLoading...', this.isLoading);
        })
    }
    // @observable 修饰属性
    @observable isLoading = false;
    @observable el 

    // @action 修饰方法
    @action changeLoading(value){
        this.isLoading = value;
    }
    @action saveParrent(el){
        this.el=el
    }
}
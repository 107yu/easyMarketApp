import { observable, action, autorun } from "mobx";

export default class Loading{
    constructor(){
        autorun(()=>{
            console.log('isLoading...', this.isLoading);
        })
    }
    // @observable 修饰属性
    @observable isLoading = false;

    // @action 修饰方法
    @action changeLoading(value){
        this.isLoading = value;
    }

    
}
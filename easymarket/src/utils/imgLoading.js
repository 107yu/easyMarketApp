import {Debounce} from './debounce';
//调用时要传参
export default function LazyLoad(el){
    //传了的话就是元素 不传就是window
    this.el = el || window;
    this.init();
};

LazyLoad.prototype = {
    init(){
        let loadImg = Debounce(()=>{
            this.loadImg();
        })
        //添加滚动事件
        this.el.addEventListener('scroll', loadImg)
        this.loadImg();
    },
    loadImg(){
        //获取到所有的图片
        console.log(this.el.scrollY,"111")
        
        setTimeout(()=>{
            let imgs = this.el.querySelectorAll(".imgLazyload");
            imgs.forEach(item=>{
                // 先判断是否加载过
                console.log(item.src,item.dataset.src)
                if (item.src !== item.dataset.src){
                    // 判断元素是否进入视口
                    if (this.isIntoView(item,this.scrollY)){
                        item.src = item.dataset.src;
                    }
                }
            })
        },1000) 
    },
    isIntoView(el,height){
        let rect = el.getBoundingClientRect();
        //图片距离顶部的距离  与 父元素滚动的距离作比较
        console.log(this.el,height,"111")
        console.log(rect.top,window.innerHeight,111)
        if (rect.top > 0 && rect.top < window.innerHeight && rect.left > 0 && rect.left < window.innerWidth){
            return true;
        }
        return false;
    }
}
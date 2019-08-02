// 防抖，直到事件触发间隔频率大于一定时间再触发一次
export function Debounce(func, ms=500){
    let timer = 0;

    return function(){
        window.clearTimeout(timer);
        timer = setTimeout(()=>{
            func()
        }, ms)
    }
}

// 节流，事件每隔一定时间一定触发一次
export function Throttle(func, ms=500){
    let start = +new Date();

    return function(){
        let current = +new Date();
        if (current - start > ms){
            func()
            start = current;
        }
    }
}
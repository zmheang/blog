// new
function New(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}


// 深拷贝
function deepCopy(obj){
    //判断是否是简单数据类型，
    if(typeof obj == "object"){
        //复杂数据类型
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
        }
    }else {
        //简单数据类型 直接 == 赋值
        var result = obj;
    }
    return result;
}

// 节流:单位时间内只触发一次
function throttle(fn, wait) {
    let prev = new Date();
    return function () {
        const args = arguments;
        const now = new Date();
        if (now - prev > wait) {
            fn.apply(this, args);
            prev = new Date();
        }
    }
}

// 防抖:连续几次只触发最后一次
function debounce(fn,wait=50,immediate) {
    let timer;
    return function() {
        if(immediate) {
            fn.apply(this,arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this,arguments)
        },wait)
    }
}
function debounce1(fn, wait = 100, immediate) {
    let timer
    return function () {
        if(immediate) {
            fn.apply(this, arguments)
        }
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}


// 函数柯里化
function curry(fn, args) {
    const length = fn.length;
    args = args || [];
    let newArgs
    return function(){
        newArgs = args.concat(Array.prototype.slice.call(arguments));
        if (newArgs.length < length) {
            return curry.call(this,fn,newArgs);
        }else{
            return fn.apply(this,newArgs);
        }
    }
}

// 事件总线
class EventEmitter {
    constructor() {
        this.cache = {}
    }
    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }
    off(name, fn) {
        let tasks = this.cache[name]
        if (tasks) {
            const index = tasks.findIndex(f => f === fn || f.callback === fn)
            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }
    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
            let tasks = this.cache[name].slice()
            for (let fn of tasks) {
                fn(...args)
            }
            if (once) {
                delete this.cache[name]
            }
        }
    }
}

// jsonp
const jsonp = ({ url, params, callbackName }) => {
    const generateUrl = () => {
        let dataSrc = ''
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = generateUrl()
        document.body.appendChild(scriptEle)
        window[callbackName] = data => {
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
}

function add(nums, target) {
    // let obj = Object.create(null)
    // for (let i = 0; i < nums.length; i++) {
    //     if(obj[target - nums[i]] || obj[target - nums[i]] == 0) {
    //         return [obj[target - nums[i]], i]
    //     }else {
    //         obj[nums[i]] = i
    //     }
    // }

    let obj = Object.create(null)
    for (let i = 0; i < nums.length; i++) {
        if(obj[target - nums[i]] || obj[target - nums[i]] === 0) {
            return [obj[target - nums[i]], i]
        } else {
            obj[nums[i]] = i
        }
    }
}

function multiRequest(urls = [], maxNum) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = new Array(len).fill(false);
    // 当前完成的数量
    let count = 0;

    return new Promise((resolve, reject) => {
        // 请求maxNum个
        while (count < maxNum) {
            next();
        }
        function next() {
            let current = count++;
            // 处理边界条件
            if (current >= len) {
                // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
                !result.includes(false) && resolve(result);
                return;
            }
            const url = urls[current];
            console.log(`开始 ${current}`, new Date().toLocaleString());
            fetch(url)
                .then((res) => {
                    // 保存请求结果
                    result[current] = res;
                    console.log(`完成 ${current}`, new Date().toLocaleString());
                    // 请求没有全部完成, 就递归
                    if (current < len) {
                        next();
                    }
                })
                .catch((err) => {
                    console.log(`结束 ${current}`, new Date().toLocaleString());
                    result[current] = err;
                    // 请求没有全部完成, 就递归
                    if (current < len) {
                        next();
                    }
                });
        }
    });
}







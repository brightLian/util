// 是否是未定义
export function isUndef(v) {
    return v === undefined || v === null;
}

// 是否定义
export function isDef(v) {
    return v !== undefined && v !== null;
}

// 是否是对象
export function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

// 是否是promise
export function isPromise(val) {
    return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
    )
}

// 获取url中的参数
export function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

// 函数截流
export function throttle(func, wait = 500) {
    let context, args;
    let previous = 0;
    return function () {
        let now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait || previous === 0) {
            func.apply(context, args);
            previous = now;
        }
    };
}

// 是否有class名
export function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}

// 添加class
export function addClass(elements, cName) {
    if (!this.hasClass(elements, cName)) {
        elements.className += ' ' + cName;
    }
}

// 移除class
export function removeClass(elements, cName) {
    if (this.hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ');
    }
}

// 浅拷贝
export function f() {

}

// 深拷贝

// 身份证校验

// 手机号校验

// 获取当前日期

// 格式化时间

// 设置localStorage

// 移除localStorage
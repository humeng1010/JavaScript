// debound防抖与throttle节流的封装


/**
 * debound防抖
 * @param {callback} fn 
 * @param {number} delay 
 * @returns function
 */
function debound(fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

/**
 * throttle节流
 * @param {function} fn 
 * @param {number} delay 
 * @returns function
 */
function throttle(fn, delay) {
    let flag = true;
    return function (...args) {
        if (flag) {
            setTimeout(() => {
                fn.apply(this, args);
                flag = true;
            }, delay);
        }
        flag = false;
    }
}

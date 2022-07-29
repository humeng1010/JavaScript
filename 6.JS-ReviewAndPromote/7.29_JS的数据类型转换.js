//  隐式类型转换：字符串拼接
// 格式：变量+"" 或者 变量+"abc"
/* let a = 123;
console.log(a + '');
console.log(a + 'haha'); */
// 实际上内部是调用的 String() 函数。

// 调用 toString()方法
// 基本数据类型
/* var a1 = 'qianguyihao';
var a2 = 29;
var a3 = true;

// 引用数据类型
var a4 = [1, 2, 3];
var a5 = { name: 'qianguyihao', age: 29 };

// null 和 undefined
var a6 = null;
var a7 = undefined;

// 打印结果都是字符串
console.log(a1.toString()); // qianguyihao
console.log(a2.toString()); // 29
console.log(a3.toString()); // true
console.log(a4.toString()); // 1,2,3
console.log(a5.toString()); // object

// 下面这两个，打印报错
console.log(a6.toString()); // 报错：Uncaught TypeError: Cannot read properties of null
console.log(a7.toString()); // 报错：Uncaught TypeError: Cannot read properties of undefined
 */


// Number 类型的变量，在调用 toString()时，可以在方法中传递一个整数作为参数。此时它会把数字转换为指定的进制，如果不指定则默认转换为 10 进制。例如：
/* var a = 255;

//对于Number调用toString()时可以在方法中传递一个整数作为参数
//此时它将会把数字转换为指定的进制,如果不指定则默认转换为10进制
a = a.toString(2); // 转换为二进制

console.log(a); // 11111111
console.log(typeof a); // string

console.log(parseInt(a, 2)); // 255 */

// 使用 String()函数
// console.log(String(null));
/*
使用 String()函数做强制类型转换时：

对于 Number、Boolean、Object 而言，本质上就是调用 toString()方法。

但是对于 null 和 undefined，则不会调用 toString()方法。它会将 null 直接转换为 "null"。将 undefined 直接转换为 "undefined"。
 */

/*
Number() 函数和 parseInt() 函数的区别：

就拿Number(true) 和 parseInt(true)/parseFloat(true)来举例，二者在使用时，是有区别的：

Number(true) ：千方百计地想转换为数字；如果转换不了则返回 NaN。

parseInt(true)/parseFloat(true) ：提取出最前面的数字部分；没提取出来，那就返回 NaN。
 */

/* var a = '070';

a = parseInt(a, 8); //将 070 当成八进制来看待，转换结果为十进制。
console.log(a); // 打印结果：56。这个地方要好好理解。 */

// isNaN() 函数
// 解释：判断指定的参数是否为 NaN（非数字类型），返回结果为 Boolean 类型。也就是说：任何不能被转换为数值的参数，都会让这个函数返回 true。
// 执行过程：
// （1）先调用Number(参数)函数；
// （2）然后将Number(参数)的返回结果是否为数值。如果不为数值，则最终结果为 true；如果为数值，则最终结果为 false。


console.log(isNaN(undefined));
// isNaN函数的步骤(is not a number)
const res1 = Number(undefined)
if (res1 instanceof Number) {
    console.log(false);
} else {
    console.log(true);
}


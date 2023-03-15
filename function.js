/*
* apply 的用法
* 参数当作数组传递
* */
/*const array = [1,2]
const elements = ['a','b','c']

array.push.apply(array, elements)

console.log(array) //[ 1, 2, 'a', 'b', 'c' ]*/

/*
* bind的用法
* */
// this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
// var module = {
//     x: 81,
//     getX: function() { return this.x; }
// };
//
// module.getX(); // 81
//
// var retrieveX = module.getX;
// retrieveX();
// // 返回 9 - 因为函数是在全局作用域中调用的
//
// // 创建一个新函数，把 'this' 绑定到 module 对象
// // 新手可能会将全局变量 x 与 module 的属性 x 混淆
// var boundGetX = retrieveX.bind(this);
// console.log(boundGetX()) // 81
age = 222
function getAge() {
    return this.age;
}
let obj = {
    age: 111,
    name: 'jack'
}
console.log(getAge()) //222
console.log(getAge.bind(obj)) //[Function: bound getAge]
console.log(getAge.toString())


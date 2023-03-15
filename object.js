/*
* Object.assign()
*
* 假如源对象是一个对象的引用，它仅仅会复制其引用值。
* */

let obj1 = {
    name: 'jack',
    age: 18
}
let obj2 = {
    color: 'red',
    name: 'jerry'
}
const newObj = Object.assign({}, obj1, obj2)
console.log(newObj)
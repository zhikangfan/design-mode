/*
* 1. 原型链继承
* */
function Person(name) {
    this.name = name;
}
Person.prototype.say = function () {
    console.log(this.name);
}
function Author(name, age) {
    Person.call(this, name)
    this.age = age;
}
Author.prototype = new Person()
Author.prototype.construct = Author;
Author.prototype.getAge = function () {
    return this.age;
}


console.log(new Author('petter', 18))


function extend(subClass, superClass) {
    let F = function () {}
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    subClass.superClass = superClass.prototype;
    if (superClass.prototype.constructor === Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}
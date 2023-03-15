
/*class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


}*/
/*
* 闭包函数
* */
/*function test () {
    let a = 1;
    function b() {
        a*=2;
        return a;
    }
    return b;
}
let fun = test();
console.log(fun())
console.log(fun());*/

class Ani {
    constructor({name, color}) {
        this.name = name;
        this.color = color;
    }
    say() {
        console.log(this.name);
    }
}

class Dog extends Ani {
    constructor(props) {
        super(props);
    }
}
class Cat extends Ani {
    constructor(props) {
        super(props);
    }
}
let blueDog = new Dog({name: 'Jack', color: 'blue'})
console.log(blueDog)
blueDog.say();
let redCat = new Cat({name: 'lucky', color: 'red'})
console.log(redCat)
redCat.say()

/*
* 单体模式
*
* 单体对象由两个部分组成:包含着方法和属性成员的对象自身，以及用于访问它的变量。
* 这个变量通常是全局性的，以便在网页上任何地方都能直接访问到它所指向的单体对象。
* 这是单体模式的一个要点。虽然按定义单体不必是全局性的，但它应该在各个地方都能被访问。
* 因为单体对象的所有内部成员都被包装在这个对象中，所以它们不是全局性的。
* 由于这些成员只能通过这个单体对象变量进行访问，因此在某种意义上，可以说它们被单体对象圈在了一个命名空间中
* */

/*let funcSpace = {
    getAge:() => {

    },
    setAge: () => {

    },
    _setName: () => {
        //表示私有方法：_
    }
}*/

/*
let funcSpace = {
    getAge:() => {

    },
    setAge: () => {

    },
    //利用闭包，私有化变量
    singleton: (function () {
        let _setName = () => {} //私有化成员
        return {

        }
    })()
}*/
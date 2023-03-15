## 单体模式
单体对象由两个部分组成:包含着方法和属性成员的对象自身，以及用于访问它的变量。 这个变量通常是全局性的，以便在网页上任何地方都能直接访问到它所指向的单体对象。 这是单体模式的一个要点。虽然按定义单体不必是全局性的，但它应该在各个地方都能被访问。 因为单体对象的所有内部成员都被包装在这个对象中，所以它们不是全局性的。 由于这些成员只能通过这个单体对象变量进行访问，因此在某种意义上，可以说它们被单体对象圈在了一个命名空间中


```javascript
let funcSpace = {
    getAge:() => {

    },
    setAge: () => {

    },
    _setName: () => {
        //表示私有方法：_
    }
}
```


```javascript
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
}
```
## 单体的使用场合
从为代码提供命名空间和增强其模块性这个角度来说，你应该尽量多使用单体模式。单是JavaScript中最有用的模式之一，几乎适用于所有大大小小的项目。在简单的快餐型项目中，你可以只是把单体用作命名空间，将自己的所有代码组织在一个全局变量名下。在稍大、稍复杂一点的项目中，单体可以用来把相关代码组织在一起以便日后维护，或者用来把数据或代码安置在一个众所周知的单一位置。在大型或复杂的项目中，它可以起到优化作用:那些开销较大却又很少使用的组件可以被包装到惰性加载单体中，而针对特定环境的代码则可以被包装到分支型单体中。
很少见到有哪个项目用不到某种形式的单体模式。JavaScript的灵活性使单体可以被用于多种不同任务。可以说，这种模式在JavaScript中的重要性大大超过它在其他语言中的重要性。这主要是因为它可以用来创建命名空间以减少全局变量的数目。这种作用对于JavaScript非常重要，因为这种语言中的全局变量比其他语言中的更有危险性网页包含的JavaScript代码往往有着五花八门的来源，其编写者形形色色，所以全局变量和函数很容易被改写，从而导致你的代码失灵。可以解决这种问题的单体模式无疑是程序员们工具箱中的一大利器。
## 单体模式之利
单体模式的主要好处在于它对代码的组织作用。把相关方法和属性组织在一个不会被多次实例化的单体中，可以使代码的调试和维护变得更轻松。描述性的命名空间还可以增强代码的自我说明性，有利于新手阅读和理解。把你的方法包裹在单体中，可以防止它们被其他程序员误改,还可以防止全局命名空间被一大堆变量弄得一团糟。单体可以把你的代码与第三方的库代码和广告代码隔离开来，从而在整体上提高网页的稳定性。
单体模式的一些高级变体可以在开发周期的后期用于对脚本进行优化，提升其性能。使用惰性实例化技术，可以直到需要一个对象的时候才创建它，从而减少那些不需要它的用户承受的不必要的内存消耗(还可能包括带宽消耗)。分支技术则可以用来创建高效的方法，不用管浏览器或环境的兼容性如何。通过根据运行时的条件确定赋给单体变量的对象字面量，你可以创建出为特定环境量身定制的方法，这种方法不会在每次调用时都一再浪费时间去检查运行环境。
## 单体模式之弊
单体模式之弊
由于单体模式提供的是一种单点访问，所以它有可能导致模块间的强耦合。这是这种模式受到的主要批评，这个批评也很中肯。有时创建一个可实例化的类更为可取，哪怕它只会被实例化一次。因为这种模式可能会导致类间的强耦合，所以它也不利于单元测试。你无法单独测试一个调用了来自单体的方法的类，而只能把它与那个单体作为一个单元一起测试。单体最好还是留给定义命名空间和实现分支型方法这些用途。在这些情况下，耦合不是什么问题。
有时某种更高级的模式会更符合任务的需要。与惰性加载单体相比，虚拟代理能给予你对类实例化方式更多的控制权。你也可以用一个真正的对象工厂来取代分支型单体(虽说这个工厂可能也是一个单体)。不要对本书中那些更特别的模式抱有畏难情绪，不要仅仅因为单体“够可以了”就选择使用它。你应该确保所选择的模式适合自己的任务。



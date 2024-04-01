"use strict";
// 使用class关键字来定义一个类
class Person {
    constructor() {
        // readonly name: string = '孙悟空';
        this.name = '孙悟空';
        // static readonly age: number = 18;
        this.age = 18;
    }
    sayHello() {
        console.log('Hello 大家好！');
    }
}
const per = new Person();
per.sayHello();

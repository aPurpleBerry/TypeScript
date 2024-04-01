// 使用class关键字来定义一个类

class Person{


    // readonly name: string = '孙悟空';
    name = '孙悟空';

    // static readonly age: number = 18;
    age = 18;



    sayHello(){
        console.log('Hello 大家好！');
    }

}

const per = new Person();

per.sayHello();



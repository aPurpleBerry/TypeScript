// （1）声明一个变量a，同时执行他的类型为number
let num1:number;
// a 的类型设置为 number，在以后的使用过程中 a 的值只能是数字

num1 = 10;
//  a = 'hello'; // 报错 不能将string类型给a

let num2:number = 20;

// （2）如果变量的【声明和赋值】是同时进行的，TS可以自动对变量进行类型检测
let a = true;
// a = 123 这样是会报错的

//（3）最好的使用场景是 函数中形参的类型
function sum(a, b) {
  return a+b;
}
console.log(sum(123,456))
console.log(sum(123,'456')) //这样是不报错的

function sum2(a:number, b:number) {
  return a+b;
}

// （4）函数返回值的类型
function sum3(a:number, b:number): number{
  return a + b;
}
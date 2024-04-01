// *****字面量*****
let a:10;
a = 10;
// a = 11; // 报错：不能将类型“11”分配给类型“10”。
// 有点像常量

// 常用
// 使用 | 链接多个类型（联合类型）
let b: "male" | "false";
b = "male";
b = "false";

let c:boolean | string;
c = true;
c = "hello";
c = false;


// *****any*****
// any表示的是任意类型
// 一个变量设置类型为 any 后相当于对该变量关闭了 TS 的类型检测
let d:any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d2;
d2 = 10;
d2 = 'hello';
d2 = true;


// *****unknown*****
// unknown 表示未知类型的值
// 类型安全的any
// 不可以直接赋值给其他变量
let e: unknown;
e = 10;
e = 'hello';
e = true;

// 区别any类型的好处为：
let str:string; // string
let _a; // 隐式any
str = _a // 这样是不会报错的

// 但是如果使用unknown 就会报错
e = 'hello'
// str = e // 报错：不能将类型“unknown”分配给类型“string”。

// 不可以直接赋值给其他变量
// 解决方法一 
if(typeof e === 'string') {
  str = e
}

// 解决方法二 类型断言
str = e as string; // 告诉解析器e的实际类型

// 解决方法三 
str = <string>e


// *****void*****
// void用来表示空
// 以函数为例，就表示没有返回值的函数
function fn(): void {

}

// never表示永远不会返回结果
function fn2(): never {
  throw new Error('报错了！')
}
// 函数不会返回结果，报错之后直接停止
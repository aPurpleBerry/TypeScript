let a :object;
a = {};
a = function() {};

// {}用来指定对象中可以包含哪些属性
// 语法:{属性名:属性值，属性名:属性值}
let b :{name: string}; 
b = {name:'haha'}

// 加问号？表示属性可选
let b2 :{name: string, age?:number}; 
b2 = {name:'孙悟空'}
b2 = {name:'孙悟空',age: 18}

// [propName : string] : any表示任意类型的属性
// propName:string表示 【属性名：字符串】，JS中的属性名都是字符串
// propName 自己起名
// [propName:string] 表示任意字符串属性名
// any 任意类型
let c: {name:string,[propName:string]:any};
c = {name:'猪八戒',age:18, gender:'男'}

/**
 * 设置函数结构的类型声明
 *   语法：（形参：类型，形参：类型...） => 返回值
 */
// 声明函数
// 函数有两个参数，都是 number 类型
// 返回值也是number类型
let d:(a:number, b:number) => number;
d = function(n1,n2) :number{
  return n1+n2
}


//********************************数组************************************** */
/**
 * 数组的类型声明
 *           类型[]
 *           Array<类型>
 */
// string表示字符串数组
let e: string[]; 
let g: Array<number>;

e = ['a','b','c']
g = [1, 2, 3]

//*************************元组************************* */
// 元组，元组就是固定长度的数组
/**
 * 
 * 语法 [类型，类型， ...]
 */
let h : [string, string]
h = ['hello', 'abc']

let h2 : [string, number]
h2 = ['hello', 234]

let h3 : [string, number, string]
h3 = ['hello', 234, 'world']

// **********************枚举*************************

let i: {name: string, gender: string};
i = {
  name: '孙悟空',
  gender: '男'
}
console.log(i.gender === '男');


// 因为性别只有两种,所以可以使用 枚举类
enum Gender {
  Male,
  Female
}

let i2: {name: string, gender: Gender};
i2 = {
  name: '孙悟空',
  gender: Gender.Male
}

console.log(i2.gender === Gender.Female);
console.log(i2.gender === Gender.Male);



// '或' 和 '与'
let j: string | number;
let j2: string & number; // 这种写法本身就是错的，一个变量不可能同时满足两个类型

let obj: {name:string} & {age:number};
obj = {name:'孙悟空', age: 19}


// 类型别名

let k: 1|2|3|4|5;
let l: 1|2|3|4|5;

type myType = string
let m: myType

type myType2 = 1|2|3|4|5;
let k2: myType2;
let l2: myType2;
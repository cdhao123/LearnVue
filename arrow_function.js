//箭头函数 一种定义函数的方式
const aaa = function (){

},

const aaa = {
    bbb(){

    },
    ccc: function (){

    }
}

const ddd = (参数列表) => {

}

//参数和返回值的问题
const sum = (num1,num2) => {
    return num1 + num2
}
//放入一个参数
const power = (num) => {
    return num*num
}

//只有一个参数时，小括号可以省略
const power = num => {
    return num*num
}

//函数中
const test = () =>{
    console.log('Hello world')
    console.log('Hello world')
}
//如果函数代码块只有一行代码
const mul = (num1,num2) => num1 * num2
//不用写return
// => 后面省略了return，实际上是打印函数的返回值
//如果函数没有返回值
const demo = () => console.log('Hello')
//则执行函数，并且返回undefined

//箭头函数this 的使用
//箭头函数中的this引用的是最近作用域的this
//一层一层向外查找，直到找到this的定义
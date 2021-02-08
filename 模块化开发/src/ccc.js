import {flag,sum,mul,person} from "./aaa.js"
if(flag){
  console.log('找到了flag')
}

import na from "./aaa.js"

// 全部导入
import * as aaa from "./aaa.js"
// 此时aaa是个对象，里面的属性是导入的值
// 名字可以随便取，导入的是aaa.js中default导出的内容
// 所以一个js只能有一个default
let p = new person()
// 导入了flag和sum

// 会提示flag undefined

console.log(na)
console.log(aaa)

// import App from './app.js'
// 现在引用Vue文件
import App from './Vue/App.vue'
  new Vue({
    el: '#app',
    template: '<App/>',
    // 把template的替换到app中
    components: {
      App
    }
  })
// 这样就避免直接操作html文件了

// 这样不能被webpack编译,需要配置对应的vueloder


// aaa里面包含了na，要使用default导出的需要aaa.default
let name = 'aaa'
let age = 18
let flag = true

function sum(n1,n2){
  return n1+n2
}

// 要使得flag可被其他引用

export const obg = {
  flag2:flag,
  sum2:sum
}

// 或者
export {
  flag,sum
}

// 导出函数

export function mul(n1,n2){
  return n1+n2
}

// 导出类
export class person {
  funa(){
    return 1
  }
}

// export default
const name2 = 'aaaa'
const name3 = "bbbbbbb"
// default的可以不命名
export default {
  name3,
  flag,
  sum,
}
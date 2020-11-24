let name = '小明';
let age = 18;
let flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if(flag) {
  console.log(sum(20, 20));
}


//导出方式一
export {
  flag,
  sum
}

//导出方式二
export var num1 = 1000;

//导出函数、类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

//导出功能，不命名 让导入者命名
//有且只有一个
const address = '北京市';

export default address;
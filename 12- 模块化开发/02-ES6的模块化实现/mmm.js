import {flag, sum, num1, mul, Person} from "./aaa.js";

if(flag){
  console.log('小明是天才');
  console.log(sum(20, 30));
  console.log(num1);
}

console.log(mul(30, 50));

const a = new Person()
a.run()

import addr from "./aaa.js"

console.log(addr);

//导入所有
import * as info from './aaa.js'

console.log(info.flag);
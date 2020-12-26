import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')





//1.axios基本使用
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  methods: 'get'
}).then(res => {
  console.log(res);
})

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

//2.axios发送并发请求

axios.all([
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  })
  ],
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    params: {
      type: 'sell',
      page: 4
    }
  })).then(results => {
  console.log(results);
  console.log(results[0]);;
  console.log(results[1]);;
})

axios.all([
    axios({
      url: 'http://123.207.32.32:8000/home/multidata',
    })
  ],
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    params: {
      type: 'sell',
      page: 4
    }
  })).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))


//对象解构
// const obj = {
//   name: 'kobe',
//   age: 30
// }
//
// const {name, age} = obj
//
// //数组解构
// const names = ['why', 'kobe', 'james'];
// const [name1, name2, name3] = names;


//使用全局的axios和对应的配置在进行网络请求
//全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([
    axios({
      url: '/home/multidata',
    })
  ],
  axios({
    url: '/home/multidata',
    params: {
      type: 'sell',
      page: 4
    }
  })).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))


//创建对应的axios实例
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1(({
  url: '/home/multidata'
})).then(res => {
  console.log(res);
})

instance1(({
  url: '/home/multidata',
  params: {
    type: 'sell',
    page: 4
  }
})).then(res => {
  console.log(res);
})


//封装一个request模块
import {request} from "./network/request";

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//
//   },
//   success : function(res) {
//
//   },
//   failure: err => {
//
//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

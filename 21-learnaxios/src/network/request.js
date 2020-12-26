import axios from "axios";

// export function request(config, success, failure) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//   })
//
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

// export function request(config) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//     })
//
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         // console.log(err);
//         reject(err)
//       })
//   })
// }

export function request(config) {

  //1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
  })

  //2.axios的拦截器,对instance实例进行拦截  对请求进行拦截,记得返回
  instance.interceptors.request.use(config => {
    console.log(config);
    //1，比如config中的一些信息不符合服务器要求

    //2，比如每次发送网络请求时，都希望在界面上显示一个请求的图表

    //3.某些网络请求（比如登录（token），必须携带一些特殊的信息


    return config
  }, err => {
    console.log(err);
  });


  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    console.log(res.data);
    return res.data;
  }, err => {
    console.log(err);
  })

  return instance(config)

}

import {INCREMENT} from "./mutations-types";

export default {
//定义方法
  [INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  // incrementCount(state, count) {
  //   state.counter += count;
  // }

  //第二种提交方式下的使用
  incrementCount(state, payload) {
    state.counter += payload.count;
  },

  //响应式添加属性
  updateInfo(state) {
    state.info.name = 'ch'
    //不能在这里进行异步操作
    // setTimeout(() => {
    //   state.info.name = 'ch'
    // }, 1000)

    //这种方法不行，因为address本身不是info的属性
    // state.info['address'] = '洛杉矶'

    //方法一，增加属性
    // Vue.set(state.info, 'address', '洛杉矶')

    //删除属性
    //这种方法删除了，但是不是响应式的
    // delete state.info.age
    // Vue.delete(state.info, 'age')

  }
}

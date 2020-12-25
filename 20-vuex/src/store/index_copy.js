import Vue from "vue";
import Vuex from 'vuex'
import {
  INCREMENT
} from './mutations-types'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      //这个context只是指该组件内部
      // context.commit('updateName', '王五')

      setTimeout(() => {
        console.log(context);
        context.commit('updateName', '王五')
      },1000)
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  }
}

const moduleB = {
  state: {
    name: 'lisi'
  },
  mutations: {},
  actions: {},
  getters: {}
}



const store = new Vuex.Store({
  state: {
    counter: 1000,
    info: {
      name: 'kobe',
      age: 18
    }
  },
  mutations: {
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
  },
  actions: {
    //context:上下文
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload.message);
    //     payload.success();
    //   }, 1000)
    // },
    aUpdateInfo(context, payload) {
      // setTimeout(() => {
      //   context.commit('updateInfo');
      //   console.log(payload);
      // }, 1000)

      return new Promise(resolve => {
        setTimeout(() => {
            context.commit('updateInfo');
            console.log(payload);

            resolve('1111')
          }, 1000)
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    morePowerCounter(state, getters) {
      return getters.powerCounter + 1;
    },

    //下面两种写法 推荐第一种 对象的增强写法
    multiplyCounter(state){
      // return function (number) {
      //   return state.counter * number;
      // }
      return number => {
        return state.counter * number;
      }
    },
    // multiplyCounter: state => (number) => {
    //   return state.counter * number;
    // }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})

//3.导出store对象
export default store

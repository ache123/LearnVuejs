export default {
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
}

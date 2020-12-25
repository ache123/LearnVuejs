<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.morePowerCounter}}</h2>
    <h2>{{$store.getters.multiplyCounter(2)}}</h2>
    <hello-vuex :counter="counter"/>

    <h2>-----响应式添加属性------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">添加信息</button>

    <h2>-----modules中内容------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="updateName">添加信息</button>
    <button @click="aUpdateName">异步添加信息</button>


  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {
    INCREMENT
  } from './store/mutations-types'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是app',
        counter: 0
      }
    },
    methods: {
      updateInfo() {
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了');
        //   }
        // })
        this.$store
            .dispatch('aUpdateInfo', '我是携带的信息')
            .then(res => {
              console.log('里面已经完成了');
              console.log(res);
            })
      },
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        //1.普通的提交类型
        // this.$store.commit('incrementCount', count)

        //2.特殊的提交风格,这种提交下mutations中的count是整个对象 {type: 'incrementCount',count: xx}
        this.$store.commit({
          type: 'incrementCount',
          count
        })
      },
      updateName() {
        this.$store.commit('updateName', 'lisi')
      },
      aUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>

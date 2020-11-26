<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <Cpn/>
    <p>我是内容111111111111111111111111</p>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: "App",
  data() {
    return {
      message: 'aaa'
    }
  },
  components: {
    Cpn
  }
}
</script>

<style scoped>
  .title {
    color: green;
  }
</style>
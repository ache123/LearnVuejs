<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('Home created');
  },
  destroyed() {
    console.log('Home destroyed');
  },

  //这两个函数，只有该组件被保持了状态使用了keep-alive时才有效
  activated() {
    this.$router.push(this.path)
  },
  deactivated() {
    console.log('deactivated');
  },


  //组件内守卫
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>

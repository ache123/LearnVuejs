<template>
  <div>
    <h2>我是用户界面</h2>
    <p>{{userId}}</p>
    <p>{{$route.params.userId}}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    },
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  // created() {
  //   console.log('created');
  //   document.title = '用户';
  // }
  created() {
    console.log('User created');
  },
  destroyed() {
    console.log('User destroyed');
  },

}
</script>

<style scoped>

</style>

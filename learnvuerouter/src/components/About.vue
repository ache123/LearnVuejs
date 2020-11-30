<template>
  <div>
    <h2>我是内容</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  // created() {
  //   console.log('created');
  //   document.title = '关于';
  // }
  created() {
    console.log('About created');
  },
  destroyed() {
    console.log('About destroyed');
  },
}
</script>

<style scoped>

</style>

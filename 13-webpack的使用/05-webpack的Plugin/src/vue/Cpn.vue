<template>
  <div>
    <h2>我是cpn的标题</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: 'cpn组件'
    }
  }
}
</script>

<style scoped>

</style>
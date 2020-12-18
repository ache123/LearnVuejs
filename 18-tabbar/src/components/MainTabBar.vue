<template>
  <Tabbar>
    <tarbar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tarbar-item>
    <tarbar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </tarbar-item>
    <tarbar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </tarbar-item>
    <tarbar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </tarbar-item>
  </Tabbar>
</template>

<script>
import Tabbar from "components/tabbar/Tabbar";
import TarbarItem from "components/tabbar/TarbarItem";

export default {
  name: "MainTabBar",
  components: {
    Tabbar,
    TarbarItem
  }
}
</script>

<style scoped>

</style>

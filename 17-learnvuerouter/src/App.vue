<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--    <router-link to="/profile">档案</router-link>-->
<!--    <router-link :to="{-->
<!--      path: '/profile',-->
<!--      query: {-->
<!--        name: 'ch',-->
<!--        age: 18-->
<!--      }-->
<!--    }">档案</router-link>-->

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>


    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
  //   homeClick() {
  //     // this.$router.push('/home');
  //     this.$router.replace('/home');
  //     console.log("homeClick")
  //
  //   },
  //   aboutClick() {
  //     // this.$router.push('/about');
  //     this.$router.replace('/about');
  //     console.log("aboutClick");
  //   }

    userClick() {
      this.$router.push('/user/' + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'aaa',
          age:88
        }
      })
    }
  }


}
</script>

<style>
.active{
  color: red;
}
</style>

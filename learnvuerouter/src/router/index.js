//配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";

// import Home from "../components/Home"
// import About from "../components/About";
// import User from "../components/User";


const Home = () => import("../components/Home")
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")

const About = () => import("../components/About")
const User = () => import("../components/User")
const Profile = () => import("../components/Profile")



//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter);

//2. 创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news',
      // },
      {
        path: 'news',
        component: HomeNews,
        // meta: {
        //   title: '新闻'
        // },
      },
      {
        path: 'message',
        component: HomeMessage,
        // meta: {
        //   title: '消息'
        // },
      }

    ]
  },{
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to,from, next) => {
      // console.log('beforeEnter');
      // console.log(to);
      // console.log(from);
      next();
    }
  },{
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },{
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  activeClass: 'active'
})

//3.将router对象传入到Vue实例中
export default router;

//全局导航守卫
//前置守卫
router.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log(to);
  next();
})


//后置守卫
router.afterEach((to, from) => {
  // console.log('----');
  // console.log(to);
  // console.log(from);
})

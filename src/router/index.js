import { createRouter, createWebHistory } from 'vue-router'
import HomeItem from '../views/Home.vue'
import ListItem from '../views/List.vue'
import FormItem from '../views/Form.vue'
import SignIn from '../views/Login.vue'
import SignUp from '../views/Register.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/list',
      name: 'list',
      component: ListItem
    },
    {
      path: '/',
      name: 'home',
      component: HomeItem
    },
    {
      path: '/form',
      name: 'form',
      component: FormItem
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp
    },
    {
    path: '/login',
    name: 'login',
    component: SignIn
  },
  ]
})

export default router

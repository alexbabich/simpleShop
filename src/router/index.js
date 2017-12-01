import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/pages/MainView'
import About from '@/components/pages/AboutView'
import Login from '@/components/pages/Login'
import Upload from '@/components/pages/Upload'

Vue.use(Router)

export default new Router({
  // TODO before upload to host remove comment
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})

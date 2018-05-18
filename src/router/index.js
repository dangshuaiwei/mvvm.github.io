import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Blog from '@/components/Blog'
import articlesInfo from '~articles/articles.json'

const routes = [
  { path: '/', component: () => import('@/components/Index') },
  { path: '/Blog', component: () => import('@/components/Blog') },
]

Object.keys(articlesInfo).forEach((key) => {
  routes.splice(1, 0, {
    path: `/${key.replace(/\.md/, '')}`,
    component: () => import(`~articles/${key}`)
  })
})



Vue.use(Router)

const router = new Router({ routes })

export default router

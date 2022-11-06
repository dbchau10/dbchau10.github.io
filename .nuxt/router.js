import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a89a9770 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _37cbcc9c = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages/history" */))
const _14d0a3e8 = () => interopDefault(import('..\\pages\\items\\testjs.js' /* webpackChunkName: "pages/items/testjs" */))
const _087c76a2 = () => interopDefault(import('..\\pages\\items\\_id.vue' /* webpackChunkName: "pages/items/_id" */))
const _df20444c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/dbchau10.github.io/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cart",
    component: _a89a9770,
    name: "cart"
  }, {
    path: "/history",
    component: _37cbcc9c,
    name: "history"
  }, {
    path: "/items/testjs",
    component: _14d0a3e8,
    name: "items-testjs"
  }, {
    path: "/items/:id?",
    component: _087c76a2,
    name: "items-id"
  }, {
    path: "/",
    component: _df20444c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

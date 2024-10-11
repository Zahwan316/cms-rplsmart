import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0ae30c48 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _03023b92 = () => interopDefault(import('../pages/post/index.vue' /* webpackChunkName: "pages/post/index" */))
const _630d563f = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _3f19f4d5 = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _4acd79f3 = () => interopDefault(import('../pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _cf1ef414 = () => interopDefault(import('../pages/admin/menu/index.vue' /* webpackChunkName: "pages/admin/menu/index" */))
const _20bbabf7 = () => interopDefault(import('../pages/admin/post/index.vue' /* webpackChunkName: "pages/admin/post/index" */))
const _4254cff8 = () => interopDefault(import('../pages/admin/slider/index.vue' /* webpackChunkName: "pages/admin/slider/index" */))
const _9adcfb0e = () => interopDefault(import('../pages/admin/tag/index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _a2c7753c = () => interopDefault(import('../pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _7731a768 = () => interopDefault(import('../pages/admin/category/create/index.vue' /* webpackChunkName: "pages/admin/category/create/index" */))
const _4cc2440b = () => interopDefault(import('../pages/admin/menu/create/index.vue' /* webpackChunkName: "pages/admin/menu/create/index" */))
const _82bcea2c = () => interopDefault(import('../pages/admin/post/create/index.vue' /* webpackChunkName: "pages/admin/post/create/index" */))
const _611913c9 = () => interopDefault(import('../pages/admin/slider/create/index.vue' /* webpackChunkName: "pages/admin/slider/create/index" */))
const _5f07be28 = () => interopDefault(import('../pages/admin/tag/create/index.vue' /* webpackChunkName: "pages/admin/tag/create/index" */))
const _589ed9c2 = () => interopDefault(import('../pages/admin/user/create/index.vue' /* webpackChunkName: "pages/admin/user/create/index" */))
const _4b23da6e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1cf44a02 = () => interopDefault(import('../pages/admin/category/edit/_id.vue' /* webpackChunkName: "pages/admin/category/edit/_id" */))
const _7dd71941 = () => interopDefault(import('../pages/admin/menu/edit/_id.vue' /* webpackChunkName: "pages/admin/menu/edit/_id" */))
const _1ef2a7a0 = () => interopDefault(import('../pages/admin/post/edit/_id.vue' /* webpackChunkName: "pages/admin/post/edit/_id" */))
const _228029de = () => interopDefault(import('../pages/admin/tag/edit/_id.vue' /* webpackChunkName: "pages/admin/tag/edit/_id" */))
const _ea5fdb56 = () => interopDefault(import('../pages/admin/user/edit/_id.vue' /* webpackChunkName: "pages/admin/user/edit/_id" */))
const _7e2169cd = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _066f7e22 = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _e2903a1e = () => interopDefault(import('../pages/tag/_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _0ae30c48,
    name: "login"
  }, {
    path: "/post",
    component: _03023b92,
    name: "post"
  }, {
    path: "/search",
    component: _630d563f,
    name: "search"
  }, {
    path: "/admin/category",
    component: _3f19f4d5,
    name: "admin-category"
  }, {
    path: "/admin/dashboard",
    component: _4acd79f3,
    name: "admin-dashboard"
  }, {
    path: "/admin/menu",
    component: _cf1ef414,
    name: "admin-menu"
  }, {
    path: "/admin/post",
    component: _20bbabf7,
    name: "admin-post"
  }, {
    path: "/admin/slider",
    component: _4254cff8,
    name: "admin-slider"
  }, {
    path: "/admin/tag",
    component: _9adcfb0e,
    name: "admin-tag"
  }, {
    path: "/admin/user",
    component: _a2c7753c,
    name: "admin-user"
  }, {
    path: "/admin/category/create",
    component: _7731a768,
    name: "admin-category-create"
  }, {
    path: "/admin/menu/create",
    component: _4cc2440b,
    name: "admin-menu-create"
  }, {
    path: "/admin/post/create",
    component: _82bcea2c,
    name: "admin-post-create"
  }, {
    path: "/admin/slider/create",
    component: _611913c9,
    name: "admin-slider-create"
  }, {
    path: "/admin/tag/create",
    component: _5f07be28,
    name: "admin-tag-create"
  }, {
    path: "/admin/user/create",
    component: _589ed9c2,
    name: "admin-user-create"
  }, {
    path: "/",
    component: _4b23da6e,
    name: "index"
  }, {
    path: "/admin/category/edit/:id?",
    component: _1cf44a02,
    name: "admin-category-edit-id"
  }, {
    path: "/admin/menu/edit/:id?",
    component: _7dd71941,
    name: "admin-menu-edit-id"
  }, {
    path: "/admin/post/edit/:id?",
    component: _1ef2a7a0,
    name: "admin-post-edit-id"
  }, {
    path: "/admin/tag/edit/:id?",
    component: _228029de,
    name: "admin-tag-edit-id"
  }, {
    path: "/admin/user/edit/:id?",
    component: _ea5fdb56,
    name: "admin-user-edit-id"
  }, {
    path: "/category/:slug?",
    component: _7e2169cd,
    name: "category-slug"
  }, {
    path: "/post/:slug",
    component: _066f7e22,
    name: "post-slug"
  }, {
    path: "/tag/:slug?",
    component: _e2903a1e,
    name: "tag-slug"
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

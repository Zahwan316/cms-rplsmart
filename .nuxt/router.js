import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a5eaf5f = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _06933f0c = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _adc356f8 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _a936148a = () => interopDefault(import('..\\pages\\admin\\category\\index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _d1f399b2 = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _6c56338c = () => interopDefault(import('..\\pages\\admin\\menu\\index.vue' /* webpackChunkName: "pages/admin/menu/index" */))
const _4aee8059 = () => interopDefault(import('..\\pages\\admin\\post\\index.vue' /* webpackChunkName: "pages/admin/post/index" */))
const _0d5c55b8 = () => interopDefault(import('..\\pages\\admin\\slider\\index.vue' /* webpackChunkName: "pages/admin/slider/index" */))
const _21112f21 = () => interopDefault(import('..\\pages\\admin\\tag\\index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _7921144e = () => interopDefault(import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _e859ba82 = () => interopDefault(import('..\\pages\\admin\\category\\create\\index.vue' /* webpackChunkName: "pages/admin/category/create/index" */))
const _fd73b784 = () => interopDefault(import('..\\pages\\admin\\menu\\create\\index.vue' /* webpackChunkName: "pages/admin/menu/create/index" */))
const _0f21a146 = () => interopDefault(import('..\\pages\\admin\\post\\create\\index.vue' /* webpackChunkName: "pages/admin/post/create/index" */))
const _18c59488 = () => interopDefault(import('..\\pages\\admin\\slider\\create\\index.vue' /* webpackChunkName: "pages/admin/slider/create/index" */))
const _350ad3b6 = () => interopDefault(import('..\\pages\\admin\\tag\\create\\index.vue' /* webpackChunkName: "pages/admin/tag/create/index" */))
const _05dcfe52 = () => interopDefault(import('..\\pages\\admin\\user\\create\\index.vue' /* webpackChunkName: "pages/admin/user/create/index" */))
const _32d9d0ac = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _a061884e = () => interopDefault(import('..\\pages\\admin\\category\\edit\\_id.vue' /* webpackChunkName: "pages/admin/category/edit/_id" */))
const _3bc4d4d8 = () => interopDefault(import('..\\pages\\admin\\menu\\edit\\_id.vue' /* webpackChunkName: "pages/admin/menu/edit/_id" */))
const _04364777 = () => interopDefault(import('..\\pages\\admin\\post\\edit\\_id.vue' /* webpackChunkName: "pages/admin/post/edit/_id" */))
const _cf575b82 = () => interopDefault(import('..\\pages\\admin\\tag\\edit\\_id.vue' /* webpackChunkName: "pages/admin/tag/edit/_id" */))
const _23384e28 = () => interopDefault(import('..\\pages\\admin\\user\\edit\\_id.vue' /* webpackChunkName: "pages/admin/user/edit/_id" */))
const _729e81a6 = () => interopDefault(import('..\\pages\\category\\_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _04dc9dc4 = () => interopDefault(import('..\\pages\\post\\_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _28cca674 = () => interopDefault(import('..\\pages\\tag\\_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))

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
    component: _6a5eaf5f,
    name: "login"
  }, {
    path: "/post",
    component: _06933f0c,
    name: "post"
  }, {
    path: "/search",
    component: _adc356f8,
    name: "search"
  }, {
    path: "/admin/category",
    component: _a936148a,
    name: "admin-category"
  }, {
    path: "/admin/dashboard",
    component: _d1f399b2,
    name: "admin-dashboard"
  }, {
    path: "/admin/menu",
    component: _6c56338c,
    name: "admin-menu"
  }, {
    path: "/admin/post",
    component: _4aee8059,
    name: "admin-post"
  }, {
    path: "/admin/slider",
    component: _0d5c55b8,
    name: "admin-slider"
  }, {
    path: "/admin/tag",
    component: _21112f21,
    name: "admin-tag"
  }, {
    path: "/admin/user",
    component: _7921144e,
    name: "admin-user"
  }, {
    path: "/admin/category/create",
    component: _e859ba82,
    name: "admin-category-create"
  }, {
    path: "/admin/menu/create",
    component: _fd73b784,
    name: "admin-menu-create"
  }, {
    path: "/admin/post/create",
    component: _0f21a146,
    name: "admin-post-create"
  }, {
    path: "/admin/slider/create",
    component: _18c59488,
    name: "admin-slider-create"
  }, {
    path: "/admin/tag/create",
    component: _350ad3b6,
    name: "admin-tag-create"
  }, {
    path: "/admin/user/create",
    component: _05dcfe52,
    name: "admin-user-create"
  }, {
    path: "/",
    component: _32d9d0ac,
    name: "index"
  }, {
    path: "/admin/category/edit/:id?",
    component: _a061884e,
    name: "admin-category-edit-id"
  }, {
    path: "/admin/menu/edit/:id?",
    component: _3bc4d4d8,
    name: "admin-menu-edit-id"
  }, {
    path: "/admin/post/edit/:id?",
    component: _04364777,
    name: "admin-post-edit-id"
  }, {
    path: "/admin/tag/edit/:id?",
    component: _cf575b82,
    name: "admin-tag-edit-id"
  }, {
    path: "/admin/user/edit/:id?",
    component: _23384e28,
    name: "admin-user-edit-id"
  }, {
    path: "/category/:slug?",
    component: _729e81a6,
    name: "category-slug"
  }, {
    path: "/post/:slug",
    component: _04dc9dc4,
    name: "post-slug"
  }, {
    path: "/tag/:slug?",
    component: _28cca674,
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

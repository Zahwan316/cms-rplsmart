export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const AdminHeader = () => import('../..\\components\\admin\\header.vue' /* webpackChunkName: "components/admin-header" */).then(c => wrapFunctional(c.default || c))
export const AdminSidebar = () => import('../..\\components\\admin\\sidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => wrapFunctional(c.default || c))
export const WebFooter = () => import('../..\\components\\web\\footer.vue' /* webpackChunkName: "components/web-footer" */).then(c => wrapFunctional(c.default || c))
export const WebNavbar = () => import('../..\\components\\web\\navbar.vue' /* webpackChunkName: "components/web-navbar" */).then(c => wrapFunctional(c.default || c))
export const WebSlider = () => import('../..\\components\\web\\slider.vue' /* webpackChunkName: "components/web-slider" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

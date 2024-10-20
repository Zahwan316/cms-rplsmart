export { default as Logo } from '../..\\components\\Logo.vue'
export { default as AdminHeader } from '../..\\components\\admin\\header.vue'
export { default as AdminSidebar } from '../..\\components\\admin\\sidebar.vue'
export { default as WebFooter } from '../..\\components\\web\\footer.vue'
export { default as WebNavbar } from '../..\\components\\web\\navbar.vue'
export { default as WebSlider } from '../..\\components\\web\\slider.vue'

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

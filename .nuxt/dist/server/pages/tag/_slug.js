exports.ids = [27];
exports.modules = {

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_slug.vue?vue&type=template&id=1a1d7b27
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "mt-5 mb-5"
  }, [_c('b-row', [_c('b-col', {
    staticClass: "mb-3",
    attrs: {
      "md": "12"
    }
  }, [_c('h4', [_vm._v("\n        TAG : "), _c('strong', [_vm._v(_vm._s(_vm.tag.name.toUpperCase()))])])]), _vm._v(" "), _vm._l(_vm.posts, function (post) {
    return _c('b-col', {
      key: post.id,
      staticClass: "mb-3",
      attrs: {
        "md": "4",
        "sm": "12"
      }
    }, [_c('b-card', {
      staticClass: "mb-2 h-100 rounded-lg",
      attrs: {
        "img-src": post.image,
        "img-top": "",
        "tag": "article"
      }
    }, [_c('div', {
      staticClass: "mb-2"
    }, [_c('small', {
      staticClass: "text-muted"
    }, [_c('i', {
      staticClass: "fa fa-calendar"
    }), _vm._v(" " + _vm._s(post.created_at))])]), _vm._v(" "), _c('h5', [_c('nuxt-link', {
      attrs: {
        "to": {
          name: 'post-slug',
          params: {
            slug: post.slug
          }
        }
      }
    }, [_vm._v(_vm._s(post.title))])], 1), _vm._v(" "), _c('b-card-text', [_vm._v(" " + _vm._s(post.description.substr(0, 55)) + "... ")]), _vm._v(" "), _c('b-card-text', [_c('small', {
      staticClass: "text-muted"
    }, [_c('i', {
      staticClass: "fa fa-comments"
    }), _vm._v("\n            " + _vm._s(post.comments.length) + " Komentar")])])], 1)], 1);
  })], 2)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/tag/_slug.vue?vue&type=template&id=1a1d7b27

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tag/_slug.vue?vue&type=script&lang=js
/* harmony default export */ var _slugvue_type_script_lang_js = ({
  //meta
  head() {
    return {
      title: this.tag.name + " - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap",
      meta: [{
        hid: "og:title",
        name: "og:title",
        content: this.tag.name
      }, {
        hid: "og:site_name",
        name: "og:site_name",
        content: "RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
      }, {
        hid: "og:image",
        name: "og:image",
        content: this.tag.image
      }]
    };
  },
  async asyncData({
    params,
    $axios
  }) {
    //fetching posts by tag
    const tag = await $axios.$get(`/api/web/tags/${params.slug}`);
    return {
      tag: tag.data,
      posts: tag.data.posts
    };
  }
});
// CONCATENATED MODULE: ./pages/tag/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var tag_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/tag/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "79fd3bb4"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map
exports.ids = [25];
exports.modules = {

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5572adb3", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41ddeb36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41ddeb36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41ddeb36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41ddeb36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_41ddeb36_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h5 a[data-v-41ddeb36]{color:#bd562d!important}h5 a[data-v-41ddeb36]:hover{color:#eb5e28!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/index.vue?vue&type=template&id=41ddeb36&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "mt-5 mb-5"
  }, [_c('b-row', _vm._l(_vm.posts, function (post) {
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
  }), 1), _vm._v(" "), _c('b-row', {
    staticClass: "mt-4 justify-content-center"
  }, [_c('b-pagination', {
    attrs: {
      "total-rows": _vm.pagination.total,
      "per-page": _vm.pagination.per_page,
      "aria-controls": "my-table"
    },
    on: {
      "input": _vm.changePage
    },
    model: {
      value: _vm.pagination.current_page,
      callback: function ($$v) {
        _vm.$set(_vm.pagination, "current_page", $$v);
      },
      expression: "pagination.current_page"
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/index.vue?vue&type=template&id=41ddeb36&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/index.vue?vue&type=script&lang=js
/* harmony default export */ var postvue_type_script_lang_js = ({
  //meta
  head() {
    return {
      title: "Posts - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap",
      meta: [{
        hid: "og:title",
        name: "og:title",
        content: "RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
      }, {
        hid: "og:site_name",
        name: "og:site_name",
        content: "RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap"
      }, {
        hid: "og:image",
        name: "og:image",
        content: "https://i.imgur.com/xKOCz0P.png" // Anda bisa mengganti link ini jika perlu
      }]
    };
  },
  //watch query URL
  watchQuery: ["page"],
  async asyncData({
    $axios,
    query
  }) {
    let page = query.page ? parseInt(query.page) : "";

    //fetching posts
    const posts = await $axios.$get(`/api/web/posts?page=${page}`);
    return {
      posts: posts.data.data,
      pagination: posts.data
    };
  },
  methods: {
    //change page pagination
    changePage(page) {
      this.$router.push({
        path: this.$route.path,
        query: {
          page: page
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/post/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_postvue_type_script_lang_js = (postvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/post/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_postvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41ddeb36",
  "138e73a0"
  
)

/* harmony default export */ var post = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
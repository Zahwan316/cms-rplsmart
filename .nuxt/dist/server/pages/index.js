exports.ids = [22,2];
exports.modules = {

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=14d7b81b&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Slider'), _vm._ssrNode(" "), _c('b-container', {
    staticClass: "mt-5 mb-5"
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "8",
      "sm": "12"
    }
  }, [_vm._l(_vm.posts, function (post) {
    return _c('b-card', {
      key: post.id,
      staticClass: "border-0 rounded-lg shadow-md mb-3",
      attrs: {
        "no-body": ""
      }
    }, [_c('b-row', {
      staticClass: "g-0"
    }, [_c('b-col', {
      attrs: {
        "md": "4"
      }
    }, [_c('b-img', {
      staticClass: "w-100 img-post h-100 object-fit-cover",
      attrs: {
        "src": post.image,
        "rounded": "left"
      }
    })], 1), _vm._v(" "), _c('b-col', {
      attrs: {
        "md": "8"
      }
    }, [_c('b-card-body', [_c('h5', [_c('nuxt-link', {
      attrs: {
        "to": {
          name: 'post-slug',
          params: {
            slug: post.slug
          }
        }
      }
    }, [_vm._v(_vm._s(post.title))])], 1), _vm._v(" "), _c('b-card-text', [_vm._v("\n                  " + _vm._s(post.description.substr(0, 55)) + "...")]), _vm._v(" "), _c('b-card-text', [_c('small', {
      staticClass: "text-muted mr-3"
    }, [_c('i', {
      staticClass: "fa fa-calendar"
    }), _vm._v("\n                    " + _vm._s(post.created_at))]), _vm._v(" "), _c('small', {
      staticClass: "text-muted"
    }, [_c('i', {
      staticClass: "fa fa-comments"
    }), _vm._v("\n                    " + _vm._s(post.comments.length) + " Komentar")])])], 1)], 1)], 1)], 1);
  }), _vm._v(" "), _c('b-row', {
    staticClass: "mt-5"
  }, [_c('b-col', {
    staticClass: "text-center",
    attrs: {
      "md": "12"
    }
  }, [_c('nuxt-link', {
    staticClass: "btn btn-md btn-primary rounded shadow-sm",
    attrs: {
      "to": {
        name: 'post'
      }
    }
  }, [_vm._v("LIHAT LEBIH BANYAK\n            ")])], 1)], 1)], 2), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "4",
      "sm": "12"
    }
  }, [_c('b-card', {
    staticClass: "border-0 rounded-lg shadow-md",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-body', [_c('h5', [_vm._v("KATEGORI")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l(_vm.categories, function (category) {
    return _c('b-card', {
      key: category.id,
      staticClass: "border-0 shadow-sm card-category mb-2 rounded-lg",
      attrs: {
        "no-body": ""
      }
    }, [_c('b-card-body', {
      staticClass: "p-2 fw-normal"
    }, [_c('b-img', {
      attrs: {
        "src": category.image,
        "width": "40"
      }
    }), _vm._v(" "), _c('nuxt-link', {
      staticClass: "text-dark",
      attrs: {
        "to": {
          name: 'category-slug',
          params: {
            slug: category.slug
          }
        }
      }
    }, [_vm._v("\n                  " + _vm._s(category.name))])], 1)], 1);
  })], 2)], 1), _vm._v(" "), _c('b-card', {
    staticClass: "border-0 rounded-lg shadow-md",
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-body', [_c('h5', [_vm._v("TAGS")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l(_vm.tags, function (tag) {
    return _c('nuxt-link', {
      key: tag.id,
      staticClass: "btn btn-primary btn-sm mb-2 mr-2 shadow-sm",
      attrs: {
        "to": {
          name: 'tag-slug',
          params: {
            slug: tag.slug
          }
        }
      }
    }, [_vm._v(_vm._s(tag.name) + "\n            ")]);
  })], 2)], 1)], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=14d7b81b&scoped=true

// EXTERNAL MODULE: ./components/web/slider.vue + 4 modules
var slider = __webpack_require__(84);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  components: {
    Slider: slider["default"]
  },
  //meta
  head() {
    return {
      title: "RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap",
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
        content: "https://i.imgur.com/xKOCz0P.png"
      }]
    };
  },
  async asyncData({
    $axios
  }) {
    //fetching posts
    const posts = await $axios.$get("/api/web/postHomepage");

    //fetching categories
    const categories = await $axios.$get("/api/web/categorySidebar");

    //fetching tags
    const tags = await $axios.$get("/api/web/tags");
    return {
      posts: posts.data,
      categories: categories.data,
      tags: tags.data
    };
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "14d7b81b",
  "3f452830"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("1383698d", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/web/slider.vue?vue&type=template&id=05acdcea
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-container', {
    staticClass: "mt-3"
  }, [_c('b-carousel', {
    staticStyle: {
      "text-shadow": "0px 0px 2px #000"
    },
    attrs: {
      "id": "carousel-fade",
      "fade": "",
      "indicators": "",
      "img-width": "1024",
      "img-height": "300"
    }
  }, _vm._l(_vm.sliders, function (slider) {
    return _c('b-carousel-slide', {
      key: slider.id,
      attrs: {
        "img-src": slider.image
      }
    });
  }), 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/web/slider.vue?vue&type=template&id=05acdcea

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/web/slider.vue?vue&type=script&lang=js
/* harmony default export */ var slidervue_type_script_lang_js = ({
  //data function
  data() {
    return {
      //state sliders
      sliders: []
    };
  },
  async fetch() {
    //fething sliders on Rest API
    await this.$axios.get('/api/web/sliders').then(response => {
      //assign response to state "sliders"
      this.sliders = response.data.data;
    });
  }
});
// CONCATENATED MODULE: ./components/web/slider.vue?vue&type=script&lang=js
 /* harmony default export */ var web_slidervue_type_script_lang_js = (slidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/web/slider.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  web_slidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c7a9c65"
  
)

/* harmony default export */ var slider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14d7b81b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14d7b81b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14d7b81b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14d7b81b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_14d7b81b_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "h5 a[data-v-14d7b81b]{color:#bd562d!important}h5 a[data-v-14d7b81b]:hover{color:#eb5e28!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map
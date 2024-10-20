exports.ids = [26];
exports.modules = {

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/index.vue?vue&type=template&id=1e399dd6
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
  }, [_c('h4', [_vm._v("\n        PENCARIAN DENGAN KATA KUNCI : "), _c('strong', [_vm._v(_vm._s(_vm.$route.query.q))])])]), _vm._v(" "), _vm._l(_vm.posts, function (post) {
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
  })], 2), _vm._v(" "), _c('b-row', {
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

// CONCATENATED MODULE: ./pages/search/index.vue?vue&type=template&id=1e399dd6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/index.vue?vue&type=script&lang=js
/* harmony default export */ var searchvue_type_script_lang_js = ({
  //meta
  head() {
    return {
      title: "Search - RPLSmart - Belajar Koding Bahasa Indonesia Terlengkap",
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
  //watch query URL
  watchQuery: ["q", "page"],
  async asyncData({
    $axios,
    query
  }) {
    //fetching posts
    const posts = await $axios.$get(`/api/web/posts?q=${query.q}&page=${parseInt(query.page)}`);
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
          q: this.$route.query.q,
          page: page
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/search/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_searchvue_type_script_lang_js = (searchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/search/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1bd84cb0"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
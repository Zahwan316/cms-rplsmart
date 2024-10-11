exports.ids = [24];
exports.modules = {

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_slug.vue?vue&type=template&id=29c6f89b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "mt-5 mb-5"
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "8",
      "sm": "12"
    }
  }, [_c('b-card', {
    staticClass: "border-0 rounded-lg shadow-md mb-3"
  }, [_c('b-img', {
    staticClass: "rounded-lg w-100",
    attrs: {
      "src": _vm.post.image
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.post.title))]), _vm._v(" "), _c('b-card-text', [_c('small', {
    staticClass: "text-muted mr-3"
  }, [_c('i', {
    staticClass: "fa fa-calendar"
  }), _vm._v(" " + _vm._s(_vm.post.created_at) + " ")]), _vm._v(" "), _c('small', {
    staticClass: "text-muted mr-3"
  }, [_c('i', {
    staticClass: "fa fa-user"
  }), _vm._v(" " + _vm._s(_vm.post.user.name))]), _vm._v(" "), _c('small', {
    staticClass: "text-muted mr-3"
  }, [_c('i', {
    staticClass: "fa fa-folder"
  }), _vm._v(" " + _vm._s(_vm.post.category.name))]), _vm._v(" "), _c('small', {
    staticClass: "text-muted"
  }, [_c('i', {
    staticClass: "fa fa-comments"
  }), _vm._v(" " + _vm._s(_vm.post.comments.length) + " Komentar")])]), _vm._v(" "), _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.post.content)
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l(_vm.post.tags, function (tag) {
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
    }, [_vm._v("\n          " + _vm._s(tag.name))]);
  })], 2), _vm._v(" "), _c('b-card', {
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-body', [_c('h5', [_vm._v(" " + _vm._s(_vm.post.comments.length) + " KOMENTAR")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('b-list-group', _vm._l(_vm.post.comments, function (comment) {
    return _c('b-list-group-item', {
      key: comment.id
    }, [_c('div', {
      staticClass: "text-right"
    }, [_c('small', {
      staticClass: "text-right text-muted"
    }, [_vm._v(_vm._s(comment.created_at))])]), _vm._v(" "), _c('b-avatar', {
      staticClass: "align-baseline",
      attrs: {
        "button": "",
        "variant": "primary",
        "text": ""
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "font-weight-bold"
    }, [_vm._v(_vm._s(comment.name))]), _vm._v(" "), _c('hr'), _vm._v("\n              " + _vm._s(comment.comment) + "\n            ")], 1);
  }), 1)], 1)], 1), _vm._v(" "), _c('b-card', {
    attrs: {
      "no-body": ""
    }
  }, [_c('b-card-body', [_c('h5', [_vm._v("KIRIM KOMENTAR")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('b-form', {
    on: {
      "submit": function ($event) {
        $event.preventDefault();
        return _vm.storeComment.apply(null, arguments);
      }
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "6",
      "sm": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold text-uppercase"
  }, [_vm._v("Nama Lengkap")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comment.name,
      expression: "comment.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Masukkan Nama Lengkap"
    },
    domProps: {
      "value": _vm.comment.name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.comment, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.validation.name ? _c('div', {
    staticClass: "mt-2"
  }, [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.name[0]))])], 1) : _vm._e()])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "6",
      "sm": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold text-uppercase"
  }, [_vm._v("Alamat Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comment.email,
      expression: "comment.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email",
      "placeholder": "Masukkan Alamat Email"
    },
    domProps: {
      "value": _vm.comment.email
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.comment, "email", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.validation.email ? _c('div', {
    staticClass: "mt-2"
  }, [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.name[0]))])], 1) : _vm._e()])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "font-weight-bold text-uppercase"
  }, [_vm._v("Komentar")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.comment.comment,
      expression: "comment.comment"
    }],
    staticClass: "form-control",
    attrs: {
      "rows": "4",
      "placeholder": "Masukkan Komentar"
    },
    domProps: {
      "value": _vm.comment.comment
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.comment, "comment", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.validation.comment ? _c('div', {
    staticClass: "mt-2"
  }, [_c('b-alert', {
    attrs: {
      "show": "",
      "variant": "danger"
    }
  }, [_vm._v(_vm._s(_vm.validation.comment[0]))])], 1) : _vm._e()])]), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "12"
    }
  }, [_c('b-button', {
    attrs: {
      "variant": "primary",
      "type": "submit"
    }
  }, [_vm._v("KIRIM")]), _vm._v(" "), _c('b-button', {
    attrs: {
      "variant": "warning",
      "type": "reset"
    }
  }, [_vm._v("RESET")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
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
    }, [_vm._v(_vm._s(category.name))])], 1)], 1);
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
    }, [_vm._v(_vm._s(tag.name))]);
  })], 2)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/post/_slug.vue?vue&type=template&id=29c6f89b

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/post/_slug.vue?vue&type=script&lang=js
/* harmony default export */ var _slugvue_type_script_lang_js = ({
  //meta
  head() {
    return {
      title: this.post.title,
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: this.post.title
      }, {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: this.post.title
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: this.post.image
      }, {
        hid: 'description',
        name: 'description',
        content: this.post.description
      }]
    };
  },
  async asyncData({
    params,
    $axios
  }) {
    //fetching post
    const post = await $axios.$get(`/api/web/posts/${params.slug}`);

    //fetching categories
    const categories = await $axios.$get('/api/web/categorySidebar');

    //fetching tags
    const tags = await $axios.$get('/api/web/tags');
    return {
      'post': post.data,
      'categories': categories.data,
      'tags': tags.data
    };
  },
  /**
  * kirim komentar
  */
  data() {
    return {
      //state comment
      comment: {
        name: '',
        email: '',
        comment: ''
      },
      //state validation
      validation: []
    };
  },
  methods: {
    //metthod storeComment
    async storeComment() {
      //sending data to server
      await this.$axios.post('/api/web/posts/storeComment', {
        //data
        name: this.comment.name,
        email: this.comment.email,
        comment: this.comment.comment,
        slug: this.$route.params.slug
      }).then(() => {
        //feresh data
        this.$nuxt.refresh();

        //clear form
        this.comment.name = '';
        this.comment.email = '';
        this.comment.comment = '';

        //show sweet alert
        this.$swal.fire({
          title: 'BERHASIL!',
          text: "Komentar Anda Berhasil Terkirim!",
          icon: 'success',
          showConfirmButton: false,
          timer: 3000
        });
        this.$router.push({
          path: this.$route.path
        });
      }).catch(error => {
        //assign error validation
        this.validation = error.response.data;
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/post/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var post_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/post/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  post_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "16fbb630"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map
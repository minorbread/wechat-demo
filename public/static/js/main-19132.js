webpackJsonp([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/icon.4bf4ff9.png";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vue@2.5.13@vue/dist/vue.js
var vue = __webpack_require__(0);
var vue_default = /*#__PURE__*/__webpack_require__.n(vue);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./src/components/w-header/w-header.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var w_header = ({

  name: 'w-header',

  data() {
    return {
      backgroundSpan: {
        backgroundImage: 'url(' + __webpack_require__(6) + ')'
      }
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler?{"id":"data-v-1d3b47fc","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./src/components/w-header/w-header.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _c("span", [_vm._v("微信")]),
    _vm._v(" "),
    _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "add", style: _vm.backgroundSpan })
    ]),
    _vm._v(" "),
    _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "search", style: _vm.backgroundSpan })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var w_header_w_header = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1d3b47fc", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/w-header/w-header.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(15)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  w_header,
  w_header_w_header,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\w-header\\w-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d3b47fc", Component.options)
  } else {
    hotAPI.reload("data-v-1d3b47fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_w_header_w_header = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./src/components/w-nav/w-nav.vue
//
//
//
//
//
//
//
//
//


/* harmony default export */ var w_nav = ({

  name: 'w-nav',

  data() {
    return {
      backgroundSpan: {
        backgroundImage: 'url(' + __webpack_require__(6) + ')'
      },
      isActive: {
        msg: ''
      }
    };
  },
  methods: {
    change: function (active, class1, class2, class3) {
      return class1.indexOf(active) != -1 ? class2 : class3;
    },
    active: function (event) {
      if (!event) {
        vue_default.a.set(this.isActive, 'msg', 'wechat');
        return;
      }
      var activeTarget, activeClass;
      activeTarget = event.target;
      if (activeTarget.childNodes.length > 0 || activeTarget.childNodes[0]) {
        activeClass = activeTarget.childNodes[0].className || activeTarget.childNodes[0].childNodes[0].className;
      } else {
        activeClass = activeTarget.className;
      }
      vue_default.a.set(this.isActive, 'msg', activeClass);
    }
  },
  mounted() {
    this.active();
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler?{"id":"data-v-6f14ab84","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./src/components/w-nav/w-nav.vue
var w_nav_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "w-nav", on: { click: _vm.active } },
    [
      _c(
        "router-link",
        { staticClass: "w-navItem", attrs: { to: "/wechat" } },
        [
          _c(
            "span",
            { class: _vm.change(_vm.isActive.msg, "a-wechat", "a-w") },
            [
              _c("i", {
                class: _vm.change(
                  _vm.isActive.msg,
                  "a-wechat",
                  "a-wechat",
                  "wechat"
                ),
                style: _vm.backgroundSpan
              }),
              _vm._v("微信")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        { staticClass: "w-navItem", attrs: { to: "/commun" } },
        [
          _c(
            "span",
            { class: _vm.change(_vm.isActive.msg, "a-commun", "a-c") },
            [
              _c("i", {
                class: _vm.change(
                  _vm.isActive.msg,
                  "a-commun",
                  "a-commun",
                  "commun"
                ),
                style: _vm.backgroundSpan
              }),
              _vm._v("通讯录")
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("router-link", { staticClass: "w-navItem", attrs: { to: "/#" } }, [
        _c("span", { class: _vm.change(_vm.isActive.msg, "a-see", "a-s") }, [
          _c("i", {
            class: _vm.change(_vm.isActive.msg, "a-see", "a-see", "see"),
            style: _vm.backgroundSpan
          }),
          _vm._v("发现")
        ])
      ]),
      _vm._v(" "),
      _c("router-link", { staticClass: "w-navItem", attrs: { to: "/#" } }, [
        _c("span", { class: _vm.change(_vm.isActive.msg, "a-me", "a-m") }, [
          _c("i", {
            class: _vm.change(_vm.isActive.msg, "a-me", "a-me", "me"),
            style: _vm.backgroundSpan
          }),
          _vm._v("我")
        ])
      ])
    ],
    1
  )
}
var w_nav_staticRenderFns = []
w_nav_render._withStripped = true
var w_nav_esExports = { render: w_nav_render, staticRenderFns: w_nav_staticRenderFns }
/* harmony default export */ var w_nav_w_nav = (w_nav_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-6f14ab84", w_nav_esExports)
  }
}
// CONCATENATED MODULE: ./src/components/w-nav/w-nav.vue
var w_nav_disposed = false
function w_nav_injectStyle (ssrContext) {
  if (w_nav_disposed) return
  __webpack_require__(17)
}
var w_nav_normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var w_nav___vue_template_functional__ = false
/* styles */
var w_nav___vue_styles__ = w_nav_injectStyle
/* scopeId */
var w_nav___vue_scopeId__ = "data-v-6f14ab84"
/* moduleIdentifier (server only) */
var w_nav___vue_module_identifier__ = null
var w_nav_Component = w_nav_normalizeComponent(
  w_nav,
  w_nav_w_nav,
  w_nav___vue_template_functional__,
  w_nav___vue_styles__,
  w_nav___vue_scopeId__,
  w_nav___vue_module_identifier__
)
w_nav_Component.options.__file = "src\\components\\w-nav\\w-nav.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f14ab84", w_nav_Component.options)
  } else {
    hotAPI.reload("data-v-6f14ab84", w_nav_Component.options)
  }
  module.hot.dispose(function (data) {
    w_nav_disposed = true
  })
})()}

/* harmony default export */ var components_w_nav_w_nav = (w_nav_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//



/* harmony default export */ var App = ({
  name: 'app',
  components: {
    WHeader: components_w_header_w_header,
    WNav: components_w_nav_w_nav
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler?{"id":"data-v-04c2046b","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("w-header", { staticClass: "header" }),
      _vm._v(" "),
      _c("transition", [_c("router-view", { staticClass: "content" })], 1),
      _vm._v(" "),
      _c("w-nav", { staticClass: "nav" })
    ],
    1
  )
}
var App_staticRenderFns = []
App_render._withStripped = true
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-04c2046b", App_esExports)
  }
}
// CONCATENATED MODULE: ./src/App.vue
var App_disposed = false
function App_injectStyle (ssrContext) {
  if (App_disposed) return
  __webpack_require__(10)
}
var App_normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)
App_Component.options.__file = "src\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04c2046b", App_Component.options)
  } else {
    hotAPI.reload("data-v-04c2046b", App_Component.options)
  }
  module.hot.dispose(function (data) {
    App_disposed = true
  })
})()}

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vue-router@3.0.1@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(19);

// CONCATENATED MODULE: ./src/router/index.js


vue_default.a.use(vue_router_esm["a" /* default */]);

//webpack按需加载组件
const home = r => __webpack_require__.e/* require.ensure */(2).then((() => r(__webpack_require__(35))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const commun = r => __webpack_require__.e/* require.ensure */(0).then((() => r(__webpack_require__(36))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
const wechat = r => __webpack_require__.e/* require.ensure */(1).then((() => r(__webpack_require__(37))).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/commun',
    name: 'commun',
    component: commun
  }, {
    path: '/wechat',
    name: 'wechat',
    component: wechat
  }, {
    path: '/home',
    name: 'home',
    component: home
  }]
}));
// EXTERNAL MODULE: ./node_modules/_vuex@3.0.1@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(20);

// CONCATENATED MODULE: ./src/store/index.js


vue_default.a.use(vuex_esm["a" /* default */]);

const store = {
  state: {},
  mutations: {},
  actions: {},
  getters: {}
};
/* harmony default export */ var src_store = (new vuex_esm["a" /* default */].Store(store));
// CONCATENATED MODULE: ./src/main.js




new vue_default.a({
  el: '#app',
  router: router,
  store: src_store,
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("542fba5f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/_css-loader@0.28.9@css-loader/index.js!../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c2046b\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../node_modules/_css-loader@0.28.9@css-loader/index.js!../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04c2046b\",\"scoped\":false,\"hasInlineConfig\":true}!../node_modules/_less-loader@4.0.5@less-loader/dist/cjs.js!../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(12);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: SourceHanSansCN;\n  src: url(" + escape(__webpack_require__(13)) + ");\n}\n.content {\n  margin-top: 3em;\n  margin-bottom: 4.2em;\n}\nhtml {\n  height: 100%;\n  background: #ebebeb;\n  font-family: SourceHanSansCN;\n}\n.header {\n  position: fixed;\n  width: 100%;\n  z-index: 1;\n  top: 0;\n}\n.nav {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}\n", ""]);

// exports


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/fonts/SourceHanSansCN-Normal.4bf258e.otf";

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0b740fb1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d3b47fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./w-header.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d3b47fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./w-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\nheader {\n  background-color: #393a3f;\n}\nheader > span {\n  color: #fcfcfc;\n  display: inline-block;\n  font-size: 1.2em;\n  padding: 0.7em 1em;\n}\nheader i {\n  width: 3em;\n  height: 2.6em;\n  margin-right: 0.6em;\n  display:inline-block;\n  float: right;\n  background-size: 355px 200px;\n}\n.search {\n  background-position: -20px -58px;\n}\n.add {\n  background-position: -79px -58px;\n}\n\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4c3fd74c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f14ab84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./w-nav.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f14ab84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./w-nav.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.w-nav[data-v-6f14ab84] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  background-color: #fcfcfc;\n  border-top: 1px solid #ccc;\n}\n.w-navItem[data-v-6f14ab84] {\n  flex: 1;\n  text-align: center;\n  text-decoration: none;\n  padding: 2.3em 0 0.6em 0;\n}\n.w-navItem > span[data-v-6f14ab84] {\n  font-size: 0.3em;\n  color: #999999;\n}\n.w-navItem i[data-v-6f14ab84] {\n  width: 3em;\n  height: 2.2em;\n  display:inline-block;\n  position: absolute;\n  bottom: 2em;\n  background-size: 355px 200px;\n}\n.wechat[data-v-6f14ab84] {\n  background-position: -20px -21px;\n}\n.commun[data-v-6f14ab84] {\n  background-position: -100px -133px;\n}\n.see[data-v-6f14ab84] {\n  background-position: -201px -21px;\n  background-size: 355px 200px;\n}\n.me[data-v-6f14ab84] {\n  background-position: -290px -20px;\n  margin-left: -0.6em;\n}\n.a-wechat[data-v-6f14ab84] {\n  background-position: -28px -132px;\n}\n.a-commun[data-v-6f14ab84] {\n  background-position: -104px -221px;\n}\n.a-see[data-v-6f14ab84]{\n  background-position: -318px -208px;\n  background-size: 548px 300px !important;\n}\n.a-me[data-v-6f14ab84] {\n  background-position: -463px -213px;\n  background-size: 548px 300px !important;\n  margin-left: -0.6em;\n}\nspan.a-s[data-v-6f14ab84], span.a-w[data-v-6f14ab84], span.a-c[data-v-6f14ab84], span.a-m[data-v-6f14ab84] {\n  color:green;\n}\n", ""]);

// exports


/***/ })
],[7]);
//# sourceMappingURL=main-19132.js.map
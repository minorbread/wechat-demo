webpackJsonp([1],{

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d1a9860c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c793295\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./wechat.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c793295\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./wechat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4703460a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b74ce790\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./chat.vue", function() {
     var newContent = require("!!../../../node_modules/_css-loader@0.28.9@css-loader/index.js!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b74ce790\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=styles&index=0!./chat.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.content-list[data-v-b74ce790] {\r\n  background-color: #fcfcfc;\r\n  display: flex;\r\n  margin-bottom: 1px;\r\n  position: relative;\n}\n.logo[data-v-b74ce790] {\r\n  width: 4em;\r\n  height: 4em;\r\n  margin: 0.7em 1em;\r\n  background-color: #ccc;\n}\n.logo img[data-v-b74ce790] {\r\n  width: 4em;\r\n  height: 4em;\r\n  float: right;\n}\n.msg[data-v-b74ce790] {\r\n  flex: 1;\n}\n.msg h1[data-v-b74ce790] {\r\n  margin: 0;\r\n  font-size: 1.2em;\r\n  margin-top: 1.2em;\n}\n.msg p[data-v-b74ce790] {\r\n  margin: 0;\r\n  font-size: 1em;\r\n  color: #999999;\r\n  font-weight: 550;\n}\n.msg span[data-v-b74ce790] {\r\n  position: absolute;\r\n  top: 0.8em;\r\n  right: 1em;\r\n  color: #999999;\n}\n.active[data-v-b74ce790] {\r\n  display: inline-block;\r\n  border: 6px solid #f00;\r\n  border-radius: 6px;\r\n  position: absolute;\r\n  top: 0.3em;\r\n  left: 4.6em;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./src/components/w-wechat/chat.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var chat = ({

  name: 'chat',
  props: ['userImg', 'userName', 'content', 'time', 'isActive'],
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler?{"id":"data-v-b74ce790","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./src/components/w-wechat/chat.vue
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-list" }, [
    _c("div", { staticClass: "logo" }, [
      _c("i", { class: { active: _vm.isActive } }),
      _c("img", { attrs: { src: _vm.userImg, alt: "" } })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "msg" }, [
      _c("h1", [_vm._v(_vm._s(_vm.userName))]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.content))]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.time))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var w_wechat_chat = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-b74ce790", esExports)
  }
}
// CONCATENATED MODULE: ./src/components/w-wechat/chat.vue
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b74ce790"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  chat,
  w_wechat_chat,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\w-wechat\\chat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b74ce790", Component.options)
  } else {
    hotAPI.reload("data-v-b74ce790", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ var components_w_wechat_chat = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=script&index=0!./src/page/wechat/wechat.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var wechat = ({
  name: 'wechat',
  components: {
    Chat: components_w_wechat_chat
  },
  methods: {}
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.0@vue-loader/lib/template-compiler?{"id":"data-v-1c793295","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.0@vue-loader/lib/selector.js?type=template&index=0!./src/page/wechat/wechat.vue
var wechat_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wechat" } },
    [
      _c("chat", {
        attrs: {
          isActive: "true",
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          isActive: "true",
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          isActive: "true",
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          isActive: "true",
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          isActive: "true",
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      }),
      _vm._v(" "),
      _c("chat", {
        attrs: {
          isActive: "true",
          userName: "aaa",
          content: "bbbb",
          userImg:
            "http://img4.imgtn.bdimg.com/it/u=2751416685,2505094361&fm=27&gp=0.jpg",
          time: "1:00"
        }
      })
    ],
    1
  )
}
var wechat_staticRenderFns = []
wechat_render._withStripped = true
var wechat_esExports = { render: wechat_render, staticRenderFns: wechat_staticRenderFns }
/* harmony default export */ var wechat_wechat = (wechat_esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-1c793295", wechat_esExports)
  }
}
// CONCATENATED MODULE: ./src/page/wechat/wechat.vue
var wechat_disposed = false
function wechat_injectStyle (ssrContext) {
  if (wechat_disposed) return
  __webpack_require__(31)
}
var wechat_normalizeComponent = __webpack_require__(3)
/* script */


/* template */

/* template functional */
var wechat___vue_template_functional__ = false
/* styles */
var wechat___vue_styles__ = wechat_injectStyle
/* scopeId */
var wechat___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var wechat___vue_module_identifier__ = null
var wechat_Component = wechat_normalizeComponent(
  wechat,
  wechat_wechat,
  wechat___vue_template_functional__,
  wechat___vue_styles__,
  wechat___vue_scopeId__,
  wechat___vue_module_identifier__
)
wechat_Component.options.__file = "src\\page\\wechat\\wechat.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c793295", wechat_Component.options)
  } else {
    hotAPI.reload("data-v-1c793295", wechat_Component.options)
  }
  module.hot.dispose(function (data) {
    wechat_disposed = true
  })
})()}

/* harmony default export */ var page_wechat_wechat = __webpack_exports__["default"] = (wechat_Component.exports);


/***/ })

});
//# sourceMappingURL=wechat.19132.js.map
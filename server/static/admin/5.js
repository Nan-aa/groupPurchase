(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** E:/code/Part Four/vue项目/node_modules/babel-loader/lib??ref--0-0!E:/code/Part Four/vue项目/node_modules/vue-loader/lib??vue-loader-options!./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v_product_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @v/product/Create */ \"./src/views/product/Create.vue\");\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_v_product_Create__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    data: function data() {\n      return {\n        title: '编辑商品',\n        submitUrl: '/admin/product/update'\n      };\n    }\n  }],\n  methods: {\n    getData: function getData() {\n      var _this = this;\n\n      var params = this.$route.params;\n      this.$http.get('/admin/product/detail', {\n        params: params\n      }).then(function (_ref) {\n        var data = _ref.data;\n\n        if (data.errno === 0) {\n          _this.data = data.data;\n        } else {\n          _this.$message.error(data.msg);\n\n          _this.$router.back();\n        }\n      });\n    }\n  },\n  created: function created() {\n    this.getData();\n  },\n  watch: {\n    $route: function $route() {\n      this.getData();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?E:/code/Part_Four/vue%E9%A1%B9%E7%9B%AE/node_modules/babel-loader/lib??ref--0-0!E:/code/Part_Four/vue%E9%A1%B9%E7%9B%AE/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/product/Edit.vue":
/*!************************************!*\
  !*** ./src/views/product/Edit.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ \"./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/product/Edit.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?");

/***/ }),

/***/ "./src/views/product/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/product/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ \"../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!./src/views/product/Edit.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/product/Edit.vue?");

/***/ })

}]);
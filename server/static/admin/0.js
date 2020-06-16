(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!./src/views/product/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** E:/code/Part Four/vue项目/node_modules/babel-loader/lib??ref--0-0!E:/code/Part Four/vue项目/node_modules/vue-loader/lib??vue-loader-options!./src/views/product/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _t_conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t/conf */ \"./src/tools/conf.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    var rules = {};\n    [\"img\", \"title\", \"description\", \"sales\", \"price\", \"originPrice\", \"type\", \"evaluate\", \"storeName\", \"storeAddress\", \"storeNum\", \"content\"].forEach(function (item) {\n      return rules[item] = [{\n        trigger: 'blur',\n        required: true,\n        message: '请输入内容'\n      }];\n    });\n    return {\n      data: {},\n      types: _t_conf__WEBPACK_IMPORTED_MODULE_0__[\"types\"],\n      rules: rules,\n      title: '创建商品',\n      submitUrl: '/admin/product/create'\n    };\n  },\n  computed: {\n    dealData: function dealData() {\n      var _this = this;\n\n      // 转换数字\n      [\"sales\", \"price\", \"originPrice\", \"type\", \"evaluate\", \"storeNum\"].forEach(function (key) {\n        return _this.data[key] = +_this.data[key];\n      });\n      return this.data;\n    }\n  },\n  methods: {\n    uploadSuccess: function uploadSuccess(_ref) {\n      var errno = _ref.errno,\n          data = _ref.data,\n          msg = _ref.msg;\n\n      // console.log(args);\n      // console.log(errno, data, msg)\n      if (errno === 0) {\n        this.$set(this.data, 'img', data);\n      } else {\n        this.$message.error(msg);\n      }\n    },\n    uploadFail: function uploadFail() {\n      // console.log(args);\n      this.$message.error('上传失败');\n    },\n    submitData: function submitData() {\n      var _this2 = this;\n\n      this.$refs.product.validate(function (valid) {\n        if (valid) {\n          _this2.$http.post(_this2.submitUrl, _this2.dealData).then(function (_ref2) {\n            var data = _ref2.data;\n\n            if (data.errno === 0) {\n              _this2.$message.success('创建成功');\n\n              _this2.$router.replace('/product/list/1');\n            } else {\n              _this2.$message.error(data.msg);\n            }\n          });\n        }\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/product/Create.vue?E:/code/Part_Four/vue%E9%A1%B9%E7%9B%AE/node_modules/babel-loader/lib??ref--0-0!E:/code/Part_Four/vue%E9%A1%B9%E7%9B%AE/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./src/views/product/Create.vue?vue&type=template&id=649c9cd6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** E:/code/Part Four/vue项目/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!E:/code/Part Four/vue项目/node_modules/vue-loader/lib??vue-loader-options!./src/views/product/Create.vue?vue&type=template&id=649c9cd6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"create\" },\n    [\n      _c(\"h1\", { staticClass: \"page-title\" }, [_vm._v(_vm._s(_vm.title))]),\n      _vm._v(\" \"),\n      _c(\n        \"el-form\",\n        {\n          ref: \"product\",\n          attrs: { \"label-width\": \"200px\", model: _vm.data, rules: _vm.rules }\n        },\n        [\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品名称\", prop: \"title\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { placeholder: \"请输入商品名称\" },\n                model: {\n                  value: _vm.data.title,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"title\", $$v)\n                  },\n                  expression: \"data.title\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品描述\", prop: \"description\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { type: \"textarea\", placeholder: \"请输入商品描述\" },\n                model: {\n                  value: _vm.data.description,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"description\", $$v)\n                  },\n                  expression: \"data.description\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品价格\", prop: \"price\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { type: \"number\", placeholder: \"请输入商品价格\" },\n                model: {\n                  value: _vm.data.price,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"price\", $$v)\n                  },\n                  expression: \"data.price\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品原价\", prop: \"originPrice\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { type: \"number\", placeholder: \"请输入商品原价\" },\n                model: {\n                  value: _vm.data.originPrice,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"originPrice\", $$v)\n                  },\n                  expression: \"data.originPrice\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品评分\", prop: \"evaluate\" } },\n            [\n              _c(\"el-rate\", {\n                attrs: { \"allow-half\": \"\", \"show-score\": \"\" },\n                model: {\n                  value: _vm.data.evaluate,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"evaluate\", $$v)\n                  },\n                  expression: \"data.evaluate\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品分类\", prop: \"type\" } },\n            [\n              _c(\n                \"el-select\",\n                {\n                  attrs: { placeholder: \"请输入商品分类\" },\n                  model: {\n                    value: _vm.data.type,\n                    callback: function($$v) {\n                      _vm.$set(_vm.data, \"type\", $$v)\n                    },\n                    expression: \"data.type\"\n                  }\n                },\n                _vm._l(_vm.types, function(item) {\n                  return _c(\"el-option\", {\n                    key: item.id,\n                    attrs: { label: item.text, value: item.id }\n                  })\n                }),\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品销量\", prop: \"sales\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { type: \"number\", placeholder: \"请输入商品销量\" },\n                model: {\n                  value: _vm.data.sales,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"sales\", $$v)\n                  },\n                  expression: \"data.sales\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品店名\", prop: \"storeName\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { placeholder: \"请输入商品店名\" },\n                model: {\n                  value: _vm.data.storeName,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"storeName\", $$v)\n                  },\n                  expression: \"data.storeName\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品地址\", prop: \"storeAddress\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { placeholder: \"请输入商品地址\" },\n                model: {\n                  value: _vm.data.storeAddress,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"storeAddress\", $$v)\n                  },\n                  expression: \"data.storeAddress\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品分店\", prop: \"storeNum\" } },\n            [\n              _c(\"el-input\", {\n                attrs: { type: \"number\", placeholder: \"请输入商品分店\" },\n                model: {\n                  value: _vm.data.storeNum,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"storeNum\", $$v)\n                  },\n                  expression: \"data.storeNum\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品图片\", prop: \"img\" } },\n            [\n              _c(\n                \"el-upload\",\n                {\n                  attrs: {\n                    action: \"/admin/product/upload\",\n                    \"on-success\": _vm.uploadSuccess,\n                    \"on-error\": _vm.uploadFail,\n                    \"show-file-list\": false\n                  }\n                },\n                [\n                  _c(\"el-button\", { attrs: { type: \"primary\" } }, [\n                    _vm._v(\"上传\")\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"span\",\n                    {\n                      staticClass: \"upload-text-tip\",\n                      attrs: { slot: \"tip\" },\n                      slot: \"tip\"\n                    },\n                    [_vm._v(\"请选择商品图片\")]\n                  )\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\"img\", {\n                directives: [\n                  {\n                    name: \"show\",\n                    rawName: \"v-show\",\n                    value: _vm.data.img,\n                    expression: \"data.img\"\n                  }\n                ],\n                staticClass: \"upload-img\",\n                attrs: { src: _vm.data.img, alt: \"\" }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            { attrs: { label: \"商品内容\", prop: \"content\" } },\n            [\n              _c(\"quill-editor\", {\n                model: {\n                  value: _vm.data.content,\n                  callback: function($$v) {\n                    _vm.$set(_vm.data, \"content\", $$v)\n                  },\n                  expression: \"data.content\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"el-form-item\",\n            [\n              _c(\n                \"el-button\",\n                { attrs: { type: \"success\" }, on: { click: _vm.submitData } },\n                [_vm._v(\"提交\")]\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/product/Create.vue?E:/code/Part_Four/vue%E9%A1%B9%E7%9B%AE/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!E:/code/Part_Four/vue%E9%A1%B9%E7%9B%AE/node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/tools/conf.js":
/*!***************************!*\
  !*** ./src/tools/conf.js ***!
  \***************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"types\", function() { return types; });\nvar types = [{\n  text: '美食',\n  id: 1\n}, {\n  text: '电影',\n  id: 2\n}, {\n  text: '酒店',\n  id: 3\n}, {\n  text: '休闲',\n  id: 4\n}, {\n  text: '外卖',\n  id: 5\n}, {\n  text: 'KTV',\n  id: 6\n}, {\n  text: '丽人',\n  id: 7\n}, {\n  text: '周边游',\n  id: 8\n}, {\n  text: '小吃',\n  id: 9\n}, {\n  text: '火车票',\n  id: 10\n}];\n\n//# sourceURL=webpack:///./src/tools/conf.js?");

/***/ }),

/***/ "./src/views/product/Create.vue":
/*!**************************************!*\
  !*** ./src/views/product/Create.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Create_vue_vue_type_template_id_649c9cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=649c9cd6&scoped=true& */ \"./src/views/product/Create.vue?vue&type=template&id=649c9cd6&scoped=true&\");\n/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ \"./src/views/product/Create.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Create_vue_vue_type_template_id_649c9cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Create_vue_vue_type_template_id_649c9cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"649c9cd6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/product/Create.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/product/Create.vue?");

/***/ }),

/***/ "./src/views/product/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/product/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ \"../../node_modules/babel-loader/lib/index.js?!../../node_modules/vue-loader/lib/index.js?!./src/views/product/Create.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/product/Create.vue?");

/***/ }),

/***/ "./src/views/product/Create.vue?vue&type=template&id=649c9cd6&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/views/product/Create.vue?vue&type=template&id=649c9cd6&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_649c9cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=649c9cd6&scoped=true& */ \"../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./src/views/product/Create.vue?vue&type=template&id=649c9cd6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_649c9cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_649c9cd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/product/Create.vue?");

/***/ })

}]);
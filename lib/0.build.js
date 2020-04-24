(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/client/Components/Menu/FoodListTable/FoodListTitle/index.tsx":
/*!**************************************************************************!*\
  !*** ./src/client/Components/Menu/FoodListTable/FoodListTitle/index.tsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const FoodListTitle = ({
  category,
  id
}) => {
  return /*#__PURE__*/(0, _jsx2.default)("h2", {
    id: id
  }, void 0, /*#__PURE__*/(0, _jsx2.default)("span", {}, void 0, category));
};

const _default = FoodListTitle;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FoodListTitle, "FoodListTitle", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_jsx2, "_jsx2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
  reactHotLoader.register(_react, "_react", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
  reactHotLoader.register(__signature__, "__signature__", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
  reactHotLoader.register(FoodListTitle, "FoodListTitle", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
  reactHotLoader.register(_default, "_default", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
  reactHotLoader.register(_default2, "_default2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\FoodListTitle\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/Components/Menu/FoodListTable/index.tsx":
/*!************************************************************!*\
  !*** ./src/client/Components/Menu/FoodListTable/index.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _action = __webpack_require__(/*! ../../../Redux/subFood/action */ "./src/client/Redux/subFood/action.ts");

var _index = _interopRequireDefault(__webpack_require__(/*! ./food/index */ "./src/client/Components/Menu/FoodListTable/food/index.tsx"));

var _subFood = _interopRequireDefault(__webpack_require__(/*! ../subFoodModal/subFood */ "./src/client/Components/Menu/subFoodModal/subFood.tsx"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./FoodListTitle/index */ "./src/client/Components/Menu/FoodListTable/FoodListTitle/index.tsx"));

var _index3 = _interopRequireDefault(__webpack_require__(/*! ../../Spinner/index */ "./src/client/Components/Spinner/index.tsx"));

var _style = __webpack_require__(/*! ./style */ "./src/client/Components/Menu/FoodListTable/style.ts");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Modal = (0, _react.lazy)(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ../../Modal/index */ "./src/client/Components/Modal/index.tsx", 7)));
const SearchBar = (0, _react.lazy)(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ./searchBar/searchBar */ "./src/client/Components/Menu/FoodListTable/searchBar/searchBar.tsx", 7)));
const Sort = (0, _react.lazy)(() => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../sort */ "./src/client/Components/Menu/sort/index.tsx", 7)));
const sortBy = {
  lowestprice: {
    field: 'price',
    asc: true
  },
  highestprice: {
    field: 'price',
    asc: false
  }
};

var _ref = /*#__PURE__*/(0, _jsx2.default)(_style.NotFoundStyle, {}, void 0, "\u0646\u062A\u06CC\u062C\u0647 \u0627\u06CC \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F.");

var _ref2 = /*#__PURE__*/(0, _jsx2.default)(_index3.default, {});

const FoodListTable = ({
  itemFood
}) => {
  const originalItems = [...itemFood];
  const row = [];
  let lastCategory = '';
  const subFood = (0, _reactRedux.useSelector)(state => state.subFood);

  const _useState = (0, _react.useState)(itemFood),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        foodList = _useState2[0],
        setFoodList = _useState2[1];

  const _useState3 = (0, _react.useState)(''),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        searchKey = _useState4[0],
        setSearchKey = _useState4[1];

  const _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
        inStock = _useState6[0],
        setInStock = _useState6[1];

  const dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(() => {
    search(searchKey, inStock);
  }, []);

  const NotFound = () => {
    return _ref;
  };

  const search = (text, stock, list = itemFood) => {
    let newList = list;
    let result = [];
    let searchIngredient = list;

    if (stock) {
      newList = newList.filter(item => item.available);
    }

    if (text) {
      newList = newList.filter(item => item.title.indexOf(text) > -1);
      searchIngredient = searchIngredient.filter(item => item.ingredient.indexOf(text) > -1);
      result = newList.concat(searchIngredient);
    } else {
      newList ? result = newList : result = itemFood;
    }

    setFoodList(result);
  };

  const searchHandler = text => {
    search(text, inStock);
    setSearchKey(text);
  };

  const stockHandler = value => {
    search(searchKey, value);
    setInStock(value);
  };

  const sortHandler = value => {
    let newItem = [];
    const sortItem = sortBy[value];

    if (sortItem) {
      const index = sortItem.asc ? 1 : -1;
      newItem = originalItems.sort((a, b) => {
        return (//        a.catIndex - b.catIndex ||
          //          a.catId - b.catId ||
          a.categoryIndex - b.categoryIndex || (a[sortItem.field] - b[sortItem.field]) * index
        );
      });
    } else {
      newItem = originalItems;
    }

    search(searchKey, inStock, newItem);
  };

  if (foodList.length > 0) {
    foodList.forEach(food => {
      if (food.categoryTitle !== lastCategory) {
        var _food$catId;

        row.push( /*#__PURE__*/(0, _jsx2.default)(_index2.default, {
          category: food.categoryTitle,
          id: (_food$catId = food.catId) === null || _food$catId === void 0 ? void 0 : _food$catId.toString()
        }));
      }

      row.push( /*#__PURE__*/(0, _jsx2.default)(_index.default, {
        food: food
      }));
      lastCategory = food.categoryTitle;
    });
  } else {
    row.push( /*#__PURE__*/(0, _jsx2.default)(NotFound, {}));
  }

  console.log(subFood);
  return /*#__PURE__*/(0, _jsx2.default)(_style.FoodMenu, {}, void 0, /*#__PURE__*/(0, _jsx2.default)(_react.Suspense, {
    fallback: _ref2
  }, void 0, /*#__PURE__*/(0, _jsx2.default)(Sort, {
    onChange: sortHandler
  }), /*#__PURE__*/(0, _jsx2.default)(SearchBar, {
    filterText: searchKey,
    onfilterText: searchHandler,
    inStock: inStock,
    onChangeStock: stockHandler
  }), subFood.show ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/(0, _jsx2.default)(Modal, {
    show: subFood.show,
    onClose: () => dispatch((0, _action.closeSubFoodModal)(true)),
    className: "subFoodModal",
    subFood: true
  }, void 0, /*#__PURE__*/(0, _jsx2.default)(_subFood.default, {
    subFood: subFood.food
  }))) : null, /*#__PURE__*/(0, _jsx2.default)(_style.FoodList, {}, void 0, row)));
};

__signature__(FoodListTable, "useSelector{subFood}\nuseState{[foodList, setFoodList](itemFood)}\nuseState{[searchKey, setSearchKey]('')}\nuseState{[inStock, setInStock](false)}\nuseDispatch{dispatch}\nuseEffect{}", () => [_reactRedux.useSelector, _reactRedux.useDispatch]);

const _default = FoodListTable;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Modal, "Modal", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(SearchBar, "SearchBar", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(Sort, "Sort", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(sortBy, "sortBy", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(FoodListTable, "FoodListTable", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_jsx2, "_jsx2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_slicedToArray2, "_slicedToArray2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_react, "_react", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_index, "_index", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_subFood, "_subFood", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_index2, "_index2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_index3, "_index3", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(__signature__, "__signature__", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(Modal, "Modal", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(SearchBar, "SearchBar", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(Sort, "Sort", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(sortBy, "sortBy", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_ref, "_ref", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_ref2, "_ref2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(FoodListTable, "FoodListTable", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_default, "_default", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
  reactHotLoader.register(_default2, "_default2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\index.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/Components/Menu/FoodListTable/style.ts":
/*!***********************************************************!*\
  !*** ./src/client/Components/Menu/FoodListTable/style.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FoodMenu = exports.FoodList = exports.NotFoundStyle = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _style = __webpack_require__(/*! ./food/style */ "./src/client/Components/Menu/FoodListTable/food/style.ts");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const NotFoundStyle = _styledComponents.default.div.withConfig({
  displayName: "style__NotFoundStyle",
  componentId: "iubtgm-0"
})([""]);

exports.NotFoundStyle = NotFoundStyle;

const FoodList = _styledComponents.default.div.withConfig({
  displayName: "style__FoodList",
  componentId: "iubtgm-1"
})(["direction:rtl;float:right;width:100%;padding:0 15px;min-height:550px;overflow:hidden;position:relative;", "{position:absolute;top:30px;font-size:20px;color:#b1b1b1;}@media (min-width:992px){padding:0;", "{width:50%;section{transition:all 0.25s cubic-bezier(0.19,1,0.22,1.06);&:hover{box-shadow:0px 14px 20px rgba(56,60,71,0.1);transform:translateY(-2px);}}}}"], NotFoundStyle, _style.FoodItem); // .food-item {
//   width: 50%;
//   section {
//     transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1.06);
//     &:hover {
//       box-shadow: 0px 14px 20px rgba(56, 60, 71, 0.1);
//       transform: translateY(-2px);
//     }
//   }
// }


exports.FoodList = FoodList;

const FoodMenu = _styledComponents.default.div.withConfig({
  displayName: "style__FoodMenu",
  componentId: "iubtgm-2"
})(["padding-bottom:15px;min-height:700px;.sort{float:right;select{background-color:#fff;outline:none;border:1px solid #ececec;border-radius:2px;margin-left:10px;width:auto;height:35px;cursor:pointer;&:hover{border:1px solid #5b5a5e;}}}h2{clear:both;padding:0 10px;color:#888;font-size:20px;font-size:1.25rem;direction:rtl;}@media only screen and (min-width:767px){.parent-modal{.lightInner{width:100%;z-index:6000;height:100%;position:relative;overflow-y:scroll;}.modalBox{height:auto;top:10%;margin-bottom:20px;transform:translate(-50%,0%);}}}@media only screen and (min-width:992px){padding:0 25px 35px;}"]);

exports.FoodMenu = FoodMenu;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFoundStyle, "NotFoundStyle", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
  reactHotLoader.register(FoodList, "FoodList", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
  reactHotLoader.register(FoodMenu, "FoodMenu", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_styledComponents, "_styledComponents", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
  reactHotLoader.register(__signature__, "__signature__", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
  reactHotLoader.register(NotFoundStyle, "NotFoundStyle", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
  reactHotLoader.register(FoodList, "FoodList", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
  reactHotLoader.register(FoodMenu, "FoodMenu", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\FoodListTable\\style.ts");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/Components/Menu/subFoodModal/style.tsx":
/*!***********************************************************!*\
  !*** ./src/client/Components/Menu/subFoodModal/style.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubFoodStyle = void 0;

var _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));

var _style = __webpack_require__(/*! ../FoodListTable/food/style */ "./src/client/Components/Menu/FoodListTable/food/style.ts");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const SubFoodStyle = _styledComponents.default.div.withConfig({
  displayName: "style__SubFoodStyle",
  componentId: "sc-19pjrez-0"
})(["@media (min-width:992px){.details-holder{float:right;}", "{width:100%;}"], _style.FoodItem);

exports.SubFoodStyle = SubFoodStyle;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubFoodStyle, "SubFoodStyle", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\style.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_styledComponents, "_styledComponents", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\style.tsx");
  reactHotLoader.register(__signature__, "__signature__", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\style.tsx");
  reactHotLoader.register(SubFoodStyle, "SubFoodStyle", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\style.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/Components/Menu/subFoodModal/subFood.tsx":
/*!*************************************************************!*\
  !*** ./src/client/Components/Menu/subFoodModal/subFood.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "./node_modules/@babel/runtime/helpers/jsx.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! ../FoodListTable/food/foodModal/index */ "./src/client/Components/Menu/FoodListTable/food/foodModal/index.tsx"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ../FoodListTable/food/details-holder/index */ "./src/client/Components/Menu/FoodListTable/food/details-holder/index.tsx"));

var _style = __webpack_require__(/*! ../FoodListTable/food/style */ "./src/client/Components/Menu/FoodListTable/food/style.ts");

var _style2 = __webpack_require__(/*! ./style */ "./src/client/Components/Menu/subFoodModal/style.tsx");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const SubFood = ({
  subFood
}) => {
  console.log('ddd', subFood);
  return /*#__PURE__*/(0, _jsx2.default)(_style2.SubFoodStyle, {}, void 0, /*#__PURE__*/(0, _jsx2.default)(_index.default, {
    subfood: true,
    defaultDetail: subFood,
    food: subFood.food
  }), /*#__PURE__*/(0, _jsx2.default)("div", {}, void 0, subFood.subFoods.map((food, i) => {
    return /*#__PURE__*/(0, _jsx2.default)(_style.FoodItem, {}, food.catId, /*#__PURE__*/(0, _jsx2.default)("section", {}, void 0, /*#__PURE__*/(0, _jsx2.default)(_index2.default, {
      food: food
    })));
  })));
};

const _default = SubFood;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SubFood, "SubFood", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_jsx2, "_jsx2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(_react, "_react", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(_index, "_index", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(_index2, "_index2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(__signature__, "__signature__", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(SubFood, "SubFood", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(_default, "_default", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
  reactHotLoader.register(_default2, "_default2", "C:\\Users\\USER\\react-app\\src\\client\\Components\\Menu\\subFoodModal\\subFood.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=0.build.js.map
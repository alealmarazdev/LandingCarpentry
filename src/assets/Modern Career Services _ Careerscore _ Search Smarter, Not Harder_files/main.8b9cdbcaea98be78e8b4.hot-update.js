webpackHotUpdate("main",{

/***/ "./src/components/RegisterForm.js":
/*!****************************************!*\
  !*** ./src/components/RegisterForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./src/components/Button.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TextInput */ "./src/components/TextInput.js");
/* harmony import */ var _constants_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/strings */ "./src/constants/strings.js");
var _jsxFileName = "/Users/alejandraalmaraz/Desktop/Proyectos/careerscore-web-api/src/components/RegisterForm.js";





const {
  CREATE_YOUR_ACCOUNT,
  EMAIL,
  FIRST_NAME,
  FORGOT_YOUR_PASSWORD,
  I_AGREE_TO_THE,
  LAST_NAME,
  LOG_IN,
  PASSWORD,
  PLEASE_CHECK_TERMS_AND_CONDITION,
  SIGN_IN,
  SIGN_UP,
  TERMS_AND_CONDITIONS
} = _constants_strings__WEBPACK_IMPORTED_MODULE_4__["default"];

const RegisterForm = ({
  submitFailed,
  submitSucceeded,
  termsAgreed = false,
  handleSubmit,
  termsCheck,
  handleSubmitRegister,
  loginError
}) => {
  console.log('van los props', handleSubmit);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body px-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title text-center m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, CREATE_YOUR_ACCOUNT), loginError != null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, loginError), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `small d-none ${(submitFailed || submitSucceeded) && !termsAgreed ? ' d-block text-danger' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "small text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, PLEASE_CHECK_TERMS_AND_CONDITION)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "new-user-register",
    onSubmit: handleSubmit(values => {
      if (termsCheck && termsAgreed === false) return;
      handleSubmitRegister(values);
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "signUpFirstName",
    component: _components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "register-panel-text my-3",
    label: FIRST_NAME,
    type: "text",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "signUpLastName",
    component: _components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "register-panel-text  my-3",
    label: LAST_NAME,
    type: "text",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "signUpEmail",
    component: _components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "register-panel-text my-3",
    label: EMAIL,
    type: "text",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "signUpPassword",
    component: _components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "register-panel-text my-3",
    label: PASSWORD,
    type: "password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "signUpPassword2",
    component: _components_TextInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: "d-none",
    label: PASSWORD,
    type: "password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `row my-3 mx-2 small ${(submitFailed || submitSucceeded) && !termsAgreed ? 'text-danger' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "clickable",
    checked: termsAgreed,
    onChange: () => termsAgreed = !termsAgreed,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small ml-2 mr-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, I_AGREE_TO_THE), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "small text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, TERMS_AND_CONDITIONS)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hierarchy: "primary",
    variant: "base",
    onClick: handleSubmit(handleSubmitRegister),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 18
    }
  }, SIGN_IN)));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ })

})
//# sourceMappingURL=main.8b9cdbcaea98be78e8b4.hot-update.js.map
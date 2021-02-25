module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "C+bu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
    role: "contentinfo",
    children: "I-credit.kz \u24C7 2021"
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./components/admin/Header.js
var Header = __webpack_require__("dstC");

// EXTERNAL MODULE: ./components/admin/Footer.js
var Footer = __webpack_require__("C+bu");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/admin/AdminCabinet.js







const AdminCabinet = ({
  user,
  active
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: password,
    1: setPassword
  } = Object(external_react_["useState"])('');
  const {
    0: repeatPassword,
    1: setRepeatPassword
  } = Object(external_react_["useState"])('');
  const {
    0: userDate,
    1: setUserDate
  } = Object(external_react_["useState"])({
    name: user.name,
    email: user.email
  });

  const editOwn = e => {
    external_axios_default.a.put(`${"http://37.18.30.37/api"}/editOwn`, {
      token: external_js_cookie_default.a.get('admin_token'),
      email: userDate.email,
      name: userDate.name
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.data.success) {
        dispatch({
          type: 'ADM_SUCCESS_MESSAGE',
          payload: res.data.message
        });
      } else {
        dispatch({
          type: 'ADM_ERROR_MESSAGE',
          payload: res.data.message
        });
      }
    });
    e.preventDefault();
  };

  const passwordChange = e => {
    e.preventDefault();

    if (!password || !repeatPassword) {
      dispatch({
        type: 'ADM_ERROR_MESSAGE',
        payload: 'Заполните все поле'
      });
    }

    if (repeatPassword !== password) {
      dispatch({
        type: 'ADM_ERROR_MESSAGE',
        payload: 'Пароли не совподают'
      });
    } else {
      dispatch({
        type: 'ADM_CLOSE_MESSAGE'
      });
      external_axios_default.a.get(`${"http://37.18.30.37/api"}/changePassword`, {
        params: {
          token: external_js_cookie_default.a.get('admin_token'),
          password: password
        }
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.data.success) {
          setPassword('');
          setRepeatPassword('');
          dispatch({
            type: 'ADM_SUCCESS_MESSAGE',
            payload: 'Обновлен пароль'
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    role: "main",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container row ",
      children: active === 'info' ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: e => editOwn(e),
        className: "col-md-9 mb-3 mx-auto formsStep",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "text-center mx-auto",
          children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row col-12 form-group mx-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "name",
            children: "\u0418\u043C\u044F:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            onChange: e => setUserDate({
              name: e.target.value,
              email: userDate.email
            }),
            className: "form-control focus-visible",
            value: userDate.name
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row col-12 form-group mx-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "name",
            children: "Username:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            onChange: e => setUserDate({
              name: userDate.name,
              email: e.target.value
            }),
            name: "username",
            className: "form-control focus-visible",
            value: userDate.email
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row col-12  form-group mx-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "name",
            children: "\u0420\u043E\u043B\u044C:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            className: "form-control focus-visible",
            value: user.role_name,
            disabled: true
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "button-admin form-group",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            type: "submit",
            children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
          })
        })]
      }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        onSubmit: e => passwordChange(e),
        className: "col-md-9 mx-auto formsStep",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "text-center mx-auto",
          children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row col-12 form-group mx-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "password",
            children: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "password",
            onChange: e => setPassword(e.target.value),
            className: "form-control focus-visible",
            value: password
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row col-12 form-group mx-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: "password_repeat",
            children: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            name: "password_repeat",
            onChange: e => setRepeatPassword(e.target.value),
            value: repeatPassword,
            className: "form-control focus-visible"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "button-admin form-group",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            type: "submit",
            children: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
          })
        })]
      })
    })
  });
};

/* harmony default export */ var admin_AdminCabinet = (AdminCabinet);
// CONCATENATED MODULE: ./pages/index.js








function mapStateToProps(state) {
  return {
    adminReducer: state.adminReducer
  };
}

const AdminMain = ({
  adminReducer
}) => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])('info');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      role: "main",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
        class: "panel important",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "d-flex mb-3",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: () => setActive('info'),
            className: active === 'info' ? 'btn btn-secondary  mr-2' : 'btn btn-dark mr-2',
            children: "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            onClick: () => setActive('password'),
            className: active === 'password' ? 'btn btn-secondary  mr-2' : 'btn btn-dark mr-2',
            children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"
          })]
        }), adminReducer.authenticatingUser ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430.."
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_AdminCabinet, {
          active: active,
          user: adminReducer.user
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(AdminMain));

/***/ }),

/***/ "WEkO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);






const mapStateToProps = ({
  admmessage: {
    visibility,
    type,
    message
  }
}) => ({
  visibility,
  type,
  message
});

const Flash = ({
  visibility,
  type,
  message
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const close = () => {
      if (message) {
        setTimeout(() => {
          dispatch({
            type: 'ADM_CLOSE_MESSAGE'
          });
        }, 3000);
      }
    };

    close();
  }, []);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return visibility && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `alertt alertt-${type}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: "close",
      onClick: () => dispatch({
        type: 'ADM_CLOSE_MESSAGE'
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
        title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        children: "X"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: message
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(Flash));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dstC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _FlashMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("WEkO");










function mapStateToProps(state) {
  return {
    adminReducer: state.adminReducer
  };
}

const Header = ({
  adminReducer
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleLogout = () => {
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`${"http://37.18.30.37/api"}/logout?email=${adminReducer.user.email}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      router.push('/login');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('admin_token');
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('admin_token') === undefined) {
      router.push('/login');
    }
  }, []);

  if (adminReducer.user.name === null) {
    /*#__PURE__*/
    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_FlashMessage__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("header", {
      role: "banner",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          className: "logo",
          href: "/",
          children: "I-credit"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: "utilities",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          className: "users",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: "logo",
            href: "/",
            children: adminReducer.user.name
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          className: "logout warn",
          onClick: handleLogout,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            href: true,
            children: "Log Out"
          })
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("nav", {
      role: "navigation",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("ul", {
        className: "main",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          className: "edit",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: router.pathname === '/smscenter' ? 'active' : '',
            href: "smscenter",
            children: "SMS-Center"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          className: "comments",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: router.pathname === '/telegram' ? 'active' : '',
            href: "telegram",
            children: "Telegram"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
          className: "users",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
            className: router.pathname === '/users' ? 'active' : '',
            href: "users",
            children: "Manage Users"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
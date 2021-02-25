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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Se04");


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

/***/ "Se04":
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

// CONCATENATED MODULE: ./components/admin/SmsPagination.js





const SmsPagination = props => {
  const max_page = props.max_page;
  const current_page = props.current_page;
  const next_page = props.next_page;
  const prev_page = props.prev_page;
  const btnLength = 10;
  const paginationBtns = [];

  if (max_page <= btnLength) {
    for (let i = 0; i < max_page; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(i + 1),
        className: current_page === i + 1 ? 'active' : '',
        children: i + 1
      }));
    }
  }

  if (max_page > btnLength && current_page < btnLength / 2) {
    for (let i = 0; i < btnLength / 2; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(i + 1),
        className: current_page === i + 1 ? 'active' : '',
        children: i + 1
      }));
    }

    paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "#",
      disabled: true,
      children: "..."
    }));

    for (let i = max_page - (btnLength / 2 - 1); i < max_page; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(i + 1),
        className: current_page === i + 1 ? 'active' : '',
        children: i + 1
      }));
    }
  }

  if (max_page > btnLength && current_page >= btnLength / 2 && current_page <= max_page - 7 && current_page > btnLength / 2 - 1) {
    paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(1),
        className: current_page === 1 ? 'active' : '',
        children: "1"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        children: "..."
      })]
    }));

    for (let i = current_page - 2; i < current_page + btnLength / 2 - 2; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(i),
        className: current_page === i ? 'active' : '',
        children: i
      }));
    }

    paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "#",
      children: "..."
    }));

    for (let i = max_page - 2; i < max_page; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(i + 1),
        className: current_page === i + 1 ? 'active' : '',
        children: i + 1
      }));
    }
  }

  if (max_page > btnLength && current_page > max_page - 7) {
    for (let i = 0; i < 1; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        onClick: () => props.changePage(i + 1),
        className: current_page === i + 1 ? 'active' : '',
        children: i + 1
      }));
    }

    paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      href: "#",
      disabled: true,
      children: "..."
    }));

    for (let i = max_page - 7 - 1; i < max_page; i++) {
      paginationBtns.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        onClick: () => props.changePage(i + 1),
        className: current_page === i + 1 ? 'active' : '',
        children: i + 1
      }));
    }
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "paginations",
    children: paginationBtns
  });
};

/* harmony default export */ var admin_SmsPagination = (SmsPagination);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/admin/SmsList.js




const SmsList = props => {
  const status = st => {
    if (st === '100') {
      return 'danger';
    }

    if (st === '101') {
      return 'info';
    }

    if (st === '102') {
      return 'success';
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "text-center mt-2 mb-2",
      children: ["\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ", props.total, " \u0437\u0430\u043F\u0438\u0441\u0435\u0439"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "container",
      children: [props.currentPage, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
        children: "\u0441\u0442\u0440."
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("table", {
      className: "mt-3 table table-striped",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("thead", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "col",
            children: "#"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "col",
            children: "\u041D\u043E\u043C\u0435\u0440"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "col",
            children: "\u0422\u0438\u043F"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "col",
            children: "\u0422\u0435\u043A\u0441\u0442"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "col",
            children: "\u0421\u0442\u0430\u0442\u0443\u0441"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "col",
            children: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D"
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("tbody", {
        children: props.sms.map((s, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("tr", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("th", {
            scope: "row",
            children: props.from + index
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: s.phone
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: s.type
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: s.text
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            className: `alert alert-${status(s.status_id)}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
              children: s.status
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("td", {
            children: new Intl.DateTimeFormat('ru', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
              hour: 'numeric',
              minute: 'numeric'
            }).format(new Date(Date.parse(s.created_at)))
          })]
        }, s.id))
      })]
    })]
  });
};

/* harmony default export */ var admin_SmsList = (SmsList);
// EXTERNAL MODULE: external "react-input-mask"
var external_react_input_mask_ = __webpack_require__("yKCf");
var external_react_input_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_input_mask_);

// CONCATENATED MODULE: ./defaults/validations.js
const requiredd = val => {
  let error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  return error;
};
const required = val => val && val.length;
const iin = val => {
  if (val && val.length !== 12) return false;
  if (!val) return false;
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;

  for (var i = 0; i < 12; i++) {
    a[i] = parseInt(val.substring(i, i + 1));
    if (i < 11) controll += a[i] * b1[i];
  }

  controll = controll % 11;

  if (controll == 10) {
    controll = 0;

    for (var i = 0; i < 11; i++) controll += a[i] * b2[i];

    controll = controll % 11;
  }

  if (controll != a[11]) return false;
  return true;
};
const validEmaill = val => {
  let error;
  let emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  if (!val) {
    return false;
  }

  if (!emailvalid) {
    return false;
  }
};
const validEmail = val => {
  let error;
  let emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (!emailvalid) {
      error = 'Неправильный email';
    }
  }

  return error;
};
const acceptCirrilic = val => {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  let error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};
const acceptCirrilicOnly = val => {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  let error;

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};
const checkAlphabet = val => /[a-zA-Z0-9_]/i.test(val);
const passwordCheck = val => {
  let error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val && val.length < 5) error = 'Пароль должен быть не меньше 5 символов';
  return error;
};
const validateConfirmPassword = (pass, value) => {
  let error = "";

  if (pass && value) {
    if (pass !== value) {
      error = "Password not matched";
    }
  }

  return error;
};
const iinValidation = val => {
  let error;
  if (val && val.length !== 12) error = 'Заполните все поля';
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;

  if (val) {
    for (var i = 0; i < 12; i++) {
      a[i] = parseInt(val.substring(i, i + 1));
      if (i < 11) controll += a[i] * b1[i];
    }

    controll = controll % 11;

    if (controll == 10) {
      controll = 0;

      for (var i = 0; i < 11; i++) controll += a[i] * b2[i];

      controll = controll % 11;
    }

    if (controll != a[11]) error = 'Некорректный ИИН';
    return error;
  }
};
const phoneCheck = val => {
  var PHONE_OPERATORS = [{
    id: '7700'
  }, {
    id: '7701'
  }, {
    id: '7702'
  }, {
    id: '7705'
  }, {
    id: '7706'
  }, {
    id: '7707'
  }, {
    id: '7708'
  }, {
    id: '7747'
  }, {
    id: '7771'
  }, {
    id: '7775'
  }, {
    id: '7776'
  }, {
    id: '7777'
  }, {
    id: '7778'
  }];
  var phone = String(val).replace(/[^A-Z0-9]/g, ''),
      code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (!code || phone.length !== 11) {
    return false;
  }

  var phone_number = code[1];
  var phone_operator = PHONE_OPERATORS.filter(function (item) {
    return item.id == phone_number;
  });

  if (phone_operator.length > 0) {
    return true;
  } else {
    return false;
  }
};
const phoneValidation = val => {
  let error;

  if (phoneCheck(val) === true) {
    error = '';
  } else {
    error = 'Нет соответствующего оператора';
  }

  return error;
}; // Luna algo

const isValidIBANNumber = input => {
  var CODE_LENGTHS = 20;
  var BANKS = [{
    id: '947',
    name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'
  }, {
    id: '826',
    name: 'АО "АТФБанк"'
  }, {
    id: '949',
    name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited) '
  }, {
    id: '913',
    name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'
  }, {
    id: '722',
    name: 'АО "KASPI BANK"'
  }, {
    id: '766',
    name: 'АО "Центральный Депозитарий Ценных Бумаг"'
  }, {
    id: '832',
    name: 'АО "Ситибанк Казахстан"'
  }, {
    id: '907',
    name: 'АО "Банк Развития Казахстана"'
  }, {
    id: '700',
    name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'
  }, {
    id: '948',
    name: 'АО "Евразийский Банк"'
  }, {
    id: '009',
    name: 'НАО Государственная корпорация "Правительство для граждан"'
  }, {
    id: '972',
    name: 'АО "Жилстройсбербанк Казахстана"'
  }, {
    id: '246',
    name: 'АО "Исламский Банк "Al Hilal"'
  }, {
    id: '601',
    name: 'АО "Народный Банк Казахстана"'
  }, {
    id: '930',
    name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'
  }, {
    id: '550',
    name: 'г.Москва Межгосударственный Банк'
  }, {
    id: '886',
    name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'
  }, {
    id: '965',
    name: 'АО "ForteBank"'
  }, {
    id: '856',
    name: 'АО "Банк ЦентрКредит"'
  }, {
    id: '927',
    name: 'АО "Казахстанская фондовая биржа"'
  }, {
    id: '821',
    name: 'АО "Банк "Bank RBK"'
  }, {
    id: '224',
    name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'
  }, {
    id: '070',
    name: 'РГУ "Комитет казначейства Министерства финансов РК"'
  }, {
    id: '563',
    name: 'АО "КАЗПОЧТА"'
  }, {
    id: '551',
    name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'
  }, {
    id: '885',
    name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'
  }, {
    id: '774',
    name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '
  }, {
    id: '553',
    name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'
  }, {
    id: '147',
    name: '"Банк-кастодиан АО  "ЕНПФ"'
  }, {
    id: '125',
    name: 'РГУ Национальный Банк Республики Казахстан'
  }, {
    id: '849',
    name: 'АО "Нурбанк"'
  }, {
    id: '914',
    name: 'ДБ АО "Сбербанк"'
  }, {
    id: '435',
    name: 'АО "Шинхан Банк Казахстан"'
  }, {
    id: '781',
    name: 'АО "Capital Bank Kazakhstan"'
  }, {
    id: '620',
    name: 'АО "Tengri Bank"'
  }, {
    id: '998',
    name: 'АО "First Heartland Jysan Bank"'
  }, {
    id: '432',
    name: 'ДО АО Банк ВТБ (Казахстан)'
  }, {
    id: '896',
    name: 'АО "Исламский банк "Заман-Банк"'
  }, ''];
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/),
      digits;

  if (!code || iban.length !== CODE_LENGTHS) {
    return 'Заполните поле до конца';
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return bank[0].name;
  } else {
    return "Некорректный счет";
    return false;
  }

  digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  if (undefined.mod97(digits) === 1) {
    return true;
  } else {
    return "Неправильно";
  }
};
const isValidIBANNumber2 = input => {
  var CODE_LENGTHS = 20;
  var BANKS = [{
    id: '947',
    name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'
  }, {
    id: '826',
    name: 'АО "АТФБанк"'
  }, {
    id: '949',
    name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited) '
  }, {
    id: '913',
    name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'
  }, {
    id: '722',
    name: 'АО "KASPI BANK"'
  }, {
    id: '766',
    name: 'АО "Центральный Депозитарий Ценных Бумаг"'
  }, {
    id: '832',
    name: 'АО "Ситибанк Казахстан"'
  }, {
    id: '907',
    name: 'АО "Банк Развития Казахстана"'
  }, {
    id: '700',
    name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'
  }, {
    id: '948',
    name: 'АО "Евразийский Банк"'
  }, {
    id: '009',
    name: 'НАО Государственная корпорация "Правительство для граждан"'
  }, {
    id: '972',
    name: 'АО "Жилстройсбербанк Казахстана"'
  }, {
    id: '246',
    name: 'АО "Исламский Банк "Al Hilal"'
  }, {
    id: '601',
    name: 'АО "Народный Банк Казахстана"'
  }, {
    id: '930',
    name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'
  }, {
    id: '550',
    name: 'г.Москва Межгосударственный Банк'
  }, {
    id: '886',
    name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'
  }, {
    id: '965',
    name: 'АО "ForteBank"'
  }, {
    id: '856',
    name: 'АО "Банк ЦентрКредит"'
  }, {
    id: '927',
    name: 'АО "Казахстанская фондовая биржа"'
  }, {
    id: '821',
    name: 'АО "Банк "Bank RBK"'
  }, {
    id: '224',
    name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'
  }, {
    id: '070',
    name: 'РГУ "Комитет казначейства Министерства финансов РК"'
  }, {
    id: '563',
    name: 'АО "КАЗПОЧТА"'
  }, {
    id: '551',
    name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'
  }, {
    id: '885',
    name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'
  }, {
    id: '774',
    name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '
  }, {
    id: '553',
    name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'
  }, {
    id: '147',
    name: '"Банк-кастодиан АО  "ЕНПФ"'
  }, {
    id: '125',
    name: 'РГУ Национальный Банк Республики Казахстан'
  }, {
    id: '849',
    name: 'АО "Нурбанк"'
  }, {
    id: '914',
    name: 'ДБ АО "Сбербанк"'
  }, {
    id: '435',
    name: 'АО "Шинхан Банк Казахстан"'
  }, {
    id: '781',
    name: 'АО "Capital Bank Kazakhstan"'
  }, {
    id: '620',
    name: 'АО "Tengri Bank"'
  }, {
    id: '998',
    name: 'АО "First Heartland Jysan Bank"'
  }, {
    id: '432',
    name: 'ДО АО Банк ВТБ (Казахстан)'
  }, {
    id: '896',
    name: 'АО "Исламский банк "Заман-Банк"'
  }, ''];
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/),
      digits;

  if (!code || iban.length !== CODE_LENGTHS) {
    // return 'Заполните поле до конца'
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return true;
  } else {
    return false;
  }

  digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  if (undefined.mod97(digits) === 1) {
    return true;
  } else {
    return false;
  }
}; // Third step

const givenDateCardId = val => {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 10) {
    return false;
  }

  const myDate = new Date(val.substring(6, 10) + '-' + val.substring(3, 5) + '-' + val.substring(0, 2));

  if (myDate == 'Invalid Date') {
    return false;
  }

  const today = new Date();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayY = today.getFullYear();
  var myM = myDate.getMonth() + 1;
  var myD = myDate.getDate();
  var myY = myDate.getFullYear();

  if (myY > todayY) {
    return false;
  }

  if (myY < todayY - 25) {
    return false;
  }

  if (myY === todayY) {
    if (myM === todayM && myD > todayD) {
      return false;
    }

    if (myM > todayM) {
      return false;
    }

    return true;
  }

  return true;
};
const expDateCardId = val => {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 10) {
    return false;
  }

  const myDate = new Date(val.substring(6, 10) + '-' + val.substring(3, 5) + '-' + val.substring(0, 2));

  if (myDate == 'Invalid Date') {
    return false;
  }

  const today = new Date();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayY = today.getFullYear();
  var myM = myDate.getMonth() + 1;
  var myD = myDate.getDate();
  var myY = myDate.getFullYear();

  if (myY < todayY) {
    return false;
  }

  return true;
}; // export const givenDateCardId = (val) => {
//     var res = String(val).replace(/_/g, "");
//     if(res.length !== 10) {
//         return false
//     }
//     // 02.05.1999
// 	// const myDate = new Date(val);
// 	const today = new Date()
// 	var todayM = today.getMonth() + 1;
// 	var todayD = today.getDay();
// 	var todayY = today.getFullYear();
// 	var myM = () => {
//         if(val[3] == 0) {
//             return val[4]
//         }
//         else {
//             return val.substring(3,5);
//         }
//     };
//     var myD = () => {
//         if(val[0] == 0) {
//             return val[1]
//         }
//         else {
//             return val.substring(0,2);
//         }
//     };
// 	var myY = val.substring(6,9)
// 	if(myY>todayY) {
// 		return false;
// 	}
// 	if(myY < todayY-11) {
// 		return false;
// 	}
// 	if(myY === todayY) {
// 		if(myM === todayM && myD > todayD) {
// 			return false
// 		}
// 		if(myM > todayM) {
// 			return false
// 		}
// 		return true
// 	}
// 	return true
// }

const onlyEnglish = val => /^[a-zA-Z\s]*$/.test(val);
const checkStringName = val => {
  if (val && val.replace(/\s+$/, '').split(/\W+/).length === 2) {
    return true;
  }

  return false;
};
const idNumber = val => {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 9) {
    return false;
  } else {
    return true;
  }
};
const isExpDateOfCardValid = input => {
  var expDate = String(input).toUpperCase().replace(/[^0-9]/g, '');
  var date = expDate.match(/^(\d{2})(\d{2})$/);

  if (expDate.length === 4) {
    if (date[1] > 12 || date[2] < 20) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
const checkCardValid = value => {
  if (/[^0-9-\s]+/.test(value)) return false;
  let nCheck = 0,
      nDigit = 0,
      bEven = false;
  value = value.replace(/\D/g, "");

  if (value.length !== 16) {
    return false;
  } else {
    for (let n = value.length - 1; n >= 0; n--) {
      let cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    if (nCheck % 10 !== 0) {
      return false;
    } else {
      return true;
    }
  }
};

function year(dateString) {
  if (dateString[0] == 0) {
    return '20' + dateString.substring(0, 2);
  }

  return '19' + dateString.substring(0, 2);
}

function getAge(dateString) {
  var now = new Date();
  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();
  var dob = new Date(year(dateString), dateString.substring(2, 4) - 1, dateString.substring(4, 6));
  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var yearAge = yearNow - yearDob;
  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }
  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };
  return age.years;
}

const validage = iin => {
  if (iin[6] % 2 != 0) {
    if (getAge(iin) < 21 || getAge(iin) > 63) {
      return false;
    }
  }

  if (iin[6] % 2 == 0) {
    if (getAge(iin) < 21 || getAge(iin) > 58) {
      return false;
    }
  }

  return true;
};
// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__("lYhb");

// EXTERNAL MODULE: external "xlsx"
var external_xlsx_ = __webpack_require__("X1wy");

// CONCATENATED MODULE: ./components/admin/ExportCSV.js




const ExportCSV = ({
  csvData,
  fileName
}) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
    const ws = external_xlsx_["utils"].json_to_sheet(csvData);
    const wb = {
      Sheets: {
        'data': ws
      },
      SheetNames: ['data']
    };
    const excelBuffer = external_xlsx_["write"](wb, {
      bookType: 'xlsx',
      type: 'array'
    });
    const data = new Blob([excelBuffer], {
      type: fileType
    });
    external_file_saver_["saveAs"](data, fileName + fileExtension);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
    className: "btn btn-info",
    onClick: e => exportToCSV(csvData, fileName),
    children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0444\u0430\u0439\u043B"
  });
};
// CONCATENATED MODULE: ./pages/smscenter.js















function mapStateToProps(state) {
  return {
    adminReducer: state.adminReducer
  };
}

const AdminSmsCenter = ({
  adminReducer
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: smsList,
    1: setSmsList
  } = Object(external_react_["useState"])([]);
  const {
    0: smsTypes,
    1: setSmsTypes
  } = Object(external_react_["useState"])([]);
  const {
    0: total,
    1: setTotal
  } = Object(external_react_["useState"])(null);
  const {
    0: lastPage,
    1: setLastPage
  } = Object(external_react_["useState"])(null);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(external_react_["useState"])(1);
  const {
    0: toList,
    1: setToList
  } = Object(external_react_["useState"])(15);
  const {
    0: from,
    1: setFrom
  } = Object(external_react_["useState"])(1);
  const {
    0: file,
    1: setFile
  } = Object(external_react_["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(true);
  const adminCookie = external_js_cookie_default.a.get('admin_token');
  const {
    phone
  } = router.query;
  const {
    start
  } = router.query;
  const {
    end
  } = router.query;
  const {
    page
  } = router.query;
  const {
    sms_type
  } = router.query;
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = Object(external_react_["useState"])(phone ? phone : '');
  const {
    0: dateFrom,
    1: setDateFrom
  } = Object(external_react_["useState"])(start ? start : '');
  const {
    0: dateTo,
    1: setDateTo
  } = Object(external_react_["useState"])(end ? end : '');
  const {
    0: smsType,
    1: setSmsType
  } = Object(external_react_["useState"])(sms_type ? sms_type : '');

  const beforeMaskedValueChange = (newState, oldState, userInput) => {
    var {
      value
    } = newState;
    var selection = newState.selection;
    var cursorPosition = selection ? selection.start : null; // keep minus if entered by user

    if (value.endsWith('-') && userInput !== '-' && !undefined.state.value.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = {
          start: cursorPosition,
          end: cursorPosition
        };
      }

      value = value.slice(0, -1);
    }
  };

  const onChangePhone = e => {
    setPhoneNumber(e.target.value);
  };

  const sendRequest = () => {
    setLoading(true);
    external_axios_default.a.get(`${"http://37.18.30.37/api"}/exportSms`, {
      params: {
        token: adminCookie,
        phone: phone,
        date_from: start,
        date_to: end,
        sms_type: sms_type
      }
    }).then(res => {
      setLoading(false);
      setFile(res.data);
    });
  };

  const requestUpdate = res => {
    setCurrentPage(res.data.current_page);
    setSmsList(res.data.data);
    setLastPage(res.data.last_page);
    setTotal(res.data.total);
    setToList(res.data.to);
    setFrom(res.data.from);
  };

  const clearForm = e => {
    setFile([]);
    setDateFrom('');
    setDateTo('');
    setPhoneNumber('');
    setSmsType('');
    setLoading(true);
    external_axios_default.a.get(`${"http://37.18.30.37/api"}/smsFilter`, {
      params: {
        token: adminCookie,
        phone: '',
        page: '',
        date_from: '',
        date_to: '',
        sms_type: '',
        page: ''
      }
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setLoading(false);

      if (!res.data.message) {
        requestUpdate(res);
      }
    });
    router.push('/smscenter');
    e.preventDefault();
  };

  const onClear = () => {
    setFile([]);
    setLoading(true);
    external_axios_default.a.get(`${"http://37.18.30.37/api"}/smsFilter`, {
      params: {
        token: adminCookie,
        phone: phone,
        page: page,
        date_from: start,
        date_to: end,
        sms_type: sms_type,
        page: page
      }
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setLoading(false);

      if (!res.data.message) {
        requestUpdate(res);
      }
    });
    external_axios_default.a.get(`${"http://37.18.30.37/api"}/smsTypes`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setLoading(false);
      setSmsTypes(res.data);
    });
  };

  const changePage = n => {
    setFile([]);

    function replaceDate(val) {
      return String(val).replace(/[^A-Z0-9]/g, '');
    }

    setLoading(true);
    external_axios_default.a.get(`${"http://37.18.30.37/api"}/smsFilter`, {
      params: {
        token: adminCookie,
        phone: phone,
        page: page,
        date_from: start,
        date_to: end,
        sms_type: sms_type,
        page: n
      }
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setLoading(false);

      if (!res.data.message) {
        requestUpdate(res);
        router.push(`/smscenter?page=${n}&phone=${replaceDate(phoneNumber)}&start=${dateFrom}&end=${dateTo}&sms_type=${smsType}`);
      }
    });
  };

  const onSearch = e => {
    setFile([]);

    function replaceDate(val) {
      return String(val).replace(/[^A-Z0-9]/g, '');
    }

    if (!phoneCheck(phoneNumber)) {
      setPhoneNumber('');
    }

    setLoading(true);
    external_axios_default.a.get(`${"http://37.18.30.37/api"}/smsFilter`, {
      params: {
        token: adminCookie,
        phone: replaceDate(phoneNumber),
        date_from: dateFrom,
        date_to: dateTo,
        sms_type: smsType
      }
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      setLoading(false);

      if (!res.data.message) {
        requestUpdate(res);
        router.push(`/smscenter?phone=${replaceDate(phoneNumber)}&start=${dateFrom}&end=${dateTo}&sms_type=${smsType}`);
      }
    });
    e.preventDefault();
  };

  Object(external_react_["useEffect"])(() => {
    onClear();
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      role: "main",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
        class: "panel important",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "text-center",
          children: "SmsCenter"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
          className: "text-center",
          onSubmit: onSearch,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "d-flex justify-content-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-groups d-flex flex-column mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_input_mask_default.a, {
                placeholder: "+7",
                mask: "+7(999)-999-9999",
                maskChar: null,
                value: phoneNumber,
                onChange: onChangePhone,
                beforeMaskedValueChange: beforeMaskedValueChange
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-groups d-flex flex-column mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "\u0414\u0430\u0442\u0430 \u043E\u0442:"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "date",
                value: dateFrom,
                onChange: e => setDateFrom(e.target.value)
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-groups d-flex flex-column mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "\u0414\u0430\u0442\u0430 \u0434\u043E:"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "date",
                value: dateTo,
                onChange: e => setDateTo(e.target.value)
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "input-groups d-flex flex-column mr-2",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                children: "\u0422\u0438\u043F \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439:"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", {
                value: smsType,
                onChange: e => {
                  setSmsType(e.target.value);
                },
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: "",
                  children: "\u0412\u0441\u0435"
                }), smsTypes.map(type => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                  value: type.id,
                  children: type.name
                }))]
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "text-center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              type: "submit",
              className: "mr-2 mt-3 btn btn-dark",
              children: "\u0418\u0441\u043A\u0430\u0442\u044C"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/smscenter",
              type: "button",
              className: "mr-2 mt-3 btn btn-light",
              onClick: e => {
                clearForm(e);
              },
              children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
            })]
          })]
        }), file.length !== 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExportCSV, {
          fileName: !phone && !end && !start && !sms_type ? 'allresult' : 'phone: ' + phone + ' date_from: ' + start + ' date_to: ' + end + ' sms_type: ' + sms_type,
          csvData: file
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: "btn btn-info",
          onClick: sendRequest,
          children: "\u0413\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B \u0434\u043B\u044F \u0432\u044B\u0433\u0440\u0443\u0437\u043A\u0438"
        }), loading ? 'loading....' : /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_SmsList, {
          from: from,
          sms: smsList,
          total: total,
          currentPage: currentPage
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(admin_SmsPagination, {
          max_page: lastPage,
          current_page: currentPage,
          changePage: changePage
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
  });
};

/* harmony default export */ var smscenter = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps)(AdminSmsCenter));

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

/***/ "X1wy":
/***/ (function(module, exports) {

module.exports = require("xlsx");

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

/***/ "lYhb":
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "yKCf":
/***/ (function(module, exports) {

module.exports = require("react-input-mask");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
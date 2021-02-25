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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O2Ky");


/***/ }),

/***/ "8eyI":
/***/ (function(module, exports) {

module.exports = require("disable-scroll");

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

/***/ "O2Ky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./store/actions/telegram.js

const msgLoading = () => ({
  type: "MSGS_LOADING"
});
const msgFailed = errmess => ({
  type: 'MSGS_FAILED',
  payload: errmess
});
const msgSuccess = msgs => ({
  type: 'MSGS_SUCCESS',
  payload: msgs
});
const msgLoadingAns = () => ({
  type: "MSGS_LOADING_ANS"
});
const msgFailedAns = errmess => ({
  type: 'MSGS_FAILED_ANS',
  payload: errmess
});
const msgSuccessAns = msgs => ({
  type: 'MSGS_SUCCESS_ANS',
  payload: msgs
});
const fetchNonAnsweredMsg = () => dispatch => {
  dispatch(msgLoading(true));
  external_axios_default.a.get('https://api.money-men.kz/api/nonanswered').then(response => {
    dispatch(msgSuccess(response.data));
  });
};
const fetchAnsweredMsg = () => dispatch => {
  dispatch(msgLoadingAns(true));
  external_axios_default.a.get('https://api.money-men.kz/api/answered').then(response => {
    dispatch(msgSuccessAns(response.data));
  });
};
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./defaults/recomAnswer.js
const Recommendation = [{
  id: '1',
  question: ['анкет', 'одобрили', 'отправил', 'оставил'],
  answer: 'Ваша заявка к нам поступила, но к сожалению, у вас отказ. Попробуйте подать заявку позже.'
}, {
  id: '3',
  question: ['most recenet'],
  answer: 'С Вами свяжутся наши специалисты.'
}, {
  id: '2',
  question: ['когда', 'деньги'],
  answer: 'Деньги с нашей стороны отправлены. Ожидайте пожалуйста поступления в течении дня'
}, {
  id: '4',
  question: ['оплатил', 'не закрыт'],
  answer: 'Приносим свои извинения за доставленные неудобства.Дело в том, что, оплата поступает к нам не сразу, а на следующий день. Как только Ваша оплата поступит, мы отправим Вам смс и соответственно поменяем статус займа.'
}];
// CONCATENATED MODULE: ./components/shared/messageDetailed.js





const MessageDetail = props => {
  const RecomendedBtn = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "d-flex flex-wrap",
      children: Recommendation.map(r => /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: props.handleRecommend,
        className: "mt-2 mr-2 btn btn-dark",
        value: r.answer,
        children: r.answer
      }))
    });
  };

  if (props.msg) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "tgmsg",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["\u0418\u0418\u041D: ", props.msg.iin]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["\u0418\u043C\u044F: ", props.msg.name]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", props.msg.question]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", {
          value: props.answer,
          onChange: props.handleChange,
          type: "textarea",
          className: "form-control",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442",
          onKeyPress: () => props.keypress(event, props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id)
        }), props.loading === true ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          disabled: true,
          type: "button",
          class: "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          onClick: () => props.handleSubmit(props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id),
          type: "button",
          class: "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(RecomendedBtn, {})]
    });
  } else {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: "nothing"
    });
  }
};

/* harmony default export */ var messageDetailed = (MessageDetail);
// CONCATENATED MODULE: ./defaults/hello.js
const helloUser = () => {
  var myDate = new Date();
  var hrs = myDate.getHours();
  var greet;
  if (hrs < 12) greet = 'Доброе утро';else if (hrs >= 12 && hrs <= 17) greet = 'Добрый день';else if (hrs >= 17 && hrs <= 24) greet = 'Добрый вечер';
  return greet;
};
// EXTERNAL MODULE: ./components/admin/Header.js
var Header = __webpack_require__("dstC");

// EXTERNAL MODULE: ./components/admin/Footer.js
var Footer = __webpack_require__("C+bu");

// EXTERNAL MODULE: external "disable-scroll"
var external_disable_scroll_ = __webpack_require__("8eyI");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./pages/telegram.js




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const mapStateToProps = state => {
  return {
    nonanswered: state.nonanswered,
    answered: state.answered
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAnsweredMsg: () => dispatch(fetchAnsweredMsg()),
  fetchNonAnsweredMsg: () => dispatch(fetchNonAnsweredMsg())
});

class telegram_Telegram extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      collapse: "",
      message: '',
      answer: '',
      code: '',
      loading: false,
      answers: true
    });

    _defineProperty(this, "handleSubmit", (msgid, question, iin, id) => {
      const groupText = `
Ответили на вопрос: ${question}%0A 
ИИН: ${iin}%0A%0A
${helloUser()}!%0A
${this.state.answer.split('%0A')}%0A%0A
С уважением I-credit.kz%0A%0A
   #ответили `;
      const errorMessage = `Не удалось отправить ответ. Пользователь блокировал наш телеграм бот-> ИИН: ${iin}%0A%0A;Вопрос: ${question}%0A #ошибка`;
      const answerText = `
${helloUser()}!%0A
${this.state.answer.split('%0A')}%0A%0A
С уважением I-credit.kz
    `;

      if (this.state.answer) {
        // console.log(this.state.answer.length)
        this.setState({
          loading: true
        });
        external_axios_default.a.post(`https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=${msgid}&text=${answerText}&ie=UTF-8&oe=UTF-8&parse_mode=html`).then(response => {
          if (response.data.ok) {
            external_axios_default.a.put(`https://api.money-men.kz/api/telegram/${id}`).then(response => {
              if (response.data.success) {
                external_axios_default.a.post(`https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=-438259555&text=${groupText}&ie=UTF-8&oe=UTF-8&parse_mode=html`);
                this.setState({
                  loading: false
                });
                this.setState({
                  message: 'Отправлено',
                  collapse: '',
                  answer: ''
                });
                setTimeout(() => {
                  this.setState({
                    message: ''
                  });
                }, 1500);
                this.props.fetchNonAnsweredMsg();
                this.props.fetchAnsweredMsg();
              }
            });
          } else {
            this.setState({
              message: 'Не отправлено'
            });
            setTimeout(() => {
              this.setState({
                message: '',
                collapse: '',
                answer: ''
              });
            }, 1500);
          }
        }).catch(function (error) {
          if (error.response) {
            external_axios_default.a.put(`https://api.money-men.kz/api/telegram/${id}`).then(response => {
              external_axios_default.a.post(`https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=-438259555&text=${errorMessage}&ie=UTF-8&oe=UTF-8&parse_mode=html`).then(res => {
                location.reload();
              });
            });
          }
        });
      }
    });

    _defineProperty(this, "handleChange", event => {
      // const value = event.target.value.replace(/[\r\n\v]+/g, "");
      this.setState({
        answer: event.target.value
      });
    });

    _defineProperty(this, "handleCode", event => {
      this.setState({
        code: event.target.value
      });
    });

    _defineProperty(this, "handleRecommend", e => {
      this.setState({
        answer: e.target.value
      });
    });

    _defineProperty(this, "submitCode", () => {
      if (this.state.code === 'admin123') {
        external_js_cookie_default.a.set('botmsg', '3917', {
          expires: 60
        });
        location.reload();
      } else {
        alert('Ошибка кода');
      }
    });

    _defineProperty(this, "toggleCollapse", id => () => {
      if (!this.state.collapse || id !== this.state.collapse) {
        this.setState({
          collapse: id
        });
      } else if (this.state.collapse === id) {
        this.setState({
          collapse: false
        });
      }
    });

    _defineProperty(this, "handleAnswered", () => {
      this.setState(prev => ({
        answers: !prev.answers
      }));
    });
  }

  componentDidMount() {
    this.props.fetchNonAnsweredMsg();
    this.props.fetchAnsweredMsg();
  }

  keypress(event, msgid, question, iin, id) {
    if (event.keyCode == 13 && event.shiftKey) {
      this.handleSubmit(msgid, question, iin, id);
    }
  }

  render() {
    // if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading=== false) {
    //     return (<div className='mb-5 container otherPages'>
    //          {this.state.answers ?  <button active className='btn btn-dark mb-3' onClick={() => this.handleAnswered()}>Получить неотвеченные</button> 
    //         :   <button active className='btn btn-dark mb-3 mr-3' onClick={() => this.handleAnswered()}>Получить отвеченные</button>}
    //         <h4 className='mb-3 text-center'>Неотвеченные вопросы</h4>
    //         <p className='text-center'>Нет вопросов</p>
    //     </div>)
    // }
    if (this.props.nonanswered.isLoading) {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
      });
    }

    if (!this.state.answers && !this.props.answered.isLoading) {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
          role: "main",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
            class: "panel important",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "container otherPages",
              children: [this.state.answers ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                active: true,
                className: "btn btn-dark mb-3",
                onClick: () => this.handleAnswered(),
                children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                active: true,
                className: "btn btn-dark mb-3 mr-3",
                onClick: () => this.handleAnswered(),
                children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
              }), this.state.message.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "tlgmsg alert alert-info",
                children: this.state.message
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                className: "mb-3 text-center",
                children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E (", this.props.answered.answered.length, ")"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "row",
                children: this.props.answered.answered.map(elem => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-md-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "card mt-2 answeredCard",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "card-body",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                        className: "tinydate",
                        children: ["\u0417\u0430\u0434\u0430\u043D\u043E: ", new Intl.DateTimeFormat('ru', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                          hour: 'numeric',
                          minute: 'numeric'
                        }).format(new Date(Date.parse(elem.created_at)))]
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                        className: "tinydate",
                        children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043E: ", new Intl.DateTimeFormat('ru', {
                          year: 'numeric',
                          month: 'short',
                          day: '2-digit',
                          hour: 'numeric',
                          minute: 'numeric'
                        }).format(new Date(Date.parse(elem.updated_at)))]
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                        className: "card-text",
                        children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\u0418\u0418\u041D: ", elem.iin]
                      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("i", {
                        children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                      })]
                    })
                  }, elem.id)
                }))
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
      });
    } else return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
        role: "main",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
          class: "panel important",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "container otherPages",
            children: [this.state.answers ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              active: true,
              className: "btn btn-dark mb-3",
              onClick: () => this.handleAnswered(),
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              active: true,
              className: "btn btn-dark mb-3 mr-3",
              onClick: () => this.handleAnswered(),
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
            }), this.state.message.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "tlgmsg alert alert-info",
              children: this.state.message
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
              className: "mb-3 text-center",
              children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "row",
              children: this.props.nonanswered.nonanswered.map(elem => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-md-4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "card mt-2",
                  onClick: this.toggleCollapse(elem.id),
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "tinydate",
                      children: new Intl.DateTimeFormat('ru', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: 'numeric'
                      }).format(new Date(Date.parse(elem.created_at)))
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                      className: "card-text",
                      children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\u0418\u0418\u041D: ", elem.iin]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("i", {
                      children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                    })]
                  })
                }, elem.id)
              }))
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["Modal"], {
              isOpen: this.state.collapse,
              toggle: this.toggleCollapse(this.state.collapse),
              size: "lg",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_reactstrap_["ModalBody"], {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(messageDetailed, {
                  msg: this.props.nonanswered.nonanswered.filter(el => el.id === parseInt(this.state.collapse))[0],
                  answer: this.state.answer,
                  handleChange: this.handleChange,
                  handleSubmit: this.handleSubmit,
                  handleRecommend: this.handleRecommend,
                  keypress: this.keypress,
                  loading: this.state.loading
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer["a" /* default */], {})]
    });
  }

}

/* harmony default export */ var telegram = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(telegram_Telegram));

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

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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
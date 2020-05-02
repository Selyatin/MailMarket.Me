module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./lib/checkAuth.js":
/*!**************************!*\
  !*** ./lib/checkAuth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);


const checkLogin = (req, res) => {
  if (req != undefined) {
    if (req.headers != undefined) {
      if (req.headers.cookie != undefined && req.headers.cookie != null) {
        const cookies = cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(req.headers.cookie);

        if (cookies.id) {
          return {
            loggedIn: true,
            id: cookies.id
          };
        } else {
          if (res) {
            res.writeHead(302, {
              Location: "/login"
            });
            res.end();
          }
        }
      }
    }
  }

  return {
    loggedIn: false,
    id: null
  };
};

/* harmony default export */ __webpack_exports__["default"] = (checkLogin);

/***/ }),

/***/ "./pages/dashboard.jsx":
/*!*****************************!*\
  !*** ./pages/dashboard.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DashBoardIndex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_checkAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/checkAuth */ "./lib/checkAuth.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mac/Desktop/Web Apps/MailMarket.me/mailmarket.me/pages/dashboard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class DashBoardIndex extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.typingTimeout = null;
    this.state = {
      sent: 0,
      points: 0,
      pointsToUse: 0,
      from: null,
      subject: null,
      msgToSend: null,
      customEmailList: [],
      totalEmailsSent: 0,
      pageLoading: true,
      decisor: false,
      decisorLoading: false,
      decisorResult: false,
      products: false
    };
    this.setDecisorOn = this.setDecisorOn.bind(this);
    this.setDecisorOff = this.setDecisorOff.bind(this);
    this.setProductsOn = this.setProductsOn.bind(this);
    this.setProductsOff = this.setProductsOff.bind(this);
    this.setPointsToUse = this.setPointsToUse.bind(this);
    this.setMsgToSend = this.setMsgToSend.bind(this);
    this.setFrom = this.setFrom.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setCustomEmailList = this.setCustomEmailList.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  static async getInitialProps({
    req,
    res
  }) {
    return Object(_lib_checkAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
  }

  componentDidMount() {
    if (this.props.loggedIn && this.props.id != null) {
      axios__WEBPACK_IMPORTED_MODULE_4___default()({
        url: "/api/user",
        method: "POST",
        data: {
          id: this.props.id
        }
      }).then(response => {
        this.setState({
          pageLoading: false,
          sent: response.data.sent,
          points: response.data.points,
          totalEmailsSent: response.data.totalEmailsSent
        });
      }).catch(err => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login"));
    }
  }

  sendRequest() {
    if (this.state.msgToSend != null) {
      this.setState({
        decisorLoading: true
      });
      axios__WEBPACK_IMPORTED_MODULE_4___default()({
        url: "/api/mailer",
        method: "POST",
        data: {
          id: this.props.id,
          pointsToUse: this.state.pointsToUse,
          from: this.state.from,
          subject: this.state.subject,
          msgToSend: this.state.msgToSend,
          customEmailList: this.state.customEmailList
        }
      }).then(result => {
        if (result.status == 200) {
          this.setState({
            decisor: false,
            decisorLoading: false,
            decisorResult: true,
            points: this.state.points - this.state.pointsToUse,
            pointsToUse: 0,
            sent: parseInt(this.state.sent) + parseInt(this.state.pointsToUse),
            totalEmailsSent: this.state.pointsToUse + this.state.totalEmailsSent,
            customEmailList: []
          });
        }
      }).catch(err => {
        this.setState({
          decisorLoading: false,
          decisorResult: false
        });
        alert(err);
      });
    } else {
      alert("Your message is empty!");
    }
  }

  setPointsToUse(elem) {
    clearTimeout(this.typingTimeout);
    let value = elem.target.value;
    this.typingTimeout = setTimeout(() => {
      this.setState({
        pointsToUse: this.state.customEmailList.length > 0 ? parseInt(value) + this.state.customEmailList.length : parseInt(value)
      });
    }, 500);
  }

  setFrom(elem) {
    this.setState({
      from: elem.target.value
    });
  }

  setSubject(elem) {
    this.setState({
      subject: elem.target.value
    });
  }

  setMsgToSend(elem) {
    this.setState({
      msgToSend: elem.target.value
    });
  }

  setCustomEmailList(elem) {
    clearTimeout(this.typingTimeout);
    let value = elem.target.value;
    this.typingTimeout = setTimeout(() => {
      let mails = value.length > 1 ? value.replace(" ", "").replace(",", "\n").split("\n").filter(Boolean) : [];
      let pointsToUse = this.state.pointsToUse;

      if (mails.length > this.state.customEmailList.length) {
        pointsToUse = mails.length - this.state.customEmailList.length + this.state.pointsToUse;
      }

      if (mails.length < this.state.customEmailList.length) {
        pointsToUse = this.state.pointsToUse - (this.state.customEmailList.length - mails.length);
      }

      if (mails.length == 0) {
        pointsToUse = this.state.pointsToUse - this.state.customEmailList.length;
      }

      this.setState({
        customEmailList: mails,
        pointsToUse: pointsToUse
      });
    }, 800);
  }

  setDecisorOn() {
    if (this.state.pointsToUse > 0) {
      if (this.state.from == null || this.state.subject == null || this.state.msgToSend == null) {
        alert("Error: Some form(s) are left empty");
      } else {
        this.setState({
          decisor: true
        });
      }
    } else {
      alert("Error: You cannot use 0 points");
    }
  }

  setDecisorOff() {
    this.setState({
      decisor: false
    });
  }

  setProductsOn() {
    this.setState({
      products: true
    });
  }

  setProductsOff() {
    this.setState({
      products: false
    });
  }

  render() {
    function decisorDom(self) {
      if (self.state.pointsToUse <= self.state.points) {
        return __jsx("div", {
          className: "container decisor-items-container",
          onClick: self.setDecisorOff,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "col-md-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 29
          }
        }, __jsx("h2", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 33
          }
        }, "You will use ", __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 50
          }
        }, self.state.pointsToUse), " points.", __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 89
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 98
          }
        }), "Points left: ", __jsx("b", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 120
          }
        }, self.state.points - self.state.pointsToUse), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 171
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 180
          }
        }), "Are you sure?")), __jsx("div", {
          className: self.state.decisorLoading ? "col-md-12 decisor-loading" : "col-md-12 decisor-loading hide",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "loadingio-spinner-eclipse-h5c55szghjc",
          style: {
            transform: "scale(0.7)"
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 33
          }
        }, __jsx("div", {
          className: "ldio-3kphjdhe4ws",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 37
          }
        }, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 41
          }
        })))), __jsx("div", {
          className: self.state.decisorLoading ? "col-md-12 row hide" : "col-md-12 row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "col-md-6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 33
          }
        }, __jsx("button", {
          className: "decisor-button",
          onClick: self.sendRequest,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 37
          }
        }, "Yes")), __jsx("div", {
          className: "col-md-6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 33
          }
        }, __jsx("button", {
          className: "decisor-button black",
          onClick: self.setDecisorOff,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 37
          }
        }, "No")))));
      } else {
        return __jsx("div", {
          className: "container decisor-items-container",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 21
          }
        }, __jsx("div", {
          className: "row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }
        }, __jsx("div", {
          className: "col-md-12",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 29
          }
        }, __jsx("h2", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 33
          }
        }, "You don't have enough points.", __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 66
          }
        }), __jsx("br", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 75
          }
        }), "You need ", self.state.pointsToUse - self.state.points == 1 ? self.state.pointsToUse - self.points + " point" : self.state.pointsToUse - self.points + " points", ".")), __jsx("div", {
          className: "col-md-12 row",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 29
          }
        }, __jsx("div", {
          className: "col-md-6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 33
          }
        }, __jsx("button", {
          className: "decisor-button",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 37
          }
        }, "Add Points")), __jsx("div", {
          className: "col-md-6",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 33
          }
        }, __jsx("button", {
          className: "decisor-button black",
          onClick: self.setDecisorOff,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 37
          }
        }, "Close")))));
      }
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 21
      }
    }, "Dashboard"), __jsx("link", {
      href: "/css/bootstrap.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 21
      }
    }), __jsx("link", {
      href: "/css/dashboard.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: this.state.pageLoading ? "loading" : "loading hide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "loadingio-spinner-eclipse-h5c55szghjc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "ldio-3kphjdhe4ws",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 29
      }
    })))), __jsx("div", {
      className: this.state.products ? "decisor active" : "decisor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "container",
      onClick: this.setProductsOff,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 33
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 37
      }
    }, "Starter Pack"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 37
      }
    }, "100 Points"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 37
      }
    }, "1.00$"), __jsx("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 37
      }
    }, "Pay with PayPal"))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 33
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 37
      }
    }, "Medium Pack"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 37
      }
    }, "400 Points"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 37
      }
    }, "2.50$"), __jsx("button", {
      className: "black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 37
      }
    }, "Pay with PayPal"))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "product-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 33
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 37
      }
    }, "Marketer Pack"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 37
      }
    }, "700 Points"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 37
      }
    }, "5$"), __jsx("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 37
      }
    }, "Pay with PayPal")))))), __jsx("div", {
      className: this.state.decisor ? "decisor active" : "decisor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }
    }, decisorDom(this)), __jsx("div", {
      className: "container-fluid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "statistics-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 29
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 33
      }
    }, "E-Mails Sent"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 33
      }
    }, this.state.sent))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "statistics-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 29
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 33
      }
    }, "Available Points"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 33
      }
    }, this.state.points))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "statistics-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 29
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 33
      }
    }, "Total E-Mails Sent"), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 33
      }
    }, this.state.totalEmailsSent)))), __jsx("div", {
      className: "row",
      style: {
        margin: "5rem 0"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-4 input-block center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 25
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 29
      }
    }, "Custom E-Mail List"), __jsx("textarea", {
      className: "custom-list",
      type: "text",
      placeholder: "Leave blank if you don't want to add custom E-Mails",
      onChange: this.setCustomEmailList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 29
      }
    }), __jsx("button", {
      style: {
        padding: "1rem 36.5%"
      },
      onClick: this.setProductsOn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 29
      }
    }, "Add Points")), __jsx("div", {
      className: "col-md-8 input-block center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 25
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 29
      }
    }, "Template"), __jsx("div", {
      className: "col-md-2 inputter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "number",
      className: "center",
      placeholder: "Amount",
      onChange: this.setPointsToUse,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-5 inputter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "text",
      className: "center",
      placeholder: "From",
      onChange: this.setFrom,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-5 inputter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 29
      }
    }, __jsx("input", {
      type: "text",
      className: "center",
      placeholder: "Subject",
      onChange: this.setSubject,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 29
      }
    }, __jsx("textarea", {
      type: "text",
      placeholder: "Enter your Custom HTML or your Message",
      onChange: this.setMsgToSend,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 33
      }
    }), __jsx("button", {
      onClick: this.setDecisorOn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 33
      }
    }, "Send!"))))));
  }

}

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/dashboard.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Desktop/Web Apps/MailMarket.me/mailmarket.me/pages/dashboard.jsx */"./pages/dashboard.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthService = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), c(GeneratorFunctionPrototype, u, GeneratorFunction.displayName = "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AuthService = exports.AuthService = /*#__PURE__*/function () {
  function AuthService(supabase) {
    _classCallCheck(this, AuthService);
    this.supabase = supabase;
  }

  // Sign up with email and password
  return _createClass(AuthService, [{
    key: "signUp",
    value: function () {
      var _signUp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(email, password) {
        var name,
          surname,
          _yield$this$supabase$,
          data,
          error,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              name = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
              surname = _args.length > 3 && _args[3] !== undefined ? _args[3] : '';
              _context.next = 4;
              return this.supabase.auth.signUp({
                email: email,
                password: password
              });
            case 4:
              _yield$this$supabase$ = _context.sent;
              data = _yield$this$supabase$.data;
              error = _yield$this$supabase$.error;
              if (!error) {
                _context.next = 9;
                break;
              }
              throw error;
            case 9:
              if (!data.user) {
                _context.next = 12;
                break;
              }
              _context.next = 12;
              return this.supabase.from('users').insert({
                id: data.user.id,
                email: email,
                name: name,
                surname: surname,
                verified: false
              });
            case 12:
              return _context.abrupt("return", data);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function signUp(_x, _x2) {
        return _signUp.apply(this, arguments);
      }
      return signUp;
    }() // Sign in with email and password
  }, {
    key: "signIn",
    value: function () {
      var _signIn = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email, password) {
        var _yield$this$supabase$2, data, error;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.supabase.auth.signInWithPassword({
                email: email,
                password: password
              });
            case 2:
              _yield$this$supabase$2 = _context2.sent;
              data = _yield$this$supabase$2.data;
              error = _yield$this$supabase$2.error;
              if (!error) {
                _context2.next = 7;
                break;
              }
              throw error;
            case 7:
              return _context2.abrupt("return", data);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function signIn(_x3, _x4) {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
    /**
     * Sign in with OAuth provider via popup
     * Returns a promise resolving to { session, provider } on success
     */
    /**
     * Sign in with OAuth provider via popup
     * Returns a promise resolving to { session, provider } on success
     */
  }, {
    key: "signInWithOAuth",
    value: (function () {
      var _signInWithOAuth = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(provider) {
        var _this = this;
        var options, _yield$this$supabase$3, data, error, popup;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = {
                redirectTo: "".concat(window.location.origin, "/auth/callback"),
                queryParams: {
                  access_type: 'offline',
                  prompt: 'consent',
                  base_id: this.supabase.supabaseKey
                },
                scopes: 'email profile',
                skipBrowserRedirect: true
              }; // Request the OAuth URL
              _context5.next = 3;
              return this.supabase.auth.signInWithOAuth({
                provider: provider,
                options: options
              });
            case 3:
              _yield$this$supabase$3 = _context5.sent;
              data = _yield$this$supabase$3.data;
              error = _yield$this$supabase$3.error;
              if (!error) {
                _context5.next = 8;
                break;
              }
              throw error;
            case 8:
              if (data !== null && data !== void 0 && data.url) {
                _context5.next = 10;
                break;
              }
              throw new Error('No OAuth URL returned from Supabase');
            case 10:
              // Open the popup window
              popup = window.open(data.url, "".concat(provider, "-oauth-popup"), 'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes');
              if (popup) {
                _context5.next = 13;
                break;
              }
              throw new Error('Popup blocked. Please allow popups and try again.');
            case 13:
              return _context5.abrupt("return", new Promise(function (resolve, reject) {
                var checkInterval = null;
                var authSub = null;
                var resolved = false;
                var cleanup = function cleanup() {
                  if (authSub) {
                    authSub.data.subscription.unsubscribe();
                    authSub = null;
                  }
                  window.removeEventListener('message', onMessage);
                  if (checkInterval) {
                    clearInterval(checkInterval);
                    checkInterval = null;
                  }
                  if (!popup.closed) {
                    popup.close();
                  }
                };
                var finish = function finish(session) {
                  if (resolved) return;
                  resolved = true;
                  cleanup();
                  resolve({
                    session: session,
                    provider: provider
                  });
                };
                var fail = function fail(errMsg) {
                  if (resolved) return;
                  resolved = true;
                  cleanup();
                  reject(new Error(errMsg));
                };

                // 1) Listen for Supabase auth state changes (SIGN_IN event)
                authSub = _this.supabase.auth.onAuthStateChange(function (event, session) {
                  if (event === 'SIGNED_IN' && session) {
                    finish(session);
                  }
                });

                // 2) Listen for postMessage from the popup
                var onMessage = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event) {
                    var msg, _msg$expires_in, _msg$token_type, session;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          if (!(event.origin !== window.location.origin)) {
                            _context3.next = 2;
                            break;
                          }
                          return _context3.abrupt("return");
                        case 2:
                          msg = event.data;
                          if (!(!msg || _typeof(msg) !== 'object')) {
                            _context3.next = 5;
                            break;
                          }
                          return _context3.abrupt("return");
                        case 5:
                          if (!(msg.type === 'oauth_success' && msg.session)) {
                            _context3.next = 9;
                            break;
                          }
                          finish(msg.session);
                          _context3.next = 23;
                          break;
                        case 9:
                          if (!(msg.type === 'oauth_error')) {
                            _context3.next = 13;
                            break;
                          }
                          fail(msg.error || 'OAuth authentication failed');
                          _context3.next = 23;
                          break;
                        case 13:
                          if (!(msg.access_token && msg.user)) {
                            _context3.next = 23;
                            break;
                          }
                          session = {
                            access_token: msg.access_token,
                            refresh_token: msg.refresh_token,
                            user: msg.user,
                            expires_in: (_msg$expires_in = msg.expires_in) !== null && _msg$expires_in !== void 0 ? _msg$expires_in : 3600,
                            token_type: (_msg$token_type = msg.token_type) !== null && _msg$token_type !== void 0 ? _msg$token_type : 'bearer'
                          };
                          _context3.prev = 15;
                          _context3.next = 18;
                          return _this.supabase.auth.setSession({
                            access_token: msg.access_token,
                            refresh_token: msg.refresh_token
                          });
                        case 18:
                          _context3.next = 22;
                          break;
                        case 20:
                          _context3.prev = 20;
                          _context3.t0 = _context3["catch"](15);
                        case 22:
                          finish(session);
                        case 23:
                        case "end":
                          return _context3.stop();
                      }
                    }, _callee3, null, [[15, 20]]);
                  }));
                  return function onMessage(_x6) {
                    return _ref.apply(this, arguments);
                  };
                }();
                window.addEventListener('message', onMessage);

                // 3) Poll for popup close / final session check
                checkInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  var _yield$_this$supabase, session;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!popup.closed) {
                          _context4.next = 13;
                          break;
                        }
                        clearInterval(checkInterval);
                        _context4.prev = 2;
                        _context4.next = 5;
                        return _this.supabase.auth.getSession();
                      case 5:
                        _yield$_this$supabase = _context4.sent;
                        session = _yield$_this$supabase.data.session;
                        if (session) {
                          finish(session);
                        } else {
                          fail('Authentication was cancelled');
                        }
                        _context4.next = 13;
                        break;
                      case 10:
                        _context4.prev = 10;
                        _context4.t0 = _context4["catch"](2);
                        fail('Final authentication check failed');
                      case 13:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4, null, [[2, 10]]);
                })), 1000);

                // 4) Overall timeout (5 minutes)
                setTimeout(function () {
                  fail('Authentication timeout');
                }, 5 * 60 * 1000);
              }));
            case 14:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function signInWithOAuth(_x5) {
        return _signInWithOAuth.apply(this, arguments);
      }
      return signInWithOAuth;
    }() // Sign out
    )
  }, {
    key: "signOut",
    value: function () {
      var _signOut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _yield$this$supabase$4, error;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.supabase.auth.signOut();
            case 2:
              _yield$this$supabase$4 = _context6.sent;
              error = _yield$this$supabase$4.error;
              if (!error) {
                _context6.next = 6;
                break;
              }
              throw error;
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }() // Get current session
  }, {
    key: "getSession",
    value: function getSession() {
      return this.supabase.auth.getSession();
    }

    // Get current user
  }, {
    key: "getUser",
    value: function getUser() {
      return this.supabase.auth.getUser();
    }

    // Listen auth state changes
  }, {
    key: "onAuthStateChange",
    value: function onAuthStateChange(callback) {
      return this.supabase.auth.onAuthStateChange(function (event, session) {
        return callback(event, session);
      });
    }
  }]);
}();
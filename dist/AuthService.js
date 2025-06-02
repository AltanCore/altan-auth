"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthService = void 0;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (c = i[4] || 3, u = i[5] === e ? i[3] : i[5], i[4] = 3, i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
      var _signUp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(email, password) {
        var name,
          surname,
          _yield$this$supabase$,
          data,
          error,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              name = _args.length > 2 && _args[2] !== undefined ? _args[2] : '';
              surname = _args.length > 3 && _args[3] !== undefined ? _args[3] : '';
              _context.n = 1;
              return this.supabase.auth.signUp({
                email: email,
                password: password
              });
            case 1:
              _yield$this$supabase$ = _context.v;
              data = _yield$this$supabase$.data;
              error = _yield$this$supabase$.error;
              if (!error) {
                _context.n = 2;
                break;
              }
              throw error;
            case 2:
              if (!data.user) {
                _context.n = 3;
                break;
              }
              _context.n = 3;
              return this.supabase.from('users').insert({
                id: data.user.id,
                email: email,
                name: name,
                surname: surname,
                verified: false
              });
            case 3:
              return _context.a(2, data);
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
      var _signIn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email, password) {
        var _yield$this$supabase$2, data, error;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return this.supabase.auth.signInWithPassword({
                email: email,
                password: password
              });
            case 1:
              _yield$this$supabase$2 = _context2.v;
              data = _yield$this$supabase$2.data;
              error = _yield$this$supabase$2.error;
              if (!error) {
                _context2.n = 2;
                break;
              }
              throw error;
            case 2:
              return _context2.a(2, data);
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
  }, {
    key: "signInWithOAuth",
    value: (function () {
      var _signInWithOAuth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(provider) {
        var _this = this;
        var options, _yield$this$supabase$3, data, error, oauthUrl, popup;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              console.log('🔵 Starting OAuth sign-in flow for provider:', provider);
              options = {
                redirectTo: "".concat(window.location.origin, "/auth/callback"),
                queryParams: {
                  access_type: 'offline',
                  prompt: 'consent',
                  base_id: this.supabase.supabaseKey
                },
                scopes: 'email profile',
                skipBrowserRedirect: true
              };
              ;
              _context5.n = 1;
              return this.supabase.auth.signInWithOAuth({
                provider: provider,
                options: options
              });
            case 1:
              _yield$this$supabase$3 = _context5.v;
              data = _yield$this$supabase$3.data;
              error = _yield$this$supabase$3.error;
              if (!error) {
                _context5.n = 2;
                break;
              }
              throw error;
            case 2:
              if (data !== null && data !== void 0 && data.url) {
                _context5.n = 3;
                break;
              }
              throw new Error('No OAuth URL returned from Supabase');
            case 3:
              oauthUrl = data.url;
              console.log('🔵 Opening OAuth popup window at URL:', oauthUrl);
              popup = window.open(oauthUrl, "".concat(provider, "-oauth-popup"), 'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes');
              if (popup) {
                _context5.n = 4;
                break;
              }
              throw new Error('Popup blocked. Please allow popups and try again.');
            case 4:
              return _context5.a(2, new Promise(function (resolve, reject) {
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
                  try {
                    window.dispatchEvent(new CustomEvent('supabase:session', {
                      detail: session
                    }));
                  } catch (e) {
                    console.warn('⚠️ Failed to dispatch auth change event:', e);
                  }
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
                authSub = _this.supabase.auth.onAuthStateChange(function (event, session) {
                  if (event === 'SIGNED_IN' && session) {
                    finish(session);
                  }
                });
                var onMessage = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(event) {
                    var msg, _msg$expires_in, _msg$token_type, session, _yield$_this$supabase, setData, setError, now, persist, _t;
                    return _regenerator().w(function (_context3) {
                      while (1) switch (_context3.n) {
                        case 0:
                          msg = event.data;
                          if (!(!msg || _typeof(msg) !== 'object')) {
                            _context3.n = 1;
                            break;
                          }
                          return _context3.a(2);
                        case 1:
                          if (!(msg.access_token && msg.user)) {
                            _context3.n = 6;
                            break;
                          }
                          session = {
                            access_token: msg.access_token,
                            refresh_token: msg.refresh_token,
                            user: msg.user,
                            expires_in: (_msg$expires_in = msg.expires_in) !== null && _msg$expires_in !== void 0 ? _msg$expires_in : 3600,
                            token_type: (_msg$token_type = msg.token_type) !== null && _msg$token_type !== void 0 ? _msg$token_type : 'bearer'
                          };
                          _context3.p = 2;
                          _context3.n = 3;
                          return _this.supabase.auth.setSession({
                            access_token: msg.access_token,
                            refresh_token: msg.refresh_token
                          });
                        case 3:
                          _yield$_this$supabase = _context3.v;
                          setData = _yield$_this$supabase.data;
                          setError = _yield$_this$supabase.error;
                          if (setError) {
                            console.warn('⚠️ supabase.auth.setSession error:', setError);
                          } else {
                            console.log('🟢 Session set in Supabase client:', setData.session);
                          }
                          _context3.n = 5;
                          break;
                        case 4:
                          _context3.p = 4;
                          _t = _context3.v;
                          console.warn('⚠️ Failed to set session in Supabase client:', _t);
                        case 5:
                          now = Math.floor(Date.now() / 1000);
                          persist = _objectSpread(_objectSpread({}, session), {}, {
                            expires_at: now + session.expires_in
                          });
                          localStorage.setItem('sb-database-auth-token', JSON.stringify(persist));
                          finish(session);
                          return _context3.a(2);
                        case 6:
                          // Structured messages (oauth_success / oauth_error)
                          if (msg.type === 'oauth_success' && msg.session) {
                            finish(msg.session);
                          } else if (msg.type === 'oauth_error') {
                            fail(msg.error || 'OAuth authentication failed');
                          }
                        case 7:
                          return _context3.a(2);
                      }
                    }, _callee3, null, [[2, 4]]);
                  }));
                  return function onMessage(_x6) {
                    return _ref.apply(this, arguments);
                  };
                }();
                window.addEventListener('message', onMessage);
                checkInterval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
                  var _yield$_this$supabase2, session, _t2;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.n) {
                      case 0:
                        if (!popup.closed) {
                          _context4.n = 4;
                          break;
                        }
                        clearInterval(checkInterval);
                        _context4.p = 1;
                        _context4.n = 2;
                        return _this.supabase.auth.getSession();
                      case 2:
                        _yield$_this$supabase2 = _context4.v;
                        session = _yield$_this$supabase2.data.session;
                        if (session) {
                          finish(session);
                        } else {
                          fail('Authentication was cancelled');
                        }
                        _context4.n = 4;
                        break;
                      case 3:
                        _context4.p = 3;
                        _t2 = _context4.v;
                        fail('Final authentication check failed');
                      case 4:
                        return _context4.a(2);
                    }
                  }, _callee4, null, [[1, 3]]);
                })), 1000);
                setTimeout(function () {
                  fail('Authentication timeout');
                }, 5 * 60 * 1000);
              }));
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
      var _signOut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$this$supabase$4, error;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return this.supabase.auth.signOut();
            case 1:
              _yield$this$supabase$4 = _context6.v;
              error = _yield$this$supabase$4.error;
              if (!error) {
                _context6.n = 2;
                break;
              }
              throw error;
            case 2:
              return _context6.a(2);
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
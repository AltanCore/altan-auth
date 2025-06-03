"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthProvider = AuthProvider;
exports.useAuth = useAuth;
var _react = _interopRequireWildcard(require("react"));
var _AuthService = require("./AuthService");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // AuthContext.jsx
var AuthContext = /*#__PURE__*/(0, _react.createContext)();
function AuthProvider(_ref) {
  var supabase = _ref.supabase,
    children = _ref.children;
  var _useState = (0, _react.useState)(function () {
      return new _AuthService.AuthService(supabase);
    }),
    _useState2 = _slicedToArray(_useState, 1),
    service = _useState2[0];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    session = _useState4[0],
    setSession = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  (0, _react.useEffect)(function () {
    service.getSession().then(function (_ref2) {
      var data = _ref2.data,
        error = _ref2.error;
      if (error) {
        console.error('Error getting session:', error);
        setSession(null);
      } else {
        var _data$session;
        setSession((_data$session = data === null || data === void 0 ? void 0 : data.session) !== null && _data$session !== void 0 ? _data$session : null);
      }
      setLoading(false);
    });
    var _service$onAuthStateC = service.onAuthStateChange(function (event, session) {
        switch (event) {
          case 'SIGNED_IN':
          case 'TOKEN_REFRESHED':
            setSession(session);
            break;
          case 'SIGNED_OUT':
            setSession(null);
            break;
          default:
            break;
        }
        setLoading(false);
      }),
      subscription = _service$onAuthStateC.data.subscription;
    return function () {
      if (subscription) subscription.unsubscribe();
    };
  }, [service]);
  (0, _react.useEffect)(function () {
    var handler = function handler(e) {
      console.log('🏷️ supabase:session event received', e.detail);
      setSession(e.detail);
      setLoading(false);
    };
    window.addEventListener('supabase:session', handler);
    return function () {
      return window.removeEventListener('supabase:session', handler);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(AuthContext.Provider, {
    value: {
      service: service,
      session: session,
      loading: loading
    }
  }, children);
}
function useAuth() {
  var ctx = (0, _react.useContext)(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
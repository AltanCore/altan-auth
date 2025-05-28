"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  AuthProvider: true,
  useAuth: true
};
Object.defineProperty(exports, "AuthProvider", {
  enumerable: true,
  get: function get() {
    return _AuthContext.AuthProvider;
  }
});
Object.defineProperty(exports, "useAuth", {
  enumerable: true,
  get: function get() {
    return _AuthContext.useAuth;
  }
});
var _AuthContext = require("./AuthContext");
var _authWrapper = require("./components/auth-wrapper");
Object.keys(_authWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _authWrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authWrapper[key];
    }
  });
});
var _signInForm = require("./components/sign-in-form");
Object.keys(_signInForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _signInForm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signInForm[key];
    }
  });
});
var _signUpForm = require("./components/sign-up-form");
Object.keys(_signUpForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _signUpForm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signUpForm[key];
    }
  });
});
var _oauthButton = require("./components/oauth-button");
Object.keys(_oauthButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _oauthButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _oauthButton[key];
    }
  });
});
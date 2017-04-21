webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(_http, rs) {
        this._http = _http;
        this.rs = rs;
        this.userStg = 'com.marcohern.ultimate-atlas.auth.user';
        this.tokenStg = 'com.marcohern.ultimate-atlas.auth.token';
        this.authenticated = false;
        this.user = null;
        this.token = null;
    }
    AuthService.prototype.clearToken = function () {
        console.log("AuthService.clearToken");
        this.rs.clearToken();
        this.authenticated = false;
        this.user = null;
        this.token = null;
        localStorage.removeItem(this.tokenStg);
        localStorage.removeItem(this.userStg);
    };
    AuthService.prototype.setToken = function (loginResponse) {
        console.log("AuthService.setToken", loginResponse);
        this.user = loginResponse.user;
        this.token = loginResponse.token;
        this.authenticated = true;
        this.rs.setToken(loginResponse.token.token);
        localStorage.setItem(this.tokenStg, JSON.stringify(loginResponse.token));
        localStorage.setItem(this.userStg, JSON.stringify(loginResponse.user));
    };
    AuthService.prototype.updateToken = function (token) {
        console.log("AuthService.updateToken", token);
        this.token = token;
        this.authenticated = true;
        this.rs.setToken(this.token.token);
    };
    AuthService.prototype.start = function () {
        var _this = this;
        console.log("AuthService.start");
        var userJson = localStorage.getItem(this.userStg);
        var tokenJson = localStorage.getItem(this.tokenStg);
        if (userJson && tokenJson) {
            this.user = JSON.parse(userJson);
            var localToken = JSON.parse(tokenJson);
            this.rs.post('/check_token', { token: localToken.token })
                .map(function (r) { return r.json().token; })
                .subscribe(function (remoteToken) { return _this.updateToken(remoteToken); }, function (error) { return _this.clearToken(); });
        }
        else {
            this.clearToken();
        }
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        console.log("AuthService.login", username, password);
        return this.rs.post('/login', { username: username, password: password })
            .map(function (r) { return r.json(); })
            .do(function (loginResponse) { return _this.setToken(loginResponse); });
    };
    AuthService.prototype.sendResetPasswordEmail = function (email) {
        return this.rs.post('/reset-password', {})
            .map(function (r) { return r.json(); });
    };
    AuthService.prototype.signup = function (user) {
        return this.rs.post('/signup', user)
            .map(function (r) { return r.json(); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.rs.post('/logout', {})
            .map(function (r) { return r.json(); })
            .do(function (response) {
            _this.clearToken();
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestService = (function () {
    function RequestService(http, cs) {
        this.http = http;
        this.cs = cs;
        this.token = null;
        this.calling = false;
        console.log("RequestService.constructor");
    }
    RequestService.prototype.buildHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        if (this.token)
            headers.append('Token', this.token);
        return headers;
    };
    RequestService.prototype.setToken = function (token) {
        this.token = token;
    };
    RequestService.prototype.clearToken = function () {
        this.token = null;
    };
    RequestService.prototype._get = function (url, loadscreen) {
        var _this = this;
        if (loadscreen === void 0) { loadscreen = true; }
        if (loadscreen)
            this.calling = true;
        return this.http
            .get(url, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype._post = function (url, body, loadscreen) {
        var _this = this;
        if (loadscreen === void 0) { loadscreen = true; }
        if (loadscreen)
            this.calling = true;
        return this.http
            .post(url, body, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype._put = function (url, body, loadscreen) {
        var _this = this;
        if (loadscreen === void 0) { loadscreen = true; }
        if (loadscreen)
            this.calling = true;
        return this.http
            .put(url, body, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype._delete = function (url, loadscreen) {
        var _this = this;
        if (loadscreen === void 0) { loadscreen = true; }
        if (loadscreen)
            this.calling = true;
        return this.http
            .delete(url, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype.get = function (uri, id, loadscreen) {
        if (loadscreen === void 0) { loadscreen = true; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Get, id, new Map());
        return this._get(url, loadscreen);
    };
    RequestService.prototype.post = function (uri, body, loadscreen) {
        if (loadscreen === void 0) { loadscreen = true; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Post, null, new Map());
        if (this.cs.get().request.mock)
            return this._get(url, loadscreen);
        return this._post(url, body, loadscreen);
    };
    RequestService.prototype.query = function (uri, q, loadscreen) {
        if (q === void 0) { q = ''; }
        if (loadscreen === void 0) { loadscreen = true; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Query, null, new Map([
            ['q', [q]]
        ]));
        return this._get(url, loadscreen);
    };
    RequestService.prototype.create = function (uri, body, loadscreen) {
        if (loadscreen === void 0) { loadscreen = true; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Create, null, new Map());
        if (this.cs.get().request.mock)
            return this._get(url, loadscreen);
        return this._post(url, body, loadscreen);
    };
    RequestService.prototype.update = function (uri, body, id, loadscreen) {
        if (loadscreen === void 0) { loadscreen = true; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Update, id, new Map());
        if (this.cs.get().request.mock)
            return this._get(url, loadscreen);
        return this._put(url, body, loadscreen);
    };
    RequestService.prototype.delete = function (uri, id, loadscreen) {
        if (loadscreen === void 0) { loadscreen = true; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Delete, id, new Map());
        if (this.cs.get().request.mock)
            return this._get(url, loadscreen);
        return this._delete(url, loadscreen);
    };
    RequestService.prototype.save = function (uri, body, loadscreen) {
        if (loadscreen === void 0) { loadscreen = true; }
        if (body.id) {
            return this.update(uri, body, body.id, loadscreen);
        }
        else {
            return this.create(uri, body, loadscreen);
        }
    };
    RequestService.prototype.handleError = function (error) {
        this.calling = false;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    RequestService.prototype.do = function (data) {
        this.calling = false;
    };
    RequestService.prototype.isCalling = function () { return this.calling; };
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]) === "function" && _b || Object])
], RequestService);

var _a, _b;
//# sourceMappingURL=request.service.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EthnicMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EthnicMethod;
(function (EthnicMethod) {
    EthnicMethod[EthnicMethod["None"] = 0] = "None";
    EthnicMethod[EthnicMethod["Get"] = 1] = "Get";
    EthnicMethod[EthnicMethod["Post"] = 2] = "Post";
    EthnicMethod[EthnicMethod["Query"] = 3] = "Query";
    EthnicMethod[EthnicMethod["Create"] = 4] = "Create";
    EthnicMethod[EthnicMethod["Update"] = 5] = "Update";
    EthnicMethod[EthnicMethod["Delete"] = 6] = "Delete";
})(EthnicMethod || (EthnicMethod = {}));
var ConfigService = (function () {
    function ConfigService() {
    }
    ConfigService.prototype.get = function () { return __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */]; };
    ConfigService.prototype.getPrefix = function () { return __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].request.prefix; };
    ConfigService.prototype.getPostfix = function (method) {
        switch (method) {
            case EthnicMethod.Get: return this.get().request.postfix.get;
            case EthnicMethod.Post: return this.get().request.postfix.post;
            case EthnicMethod.Query: return this.get().request.postfix.query;
            case EthnicMethod.Create: return this.get().request.postfix.create;
            case EthnicMethod.Update: return this.get().request.postfix.update;
            case EthnicMethod.Delete: return this.get().request.postfix.delete;
            default: return '';
        }
    };
    ConfigService.prototype.mapUrl = function (uri, method, id, query) {
        if (method === void 0) { method = EthnicMethod.None; }
        var url = uri;
        var qr = '';
        if (!this.get().request.mock && id)
            url += '/' + id;
        if (query) {
            query.forEach(function (value, key) {
                qr += (qr == '') ? '?' : '&';
                qr += key + '=' + encodeURI(value);
            });
        }
        return __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].request.prefix + url + this.getPostfix(method) + qr;
    };
    return ConfigService;
}());
ConfigService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ValidatorService = (function () {
    function ValidatorService(rs) {
        this.rs = rs;
    }
    ValidatorService.prototype.checkUsername = function (username) {
        return this.rs.post('/check_username', { username: username }, false)
            .map(function (r) { return r.json(); });
    };
    ValidatorService.prototype.checkUserEmail = function (email) {
        return this.rs.post('/check_user_email', { email: email }, false)
            .map(function (r) { return r.json(); });
    };
    return ValidatorService;
}());
ValidatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], ValidatorService);

var _a;
//# sourceMappingURL=validator.service.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(rs) {
        this.rs = rs;
        this.url = '/users';
    }
    UserService.prototype.getUsers = function (query) {
        if (query === void 0) { query = ''; }
        return this.rs.query(this.url, query)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.getUser = function (id) {
        return this.rs.get(this.url, id)
            .map(function (r) { return r.json().user; });
    };
    UserService.prototype.deleteUser = function (id) {
        console.log("UserService.deleteUser", id);
        return this.rs.delete(this.url, id)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.saveUser = function (user) {
        console.log("UserService.saveUser", user);
        return this.rs.save(this.url, user)
            .map(function (r) { return r.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.username = '';
        this.password = '';
        this.loginFailed = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginFailed = false;
        this._auth.login(this.username, this.password).subscribe(function () { return _this._router.navigate(['/welcome']); }, function (error) { return _this.loginFailed = true; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-login',
        template: __webpack_require__(205),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecoverPasswordComponent = (function () {
    function RecoverPasswordComponent(_auth) {
        this._auth = _auth;
        this.sending = false;
        this.sent = false;
    }
    RecoverPasswordComponent.prototype.isSending = function () { return this.sending; };
    RecoverPasswordComponent.prototype.isSent = function () { return this.sent; };
    RecoverPasswordComponent.prototype.ngOnInit = function () {
    };
    RecoverPasswordComponent.prototype.sendResetPasswordEmail = function () {
        var _this = this;
        this.sending = true;
        this._auth.sendResetPasswordEmail(this.email).subscribe(function () { return _this.sent = true; });
    };
    return RecoverPasswordComponent;
}());
RecoverPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-recover-password',
        template: __webpack_require__(206),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], RecoverPasswordComponent);

var _a;
//# sourceMappingURL=recover-password.component.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupDoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupDoneComponent = (function () {
    function SignupDoneComponent() {
    }
    SignupDoneComponent.prototype.ngOnInit = function () {
    };
    return SignupDoneComponent;
}());
SignupDoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-signup-done',
        template: __webpack_require__(207),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], SignupDoneComponent);

//# sourceMappingURL=signup-done.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(auth, router, fb) {
        this.auth = auth;
        this.router = router;
        this.fb = fb;
        this.active = false;
        this.errors = {};
        this.errorMessages = {
            role: {
                required: 'Role is required.'
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        console.log("SignupComponent.ngOnInit");
        this.signupForm = this.fb.group({
            role: ['ADMIN', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        this.active = true;
    };
    SignupComponent.prototype.onUsernameGroup = function (username) {
        this.signupForm.addControl('username', username);
    };
    SignupComponent.prototype.onEmailGroup = function (email) {
        this.signupForm.addControl('email', email);
    };
    SignupComponent.prototype.onPasswordGroup = function (password) {
        this.signupForm.addControl('password', password);
    };
    SignupComponent.prototype.onFirstNameGroup = function (fname) {
        this.signupForm.addControl('fname', fname);
    };
    SignupComponent.prototype.onLastNameGroup = function (lname) {
        this.signupForm.addControl('lname', lname);
    };
    SignupComponent.prototype.signupUser = function (data) {
        var _this = this;
        console.log('Reactive Form Data: ');
        var request = {
            username: data.username.value,
            password: data.password.value,
            fname: data.fname.value,
            lname: data.lname.value,
            email: data.email.value,
            role: data.role
        };
        console.log(request);
        this.auth.signup(request).subscribe(function () { return _this.router.navigate(['/signup-done']); });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-signup',
        template: __webpack_require__(208),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatableInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ValidatableInput = (function () {
    function ValidatableInput() {
        this.name = 'value';
        this.label = 'Validatable Input';
        this.default = '';
        this.httpErrorMsg = 'An error has occurred';
        this.validatingMsg = 'Validating...';
        this.requiredMsg = 'Required.';
        this.groupCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.controlCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.timeout = 2000;
        this.messages = {};
    }
    ValidatableInput.prototype.init = function (validators) {
        var _this = this;
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](this.default, validators, this.validateCall.bind(this));
        this.controlCreated.emit(this.control);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({});
        this.group.addControl(this.name, this.control);
        this.groupCreated.emit(this.group);
        this.addMessage('required', this.requiredMsg);
        this.addMessage('httpError', this.httpErrorMsg);
        this.group.statusChanges.subscribe(function (status) { return _this.updateValidation(status); });
        this.updateValidation("");
    };
    ValidatableInput.prototype.addMessage = function (key, message) {
        this.messages[key] = message;
    };
    ValidatableInput.prototype.updateValidation = function (status) {
        this.groupClass = [];
        this.error = false;
        this.success = false;
        this.errorMessage = '';
        if (this.control.dirty && this.control.invalid) {
            this.error = true;
            console.log(this.control.errors);
            for (var key in this.control.errors) {
                this.errorMessage += this.messages[key] + ' ';
            }
            this.groupClass.push('has-error');
        }
        else if (this.control.valid) {
            this.success = true;
            this.groupClass.push('has-success');
        }
    };
    ValidatableInput.prototype.validateCall = function (c) {
        return this.validateMethod(this.control).first();
    };
    ValidatableInput.prototype.validateMethod = function (c) {
        var _this = this;
        this.validating = true;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            clearTimeout(_this.timeoutCallback);
            _this.timeoutCallback = setTimeout(function () {
                _this.validate(observer);
            }, _this.timeout);
        });
    };
    return ValidatableInput;
}());

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], ValidatableInput.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], ValidatableInput.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], ValidatableInput.prototype, "default", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("http-error-msg"),
    __metadata("design:type", String)
], ValidatableInput.prototype, "httpErrorMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("validating-msg"),
    __metadata("design:type", String)
], ValidatableInput.prototype, "validatingMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("required-msg"),
    __metadata("design:type", String)
], ValidatableInput.prototype, "requiredMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], ValidatableInput.prototype, "groupCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], ValidatableInput.prototype, "controlCreated", void 0);
var _a, _b;
//# sourceMappingURL=validatable-input.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.user = {
            username: '',
            fname: '',
            lname: '',
            email: '',
            role: '',
            gender: 'X',
            birth: null,
            status: 'ok'
        };
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        if (id) {
            this.userService.getUser(id)
                .subscribe(function (user) {
                console.log("UserDetailComponent.ngOnInit R", user);
                _this.user = user;
            });
        }
    };
    UserDetailComponent.prototype.saveUser = function () {
        var _this = this;
        this.userService.saveUser(this.user).subscribe(function () {
            _this.router.navigate(['/users']);
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-user-detail',
        template: __webpack_require__(215),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.searchText = '';
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    UserListComponent.prototype.deleteUser = function (index) {
        var _this = this;
        var user = this.users[index];
        this.userService.deleteUser(user.id).subscribe(function () {
            //this.users.splice(index, 1);
            _this.users[index].status = "gone";
        });
    };
    UserListComponent.prototype.searchUsers = function () {
        var _this = this;
        console.log("UserListComponent.searchUsers", this.searchText);
        this.userService.getUsers(this.searchText).subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-user-list',
        template: __webpack_require__(216),
        styles: [__webpack_require__(199)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* recordAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(fb) {
        this.fb = fb;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.testForm = this.fb.group({});
    };
    TestComponent.prototype.onUsernameGroupCreated = function (usernameFormGroup) {
        this.testForm.addControl('username', usernameFormGroup);
    };
    TestComponent.prototype.onUserEmailGroupCreated = function (userEmailInputGroup) {
        this.testForm.addControl('email', userEmailInputGroup);
    };
    TestComponent.prototype.submit = function (values) {
        console.log("TestComponent.submit", values);
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__(217),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-welcome',
        template: __webpack_require__(218),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    env: 'test',
    request: {
        prefix: '/api',
        mock: false,
        postfix: {
            get: '',
            post: '',
            query: '',
            create: '',
            update: '',
            delete: ''
        }
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 108;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(79);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(69);
/* unused harmony export appearAnimation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recordAnimation; });

// Component transition animations
var appearAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: 1,
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }))
    ])
]);
var recordAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('record', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('gone', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
        opacity: 0.0,
        height: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => gone', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0ms 500ms ease-out')
    ])
]);
//# sourceMappingURL=animations.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(configService, auth) {
        this.configService = configService;
        this.auth = auth;
        this.title = 'Ultimate Atlas';
    }
    AppComponent.prototype.ngOnInit = function () {
        var config = this.configService.get();
        this.auth.start();
        console.log("AppComponent.ngOnInit", config);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ultimate-atlas',
        template: __webpack_require__(204),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_user_user_module__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_login_login_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_recover_password_recover_password_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_signup_signup_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_signup_done_signup_done_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loading_loading_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__validators_equal_validator__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__validators_username_unique_validator__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__inputs_username_username_input_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inputs_user_email_user_email_input_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__test_test_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__request_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__inputs_validator_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__inputs_password_input_password_input_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__inputs_name_input_name_input_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__modules_user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_recover_password_recover_password_component__["a" /* RecoverPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_signup_done_signup_done_component__["a" /* SignupDoneComponent */],
            __WEBPACK_IMPORTED_MODULE_14__loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__validators_equal_validator__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_16__validators_username_unique_validator__["a" /* UsernameUniqueValidator */],
            __WEBPACK_IMPORTED_MODULE_17__inputs_username_username_input_component__["a" /* UsernameInput */],
            __WEBPACK_IMPORTED_MODULE_18__inputs_user_email_user_email_input_component__["a" /* UserEmailInput */],
            __WEBPACK_IMPORTED_MODULE_24__inputs_password_input_password_input_component__["a" /* PasswordInput */],
            __WEBPACK_IMPORTED_MODULE_19__test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_25__inputs_name_input_name_input_component__["a" /* NameInput */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_20__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_23__inputs_validator_service__["a" /* ValidatorService */],
            __WEBPACK_IMPORTED_MODULE_15__validators_equal_validator__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_16__validators_username_unique_validator__["a" /* UsernameUniqueValidator */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_recover_password_recover_password_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_done_signup_done_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_test_component__ = __webpack_require__(77);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'recover-password', component: __WEBPACK_IMPORTED_MODULE_3__auth_recover_password_recover_password_component__["a" /* RecoverPasswordComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_7__test_test_component__["a" /* TestComponent */] },
    { path: 'signup-done', component: __WEBPACK_IMPORTED_MODULE_6__auth_signup_done_signup_done_component__["a" /* SignupDoneComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    return AppRoutes;
}());
AppRoutes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutes);

//# sourceMappingURL=app.routes.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizedGuard = (function () {
    function AuthorizedGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthorizedGuard.prototype.canActivate = function (next, state) {
        console.log("AuthorizedGuard.canActivate");
        if (this.auth.isAuthenticated())
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    return AuthorizedGuard;
}());
AuthorizedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthorizedGuard);

var _a, _b;
//# sourceMappingURL=authorized.guard.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NameInput = (function () {
    function NameInput() {
        this.label = 'Input Text';
        this.groupCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */];
        this.fieldClass = [];
        this.error = false;
        this.success = false;
        this.errorMessages = {
            value: {
                required: 'Required.',
                invalid: 'Must be valid'
            }
        };
    }
    NameInput.prototype.ngOnInit = function () {
        var _this = this;
        console.log("NameInput.ngOnInit");
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.isValidName.bind(this)]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            value: this.control
        });
        this.control.valueChanges.subscribe(function (data) { return _this.onValueChange(data); });
        //this.control.statusChanges.subscribe(status => this.onStatusChange(status));
        this.groupCreated.emit(this.group);
    };
    NameInput.prototype.isValidName = function (c) {
        var name = c.value;
        if (name.match(/[0-9.]/))
            return { invalid: true };
        return null;
    };
    NameInput.prototype.onValueChange = function (data) {
        this.error = false;
        this.success = false;
        this.fieldClass = [];
        this.errorMessage = '';
        if (this.control && this.control.dirty && this.control.invalid) {
            this.error = true;
            var messages = this.errorMessages.value;
            for (var key in this.control.errors) {
                this.errorMessage += messages[key] + ' ';
            }
            this.fieldClass.push('has-error');
        }
        else if (this.control && this.control.valid) {
            this.success = true;
            this.fieldClass.push('has-success');
        }
    };
    NameInput.prototype.onStatusChange = function (status) {
        this.error = false;
        this.success = false;
        if (status == 'INVALID') {
            this.error = true;
        }
        else if (status == 'VALID') {
            this.success = true;
        }
    };
    return NameInput;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], NameInput.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], NameInput.prototype, "groupCreated", void 0);
NameInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-name-input',
        template: __webpack_require__(209),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], NameInput);

var _a;
//# sourceMappingURL=name-input.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordInput = (function () {
    function PasswordInput() {
        this.label = 'Password';
        this.confirmLabel = 'Confirm Password';
        this.requiredMsg = 'Required.';
        this.confirmedRequiredMsg = 'Required.';
        this.groupCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]();
        this.errorMessages = {
            value: {
                required: 'Required.',
                unconfirmed: 'Must match below.'
            },
            confirmed: {
                required: 'Required.',
                unconfirmed: 'Must match password.'
            }
        };
        this.pristine = {
            value: true,
            confirmed: true
        };
        this.errors = {
            value: '',
            confirmed: ''
        };
        this.classes = {
            value: [],
            confirmed: []
        };
    }
    PasswordInput.prototype.ngOnInit = function () {
        var _this = this;
        this.field = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.confirmed = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.areEqual.bind(this)]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({});
        this.group.addControl('value', this.field);
        this.group.addControl('confirmed', this.confirmed);
        this.groupCreated.emit(this.group);
        this.field.valueChanges.subscribe(function (data) { return _this.onValueChange(data); });
        this.confirmed.valueChanges.subscribe(function (data) { return _this.onConfirmedChange(data); });
    };
    PasswordInput.prototype.onValueChange = function (data) {
        this.checkIfDisplayErrorMessage('value');
        this.confirmed.updateValueAndValidity();
    };
    PasswordInput.prototype.onConfirmedChange = function (data) {
        this.checkIfDisplayErrorMessage('confirmed');
    };
    PasswordInput.prototype.checkIfDisplayErrorMessage = function (field) {
        this.errors[field] = '';
        this.classes[field] = [];
        var control = this.group.get(field);
        if (control && control.dirty && !control.valid) {
            this.classes[field].push('has-error');
            var messages = this.errorMessages[field];
            for (var key in control.errors) {
                this.errors[field] += messages[key] + ' ';
            }
            this.pristine[field] = false;
        }
        else if (control && control.valid) {
            this.classes[field].push('has-success');
            this.pristine[field] = false;
        }
    };
    PasswordInput.prototype.areEqual = function (c) {
        if (!c)
            return null;
        if (!this.group)
            return null;
        if (!this.group.get('value'))
            return null;
        var field1 = c.value;
        var field2 = this.group.get('value').value;
        if (field1 == field2) {
            return null;
        }
        else {
            return { unconfirmed: true };
        }
    };
    PasswordInput.prototype.areEqualInverse = function (c) {
        if (!c)
            return null;
        if (!this.group)
            return null;
        if (!this.group.get('confirmed'))
            return null;
        var field1 = c.value;
        var field2 = this.group.get('confirmed').value;
        if (field1 == field2) {
            return null;
        }
        else {
            return { unconfirmed: true };
        }
    };
    return PasswordInput;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], PasswordInput.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("confirm-label"),
    __metadata("design:type", String)
], PasswordInput.prototype, "confirmLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("required-msg"),
    __metadata("design:type", String)
], PasswordInput.prototype, "requiredMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("confirmed-required-msg"),
    __metadata("design:type", String)
], PasswordInput.prototype, "confirmedRequiredMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], PasswordInput.prototype, "groupCreated", void 0);
PasswordInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-password-input',
        template: __webpack_require__(210),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], PasswordInput);

var _a;
//# sourceMappingURL=password-input.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validatable_input__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEmailInput; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserEmailInput = (function (_super) {
    __extends(UserEmailInput, _super);
    function UserEmailInput(vs) {
        var _this = _super.call(this) || this;
        _this.vs = vs;
        _this.emailExistsMsg = 'Allready in use.';
        _this.emailFormatMsg = 'Must be valid.';
        return _this;
    }
    UserEmailInput.prototype.ngOnInit = function () {
        this.init([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]);
        this.addMessage('emailExists', this.emailExistsMsg);
        this.addMessage('email', this.emailFormatMsg);
    };
    UserEmailInput.prototype.validate = function (observer) {
        var _this = this;
        return this.vs.checkUserEmail(this.control.value)
            .subscribe(function (data) {
            _this.validating = false;
            if (data.userEmailExists)
                observer.next({ emailExists: true });
            else
                observer.next(null);
        }, function (error) {
            _this.validating = false;
            observer.next({ httpError: true });
        });
    };
    return UserEmailInput;
}(__WEBPACK_IMPORTED_MODULE_2__validatable_input__["a" /* ValidatableInput */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("email-exists-msg"),
    __metadata("design:type", String)
], UserEmailInput.prototype, "emailExistsMsg", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("email-format-msg"),
    __metadata("design:type", String)
], UserEmailInput.prototype, "emailFormatMsg", void 0);
UserEmailInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-user-email-input',
        template: __webpack_require__(211),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */]) === "function" && _a || Object])
], UserEmailInput);

var _a;
//# sourceMappingURL=user-email-input.component.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validatable_input__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameInput; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsernameInput = (function (_super) {
    __extends(UsernameInput, _super);
    function UsernameInput(vs) {
        var _this = _super.call(this) || this;
        _this.vs = vs;
        _this.usernameExistsMsg = 'Allready in use.';
        return _this;
    }
    UsernameInput.prototype.ngOnInit = function () {
        this.init(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.addMessage('usernameExists', this.usernameExistsMsg);
    };
    UsernameInput.prototype.validate = function (observer) {
        var _this = this;
        return this.vs.checkUsername(this.control.value)
            .subscribe(function (data) {
            _this.validating = false;
            if (data.usernameExists)
                observer.next({ usernameExists: true });
            else
                observer.next(null);
        }, function (error) {
            _this.validating = false;
            observer.next({ httpError: true });
        });
    };
    return UsernameInput;
}(__WEBPACK_IMPORTED_MODULE_2__validatable_input__["a" /* ValidatableInput */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])("username-exists-msg"),
    __metadata("design:type", String)
], UsernameInput.prototype, "usernameExistsMsg", void 0);
UsernameInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-username-input',
        template: __webpack_require__(212),
        styles: [__webpack_require__(195)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */]) === "function" && _a || Object])
], UsernameInput);

var _a;
//# sourceMappingURL=username-input.component.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = (function () {
    function LoadingComponent(rs) {
        this.rs = rs;
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-loading',
        template: __webpack_require__(213),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], LoadingComponent);

var _a;
//# sourceMappingURL=loading.component.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var menu = [
    { label: 'Users', route: ['/users'] }
];
//# sourceMappingURL=menu.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuComponent = (function () {
    function MenuComponent(auth, router, cs) {
        this.auth = auth;
        this.router = router;
        this.cs = cs;
        this.menu = __WEBPACK_IMPORTED_MODULE_4__menu__["a" /* menu */];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (data) {
            console.log("MenuComponent.logout R");
            _this.router.navigate(['/welcome']);
        });
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], MenuComponent.prototype, "title", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'ua-menu',
        template: __webpack_require__(214),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routes__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__user_routes__["a" /* UserRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__["a" /* UserDetailComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_detail_user_detail_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__["a" /* UserListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_4__user_detail_user_detail_component__["a" /* UserDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]] },
    { path: 'user/add', component: __WEBPACK_IMPORTED_MODULE_4__user_detail_user_detail_component__["a" /* UserDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]] },
];
var UserRoutes = (function () {
    function UserRoutes() {
    }
    return UserRoutes;
}());
UserRoutes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]]
    })
], UserRoutes);

//# sourceMappingURL=user.routes.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* unused harmony export areEqual */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


function areEqual(c, mustBeEqualTo) {
    //console.log("areEqual",c,mustBeEqualTo);
    var v = c.value;
    var e = c.root.get(mustBeEqualTo);
    //console.log("areEqual ev",e,v);
    if (e && v !== e.value) {
        return {
            mustBeEqualTo: false
        };
    }
    return null;
}
var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(mustBeEqualTo) {
        this.mustBeEqualTo = mustBeEqualTo;
    }
    EqualValidator.prototype.validate = function (c) {
        return areEqual(c, this.mustBeEqualTo);
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[mustBeEqualTo][formControlName],[mustBeEqualTo][formControl],[mustBeEqualTo][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Attribute */])('mustBeEqualTo')),
    __metadata("design:paramtypes", [String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal.validator.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* unused harmony export isUsenameUnique */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameUniqueValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var timeout;
function isUsenameUnique(c) {
    //console.log("isUsenameUnique");
    return new Promise(function (resolve) {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            //console.log("isUsenameUnique R");
            resolve(null);
        }, 2000);
    });
}
var UsernameUniqueValidator = UsernameUniqueValidator_1 = (function () {
    function UsernameUniqueValidator() {
        //console.log("UsernameUniqueValidator.constructor");
    }
    UsernameUniqueValidator.prototype.validate = function (c) {
        //console.log("UsernameUniqueValidator.validate");
        return isUsenameUnique(c);
    };
    return UsernameUniqueValidator;
}());
UsernameUniqueValidator = UsernameUniqueValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[usernameUnique][formControlName],[usernameUnique][formControl],[usernameUnique][ngModel]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_ASYNC_VALIDATORS */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* forwardRef */])(function () { return UsernameUniqueValidator_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], UsernameUniqueValidator);

var UsernameUniqueValidator_1;
//# sourceMappingURL=username-unique.validator.js.map

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".loader {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: 0.75;\r\n    z-index: 999;\r\n}\r\n\r\n.loader > div {\r\n    position: relative;\r\n    left:50%;\r\n    top:50%;\r\n    margin: -64px 0 0 -64px;\r\n}\r\n\r\n.loader > div > img {\r\n    width:128px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports) {

module.exports = "<ua-loading></ua-loading>\r\n<ua-menu title=\"{{title}}\"></ua-menu>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\"></div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"panel panel-default panel-primary\">\r\n      <div class=\"panel-heading\">Login</div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" value=\"\">\r\n        </div>\r\n        <div  class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" value=\"\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"loginFailed\">\r\n          <p style=\"color:red\">Login failed, check credentials and try again</p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <a [routerLink]=\"['/recover-password']\">Forgot Password?</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\"></div>\r\n</div>"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"panel panel-default panel-primary\">\n      <div class=\"panel-heading\">Type your Email to reset your password</div>\n      <div class=\"panel-body\">\n        <div  class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" value=\"\">\n        </div>\n        <div  class=\"form-group\">\n          <button class=\"btn btn-primary\" (click)=\"sendResetPasswordEmail()\" [disabled]=\"sending\" *ngIf=\"!sent\">Reset Password</button>\n          <div *ngIf=\"sent\">\n            <p>Email sent! Click on the link in the email to reset your password.</p>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Sign In</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\"><h2>Sign Up successfull!</h2></div>\n  <div class=\"panel-body\">\n    You will receive an email shortly with instructions to log in.\n  </div>\n</div>"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\"><h2>Sign Up!</h2></div>\r\n  <div class=\"panel-body\">\r\n    <form novalidate [formGroup]=\"signupForm\" *ngIf=\"active\" (ngSubmit)=\"signupUser(signupForm.value)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <ua-username-input label=\"Username\" (groupCreated)=\"onUsernameGroup($event)\"></ua-username-input>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <ua-user-email-input label=\"Email\" (groupCreated)=\"onEmailGroup($event)\"></ua-user-email-input>\r\n        </div>\r\n      </div>\r\n      <div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <ua-password-input (groupCreated)=\"onPasswordGroup($event)\"></ua-password-input>\r\n        </div>\r\n        <div class=\"col-sm-8\"></div>\r\n      </div>\r\n        <ua-name-input (groupCreated)=\"onFirstNameGroup($event)\"></ua-name-input>\r\n        <ua-name-input (groupCreated)=\"onLastNameGroup($event)\"></ua-name-input>\r\n        <input type=\"hidden\" name=\"role\" formControlName=\"role\"/>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"!signupForm.valid\">\r\n            <i class=\"glyphicon glyphicon-plus\"></i>Sign up!\r\n          </button>\r\n          <button type=\"reset\" class=\"btn btn-warning btn-lg\">\r\n            <i class=\"glyphicon glyphicon-plus\"></i>Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\" class=\"form-group has-feedback\" [ngClass]=\"fieldClass\">\n  <label>{{label}}</label>\n  <input type=\"text\" class=\"form-control\" name=\"value\" formControlName=\"value\" />\n  <span *ngIf=\"error\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n  <span *ngIf=\"success\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n  <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n      {{errorMessage}}\n    </div>\n    <div class=\"alert\" *ngIf=\"!error\" style=\"visibility:hidden\">\n      Placeholder alert.\n    </div>\n</div>"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\n  <div class=\"form-group has-feedback\" [ngClass]=\"classes.value\">\n    <label>{{label}}</label>\n    <input type=\"password\" class=\"form-control\" name=\"value\" formControlName=\"value\"/>\n    <span *ngIf=\"errors.value\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"!errors.value && !pristine.value\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n    <div class=\"alert alert-danger\" *ngIf=\"errors.value\">\n      {{errors.value}}\n    </div>\n    <div class=\"alert\" *ngIf=\"!errors.value\" style=\"visibility:hidden\">\n      Placeholder alert.\n    </div>\n  </div>\n  <div class=\"form-group has-feedback\" [ngClass]=\"classes.confirmed\">\n    <label>{{confirmLabel}}</label>\n    <input type=\"password\" class=\"form-control\" name=\"confirmed\" formControlName=\"confirmed\"/>\n    <span *ngIf=\"errors.confirmed\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"!errors.confirmed && !pristine.confirmed\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n    <div class=\"alert alert-danger\" *ngIf=\"errors.confirmed\">\n      {{errors.confirmed}}\n    </div>\n    <div class=\"alert\" *ngIf=\"!errors.confirmed\" style=\"visibility:hidden\">\n      Placeholder alert.\n    </div>\n  </div>\n</div>"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\" class=\"form-group has-feedback\" [ngClass]=\"groupClass\">\r\n  <label>{{label}}</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"value\" formControlName=\"value\" />\r\n  <span *ngIf=\"error\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"success\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"validating\" class=\"glyphicon ua-icon ua-icon-bars form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n  </div>\r\n  <div class=\"alert alert-info\" *ngIf=\"validating\">\r\n    {{validatingMsg}}\r\n  </div>\r\n  <div class=\"alert\" *ngIf=\"(!validating && !error)\" style=\"visibility:hidden\">\r\n    Placeholder alert.\r\n  </div>\r\n</div>"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\" class=\"form-group has-feedback\" [ngClass]=\"groupClass\">\r\n  <label>{{label}}</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"value\" formControlName=\"value\" />\r\n  <span *ngIf=\"error\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"success\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"validating\" class=\"glyphicon ua-icon ua-icon-bars form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n  </div>\r\n  <div class=\"alert alert-info\" *ngIf=\"validating\">\r\n    {{validatingMsg}}\r\n  </div>\r\n  <div class=\"alert\" *ngIf=\"(!validating && !error)\" style=\"visibility:hidden\">\r\n    Placeholder alert.\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"rs.isCalling()\">\r\n  <div>\r\n    <img src=\"assets/loaders/spinning-circles.svg\" alt=\"Loading\" />\r\n  </div>\r\n</div>"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/welcome']\"><span>{{title}}</span> <sub>{{cs.get().env}}</sub></a>\r\n    <ul class=\"nav navbar-nav\" *ngIf=\"auth.isAuthenticated()\">\r\n      <li *ngFor=\"let item of menu\">\r\n        <a [routerLink]=\"item.route\">{{item.label}}</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li *ngIf=\"!auth.isAuthenticated()\">\r\n        <p class=\"navbar-btn btn-group\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Sign in</a>\r\n          <button class=\"btn btn-success\" [routerLink]=\"['/signup']\">Sign up</button>\r\n        </p>\r\n      </li>\r\n      <li *ngIf=\"auth.isAuthenticated()\">\r\n        <a>{{auth.getUser().fname}} {{auth.getUser().lname}}</a>\r\n      </li>\r\n      <li *ngIf=\"auth.isAuthenticated()\">\r\n        <p class=\"navbar-btn\">\r\n          <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>\r\n    <a class=\"btn btn-warning\" [routerLink]=\"['/users']\"><i class=\"glyphicon glyphicon-arrow-left\"></i> Back</a>\r\n  </p>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"fname\">First Name</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"fname\" [(ngModel)]=\"user.fname\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"lname\">Last Name</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"lname\" [(ngModel)]=\"user.lname\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\"/>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"role\">Role</label>\r\n    <select name=\"role\" class=\"form-control\" [(ngModel)]=\"user.role\">\r\n      <option value=\"\">-- Select Role --</option>\r\n      <option value=\"ADMIN\">Admin</option>\r\n      <option value=\"USER\">User</option>\r\n    </select>\r\n  </div>\r\n  <p>\r\n    <button class=\"btn btn-primary btn-lg\" (click)=\"saveUser()\"><i class=\"glyphicon glyphicon-floppy-disk\"></i> Save</button>\r\n  </p>\r\n</div>"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"searchUsers()\">\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-btn\">\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/user/add']\">\r\n        <i class=\"glyphicon glyphicon-plus\"></i> Add\r\n      </a>\r\n    </span>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" />\r\n    <span class=\"input-group-btn\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">\r\n        <i class=\"glyphicon glyphicon-search\"></i>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</form>\r\n<div class=\"ua-record-row\" *ngFor=\"let user of users; let i = index\" [@record]=\"user.status\">\r\n  <div class=\"btn-group btn-group-lg\" role=\"group\">\r\n    <a class=\"btn btn-danger\" (click)=\"deleteUser(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\r\n    <div class=\"btn btn-primary\" [routerLink]=\"['/user', user.id]\">\r\n      <i class=\"glyphicon glyphicon-pencil\"></i>\r\n      <span>{{user.fname}} {{user.lname}} ({{user.username}})</span>\r\n      <span>{{user.email}}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works!\r\n</p>\r\n<form [formGroup]=\"testForm\" (ngSubmit)=\"submit(testForm.value)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <ua-username-input label=\"Username\" (groupCreated)=\"onUsernameGroupCreated($event)\">\r\n      </ua-username-input>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <ua-user-email-input label=\"TheEmail\" (groupCreated)=\"onUserEmailGroupCreated($event)\">\r\n      </ua-user-email-input>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <ua-password-input></ua-password-input>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-warning has-feedback\">\r\n        <label class=\"control-label\" for=\"inputWarning2\">Input with warning</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputWarning2\" aria-describedby=\"inputWarning2Status\">\r\n        <span class=\"glyphicon glyphicon-warning-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputWarning2Status\" class=\"sr-only\">(warning)</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-success has-feedback\">\r\n        <label class=\"control-label\" for=\"inputGroupSuccess1\">Input group with success</label>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">@</span>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess1\" aria-describedby=\"inputGroupSuccess1Status\">\r\n        </div>\r\n        <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputGroupSuccess1Status\" class=\"sr-only\">(success)</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-error has-feedback\">\r\n        <label class=\"control-label\" for=\"inputError2\">Input with error</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputError2\" aria-describedby=\"inputError2Status\">\r\n        <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputError2Status\" class=\"sr-only\">(error)</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-success has-feedback\">\r\n        <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\r\n        <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!testForm.valid\">\r\n      <i class=\"glyphicon glyphicon-plus\"></i>Submit\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Welcome</h1>\n</div>"

/***/ }),
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(109);


/***/ })
],[251]);
//# sourceMappingURL=main.bundle.js.map
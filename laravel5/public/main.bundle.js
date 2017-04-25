webpackJsonp([1,4],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(23);
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
                .subscribe(function (data) { return _this.updateToken(data); }, function (error) { return _this.clearToken(); });
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(23);
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

/***/ 239:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 239;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(90);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(17);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ultimate-atlas',
        template: __webpack_require__(341),
        styles: [__webpack_require__(316)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_login_login_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_recover_password_recover_password_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_signup_signup_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_signup_done_signup_done_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loading_loading_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__test_test_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__request_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__inputs_validator_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__inputs_inputs_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modules_user_user_module__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modules_daily_daily_module__ = __webpack_require__(258);
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
            __WEBPACK_IMPORTED_MODULE_19__inputs_inputs_module__["a" /* InputsModule */],
            __WEBPACK_IMPORTED_MODULE_20__modules_user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_21__modules_daily_daily_module__["a" /* DailyModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__auth_recover_password_recover_password_component__["a" /* RecoverPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_11__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_signup_done_signup_done_component__["a" /* SignupDoneComponent */],
            __WEBPACK_IMPORTED_MODULE_13__loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__test_test_component__["a" /* TestComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_17__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_18__inputs_validator_service__["a" /* ValidatorService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_recover_password_recover_password_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_done_signup_done_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_test_component__ = __webpack_require__(88);
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

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
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
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.isValidName.bind(this)]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormGroup */]({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], NameInput.prototype, "groupCreated", void 0);
NameInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-name-input',
        template: __webpack_require__(346),
        styles: [__webpack_require__(321)]
    }),
    __metadata("design:paramtypes", [])
], NameInput);

var _a;
//# sourceMappingURL=name-input.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
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
        this.field = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]);
        this.confirmed = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.areEqual.bind(this)]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormGroup */]({});
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], PasswordInput.prototype, "groupCreated", void 0);
PasswordInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-password-input',
        template: __webpack_require__(347),
        styles: [__webpack_require__(322)]
    }),
    __metadata("design:paramtypes", [])
], PasswordInput);

var _a;
//# sourceMappingURL=password-input.component.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validatable_input__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_service__ = __webpack_require__(32);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-user-email-input',
        template: __webpack_require__(348),
        styles: [__webpack_require__(323)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */]) === "function" && _a || Object])
], UserEmailInput);

var _a;
//# sourceMappingURL=user-email-input.component.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validatable_input__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator_service__ = __webpack_require__(32);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-username-input',
        template: __webpack_require__(349),
        styles: [__webpack_require__(324)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__validator_service__["a" /* ValidatorService */]) === "function" && _a || Object])
], UsernameInput);

var _a;
//# sourceMappingURL=username-input.component.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(22);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-loading',
        template: __webpack_require__(350),
        styles: [__webpack_require__(325)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], LoadingComponent);

var _a;
//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var menu = [
    { label: 'Users', route: ['/users'] },
    { label: 'Daily', route: ['/daily/trans'] }
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu__ = __webpack_require__(256);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-menu',
        template: __webpack_require__(351),
        styles: [__webpack_require__(326)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daily_routes__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_datepicker__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_timepicker__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trans_list_trans_list_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trans_detail_trans_detail_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__daily_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DailyModule = (function () {
    function DailyModule() {
    }
    return DailyModule;
}());
DailyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__daily_routes__["a" /* DailyRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_6__trans_list_trans_list_component__["a" /* TransListComponent */], __WEBPACK_IMPORTED_MODULE_7__trans_detail_trans_detail_component__["a" /* TransDetailComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__daily_service__["a" /* DailyService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* DatePipe */]]
    })
], DailyModule);

//# sourceMappingURL=daily.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trans_list_trans_list_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trans_detail_trans_detail_component__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyRoutes; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'daily/trans', component: __WEBPACK_IMPORTED_MODULE_3__trans_list_trans_list_component__["a" /* TransListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]] },
    { path: 'daily/trans/:id', component: __WEBPACK_IMPORTED_MODULE_4__trans_detail_trans_detail_component__["a" /* TransDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]] },
    { path: 'daily/trans/add', component: __WEBPACK_IMPORTED_MODULE_4__trans_detail_trans_detail_component__["a" /* TransDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]] },
];
var DailyRoutes = (function () {
    function DailyRoutes() {
    }
    return DailyRoutes;
}());
DailyRoutes = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__["a" /* AuthorizedGuard */]]
    })
], DailyRoutes);

//# sourceMappingURL=daily.routes.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inputs_inputs_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routes__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_detail_user_detail_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__(44);
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
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__inputs_inputs_module__["a" /* InputsModule */],
            __WEBPACK_IMPORTED_MODULE_4__user_routes__["a" /* UserRoutes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__user_list_user_list_component__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_6__user_detail_user_detail_component__["a" /* UserDetailComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_detail_user_detail_component__ = __webpack_require__(86);
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(90);
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".loader {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #fff;\r\n    opacity: 0.75;\r\n    z-index: 999;\r\n}\r\n\r\n.loader > div {\r\n    position: relative;\r\n    left:50%;\r\n    top:50%;\r\n    margin: -64px 0 0 -64px;\r\n}\r\n\r\n.loader > div > img {\r\n    width:128px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".trans_negative {\r\n    color:darkred;\r\n}\r\n\r\n.trans_positive {\r\n    color:darkgreen;\r\n}\r\n\r\n.trans_transport {\r\n    color:blue;\r\n}\r\n\r\n.trans_food {\r\n    color:darkgreen;\r\n}\r\n\r\n.trans_purchases {\r\n    color:darkorange;\r\n}\r\n\r\n.trans_sortie {\r\n    color:darkmagenta;\r\n}\r\n\r\n.trans_other {\r\n    color:darkslategrey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 103,
	"./af.js": 103,
	"./ar": 110,
	"./ar-dz": 104,
	"./ar-dz.js": 104,
	"./ar-kw": 105,
	"./ar-kw.js": 105,
	"./ar-ly": 106,
	"./ar-ly.js": 106,
	"./ar-ma": 107,
	"./ar-ma.js": 107,
	"./ar-sa": 108,
	"./ar-sa.js": 108,
	"./ar-tn": 109,
	"./ar-tn.js": 109,
	"./ar.js": 110,
	"./az": 111,
	"./az.js": 111,
	"./be": 112,
	"./be.js": 112,
	"./bg": 113,
	"./bg.js": 113,
	"./bn": 114,
	"./bn.js": 114,
	"./bo": 115,
	"./bo.js": 115,
	"./br": 116,
	"./br.js": 116,
	"./bs": 117,
	"./bs.js": 117,
	"./ca": 118,
	"./ca.js": 118,
	"./cs": 119,
	"./cs.js": 119,
	"./cv": 120,
	"./cv.js": 120,
	"./cy": 121,
	"./cy.js": 121,
	"./da": 122,
	"./da.js": 122,
	"./de": 125,
	"./de-at": 123,
	"./de-at.js": 123,
	"./de-ch": 124,
	"./de-ch.js": 124,
	"./de.js": 125,
	"./dv": 126,
	"./dv.js": 126,
	"./el": 127,
	"./el.js": 127,
	"./en-au": 128,
	"./en-au.js": 128,
	"./en-ca": 129,
	"./en-ca.js": 129,
	"./en-gb": 130,
	"./en-gb.js": 130,
	"./en-ie": 131,
	"./en-ie.js": 131,
	"./en-nz": 132,
	"./en-nz.js": 132,
	"./eo": 133,
	"./eo.js": 133,
	"./es": 135,
	"./es-do": 134,
	"./es-do.js": 134,
	"./es.js": 135,
	"./et": 136,
	"./et.js": 136,
	"./eu": 137,
	"./eu.js": 137,
	"./fa": 138,
	"./fa.js": 138,
	"./fi": 139,
	"./fi.js": 139,
	"./fo": 140,
	"./fo.js": 140,
	"./fr": 143,
	"./fr-ca": 141,
	"./fr-ca.js": 141,
	"./fr-ch": 142,
	"./fr-ch.js": 142,
	"./fr.js": 143,
	"./fy": 144,
	"./fy.js": 144,
	"./gd": 145,
	"./gd.js": 145,
	"./gl": 146,
	"./gl.js": 146,
	"./gom-latn": 147,
	"./gom-latn.js": 147,
	"./he": 148,
	"./he.js": 148,
	"./hi": 149,
	"./hi.js": 149,
	"./hr": 150,
	"./hr.js": 150,
	"./hu": 151,
	"./hu.js": 151,
	"./hy-am": 152,
	"./hy-am.js": 152,
	"./id": 153,
	"./id.js": 153,
	"./is": 154,
	"./is.js": 154,
	"./it": 155,
	"./it.js": 155,
	"./ja": 156,
	"./ja.js": 156,
	"./jv": 157,
	"./jv.js": 157,
	"./ka": 158,
	"./ka.js": 158,
	"./kk": 159,
	"./kk.js": 159,
	"./km": 160,
	"./km.js": 160,
	"./kn": 161,
	"./kn.js": 161,
	"./ko": 162,
	"./ko.js": 162,
	"./ky": 163,
	"./ky.js": 163,
	"./lb": 164,
	"./lb.js": 164,
	"./lo": 165,
	"./lo.js": 165,
	"./lt": 166,
	"./lt.js": 166,
	"./lv": 167,
	"./lv.js": 167,
	"./me": 168,
	"./me.js": 168,
	"./mi": 169,
	"./mi.js": 169,
	"./mk": 170,
	"./mk.js": 170,
	"./ml": 171,
	"./ml.js": 171,
	"./mr": 172,
	"./mr.js": 172,
	"./ms": 174,
	"./ms-my": 173,
	"./ms-my.js": 173,
	"./ms.js": 174,
	"./my": 175,
	"./my.js": 175,
	"./nb": 176,
	"./nb.js": 176,
	"./ne": 177,
	"./ne.js": 177,
	"./nl": 179,
	"./nl-be": 178,
	"./nl-be.js": 178,
	"./nl.js": 179,
	"./nn": 180,
	"./nn.js": 180,
	"./pa-in": 181,
	"./pa-in.js": 181,
	"./pl": 182,
	"./pl.js": 182,
	"./pt": 184,
	"./pt-br": 183,
	"./pt-br.js": 183,
	"./pt.js": 184,
	"./ro": 185,
	"./ro.js": 185,
	"./ru": 186,
	"./ru.js": 186,
	"./sd": 187,
	"./sd.js": 187,
	"./se": 188,
	"./se.js": 188,
	"./si": 189,
	"./si.js": 189,
	"./sk": 190,
	"./sk.js": 190,
	"./sl": 191,
	"./sl.js": 191,
	"./sq": 192,
	"./sq.js": 192,
	"./sr": 194,
	"./sr-cyrl": 193,
	"./sr-cyrl.js": 193,
	"./sr.js": 194,
	"./ss": 195,
	"./ss.js": 195,
	"./sv": 196,
	"./sv.js": 196,
	"./sw": 197,
	"./sw.js": 197,
	"./ta": 198,
	"./ta.js": 198,
	"./te": 199,
	"./te.js": 199,
	"./tet": 200,
	"./tet.js": 200,
	"./th": 201,
	"./th.js": 201,
	"./tl-ph": 202,
	"./tl-ph.js": 202,
	"./tlh": 203,
	"./tlh.js": 203,
	"./tr": 204,
	"./tr.js": 204,
	"./tzl": 205,
	"./tzl.js": 205,
	"./tzm": 207,
	"./tzm-latn": 206,
	"./tzm-latn.js": 206,
	"./tzm.js": 207,
	"./uk": 208,
	"./uk.js": 208,
	"./ur": 209,
	"./ur.js": 209,
	"./uz": 211,
	"./uz-latn": 210,
	"./uz-latn.js": 210,
	"./uz.js": 211,
	"./vi": 212,
	"./vi.js": 212,
	"./x-pseudo": 213,
	"./x-pseudo.js": 213,
	"./yo": 214,
	"./yo.js": 214,
	"./zh-cn": 215,
	"./zh-cn.js": 215,
	"./zh-hk": 216,
	"./zh-hk.js": 216,
	"./zh-tw": 217,
	"./zh-tw.js": 217
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 334;


/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "<ua-loading></ua-loading>\r\n<ua-menu title=\"{{title}}\"></ua-menu>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ 342:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-3\"></div>\r\n  <div class=\"col-sm-6\">\r\n    <div class=\"panel panel-default panel-primary\">\r\n      <div class=\"panel-heading\">Login</div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" value=\"\">\r\n        </div>\r\n        <div  class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" value=\"\">\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"loginFailed\">\r\n          <p style=\"color:red\">Login failed, check credentials and try again</p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <a [routerLink]=\"['/recover-password']\">Forgot Password?</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\"></div>\r\n</div>"

/***/ }),

/***/ 343:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"panel panel-default panel-primary\">\n      <div class=\"panel-heading\">Type your Email to reset your password</div>\n      <div class=\"panel-body\">\n        <div  class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" value=\"\">\n        </div>\n        <div  class=\"form-group\">\n          <button class=\"btn btn-primary\" (click)=\"sendResetPasswordEmail()\" [disabled]=\"sending\" *ngIf=\"!sent\">Reset Password</button>\n          <div *ngIf=\"sent\">\n            <p>Email sent! Click on the link in the email to reset your password.</p>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Sign In</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>"

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\"><h2>Sign Up successfull!</h2></div>\n  <div class=\"panel-body\">\n    You will receive an email shortly with instructions to log in.\n  </div>\n</div>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\"><h2>Sign Up!</h2></div>\r\n  <div class=\"panel-body\">\r\n    <form novalidate [formGroup]=\"signupForm\" *ngIf=\"active\" (ngSubmit)=\"signupUser(signupForm.value)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <ua-username-input label=\"Username\" (groupCreated)=\"onUsernameGroup($event)\"></ua-username-input>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          <ua-user-email-input label=\"Email\" (groupCreated)=\"onEmailGroup($event)\"></ua-user-email-input>\r\n        </div>\r\n      </div>\r\n      <div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <ua-password-input (groupCreated)=\"onPasswordGroup($event)\"></ua-password-input>\r\n        </div>\r\n        <div class=\"col-sm-8\"></div>\r\n      </div>\r\n        <ua-name-input (groupCreated)=\"onFirstNameGroup($event)\"></ua-name-input>\r\n        <ua-name-input (groupCreated)=\"onLastNameGroup($event)\"></ua-name-input>\r\n        <input type=\"hidden\" name=\"role\" formControlName=\"role\"/>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"!signupForm.valid\">\r\n            <i class=\"glyphicon glyphicon-plus\"></i>Sign up!\r\n          </button>\r\n          <button type=\"reset\" class=\"btn btn-warning btn-lg\">\r\n            <i class=\"glyphicon glyphicon-plus\"></i>Reset\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\" class=\"form-group has-feedback\" [ngClass]=\"fieldClass\">\n  <label>{{label}}</label>\n  <input type=\"text\" class=\"form-control\" name=\"value\" formControlName=\"value\" />\n  <span *ngIf=\"error\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n  <span *ngIf=\"success\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n  <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">\n      {{errorMessage}}\n    </div>\n    <div class=\"alert\" *ngIf=\"!error\" style=\"visibility:hidden\">\n      Placeholder alert.\n    </div>\n</div>"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\n  <div class=\"form-group has-feedback\" [ngClass]=\"classes.value\">\n    <label>{{label}}</label>\n    <input type=\"password\" class=\"form-control\" name=\"value\" formControlName=\"value\"/>\n    <span *ngIf=\"errors.value\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"!errors.value && !pristine.value\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n    <div class=\"alert alert-danger\" *ngIf=\"errors.value\">\n      {{errors.value}}\n    </div>\n    <div class=\"alert\" *ngIf=\"!errors.value\" style=\"visibility:hidden\">\n      Placeholder alert.\n    </div>\n  </div>\n  <div class=\"form-group has-feedback\" [ngClass]=\"classes.confirmed\">\n    <label>{{confirmLabel}}</label>\n    <input type=\"password\" class=\"form-control\" name=\"confirmed\" formControlName=\"confirmed\"/>\n    <span *ngIf=\"errors.confirmed\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"!errors.confirmed && !pristine.confirmed\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\n    <div class=\"alert alert-danger\" *ngIf=\"errors.confirmed\">\n      {{errors.confirmed}}\n    </div>\n    <div class=\"alert\" *ngIf=\"!errors.confirmed\" style=\"visibility:hidden\">\n      Placeholder alert.\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\" class=\"form-group has-feedback\" [ngClass]=\"groupClass\">\r\n  <label>{{label}}</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"value\" formControlName=\"value\" />\r\n  <span *ngIf=\"error\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"success\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"validating\" class=\"glyphicon ua-icon ua-icon-bars form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n  </div>\r\n  <div class=\"alert alert-info\" *ngIf=\"validating\">\r\n    {{validatingMsg}}\r\n  </div>\r\n  <div class=\"alert\" *ngIf=\"(!validating && !error)\" style=\"visibility:hidden\">\r\n    Placeholder alert.\r\n  </div>\r\n</div>"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\" class=\"form-group has-feedback\" [ngClass]=\"groupClass\">\r\n  <label>{{label}}</label>\r\n  <input type=\"text\" class=\"form-control\" name=\"value\" formControlName=\"value\" />\r\n  <span *ngIf=\"error\" class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"success\" class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <span *ngIf=\"validating\" class=\"glyphicon ua-icon ua-icon-bars form-control-feedback\" aria-hidden=\"true\"></span>\r\n  <div class=\"alert alert-danger\" *ngIf=\"error\">\r\n    {{errorMessage}}\r\n  </div>\r\n  <div class=\"alert alert-info\" *ngIf=\"validating\">\r\n    {{validatingMsg}}\r\n  </div>\r\n  <div class=\"alert\" *ngIf=\"(!validating && !error)\" style=\"visibility:hidden\">\r\n    Placeholder alert.\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"rs.isCalling()\">\r\n  <div>\r\n    <img src=\"assets/loaders/spinning-circles.svg\" alt=\"Loading\" />\r\n  </div>\r\n</div>"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/welcome']\"><span>{{title}}</span> <sub>{{cs.get().env}}</sub></a>\r\n    <ul class=\"nav navbar-nav\" *ngIf=\"auth.isAuthenticated()\">\r\n      <li *ngFor=\"let item of menu\">\r\n        <a [routerLink]=\"item.route\">{{item.label}}</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li *ngIf=\"!auth.isAuthenticated()\">\r\n        <p class=\"navbar-btn btn-group\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Sign in</a>\r\n          <button class=\"btn btn-success\" [routerLink]=\"['/signup']\">Sign up</button>\r\n        </p>\r\n      </li>\r\n      <li *ngIf=\"auth.isAuthenticated()\">\r\n        <a>{{auth.getUser().fname}} {{auth.getUser().lname}}</a>\r\n      </li>\r\n      <li *ngIf=\"auth.isAuthenticated()\">\r\n        <p class=\"navbar-btn\">\r\n          <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\r\n        </p>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"saveTrans()\" name=\"transForm\">\r\n  <p>\r\n    <a class=\"btn btn-warning\" [routerLink]=\"['/daily/trans']\"><i class=\"glyphicon glyphicon-arrow-left\"></i> Back</a>\r\n  </p>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <label>Event Date</label> \r\n      <h4>{{trans.event_date | date:'yyyy-MM-dd HH:mm:ss'}}</h4> \r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <label>Date</label> \r\n      <input type=\"text\" class=\"form-control\" \r\n        pattern=\"\\d{4}-\\d{2}-\\d{2}\" required\r\n        [(ngModel)]=\"edate\" (change)=\"onDateChange()\" name=\"edate\" [readonly]=\"dateReadOnly\" />\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <label>Time</label> \r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-primary\" (click)=\"onNow()\" [disabled]=\"dateReadOnly\">Now</button>\r\n          <button class=\"btn btn-primary\" (click)=\"onSub(1)\" [disabled]=\"dateReadOnly\">-1mn</button>\r\n          <button class=\"btn btn-primary\" (click)=\"onSub(2)\" [disabled]=\"dateReadOnly\">-2mn</button>\r\n          <button class=\"btn btn-primary\" (click)=\"onSub(5)\" [disabled]=\"dateReadOnly\">-5mn</button>\r\n        </span>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"etime\" name=\"etime\" pattern=\"\\d{2}:\\d{2}:\\d{2}\" (change)=\"onTimeChange()\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label>Category</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"trans.cat_id\" name=\"cat_id\" required>\r\n            <option value=\"\">--</option>\r\n            <option *ngFor=\"let cat of cats\" value=\"{{cat.id}}\">{{cat.name}}</option>\r\n        </select> \r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label>Value</label>\r\n        <input type=\"number\" class=\"form-control\" name=\"value\" [(ngModel)]=\"trans.value\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group\">\r\n        <label>Type</label>\r\n        <select class=\"form-control\" name=\"type\" [(ngModel)]=\"trans.type\" required>\r\n            <option value=\"CASH\">Cash</option>\r\n            <option value=\"DEBIT\">Debit</option>\r\n        </select> \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p>\r\n    <button class=\"btn btn-primary btn-lg\" type=\"submit\"><i class=\"glyphicon glyphicon-floppy-disk\"></i> Save</button>\r\n  </p>\r\n</form>"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-btn\">\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/daily/trans/add']\">\r\n        <i class=\"glyphicon glyphicon-plus\"></i> Add\r\n      </a>\r\n    </span>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" />\r\n    <span class=\"input-group-btn\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">\r\n        <i class=\"glyphicon glyphicon-search\"></i>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</form>\r\n<div class=\"ua-record-row\" *ngFor=\"let tran of trans; let i = index\" [@record]=\"tran.status\">\r\n  <div class=\"btn-group btn-group-lg\" role=\"group\">\r\n    <div *ngIf=\"group(i)\"><h3>{{datestr(tran.edate)}}</h3></div>\r\n    <a class=\"btn btn-danger\" (click)=\"deleteTrans(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\r\n    <div class=\"btn btn-default\" [routerLink]=\"['/daily/trans', tran.id]\">\r\n      <i class=\"glyphicon glyphicon-pencil\"></i>\r\n      <span>{{tran.event_date}}</span>\r\n      <span [ngClass]=\"catClass(tran.hypercat)\">{{tran.category}}</span>\r\n      <span [ngClass]=\"valueClass(tran.value)\">( ${{tran.value | number:'1.2-2'}} )</span>\r\n      \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"userForm\" (ngSubmit)=\"saveUser(userForm.value)\">\r\n  <p>\r\n    <a class=\"btn btn-warning\" [routerLink]=\"['/users']\"><i class=\"glyphicon glyphicon-arrow-left\"></i> Back</a>\r\n  </p>\r\n  <ua-username-input label=\"Username\" default=\"{{user.username}}\" (groupCreated)=\"onUsername($event)\"></ua-username-input>\r\n  <ua-name-input label=\"First Name\" (groupCreated)=\"onFname($event)\"></ua-name-input>\r\n  <ua-name-input label=\"Last Name\" (groupCreated)=\"onLname($event)\"></ua-name-input>\r\n  \r\n  <ua-user-email-input label=\"Email\" (groupCreated)=\"onEmail($event)\"></ua-user-email-input>\r\n  <input type=\"hidden\" formControlName=\"role\" />\r\n  \r\n  <p>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-lg\"><i class=\"glyphicon glyphicon-floppy-disk\"></i> Save</button>\r\n  </p>\r\n</form>"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"searchUsers()\">\r\n  <div class=\"input-group\">\r\n    <span class=\"input-group-btn\">\r\n      <a class=\"btn btn-primary\" [routerLink]=\"['/user/add']\">\r\n        <i class=\"glyphicon glyphicon-plus\"></i> Add\r\n      </a>\r\n    </span>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" />\r\n    <span class=\"input-group-btn\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">\r\n        <i class=\"glyphicon glyphicon-search\"></i>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</form>\r\n<div class=\"ua-record-row\" *ngFor=\"let user of users; let i = index\" [@record]=\"user.status\">\r\n  <div class=\"btn-group btn-group-lg\" role=\"group\">\r\n    <a class=\"btn btn-danger\" (click)=\"deleteUser(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\r\n    <div class=\"btn btn-primary\" [routerLink]=\"['/user', user.id]\">\r\n      <i class=\"glyphicon glyphicon-pencil\"></i>\r\n      <span>{{user.fname}} {{user.lname}} ({{user.username}})</span>\r\n      <span>{{user.email}}</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works!\r\n</p>\r\n<form [formGroup]=\"testForm\" (ngSubmit)=\"submit(testForm.value)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <ua-username-input label=\"Username\" (groupCreated)=\"onUsernameGroupCreated($event)\">\r\n      </ua-username-input>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <ua-user-email-input label=\"TheEmail\" (groupCreated)=\"onUserEmailGroupCreated($event)\">\r\n      </ua-user-email-input>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <ua-password-input></ua-password-input>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-warning has-feedback\">\r\n        <label class=\"control-label\" for=\"inputWarning2\">Input with warning</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputWarning2\" aria-describedby=\"inputWarning2Status\">\r\n        <span class=\"glyphicon glyphicon-warning-sign form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputWarning2Status\" class=\"sr-only\">(warning)</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-success has-feedback\">\r\n        <label class=\"control-label\" for=\"inputGroupSuccess1\">Input group with success</label>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">@</span>\r\n          <input type=\"text\" class=\"form-control\" id=\"inputGroupSuccess1\" aria-describedby=\"inputGroupSuccess1Status\">\r\n        </div>\r\n        <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputGroupSuccess1Status\" class=\"sr-only\">(success)</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-error has-feedback\">\r\n        <label class=\"control-label\" for=\"inputError2\">Input with error</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputError2\" aria-describedby=\"inputError2Status\">\r\n        <span class=\"glyphicon glyphicon-remove form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputError2Status\" class=\"sr-only\">(error)</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-3\">\r\n      <div class=\"form-group has-success has-feedback\">\r\n        <label class=\"control-label\" for=\"inputSuccess2\">Input with success</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputSuccess2\" aria-describedby=\"inputSuccess2Status\">\r\n        <span class=\"glyphicon glyphicon-ok form-control-feedback\" aria-hidden=\"true\"></span>\r\n        <span id=\"inputSuccess2Status\" class=\"sr-only\">(success)</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!testForm.valid\">\r\n      <i class=\"glyphicon glyphicon-plus\"></i>Submit\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Welcome</h1>\n</div>"

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(240);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyService = (function () {
    function DailyService(rs) {
        this.rs = rs;
    }
    DailyService.prototype.getTransactions = function () {
        return this.rs.query('/daily_trans')
            .map(function (r) { return r.json(); });
    };
    DailyService.prototype.getTransaction = function (id) {
        return this.rs.get('/daily_trans', id)
            .map(function (r) { return r.json().daily_trans; });
    };
    DailyService.prototype.saveTransaction = function (trans, id) {
        return this.rs.save('/daily_trans', trans, id)
            .map(function (r) { return r.json(); });
    };
    DailyService.prototype.deleteTransaction = function (id) {
        return this.rs.delete('/daily_trans', id)
            .map(function (r) { return r.json(); });
    };
    DailyService.prototype.getCategories = function () {
        return this.rs.query('/daily_cats')
            .map(function (r) { return r.json(); });
    };
    return DailyService;
}());
DailyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], DailyService);

var _a;
//# sourceMappingURL=daily.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(23);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(75);
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(17);
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

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(17);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-login',
        template: __webpack_require__(342),
        styles: [__webpack_require__(317)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(17);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-recover-password',
        template: __webpack_require__(343),
        styles: [__webpack_require__(318)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], RecoverPasswordComponent);

var _a;
//# sourceMappingURL=recover-password.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-signup-done',
        template: __webpack_require__(344),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [])
], SignupDoneComponent);

//# sourceMappingURL=signup-done.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(17);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-signup',
        template: __webpack_require__(345),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__name_input_name_input_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_input_password_input_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_email_user_email_input_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__username_username_input_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validator_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var InputsModule = (function () {
    function InputsModule() {
    }
    return InputsModule;
}());
InputsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__name_input_name_input_component__["a" /* NameInput */], __WEBPACK_IMPORTED_MODULE_4__password_input_password_input_component__["a" /* PasswordInput */], __WEBPACK_IMPORTED_MODULE_5__user_email_user_email_input_component__["a" /* UserEmailInput */], __WEBPACK_IMPORTED_MODULE_6__username_username_input_component__["a" /* UsernameInput */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__validator_service__["a" /* ValidatorService */]],
        exports: [__WEBPACK_IMPORTED_MODULE_6__username_username_input_component__["a" /* UsernameInput */], __WEBPACK_IMPORTED_MODULE_5__user_email_user_email_input_component__["a" /* UserEmailInput */], __WEBPACK_IMPORTED_MODULE_4__password_input_password_input_component__["a" /* PasswordInput */], __WEBPACK_IMPORTED_MODULE_3__name_input_name_input_component__["a" /* NameInput */]]
    })
], InputsModule);

//# sourceMappingURL=inputs.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(362);
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
        console.log("ValidatableInput.init", this.default);
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](this.default, validators, this.validateCall.bind(this));
        this.controlCreated.emit(this.control);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormGroup */]({});
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
    __metadata("design:type", Object)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _a || Object)
], ValidatableInput.prototype, "groupCreated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* EventEmitter */]) === "function" && _b || Object)
], ValidatableInput.prototype, "controlCreated", void 0);
var _a, _b;
//# sourceMappingURL=validatable-input.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__daily_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransDetailComponent = (function () {
    function TransDetailComponent(ds, datepipe, route, router) {
        this.ds = ds;
        this.datepipe = datepipe;
        this.route = route;
        this.router = router;
        this.dateReadOnly = false;
        this.MINUTE = 1000 * 60;
        this.trans = {
            event_date: new Date(),
            cat_id: 0,
            user_id: 0,
            value: 0.0,
            type: 'CASH',
            category: '',
            status: ''
        };
        this.cats = [];
    }
    TransDetailComponent.prototype.displayDate = function () {
        this.edate = this.datepipe.transform(this.trans.event_date, "yyyy-MM-dd");
        this.etime = this.datepipe.transform(this.trans.event_date, "HH:mm:ss");
    };
    TransDetailComponent.prototype.onNow = function () {
        this.trans.event_date = new Date();
        this.displayDate();
    };
    TransDetailComponent.prototype.onSub = function (minOffset) {
        if (minOffset === void 0) { minOffset = 0; }
        this.trans.event_date = new Date(this.trans.event_date.valueOf() - minOffset * this.MINUTE);
        this.displayDate();
    };
    TransDetailComponent.prototype.saveTrans = function () {
        var _this = this;
        console.log("TransDetailComponent.saveTrans", this.trans);
        var id = +this.route.snapshot.params['id'];
        this.ds.saveTransaction(this.trans, id).subscribe(function (data) {
            _this.router.navigate(['/daily/trans']);
        });
    };
    TransDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.params['id'];
        if (id) {
            this.dateReadOnly = true;
            this.ds.getTransaction(id).subscribe(function (data) {
                _this.trans = data;
                _this.displayDate();
            });
        }
        else {
            this.dateReadOnly = false;
            this.displayDate();
        }
        this.ds.getCategories().subscribe(function (data) {
            _this.cats = data;
        });
    };
    TransDetailComponent.prototype.onDateChange = function () {
        this.displayDate();
    };
    TransDetailComponent.prototype.onTimeChange = function () {
        this.displayDate();
    };
    return TransDetailComponent;
}());
TransDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-trans-detail',
        template: __webpack_require__(352),
        styles: [__webpack_require__(327)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__daily_service__["a" /* DailyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__daily_service__["a" /* DailyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* DatePipe */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], TransDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=trans-detail.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daily_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransListComponent = (function () {
    function TransListComponent(ds, datepipe) {
        this.ds = ds;
        this.datepipe = datepipe;
        this.DAY = 1000 * 60 * 60 * 24;
    }
    TransListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getTransactions().subscribe(function (data) {
            _this.trans = data;
        });
    };
    TransListComponent.prototype.deleteTrans = function (i) {
        var _this = this;
        this.ds.deleteTransaction(this.trans[i].id).subscribe(function (data) {
            _this.trans[i].status = 'gone';
        });
    };
    TransListComponent.prototype.onAnimDone = function ($event, i) {
        if ($event.toState == 'gone') {
            console.log("TransListComponent.onAnimDone", $event, i);
            this.trans.splice(i, 1);
        }
    };
    TransListComponent.prototype.group = function (i) {
        if (i == 0)
            return true;
        else if (this.trans[i].edate != this.trans[i - 1].edate) {
            return true;
        }
        return false;
    };
    TransListComponent.prototype.datestr = function (date) {
        var now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        var today = this.datepipe.transform(now, "yyyy-MM-dd");
        if (today == date)
            return 'Today';
        var yesterday = this.datepipe.transform(now.valueOf() - this.DAY, "yyyy-MM-dd");
        if (yesterday == date)
            return 'Yesterday';
        var dbef = this.datepipe.transform(now.valueOf() - 2 * this.DAY, "yyyy-MM-dd");
        if (dbef == date)
            return 'Day Before Yesterday';
        return date;
    };
    TransListComponent.prototype.valueClass = function (value) {
        return (value > 0) ? 'trans_positive' : (value < 0) ? 'trans_negative' : '';
    };
    TransListComponent.prototype.catClass = function (hypercat) {
        switch (hypercat) {
            case 'TRANSPORT':
                return 'trans_transport';
            case 'FOOD':
                return 'trans_food';
            case 'PURCHASES':
                return 'trans_purchases';
            case 'SORTIE':
                return 'trans_sortie';
            case 'OTHER':
                return 'trans_other';
            case 'NONE':
            default:
                return '';
        }
    };
    return TransListComponent;
}());
TransListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-trans-list',
        template: __webpack_require__(353),
        styles: [__webpack_require__(328)],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* recordAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__daily_service__["a" /* DailyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* DatePipe */]) === "function" && _b || Object])
], TransListComponent);

var _a, _b;
//# sourceMappingURL=trans-list.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(44);
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
    function UserDetailComponent(route, userService, router, fb) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.user = {
            id: null,
            username: '',
            lname: '',
            fname: '',
            email: '',
            role: 'ADMIN',
            status: ''
        };
    }
    UserDetailComponent.prototype.onUsername = function (username) { this.userForm.addControl('username', username); };
    UserDetailComponent.prototype.onFname = function (fname) { this.userForm.addControl('fname', fname); };
    UserDetailComponent.prototype.onLname = function (lname) { this.userForm.addControl('lname', lname); };
    UserDetailComponent.prototype.onEmail = function (email) { this.userForm.addControl('email', email); };
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userForm = this.fb.group({
            role: this.fb.control('ADMIN')
        });
        var id = +this.route.snapshot.params['id'];
        if (id) {
            this.userService.getUser(id)
                .subscribe(function (user) {
                console.log("UserDetailComponent.ngOnInit R", user);
                _this.userForm.setValue({
                    username: { value: user.username },
                    fname: { value: user.fname },
                    lname: { value: user.lname },
                    email: { value: user.email },
                    role: user.role
                });
            });
        }
    };
    UserDetailComponent.prototype.saveUser = function (value) {
        console.log(value);
        /*
        this.userService.saveUser(this.user).subscribe(
          () => {
    
            this.router.navigate(['/users'])
          }
        );*/
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-user-detail',
        template: __webpack_require__(354),
        styles: [__webpack_require__(329)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], UserDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(76);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-user-list',
        template: __webpack_require__(355),
        styles: [__webpack_require__(330)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* recordAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__(356),
        styles: [__webpack_require__(331)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'ua-welcome',
        template: __webpack_require__(357),
        styles: [__webpack_require__(332)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 90:
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

/***/ })

},[392]);
//# sourceMappingURL=main.bundle.js.map
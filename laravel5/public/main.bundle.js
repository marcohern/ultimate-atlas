webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 106;


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(78);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(68);
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

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(14);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ultimate-atlas',
        template: __webpack_require__(190),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_user_user_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__request_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_recover_password_recover_password_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_signup_signup_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_signup_done_signup_done_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loading_loading_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__validators_equal_validator__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__validators_username_unique_validator__ = __webpack_require__(76);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
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
            __WEBPACK_IMPORTED_MODULE_13__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__auth_recover_password_recover_password_component__["a" /* RecoverPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_15__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__auth_signup_done_signup_done_component__["a" /* SignupDoneComponent */],
            __WEBPACK_IMPORTED_MODULE_17__loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__validators_equal_validator__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_19__validators_username_unique_validator__["a" /* UsernameUniqueValidator */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_12__config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_18__validators_equal_validator__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_19__validators_username_unique_validator__["a" /* UsernameUniqueValidator */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_recover_password_recover_password_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signup_signup_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signup_done_signup_done_component__ = __webpack_require__(71);
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(14);
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(28);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-loading',
        template: __webpack_require__(195),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], LoadingComponent);

var _a;
//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__(27);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-menu',
        template: __webpack_require__(196),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routes__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_detail_user_detail_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__(40);
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

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authorized_guard__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_list_user_list_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_detail_user_detail_component__ = __webpack_require__(73);
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

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(36);
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

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".loader {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-color: #fff;\n    opacity: 0.75;\n    z-index: 999;\n}\n\n.loader > div {\n    position: relative;\n    left:50%;\n    top:50%;\n    margin: -64px 0 0 -64px;\n}\n\n.loader > div > img {\n    width:128px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<ua-loading></ua-loading>\n<ua-menu title=\"{{title}}\"></ua-menu>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3\"></div>\n  <div class=\"col-sm-6\">\n    <div class=\"panel panel-default panel-primary\">\n      <div class=\"panel-heading\">Login</div>\n      <div class=\"panel-body\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" value=\"\">\n        </div>\n        <div  class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" value=\"\">\n        </div>\n        <div class=\"form-group\" *ngIf=\"loginFailed\">\n          <p style=\"color:red\">Login failed, check credentials and try again</p>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n        </div>\n        <div class=\"form-group\">\n          <a [routerLink]=\"['/recover-password']\">Forgot Password?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-3\"></div>\n</div>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"panel panel-default panel-primary\">\n      <div class=\"panel-heading\">Type your Email to reset your password</div>\n      <div class=\"panel-body\">\n        <div  class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" value=\"\">\n        </div>\n        <div  class=\"form-group\">\n          <button class=\"btn btn-primary\" (click)=\"sendResetPasswordEmail()\" [disabled]=\"sending\" *ngIf=\"!sent\">Reset Password</button>\n          <div *ngIf=\"sent\">\n            <p>Email sent! Click on the link in the email to reset your password.</p>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Sign In</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<p>\n  signup-done works!\n</p>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signupForm\" *ngIf=\"active\" (ngSubmit)=\"signupUser(signupForm.value)\" class=\"validatable\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" name=\"username\"\n      formControlName=\"username\"/>\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\"\n      formControlName=\"password\"/>\n  </div><div class=\"form-group\">\n    <label>Confirm Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"confirmPassword\"\n      formControlName=\"confirmPassword\"/>\n  </div>\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"fname\"\n      formControlName=\"fname\"/>\n  </div>\n  <div class=\"form-group\">\n    <label >Last Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"lname\"\n      formControlName=\"lname\"/>\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" name=\"email\" \n      formControlName=\"email\"/>\n  </div>\n  <div class=\"form-group\">\n    <label>Role</label>\n    <select class=\"form-control\" name=\"role\"\n      formControlName=\"role\">\n      <option value=\"\">-- Select Role --</option>\n      <option value=\"ADMIN\">Admin</option>\n      <option value=\"USER\">User</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-lg\">\n      <i class=\"glyphicon glyphicon-plus\"></i>Sign up!\n    </button>\n    <button type=\"reset\" class=\"btn btn-warning btn-lg\">\n      <i class=\"glyphicon glyphicon-plus\"></i>Reset\n    </button>\n  </div>\n</form>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\" *ngIf=\"rs.isCalling()\">\n  <div>\n    <img src=\"assets/loaders/spinning-circles.svg\" alt=\"Loading\" />\n  </div>\n</div>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/welcome']\">{{title}} <sub>{{cs.get().env}}</sub></a>\n    <ul class=\"nav navbar-nav\" *ngIf=\"auth.isAuthenticated()\">\n      <li><a [routerLink]=\"['/users']\">Users</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"!auth.isAuthenticated()\">\n        <p class=\"navbar-btn btn-group\">\n          <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Sign in</a>\n          <button class=\"btn btn-success\" [routerLink]=\"['/signup']\">Sign up</button>\n        </p>\n      </li>\n      <li *ngIf=\"auth.isAuthenticated()\">\n        <a>{{auth.getUser().fname}} {{auth.getUser().lname}}</a>\n      </li>\n      <li *ngIf=\"auth.isAuthenticated()\">\n        <p class=\"navbar-btn\">\n          <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\n        </p>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>\n    <a class=\"btn btn-warning\" [routerLink]=\"['/users']\"><i class=\"glyphicon glyphicon-arrow-left\"></i> Back</a>\n  </p>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"fname\">First Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"fname\" [(ngModel)]=\"user.fname\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"lname\">Last Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"lname\" [(ngModel)]=\"user.lname\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"role\">Role</label>\n    <select name=\"role\" class=\"form-control\" [(ngModel)]=\"user.role\">\n      <option value=\"\">-- Select Role --</option>\n      <option value=\"ADMIN\">Admin</option>\n      <option value=\"USER\">User</option>\n    </select>\n  </div>\n  <p>\n    <button class=\"btn btn-primary btn-lg\" (click)=\"saveUser()\"><i class=\"glyphicon glyphicon-floppy-disk\"></i> Save</button>\n  </p>\n</div>"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"searchUsers()\">\n  <div class=\"input-group\">\n    <span class=\"input-group-btn\">\n      <a class=\"btn btn-primary\" [routerLink]=\"['/user/add']\">\n        <i class=\"glyphicon glyphicon-plus\"></i> Add\n      </a>\n    </span>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" />\n    <span class=\"input-group-btn\">\n      <button type=\"submit\" class=\"btn btn-primary\">\n        <i class=\"glyphicon glyphicon-search\"></i>\n      </button>\n    </span>\n  </div>\n</form>\n<div class=\"ua-record-row\" *ngFor=\"let user of users; let i = index\" [@record]=\"user.status\">\n  <div class=\"btn-group btn-group-lg\" role=\"group\">\n    <a class=\"btn btn-danger\" (click)=\"deleteUser(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n    <div class=\"btn btn-primary\" [routerLink]=\"['/user', user.id]\">\n      <i class=\"glyphicon glyphicon-pencil\"></i>\n      <span>{{user.fname}} {{user.lname}} ({{user.username}})</span>\n      <span>{{user.email}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Welcome</h1>\n</div>"

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(107);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(78);
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(36);
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
    RequestService.prototype._get = function (url) {
        var _this = this;
        this.calling = true;
        return this.http
            .get(url, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype._post = function (url, body) {
        var _this = this;
        this.calling = true;
        return this.http
            .post(url, body, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype._put = function (url, body) {
        var _this = this;
        this.calling = true;
        return this.http
            .put(url, body, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype._delete = function (url) {
        var _this = this;
        this.calling = true;
        return this.http
            .delete(url, { headers: this.buildHeaders() })
            .do(function (data) { return _this.do(data); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RequestService.prototype.get = function (uri, id) {
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Get, id, new Map());
        return this._get(url);
    };
    RequestService.prototype.post = function (uri, body) {
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Post, null, new Map());
        if (this.cs.get().request.mock)
            return this._get(url);
        return this._post(url, body);
    };
    RequestService.prototype.query = function (uri, q) {
        if (q === void 0) { q = ''; }
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Query, null, new Map([
            ['q', [q]]
        ]));
        return this._get(url);
    };
    RequestService.prototype.create = function (uri, body) {
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Create, null, new Map());
        if (this.cs.get().request.mock)
            return this._get(url);
        return this._post(url, body);
    };
    RequestService.prototype.update = function (uri, body, id) {
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Update, id, new Map());
        if (this.cs.get().request.mock)
            return this._get(url);
        return this._put(url, body);
    };
    RequestService.prototype.delete = function (uri, id) {
        var url = this.cs.mapUrl(uri, __WEBPACK_IMPORTED_MODULE_2__config_service__["b" /* EthnicMethod */].Delete, id, new Map());
        if (this.cs.get().request.mock)
            return this._get(url);
        return this._delete(url);
    };
    RequestService.prototype.save = function (uri, body) {
        if (body.id) {
            return this.update(uri, body, body.id);
        }
        else {
            return this.create(uri, body);
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(36);
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
        this.usersUrl = '/users';
    }
    UserService.prototype.getUsers = function (query) {
        if (query === void 0) { query = ''; }
        return this.rs.query(this.usersUrl, query)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.getUser = function (id) {
        return this.rs.get(this.usersUrl, id)
            .map(function (r) { return r.json().user; });
    };
    UserService.prototype.deleteUser = function (id) {
        console.log("UserService.deleteUser", id);
        return this.rs.delete(this.usersUrl, id)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.saveUser = function (user) {
        console.log("UserService.saveUser", user);
        return this.rs.save(this.usersUrl, user)
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(14);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-login',
        template: __webpack_require__(191),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(14);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-recover-password',
        template: __webpack_require__(192),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], RecoverPasswordComponent);

var _a;
//# sourceMappingURL=recover-password.component.js.map

/***/ }),

/***/ 71:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-signup-done',
        template: __webpack_require__(193),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], SignupDoneComponent);

//# sourceMappingURL=signup-done.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_equal_validator__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_username_unique_validator__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__(14);
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
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log("SignupComponent.ngOnInit");
        this.signupForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_username_unique_validator__["b" /* isUsenameUnique */]],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            confirmPassword: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
                    function (c) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__validators_equal_validator__["b" /* areEqual */])(c, "password"); }
                ]],
            fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]],
            role: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
        this.signupForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.active = true;
    };
    SignupComponent.prototype.onValueChanged = function (data) {
        //console.log("SignupComponent.onValueChanged",data);
    };
    SignupComponent.prototype.onUsernameChange = function () {
        console.log("SignupComponent.onUsernameChange");
    };
    SignupComponent.prototype.signupUser = function (value) {
        console.log('Reactive Form Data: ');
        console.log(value);
        /*
        var request:SignupRequest = {
          username: this.username,
          password: this.password,
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          role: this.role
        };
    
        this.auth.signup(request).subscribe(
          () => this.router.navigate(['/signup-done'])
        );*/
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-signup',
        template: __webpack_require__(194),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(40);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-user-detail',
        template: __webpack_require__(197),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__(115);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-user-list',
        template: __webpack_require__(198),
        styles: [__webpack_require__(186)],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations__["a" /* recordAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["b"] = areEqual;
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Attribute */])('mustBeEqualTo')),
    __metadata("design:paramtypes", [String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal.validator.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony export (immutable) */ __webpack_exports__["b"] = isUsenameUnique;
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
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_ASYNC_VALIDATORS */],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* forwardRef */])(function () { return UsernameUniqueValidator_1; }),
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], UsernameUniqueValidator);

var UsernameUniqueValidator_1;
//# sourceMappingURL=username-unique.validator.js.map

/***/ }),

/***/ 77:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'ua-welcome',
        template: __webpack_require__(199),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 78:
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

},[233]);
//# sourceMappingURL=main.bundle.js.map
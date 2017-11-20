webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form-container {\n  width: 550px;\n  max-width: 100%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n}\n\n.form-container .row {\n  width: 100%;\n}\n\n.form-container h1 {\n  text-align: center;\n  padding-bottom: 20px;\n  padding-left: 15px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n\n.app-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_list_users_list_component__ = __webpack_require__("../../../../../src/app/users/users-list/users-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_list_user_user_component__ = __webpack_require__("../../../../../src/app/users/users-list/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__birthdate_pipe__ = __webpack_require__("../../../../../src/app/birthdate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__box_box_component__ = __webpack_require__("../../../../../src/app/box/box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__box_box_list_box_list_component__ = __webpack_require__("../../../../../src/app/box/box-list/box-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_letters_service__ = __webpack_require__("../../../../../src/app/services/letters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__box_box_list_letter_letter_component__ = __webpack_require__("../../../../../src/app/box/box-list/letter/letter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__validators_name_validator_directive__ = __webpack_require__("../../../../../src/app/validators/name-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__validators_email_validator_directive__ = __webpack_require__("../../../../../src/app/validators/email-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__validators_sex_validator_directive__ = __webpack_require__("../../../../../src/app/validators/sex-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__validators_birthdat_validator_directive__ = __webpack_require__("../../../../../src/app/validators/birthdat-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__create_letter_create_letter_component__ = __webpack_require__("../../../../../src/app/create-letter/create-letter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__users_user_create_user_create_component__ = __webpack_require__("../../../../../src/app/users/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_userLogin_service__ = __webpack_require__("../../../../../src/app/services/userLogin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__fake_backend_fake_backend__ = __webpack_require__("../../../../../src/app/fake-backend/fake-backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var apiKey = '?apiKey=IDfsaUTMyV7Yis-KmKjiO-51QX9RRxvM';
var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'users',
        canActivate: [__WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_25__users_users_component__["a" /* UsersComponent */],
        children: [
            {
                path: 'users-list/:id',
                component: __WEBPACK_IMPORTED_MODULE_6__users_users_list_user_user_component__["a" /* UserComponent */],
            },
            {
                path: 'create-user',
                component: __WEBPACK_IMPORTED_MODULE_24__users_user_create_user_create_component__["a" /* UserCreateComponent */]
            },
            {
                path: 'rename-user/:id',
                component: __WEBPACK_IMPORTED_MODULE_24__users_user_create_user_create_component__["a" /* UserCreateComponent */]
            },
            {
                path: 'users-list',
                component: __WEBPACK_IMPORTED_MODULE_5__users_users_list_users_list_component__["a" /* UsersListComponent */]
            },
        ]
    },
    {
        path: 'box',
        canActivate: [__WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_11__box_box_component__["a" /* BoxComponent */],
        children: [
            {
                path: 'spam-letters',
                component: __WEBPACK_IMPORTED_MODULE_13__box_box_list_box_list_component__["a" /* BoxListComponent */],
                data: {
                    url: 'spam-letters',
                },
            },
            {
                path: 'create-letter',
                component: __WEBPACK_IMPORTED_MODULE_23__create_letter_create_letter_component__["a" /* CreateLetterComponent */],
            },
            {
                path: 'inbox',
                component: __WEBPACK_IMPORTED_MODULE_13__box_box_list_box_list_component__["a" /* BoxListComponent */],
                data: {
                    url: 'inbox'
                },
            },
            {
                path: 'draft-letters',
                component: __WEBPACK_IMPORTED_MODULE_13__box_box_list_box_list_component__["a" /* BoxListComponent */],
                data: {
                    url: 'draft-letters',
                },
            },
            {
                path: 'sent-letters',
                data: {
                    url: 'sent-letters',
                },
                component: __WEBPACK_IMPORTED_MODULE_13__box_box_list_box_list_component__["a" /* BoxListComponent */],
            },
            {
                path: 'inbox/:userId',
                data: {
                    url: 'inbox/',
                },
                component: __WEBPACK_IMPORTED_MODULE_15__box_box_list_letter_letter_component__["a" /* LetterComponent */],
            },
            {
                path: 'sent-letters/:userId',
                data: {
                    url: '/sent-letters/',
                },
                component: __WEBPACK_IMPORTED_MODULE_15__box_box_list_letter_letter_component__["a" /* LetterComponent */],
            },
            {
                path: 'draft-letters/:userId',
                data: {
                    url: 'draft-letters/',
                },
                component: __WEBPACK_IMPORTED_MODULE_15__box_box_list_letter_letter_component__["a" /* LetterComponent */],
            },
            {
                path: 'spam-letters/:userId',
                data: {
                    url: 'spam-letters/',
                },
                component: __WEBPACK_IMPORTED_MODULE_15__box_box_list_letter_letter_component__["a" /* LetterComponent */],
            },
        ]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__users_users_list_users_list_component__["a" /* UsersListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__users_users_list_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__birthdate_pipe__["a" /* BirthdatePipe */],
            __WEBPACK_IMPORTED_MODULE_11__box_box_component__["a" /* BoxComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__box_box_list_box_list_component__["a" /* BoxListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__box_box_list_letter_letter_component__["a" /* LetterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__validators_name_validator_directive__["a" /* NameValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_19__validators_email_validator_directive__["a" /* EmailValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_20__validators_sex_validator_directive__["a" /* SexValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_21__validators_birthdat_validator_directive__["a" /* BirthdatValidatorDirective */],
            __WEBPACK_IMPORTED_MODULE_22__pipes_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_23__create_letter_create_letter_component__["a" /* CreateLetterComponent */],
            __WEBPACK_IMPORTED_MODULE_24__users_user_create_user_create_component__["a" /* UserCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_25__users_users_component__["a" /* UsersComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_forms__["d" /* ReactiveFormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_14__services_letters_service__["a" /* LettersService */],
            __WEBPACK_IMPORTED_MODULE_26__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_27__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_28__services_userLogin_service__["a" /* UserLoginService */],
            // providers used to create fake backend
            __WEBPACK_IMPORTED_MODULE_29__fake_backend_fake_backend__["a" /* fakeBackendProvider */],
            __WEBPACK_IMPORTED_MODULE_30__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* BaseRequestOptions */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/birthdate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirthdatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BirthdatePipe = (function () {
    function BirthdatePipe() {
    }
    BirthdatePipe.prototype.transform = function (value, args) {
        var date = new Date(value);
        var dateYear = date.getFullYear();
        var dateDay = date.getDate();
        var dateMonth = date.getMonth() + 1;
        return dateDay + "/" + dateMonth + "/" + dateYear;
    };
    return BirthdatePipe;
}());
BirthdatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'birthdate'
    })
], BirthdatePipe);

//# sourceMappingURL=birthdate.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/box/box-list/box-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  padding: 8px 0;\n\n  transition: 0.5s;\n  text-transform: capitalize;\n\n}\n\napp-box-item .title {\n  border-bottom: 1px solid #000;\n  cursor: pointer;\n}\n\napp-box-item .title:hover {\n  color: #42a4ef;\n}\n\napp-box-item {\n  width: 100%;\n}\n.body {\n  color: red;\n}\n\nbody {\n  overflow-y: scroll;\n}\n\n\n\n.loaders {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.loader,\n.loader:before,\n.loader:after {\n  background: #ffffff;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader {\n  color: #ffffff;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 35%;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n\n.removeItem {\n  margin-right: 10px;\n}\n.title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;\n}\n\n.body{\n  overflow: hidden;\n  white-space:nowrap;\n  text-overflow: ellipsis;\n  width: 500px;\n}\n.left-content{\n  width: 300px;\n}\n.right-content{\n  width: 743px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/box/box-list/box-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container right-content\">\n  <div class=\"row\">\n    <div class=\"col-12 search-form\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchText\"\n        />\n      </div>\n    </div>\n  </div>\n  <h1 class=\"remove-sub\" *ngIf=\"subject\">Letter was removed</h1>\n  <div class=\"row\" *ngIf=\"urlResponse\">\n    <div class=\"remove-letters btn\" (click)=\"deleteLetter()\">Remove Letter</div>\n    <div class=\"col-12\" *ngFor=\"let article of urlResponse | search: searchText; let i = index\"\n         #articleTitle>\n\n      <div class=\"title\"\n      >\n        <input class=\"removeItem\" #checked (change)=\"addLetterforRemove(article, $event)\" type=\"checkbox\">\n        <div class=\"inner-title\" [routerLink]=\"[article._id]\"\n             routerLinkActive=\"active\">\n          <div>{{article.subject}}</div>\n          <div class=\"body\">{{article.body}}</div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"loaders\" *ngIf=\"loader\">\n    <div class=\"loader\">Loading...</div>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/box/box-list/box-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_letters_service__ = __webpack_require__("../../../../../src/app/services/letters.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoxListComponent = (function () {
    function BoxListComponent(router, lettersService) {
        var _this = this;
        this.router = router;
        this.lettersService = lettersService;
        this.loader = false;
        this.subject = false;
        this.lettersIdlist = [];
        this.router.data.subscribe(function (data) {
            _this.urlRoute = data.url;
            _this.loader = true;
        });
    }
    BoxListComponent.prototype.getLetterList = function () {
        var _this = this;
        this.lettersService.getLetters(this.urlRoute).subscribe(function (response) {
            _this.urlResponse = response;
            _this.loader = false;
        });
    };
    BoxListComponent.prototype.addLetterforRemove = function (letterId, event) {
        if (event.target.checked) {
            if (!this.lettersIdlist.includes(letterId)) {
                this.lettersIdlist = this.lettersIdlist.concat(letterId._id);
            }
        }
        else {
            this.lettersIdlist = this.lettersIdlist.filter(function (letterId) { return letterId._id !== letterId; });
        }
    };
    BoxListComponent.prototype.deleteLetter = function () {
        var _this = this;
        this.lettersIdlist.forEach(function (currentId) {
            _this.lettersService.deleteLetter(_this.urlRoute, currentId).subscribe(function () {
            }, function (err) {
                console.log("Error " + err.status + " " + err.statusText);
            }, function () {
                _this.subject = true;
                _this.lettersIdlist = [];
                _this.getLetterList();
            });
        });
    };
    BoxListComponent.prototype.ngOnInit = function () {
        this.loader = true;
        this.getLetterList();
    };
    BoxListComponent.prototype.ngOnChanges = function () {
    };
    return BoxListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('articleTitle'),
    __metadata("design:type", Object)
], BoxListComponent.prototype, "articleTitle", void 0);
BoxListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-box-item',
        template: __webpack_require__("../../../../../src/app/box/box-list/box-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/box/box-list/box-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_letters_service__["a" /* LettersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_letters_service__["a" /* LettersService */]) === "function" && _b || Object])
], BoxListComponent);

var _a, _b;
//# sourceMappingURL=box-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/box/box-list/letter/letter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  font-size: 42px;\n  text-transform: capitalize;\n  line-height: 1.3;\n  padding-top: 30px;\n}\n\n.body {\n  color: grey;\n}\n\n.container {\n  width: auto;\n}\n\n.loaders {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.loader,\n.loader:before,\n.loader:after {\n  background: #ffffff;\n  -webkit-animation: load1 1s infinite ease-in-out;\n  animation: load1 1s infinite ease-in-out;\n  width: 1em;\n  height: 4em;\n}\n.loader {\n  color: #ffffff;\n  text-indent: -9999em;\n  margin: 88px auto;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 35%;\n  font-size: 11px;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  position: absolute;\n  top: 0;\n  content: '';\n}\n.loader:before {\n  left: -1.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 1.5em;\n}\n@-webkit-keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n@keyframes load1 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 0;\n    height: 4em;\n  }\n  40% {\n    box-shadow: 0 -2em;\n    height: 5em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/box/box-list/letter/letter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n   <div class=\"col-12\">\n     <h1 class=\"remove-sub\" *ngIf=\"subject\">The Letter was removed</h1>\n     <div class=\"title\"><b>Email:</b> {{oneLetterShow.to}}</div>\n     <div class=\"body\"><b>Subject:</b> {{oneLetterShow.subject}}</div>\n     <div class=\"body\"><b>Body:</b> {{oneLetterShow.body}}</div>\n   </div>\n    <div class=\"remove btn\" (click)=\"removeLetter(oneLetterShow._id)\">Remove</div>\n  </div>\n</div>\n\n<div class=\"loaders\" *ngIf=\"loader\">\n  <div class=\"loader\">Loading...</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/box/box-list/letter/letter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_letters_service__ = __webpack_require__("../../../../../src/app/services/letters.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LetterComponent = (function () {
    function LetterComponent(router, rout, lettersService) {
        var _this = this;
        this.router = router;
        this.rout = rout;
        this.lettersService = lettersService;
        this.oneLetterShow = [];
        this.loader = false;
        this.subject = false;
        this.router.data.subscribe(function (data) {
            _this.loader = true;
            _this.urlRoute = data.url;
        });
        this.router.params.subscribe(function (params) {
            return _this.oneLetterShow = params;
        });
    }
    LetterComponent.prototype.removeLetter = function (currentId) {
        var _this = this;
        this.lettersService.deleteLetter(this.urlRoute, currentId).subscribe(function () {
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        }, function () {
            _this.subject = true;
            console.log('Done');
            _this.rout.navigate(["/box/" + _this.urlRoute]);
        });
    };
    LetterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lettersService.getOneLetter(this.urlRoute, this.oneLetterShow.userId).subscribe(function (letter) {
            _this.oneLetterShow = letter;
            _this.loader = false;
        });
    };
    return LetterComponent;
}());
LetterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-letter',
        template: __webpack_require__("../../../../../src/app/box/box-list/letter/letter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/box/box-list/letter/letter.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_letters_service__["a" /* LettersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_letters_service__["a" /* LettersService */]) === "function" && _c || Object])
], LetterComponent);

var _a, _b, _c;
//# sourceMappingURL=letter.component.js.map

/***/ }),

/***/ "../../../../../src/app/box/box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 30px;\n  max-width: 1100px;\n  margin: 0 auto;\n}\nheader {\n  background: black;\n  height: 100px;\n  width: 100%;\n}\n\nh1 {\n  font-size: 32px;\n  text-align: center;\n  color: #fff;\n  padding: 20px 0;\n}\n.wrapper {\n  background: #d1ecf1;\n  margin-right: 50px;\n}\n\n.menu {\n  border: 1px solid #d1ecf1;\n  min-width: 300px;\n}\n.row > a {\n  display: block;\n  background: #d1ecf1;\n  color: #000;\n  border-bottom: 1px solid #d1ecf1;\n  padding: 10px 0;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 19px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.row > a:hover,\n.row > a.active {\n  color: #fff;\n  background: #000;\n  text-decoration: none;\n}\n\nbody {\n  overflow-y: scroll;\n}\n\n.search-form{\n  padding: 0;\n  margin: 20px 0 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/box/box.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper left-content\">\n  <div class=\"container \">\n    <div class=\"row\">\n      <div class=\"col-md-12 alert alert-info\">\n        <div *ngFor=\"let user of users\">\n          Users:  {{user.firstName}} {{user.lastName}}\n        </div>\n        <p><a class=\"btn\" (click)=\"loginOut()\">Logout</a></p>\n      </div>\n    </div>\n    <div class=\"row menu\">\n      <a class=\"col-12\" routerLink=\"/users/users-list\" routerLinkActive=\"active\">users</a>\n      <a class=\"col-12 active\" routerLink=\"/box/inbox\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\ntrue}\">box</a>\n      <a class=\"col-12\" routerLink=\"create-letter\" routerLinkActive=\"active\">Create letter</a>\n      <a class=\"col-12\" routerLink=\"inbox\" routerLinkActive=\"active\">inbox</a>\n      <a class=\"col-12\" routerLink=\"sent-letters\" routerLinkActive=\"active\">sent</a>\n      <a class=\"col-12\" routerLink=\"draft-letters\" routerLinkActive=\"active\">draft</a>\n      <a class=\"col-12\" routerLink=\"spam-letters\" routerLinkActive=\"active\">spam</a>\n    </div>\n\n  </div>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/box/box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userLogin_service__ = __webpack_require__("../../../../../src/app/services/userLogin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoxComponent = (function () {
    function BoxComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.users = [];
    }
    BoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    BoxComponent.prototype.loginOut = function () {
        this.users = [];
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    return BoxComponent;
}());
BoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-box',
        template: __webpack_require__("../../../../../src/app/box/box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/box/box.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_userLogin_service__["a" /* UserLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_userLogin_service__["a" /* UserLoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BoxComponent);

var _a, _b, _c;
//# sourceMappingURL=box.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-letter/create-letter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: black;\n}\n\n.left-content {\n  width: 300px;\n}\n\n.right-content {\n  width: 743px;\n}\n\n.form-add-user {\n  width: 100%;\n}\n\n\n.popup {\n  box-shadow: -1px 3px 8px 3px grey;\n  padding: 0 0 0 10px;\n  position: absolute;\n  left: 0;\n  bottom: -48px;\n  width: 100%;\n  z-index: 1;\n  background: #fff;\n}\n\n.form-add-user .form-group {\n  position: relative;\n\n}\n\n.popup div {\n  cursor: pointer;\n}\n\n\n.autocomplete{\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 160px;\n  width: 100%;\n  padding: 4px 0;\n  margin: 2px 0 0 0;\n  list-style: none;\n  background-color: #ffffff;\n  border-color: #ccc;\n  border-color: rgba(0, 0, 0, 0.2);\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 5px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  background-clip: padding-box;\n}\n\n.autocomplete ul {\n  list-style: none;\n  padding: 0;\n}\n\n.autocomplete ul a {\n  padding: 4px 20px;\n  display: block;\n  transition: all 0.5s;\n  cursor: pointer;\n}\n\n.autocomplete ul a:hover {\n  background: grey;\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-letter/create-letter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container right-content\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Create Letter</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div *ngIf=\"letterSent\">Letter was sent</div>\n    <form class=\"form-add-user\" [formGroup]=\"addLetterForm\" (keyup.enter)=\"sendLetter(addLetterForm)\" (submit)=\"sendLetter(addLetterForm)\" [ngClass]=\"{invalidForm: FormInvalid}\">\n      <div class=\"name-wrapper\">\n        <div class=\"form-group\">\n\n\n              <input  type=\"text\" placeholder=\"Email\" formControlName=\"to\" class=\"form-control\" [(ngModel)]=\"query\" (keyup)=filter()>\n\n            <div class=\"autocomplete\" *ngIf=\"userEmailList.length\">\n              <ul>\n                <li *ngFor=\"let item of userEmailList\">\n                  <a (click)=\"selectFromAutocomplete(item.email)\">{{item.email}}</a>\n                </li>\n              </ul>\n            </div>\n          <div class=\"error-mess\"\n               *ngIf=\"!addLetterForm.controls.to.valid && !addLetterForm.controls.to.pristine\">\n            {{\"It is required\"}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" formControlName=\"subject\" placeholder=\"subject\">\n          <div class=\"error-mess\"\n               *ngIf=\"!addLetterForm.controls.subject.valid && !addLetterForm.controls.subject.pristine\">\n            {{\"It is required\"}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" formControlName=\"body\" placeholder=\"body\"></textarea>\n          <div class=\"error-mess\"\n               *ngIf=\"!addLetterForm.controls.body.valid && !addLetterForm.controls.body.pristine\">\n            {{\"It is required\"}}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn\">Submit</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-letter/create-letter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLetterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_letters_service__ = __webpack_require__("../../../../../src/app/services/letters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reactive_validators_email_validator__ = __webpack_require__("../../../../../src/app/reactive-validators/email-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateLetterComponent = (function () {
    function CreateLetterComponent(formBuilder, lettersService, usersService, myElement) {
        this.formBuilder = formBuilder;
        this.lettersService = lettersService;
        this.usersService = usersService;
        this.FormInvalid = false;
        this.letter = [];
        this.letterSent = false;
        this.query = '';
        this.userEmailList = [];
        this.AdduserEmail = [];
        this.elementRef = myElement;
    }
    CreateLetterComponent.prototype.mongoObjectId = function () {
        var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
        return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
            return (Math.random() * 16 | 0).toString(16);
        }).toLowerCase();
    };
    ;
    // user email autocomplete
    CreateLetterComponent.prototype.filter = function () {
        var _this = this;
        if (this.query !== "") {
            this.userEmailList = this.createUserList.filter(function (el) {
                return el.email.toLowerCase().includes(_this.query.toLowerCase());
            });
        }
        else {
            this.userEmailList = [];
        }
    };
    // select user email from autocomplete
    CreateLetterComponent.prototype.selectFromAutocomplete = function (item) {
        this.query = item;
        this.userEmailList = [];
    };
    CreateLetterComponent.prototype.postNewEmailUser = function (data) {
        this.usersService.postUsers(data).subscribe(function () {
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        }, function () {
            console.log('Done');
        });
    };
    CreateLetterComponent.prototype.addNewUSerEmail = function (form) {
        this.AdduserEmail = this.createUserList.filter(function (email) {
            return form.controls.to.value === email.email;
        });
        if (this.AdduserEmail.length === 0) {
            this.AdduserEmail.push({
                email: form.controls.to.value,
                fullName: 'No name',
            });
            this.wrapperdataUser = {
                users: this.AdduserEmail
            };
            this.postNewEmailUser(this.wrapperdataUser);
        }
    };
    CreateLetterComponent.prototype.sendLetter = function (form) {
        var _this = this;
        if (form.valid) {
            this.letter = this.letter.concat([form.value]);
            this.letter[0].mailbox = this.mongoObjectId();
            this.FormInvalid = false;
            this.addNewUSerEmail(form);
            this.addLetterForm.reset();
            this.lettersWrapp = {
                letters: this.letter,
            };
            this.lettersService.postLetter(this.lettersWrapp).subscribe(function () {
            }, function (err) {
                console.log("Error " + err.status + " " + err.statusText);
            }, function () {
                console.log('Done');
                _this.letterSent = true;
                _this.letter = [];
                _this.AdduserEmail = [];
            });
        }
        else {
            this.FormInvalid = true;
        }
    };
    CreateLetterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (userslist) {
            _this.createUserList = userslist;
        });
        this.addLetterForm = this.formBuilder.group({
            to: [null, [__WEBPACK_IMPORTED_MODULE_4__reactive_validators_email_validator__["a" /* emailValidator */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            subject: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            body: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            mailbox: [this.mongoObjectId()],
        });
    };
    CreateLetterComponent.prototype.ngOnChanges = function () {
    };
    return CreateLetterComponent;
}());
CreateLetterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-letter',
        template: __webpack_require__("../../../../../src/app/create-letter/create-letter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-letter/create-letter.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_letters_service__["a" /* LettersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_letters_service__["a" /* LettersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object])
], CreateLetterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-letter.component.js.map

/***/ }),

/***/ "../../../../../src/app/fake-backend/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fakeBackendFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");


function fakeBackendFactory(backend, options) {
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        var testUser = { username: 'admin', password: 'admin', firstName: 'Marshall', lastName: 'Mathers' };
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // fake authenticate api end point
            if (connection.request.url.endsWith('/api/authenticate')) {
                // get parameters from post request
                var params = JSON.parse(connection.request.getBody());
                // check user credentials and return fake jwt token if valid
                if (params.username === testUser.username && params.password === testUser.password) {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* ResponseOptions */]({ status: 200, body: { token: 'fake-jwt-token' } })));
                }
                else {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* ResponseOptions */]({ status: 200 })));
                }
            }
            // fake users api end point
            if (connection.request.url.endsWith('/api/users')) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* ResponseOptions */]({ status: 200, body: [testUser] })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* ResponseOptions */]({ status: 401 })));
                }
            }
        }, 500);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */](backend, options);
}
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */],
    useFactory: fakeBackendFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BaseRequestOptions */]]
};
//# sourceMappingURL=fake-backend.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"alert alert-info\">\n        Username: admin<br />\n        Password: admin\n      </div>\n      <h2>Login</h2>\n      <form name=\"form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n          <input type=\"text\" placeholder=\"Username\" class=\"form-control\" formControlName=\"username\" [(ngModel)]=\"model.username\" #username required />\n\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n          <input type=\"password\" placeholder=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"model.password\" #password required />\n        </div>\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function LoginComponent(router, authenticationService, formBuilder) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.model = {};
        this.hideLogin = true;
        this.loading = false;
        this.error = '';
        this.users = [];
        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/box/inbox']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.hideLogin = false;
                _this.router.navigate(['/box/inbox']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nheader {\n  background: black;\n  height: 100px;\n  width: 100%;\n}\n\nh1 {\n  font-size: 32px;\n  text-align: center;\n  color: #fff;\n  padding: 20px 0;\n}\n.wrapper {\n  background: #d1ecf1;\n  margin-bottom: 30px;\n}\n.row > a {\n  display: block;\n  background: #d1ecf1;\n  color: #000;\n  border-bottom: 1px solid #d1ecf1;\n  padding: 10px 0;\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 19px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.row > a:hover,\n.row > a.active {\n  color: #000;\n  background: #fff;\n}\n\nbody {\n  overflow-y: scroll;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <a class=\"col-6\" routerLink=\"/users/users-list\" routerLinkActive=\"active\">Users</a>\n      <a class=\"col-6\" routerLink=\"create-user\" routerLinkActive=\"active\">Create users</a>\n      <a class=\"col-6\" routerLink=\"/box/inbox\" routerLinkActive=\"active\">Box</a>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(_router) {
        this._router = _router;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (values, args) {
        if (args === undefined)
            return values;
        return values.filter(function (value) {
            return value.subject.toLowerCase().includes(args.toLowerCase());
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/reactive-validators/email-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emailValidator; });
var emailValidator = function (control) {
    var EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!EMAIL_REGEXP.test(control.value)) {
        return { emailValidator: { error: 'Not valid Email' } };
    }
    return null;
};
//# sourceMappingURL=email-validator.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            var token = response.json() && response.json().token;
            if (token) {
                _this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/letters.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LettersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LettersService = (function () {
    function LettersService(_http) {
        this._http = _http;
    }
    LettersService.prototype.getLetters = function (categoryId) {
        return this._http.get("https://test-api.javascript.ru/v1/" + categoryId + "/letters");
    };
    LettersService.prototype.getOneLetter = function (categoryId, postId) {
        return this._http.get("https://test-api.javascript.ru/v1/" + categoryId + "/letters/" + postId);
    };
    LettersService.prototype.postLetter = function (letter) {
        return this._http.post('https://test-api.javascript.ru/v1/sent-letters', letter);
    };
    LettersService.prototype.deleteLetter = function (categoryId, postId) {
        return this._http.delete("https://test-api.javascript.ru/v1/" + categoryId + "/letters/" + postId, { responseType: 'text' });
    };
    return LettersService;
}());
LettersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], LettersService);

var _a;
//# sourceMappingURL=letters.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/userLogin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginService = (function () {
    function UserLoginService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserLoginService.prototype.getUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* RequestOptions */]({ headers: headers });
        return this.http.get('/api/users', options)
            .map(function (response) { return response.json(); });
    };
    return UserLoginService;
}());
UserLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserLoginService);

var _a, _b;
//# sourceMappingURL=userLogin.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
    }
    UsersService.prototype.getUsers = function () {
        return this._http.get('https://test-api.javascript.ru/v1/dimitriyryzhakov/users');
    };
    UsersService.prototype.getOneUser = function (_id) {
        return this._http.get('https://test-api.javascript.ru/v1/dimitriyryzhakov/users/' + _id);
    };
    UsersService.prototype.postUsers = function (dataUrl) {
        return this._http.post('https://test-api.javascript.ru/v1/dimitriyryzhakov/', dataUrl);
    };
    UsersService.prototype.renameUser = function (id, body) {
        return this._http.patch("https://test-api.javascript.ru/v1/dimitriyryzhakov/users/" + id, body);
    };
    UsersService.prototype.removeUser = function (_id) {
        return this._http.delete('https://test-api.javascript.ru/v1/dimitriyryzhakov/users/' + _id, { responseType: 'text' });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-create/user-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"renameDataUser\">\n    <div class=\"col-12\">\n      <form class=\"form-add-user\" [formGroup]=\"addUserForm\" (submit)=\"putRenameUser(addUserForm)\"\n            [ngClass]=\"{invalidForm: FormInvalid}\">\n        <div class=\"name-wrapper\">\n          <div class=\"form-group\">\n            <input class=\"form-control\" formControlName=\"fullName\" placeholder=\"First name\">\n            <div class=\"error-mess\"\n                 *ngIf=\"!addUserForm.controls.fullName.valid && !addUserForm.controls.fullName.pristine\">\n              {{\"To short\"}}\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"date\" formControlName=\"birthdate\" placeholder=\"1991-03-22\">\n          <div class=\"error-mess\"\n               *ngIf=\"!addUserForm.controls.birthdate.valid && !addUserForm.controls.birthdate.pristine\">\n            {{\"It is required\"}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" formControlName=\"email\" placeholder=\"Your email\">\n          <div class=\"error-mess\" *ngIf=\"!addUserForm.controls.email.valid && !addUserForm.controls.email.pristine\">\n            {{\"Email not valid\"}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn\">Save</button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!renameDataUser\">\n    <div class=\"col-12\">\n      <form class=\"form-add-user\" [formGroup]=\"addUserForm\" (submit)=\"addUser(addUserForm)\"\n            [ngClass]=\"{invalidForm: FormInvalid}\">\n        <div class=\"name-wrapper\">\n          <div class=\"form-group\">\n            <input class=\"form-control\" formControlName=\"fullName\" placeholder=\"First name\">\n            <div class=\"error-mess\"\n                 *ngIf=\"!addUserForm.controls.fullName.valid && !addUserForm.controls.fullName.pristine\">\n              {{\"To short\"}}\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"date\" formControlName=\"birthdate\" placeholder=\"1991-03-22\">\n          <div class=\"error-mess\"\n               *ngIf=\"!addUserForm.controls.birthdate.valid && !addUserForm.controls.birthdate.pristine\">\n            {{\"It is required\"}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" formControlName=\"email\" placeholder=\"Your email\">\n\n          <div class=\"error-mess\" *ngIf=\"!addUserForm.controls.email.valid && !addUserForm.controls.email.pristine\">\n            {{\"Email not valid\"}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn\">Submit</button>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"loaders\" *ngIf=\"loader\">\n  <div class=\"loader\">Loading...</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users/user-create/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reactive_validators_email_validator__ = __webpack_require__("../../../../../src/app/reactive-validators/email-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserCreateComponent = (function () {
    function UserCreateComponent(userService, formBuilder, routers, router) {
        var _this = this;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.routers = routers;
        this.router = router;
        this.FormInvalid = false;
        this.dataUser = [];
        this.loader = false;
        this.EMAIL_REGEXP = '/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i';
        this.router.params.subscribe(function (params) { return _this.userId = params; });
    }
    UserCreateComponent.prototype.postUser = function () {
        var _this = this;
        this.userService.postUsers(this.wrapperdataUser).subscribe(function () {
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        }, function () {
            console.log('Done');
            _this.routers.navigate(['/users/users-list']);
        });
    };
    UserCreateComponent.prototype.renameUser = function () {
        var _this = this;
        this.userService.renameUser(this.userId.id, this.dataUser[0]).subscribe(function () {
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        }, function () {
            console.log('Done');
            _this.routers.navigate(["/users/users-list/" + _this.userId.id]);
        });
    };
    UserCreateComponent.prototype.addUser = function (form) {
        console.log(form);
        if (form.valid) {
            this.loader = true;
            this.FormInvalid = false;
            this.dataUser = this.dataUser.concat(form.value);
            this.addUserForm.reset();
            this.wrapperdataUser = {
                users: this.dataUser
            };
            this.postUser();
        }
        else {
            this.FormInvalid = true;
        }
    };
    UserCreateComponent.prototype.putRenameUser = function (form) {
        if (form.valid) {
            this.loader = true;
            this.FormInvalid = false;
            this.dataUser = this.dataUser.concat(form.value);
            this.renameUser();
        }
    };
    UserCreateComponent.prototype.changeDateFormat = function (date) {
        if (this.renameDataUser.birthdate) {
            var dateFormat = new Date(date);
            return dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate();
        }
        else {
            return date;
        }
    };
    UserCreateComponent.prototype.isEmpty = function (obj) {
        var _this = this;
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                this.userService.getOneUser(this.userId.id).subscribe(function (res) {
                    _this.renameDataUser = res;
                    _this.addUserForm = _this.formBuilder.group({
                        fullName: [_this.renameDataUser.fullName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
                        email: [_this.renameDataUser.email, [__WEBPACK_IMPORTED_MODULE_4__reactive_validators_email_validator__["a" /* emailValidator */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
                        birthdate: [_this.changeDateFormat(_this.renameDataUser.birthdate), []],
                    });
                });
            }
        }
    };
    UserCreateComponent.prototype.ngOnInit = function () {
        this.isEmpty(this.userId);
        this.addUserForm = this.formBuilder.group({
            fullName: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_4__reactive_validators_email_validator__["a" /* emailValidator */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            birthdate: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]]
        });
    };
    return UserCreateComponent;
}());
UserCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-create',
        template: __webpack_require__("../../../../../src/app/users/user-create/user-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-create/user-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], UserCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-list/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  font-family: Arial;\n}\n\n.wrapper {\n  overflow: hidden;\n}\n\n.description {\n  font-size: 17px;\n  color: grey;\n  margin: 5px 0;\n  line-height: 1.3;\n\n}\n.wrapper {\n  margin-right: 0 !important;\n}\n.name {\n  font-size: 21px;\n}\n\n.item {\n  padding: 20px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\nbutton {\n  background: black;\n  border: 1px solid #000;\n  color: #fff;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 20px;\n  display: inline-block;\n  padding: 6px 13px;\n  transition: 0.5s;\n  font-size: 16px;\n  cursor: pointer;\n  margin-top: 5px;\n}\nbutton:hover {\n  opacity: 0.8;\n  background: gainsboro;\n  border-color: gainsboro;\n  color: black;\n\n}\n\nimg {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  float: left;\n  margin: 15px 16px 0 0;\n}\n\n.users-list {\n  width: 470px;\n  margin: 50px auto ;\n  list-style: none;\n}\n\n.active {\n  background: sandybrown;\n\n}\n\n.active,\n.active .description{\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-list/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div>\n        <img [src]=\"oneUser?.avatarUrl\" alt=\"\">\n          <div class=\"name\">{{oneUser?.fullName}}</div>\n          <div class=\"description\">{{oneUser?.email}}</div>\n          <div class=\"birthdate\" *ngIf=\"oneUser.birthdate\">{{oneUser?.birthdate | birthdate}}</div>\n        <button class=\"btn\" (click)=\"removeUser(oneUser._id)\">Remove</button>\n        <button class=\"btn\" [routerLink]=\"['/users/rename-user/', oneUser._id]\">Change Info</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"loaders\" *ngIf=\"loader\">\n  <div class=\"loader\">Loading...</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users/users-list/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = (function () {
    function UserComponent(userService, routers, router) {
        var _this = this;
        this.userService = userService;
        this.routers = routers;
        this.router = router;
        this.oneUser = [];
        this.loader = false;
        this.router.params.subscribe(function (params) { return _this.userId = params; });
    }
    UserComponent.prototype.removeUser = function (userId) {
        var _this = this;
        this.loader = true;
        this.userService.removeUser(userId).subscribe(function () {
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        }, function () {
            _this.routers.navigate(['/users/users-list']);
        });
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.userService.getOneUser(this.userId.id).subscribe(function (response) {
            _this.oneUser = response;
            _this.loader = false;
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/users/users-list/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-list/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-list/users-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    font-family: Arial;\n}\n\n.wrapper {\n    overflow: hidden;\n}\n\n.description {\n    font-size: 17px;\n    color: grey;\n    margin: 5px 0;\n    line-height: 1.3;\n\n}\n\n.name {\n    font-size: 21px;\n}\n\n.item {\n    padding: 20px;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\nbutton {\n    background: black;\n    border: 1px solid #000;\n    color: #fff;\n    font-weight: bold;\n    text-transform: uppercase;\n    border-radius: 20px;\n    display: inline-block;\n    padding: 6px 13px;\n    transition: 0.5s;\n    font-size: 16px;\n    cursor: pointer;\n    margin-top: 5px;\n}\nbutton:hover {\n    opacity: 0.8;\n    background: gainsboro;\n    border-color: gainsboro;\n    color: black;\n\n}\n\nimg {\n    width: 50px;\n    height: 50px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    float: left;\n    margin: 15px 16px 0 0;\n}\n\n.users-list {\n    width: 470px;\n    margin: 50px auto ;\n    list-style: none;\n}\n.wrapper {\n  margin-right: 0 !important;\n}\n.active {\n    background: sandybrown;\n\n}\n\n.active,\n.active .description{\n    color: #fff;\n}\n\ninput.ng-dirty.ng-invalid,\nselect.ng-dirty.ng-invalid {\n  border: 1px solid red;\n}\n\n\n.form-add-user {\n  max-width: 500px;\n  margin: 50px auto 0;\n}\n\n.error-mess {\n  color: red;\n  text-transform: uppercase;\n  padding: 10px;\n  font-weight: bold;\n}\n\n.invalidForm input.ng-invalid,\n.invalidForm select.ng-invalid{\n  border: 1px solid red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-list/users-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"users-list\">\n  <li class=\"item\" *ngFor=\"let item of data\">\n    <div>\n      <div class=\"wrapper-cont\" [routerLink]=\"[item._id]\">\n        <div class=\"name\">{{item?.fullName}}</div>\n        <div class=\"name\" *ngIf=\"item.birthdate\">{{item?.birthdate | birthdate}}</div>\n        <div class=\"name\">{{item?.email}}</div>\n      </div>\n    </div>\n  </li>\n</ul>\n\n<div class=\"loaders\" *ngIf=\"loader\">\n  <div class=\"loader\">Loading...</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users/users-list/users-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent(userService) {
        this.userService = userService;
        this.loader = false;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = true;
        this.userService.getUsers().subscribe(function (response) {
            _this.data = response;
            _this.loader = false;
        }, function (err) {
            console.log("Error " + err.status + " " + err.statusText);
        });
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-list',
        template: __webpack_require__("../../../../../src/app/users/users-list/users-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-list/users-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */]) === "function" && _a || Object])
], UsersListComponent);

var _a;
//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin-right: 0 !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/validators/birthdat-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirthdatValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BirthdatValidatorDirective = BirthdatValidatorDirective_1 = (function () {
    function BirthdatValidatorDirective() {
    }
    BirthdatValidatorDirective.prototype.get_current_age = function (date) {
        return ((+new Date().getTime() - +new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    };
    BirthdatValidatorDirective.prototype.validate = function (formControl) {
        console.log(this.get_current_age(formControl.value));
        if (this.get_current_age(formControl.value) < 18) {
            return { birthdatValidator: { error: 'You are no 18 years old' } };
        }
        return null;
    };
    return BirthdatValidatorDirective;
}());
BirthdatValidatorDirective = BirthdatValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appBirthdatValidator][ngModel]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                useExisting: BirthdatValidatorDirective_1,
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], BirthdatValidatorDirective);

var BirthdatValidatorDirective_1;
//# sourceMappingURL=birthdat-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/validators/email-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailValidatorDirective = EmailValidatorDirective_1 = (function () {
    function EmailValidatorDirective() {
    }
    EmailValidatorDirective.prototype.validate = function (formControl) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!EMAIL_REGEXP.test(formControl.value)) {
            return { emailValidator: { error: 'Not valid Email' } };
        }
        return null;
    };
    return EmailValidatorDirective;
}());
EmailValidatorDirective = EmailValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appEmailValidator][ngModel]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                useExisting: EmailValidatorDirective_1,
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], EmailValidatorDirective);

var EmailValidatorDirective_1;
//# sourceMappingURL=email-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/validators/name-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NameValidatorDirective = NameValidatorDirective_1 = (function () {
    function NameValidatorDirective() {
    }
    NameValidatorDirective.prototype.validate = function (control) {
        if (!control.value || control.value.length < 2) {
            return { nameValidator: { error: 'To short' } };
        }
        return null;
    };
    return NameValidatorDirective;
}());
NameValidatorDirective = NameValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appNameValidator][ngModel]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                useExisting: NameValidatorDirective_1,
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], NameValidatorDirective);

var NameValidatorDirective_1;
//# sourceMappingURL=name-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/app/validators/sex-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SexValidatorDirective = SexValidatorDirective_1 = (function () {
    function SexValidatorDirective() {
    }
    SexValidatorDirective.prototype.validate = function (control) {
        if (!control.value) {
            return { sexValidator: { error: 'Select your gender' } };
        }
        return null;
    };
    return SexValidatorDirective;
}());
SexValidatorDirective = SexValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSexValidator][ngModel]',
        providers: [{
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                useExisting: SexValidatorDirective_1,
                multi: true
            }]
    }),
    __metadata("design:paramtypes", [])
], SexValidatorDirective);

var SexValidatorDirective_1;
//# sourceMappingURL=sex-validator.directive.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
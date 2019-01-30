webpackJsonp([1],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__JsonFormsPage__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.page = __WEBPACK_IMPORTED_MODULE_4__JsonFormsPage__["a" /* JsonFormsPage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/edgar/git/ionic-playground-upstream/src/app/app.html"*/'<ion-nav [root]="page"></ion-nav>\n'/*ion-inline-end:"/home/edgar/git/ionic-playground-upstream/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// tslint:disable object-literal-sort-keys
/* harmony default export */ __webpack_exports__["a"] = ({
    orders: [
        {
            customer: {
                department: "Complaints Division",
                id: "471201",
                name: "Sirius Cybernetics Corporation",
            },
            title: "42 killer robots",
            ordered: true,
            processId: 144,
            assignee: "Philip J. Fry",
            status: "ordered",
            startDate: "2018-06-01",
            endDate: "2018-08-01",
        },
        {
            customer: {
                id: "471202",
                name: "Very Big Corporation of America"
            },
            title: "1000 gallons of MomCorp Oil",
            processId: 1890004499,
            assignee: "Jen Barber",
            startDate: "2018-07-01",
            status: "planned",
            amount: 30
        }
    ]
});
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonforms_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jsonforms_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_autocomplete_control__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_data_display_page__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lang_page__ = __webpack_require__(531);






var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])({ jsonforms: Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["jsonformsReducer"])() });
var departmentTester = Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["rankWith"])(5, Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["and"])(Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["schemaTypeIs"])("string"), Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["scopeEndsWith"])("department")));
var initialState = {
    jsonforms: {
        fields: [],
        renderers: __WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers__["ionicRenderers"].concat([
            { tester: departmentTester, renderer: __WEBPACK_IMPORTED_MODULE_3__custom_autocomplete_control__["a" /* CustomAutocompleteControl */] },
            {
                renderer: __WEBPACK_IMPORTED_MODULE_4__custom_data_display_page__["a" /* DataDisplayPage */],
                tester: Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["rankWith"])(6, Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["and"])(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["isControl"], Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["scopeEndsWith"])("___data")))
            },
            {
                renderer: __WEBPACK_IMPORTED_MODULE_5__lang_page__["a" /* LangPage */],
                tester: Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["rankWith"])(6, Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["and"])(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["isControl"], Object(__WEBPACK_IMPORTED_MODULE_0__jsonforms_core__["optionIs"])("lang", true)))
            },
        ]),
    }
};
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonFormsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonFormsPage = /** @class */ (function () {
    function JsonFormsPage() {
    }
    JsonFormsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "jsonforms-page",
            template: "\n  <ion-header>\n    <ion-title>JSON Forms Ionic Playground</ion-title>\n  </ion-header>\n  <ion-content>\n    <jsonforms-outlet></jsonforms-outlet>\n  </ion-content>"
        })
    ], JsonFormsPage);
    return JsonFormsPage;
}());

//# sourceMappingURL=JsonFormsPage.js.map

/***/ }),

/***/ 267:
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
webpackEmptyAsyncContext.id = 267;

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"JsonFormsPage.module": [
		1107,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 393;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomAutocompleteControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_selectable__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_random_words__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_random_words___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_random_words__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_delay__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_delay__);
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






var words = __WEBPACK_IMPORTED_MODULE_3_random_words__(1000);
var fetchSuggestions = function (input) {
    var filtered = words.filter(function (word) { return word.startsWith(input); });
    return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["of"])(filtered).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_delay__["delay"])(1000)).toPromise();
};
var CustomAutocompleteControl = /** @class */ (function (_super) {
    __extends(CustomAutocompleteControl, _super);
    function CustomAutocompleteControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomAutocompleteControl.prototype.onSearch = function (ev) {
        var _this = this;
        _super.prototype.onChange.call(this, ev);
        this.selectable.showLoading();
        fetchSuggestions(ev.text)
            .then(function (options) {
            _this.options = options;
            _this.selectable.hideLoading();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("selectable"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_selectable__["IonicSelectableComponent"])
    ], CustomAutocompleteControl.prototype, "selectable", void 0);
    CustomAutocompleteControl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "jsonforms-custom-autocomplete-control",
            template: "\n    <ion-item no-lines no-padding>\n      <ion-label floating>{{label}}</ion-label>\n      <ion-label stacked *ngIf=\"error\" color=\"error\">{{error}}</ion-label>\n      <ionic-selectable\n        #selectable\n        item-content\n        [ngModel]=\"data\"\n        [items]=\"options\"\n        [canSearch]=\"true\"\n        (onSearch)=\"onSearch($event)\"\n        (onChange)=\"onChange($event)\"\n      ></ionic-selectable>\n    </ion-item>"
        })
    ], CustomAutocompleteControl);
    return CustomAutocompleteControl;
}(__WEBPACK_IMPORTED_MODULE_1__jsonforms_ionic_renderers__["AutoCompleteControlRenderer"]));

//# sourceMappingURL=custom.autocomplete.control.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonforms_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonforms_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__jsonforms_angular__);
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



var DataDisplayPage = /** @class */ (function (_super) {
    __extends(DataDisplayPage, _super);
    function DataDisplayPage(ngRedux) {
        var _this = _super.call(this, ngRedux) || this;
        _this.ngRedux = ngRedux;
        return _this;
    }
    DataDisplayPage.prototype.mapAdditionalProps = function (props) {
        this.dataAsString = JSON.stringify(props.data, null, 2);
    };
    DataDisplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "jsonforms-data-page",
            template: "<pre>{{dataAsString}}</pre>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"]])
    ], DataDisplayPage);
    return DataDisplayPage;
}(__WEBPACK_IMPORTED_MODULE_2__jsonforms_angular__["JsonFormsControl"]));

//# sourceMappingURL=custom.data-display.page.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonforms_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonforms_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__jsonforms_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonforms_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonforms_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jsonforms_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang_service__ = __webpack_require__(532);
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





var LangPage = /** @class */ (function (_super) {
    __extends(LangPage, _super);
    function LangPage(ngRedux, langService) {
        var _this = _super.call(this, ngRedux) || this;
        _this.ngRedux = ngRedux;
        _this.langService = langService;
        return _this;
    }
    LangPage.prototype.mapAdditionalProps = function (props) {
        this.currentLocale = Object(__WEBPACK_IMPORTED_MODULE_3__jsonforms_core__["getLocale"])(this.ngRedux.getState());
    };
    LangPage.prototype.changeLocale = function (localeString) {
        this.ngRedux.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__jsonforms_core__["setLocale"])(localeString));
        this.ngRedux.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__jsonforms_core__["setSchema"])(this.langService.getSchema(localeString)));
        this.ngRedux.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__jsonforms_core__["setUISchema"])(this.langService.getUISchema(localeString)));
    };
    LangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "lang-page",
            template: "\n    <p>Click button to set locale</p>\n    <p>Current locale: {{currentLocale}}</p>\n    <button ion-button (click)=\"changeLocale('de-DE')\">de-DE</button>\n    <button ion-button (click)=\"changeLocale('en-US')\">en-US</button>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_4__lang_service__["a" /* LangService */]])
    ], LangPage);
    return LangPage;
}(__WEBPACK_IMPORTED_MODULE_2__jsonforms_angular__["JsonFormsControl"]));

//# sourceMappingURL=lang.page.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LangService = /** @class */ (function () {
    function LangService() {
        this.localizedSchemas = new Map();
        this.localizedUISchemas = new Map();
    }
    LangService.prototype.setSchema = function (locale, schema) {
        this.localizedSchemas.set(locale, schema);
    };
    LangService.prototype.setUISchema = function (locale, schema) {
        this.localizedUISchemas.set(locale, schema);
    };
    LangService.prototype.getSchema = function (locale) {
        return this.localizedSchemas.get(locale);
    };
    LangService.prototype.getUISchema = function (locale) {
        return this.localizedUISchemas.get(locale);
    };
    LangService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LangService);
    return LangService;
}());

//# sourceMappingURL=lang.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(538);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsonforms_core__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jsonforms_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__jsonforms_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jsonforms_ionic_renderers__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jsonforms_ionic_renderers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__jsonforms_ionic_renderers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_json_refs__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_json_refs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_json_refs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_logger__ = __webpack_require__(1102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__custom_autocomplete_control__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__custom_data_display_page__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data__ = __webpack_require__(1105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__JsonFormsPage__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lang_page__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lang_service__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store__ = __webpack_require__(1106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = /** @class */ (function () {
    function AppModule(ngRedux, devTools, http, langService) {
        var enhancers = [];
        // ... add whatever other enhancers you want.
        // You probably only want to expose this tool in devMode.
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["isDevMode"])() && devTools.isEnabled()) {
            enhancers = enhancers.concat([devTools.enhancer()]);
        }
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_20__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_20__store__["a" /* initialState */], [__WEBPACK_IMPORTED_MODULE_11_redux_logger___default.a], enhancers);
        ngRedux.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__jsonforms_core__["setLocale"])("en-US"));
        Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_observable_forkJoin__["forkJoin"])(http.get("./assets/uischema.json"), http.get("./assets/schema.json")).subscribe(function (_a) {
            var uischema = _a[0], schema = _a[1];
            __WEBPACK_IMPORTED_MODULE_9_json_refs__["resolveRefs"](schema)
                .then(function (res) {
                var resolvedSchema = res.resolved;
                var deSchema = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](resolvedSchema);
                __WEBPACK_IMPORTED_MODULE_10_lodash__["set"](deSchema, "definitions.order.properties.customer.properties.department.description", "Abteilung");
                langService.setSchema("de-DE", deSchema);
                langService.setSchema("en-US", resolvedSchema);
                var deUISchema = __WEBPACK_IMPORTED_MODULE_10_lodash__["cloneDeep"](uischema);
                __WEBPACK_IMPORTED_MODULE_10_lodash__["set"](deUISchema, "elements.0.elements.0.options.detail.elements.0.elements.0.label", "Titel");
                langService.setUISchema("de-DE", deUISchema);
                langService.setUISchema("en-US", uischema);
                ngRedux.dispatch(__WEBPACK_IMPORTED_MODULE_6__jsonforms_core__["Actions"].init(__WEBPACK_IMPORTED_MODULE_16__data__["a" /* default */], res.resolved, uischema));
            });
        });
        // uncomment to test live update
        /*
        setTimeout(() => {
          console.log("pushing additional category");
          uischema.elements.push({
            type: "Category",
            label: "Test",
            elements: []
          });
          JsonRefs.resolveRefs(schema)
            .then(
              res =>
                ngRedux.dispatch(Actions.init(
                  data,
                  res.resolved,
                  uischema as UISchemaElement
                ))
            )
        }, 4000);
        */
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["IonicApp"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__JsonFormsPage__["a" /* JsonFormsPage */],
                __WEBPACK_IMPORTED_MODULE_14__custom_autocomplete_control__["a" /* CustomAutocompleteControl */],
                __WEBPACK_IMPORTED_MODULE_15__custom_data_display_page__["a" /* DataDisplayPage */],
                __WEBPACK_IMPORTED_MODULE_18__lang_page__["a" /* LangPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_17__JsonFormsPage__["a" /* JsonFormsPage */],
                __WEBPACK_IMPORTED_MODULE_14__custom_autocomplete_control__["a" /* CustomAutocompleteControl */],
                __WEBPACK_IMPORTED_MODULE_15__custom_data_display_page__["a" /* DataDisplayPage */],
                __WEBPACK_IMPORTED_MODULE_18__lang_page__["a" /* LangPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__jsonforms_ionic_renderers__["JsonFormsIonicModule"],
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: 'JsonFormsPage.module#JsonFormsPageModule', name: 'JsonFormsPage', segment: 'JsonFormsPage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__lang_service__["a" /* LangService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["IonicErrorHandler"] },
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["NgRedux"],
            __WEBPACK_IMPORTED_MODULE_0__angular_redux_store__["DevToolsExtension"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_19__lang_service__["a" /* LangService */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[533]);
//# sourceMappingURL=main.js.map
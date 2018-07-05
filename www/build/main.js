webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todoitemlist_todoitemlist__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletePage = /** @class */ (function () {
    function CompletePage(navCtrl, navParams, tdprov) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tdprov = tdprov;
        this.cItems = [];
    }
    CompletePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CompletePage');
        this.tdprov.items.forEach(function (item) {
            if (item.status == "complete") {
                _this.cItems.push(item);
            }
        });
        console.log("this.cItems");
        console.log(this.cItems);
        console.log("items");
        console.log(this.tdprov.items);
    };
    CompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complete',template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\complete\complete.html"*/'<!--\n  Generated template for the CompletePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Completed ToDos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of cItems">\n      <ion-card style="background-color: khaki">\n        <ion-card-content>\n          <h1>{{item.title}}</h1>\n          <br>\n          <b>ID:</b> {{item.id}}\n          <br>\n          <b>Notes:</b> {{item.notes}}\n          <br>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n  <i style="color: gray; font-weight: lighter"><br>All Completed TODOs. Return to Home page to update status.\n  </i>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\complete\complete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_todoitemlist_todoitemlist__["a" /* TodoitemlistProvider */]])
    ], CompletePage);
    return CompletePage;
}());

//# sourceMappingURL=complete.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todoitemlist_todoitemlist__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendingPage = /** @class */ (function () {
    function PendingPage(navCtrl, navParams, tdprov) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tdprov = tdprov;
        this.cItems = [];
    }
    PendingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PendingPage');
        this.tdprov.items.forEach(function (item) {
            if (item.status == "pending") {
                _this.cItems.push(item);
            }
        });
        console.log("this.cItems");
        console.log(this.cItems);
        console.log("items");
        console.log(this.tdprov.items);
    };
    PendingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pending',template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\pending\pending.html"*/'<!--\n  Generated template for the PendingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="energized">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PendingPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of cItems">\n      <ion-card style="background-color: khaki">\n        <ion-card-content>\n          <h1>{{item.title}}</h1>\n          <br>\n          <b>ID:</b> {{item.id}}\n          <br>\n          <b>Notes:</b> {{item.notes}}\n          <br>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n  <i style="color: gray; font-weight: lighter"><br>All pending TODOs. Return to Home page to update status.\n  </i>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\pending\pending.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_todoitemlist_todoitemlist__["a" /* TodoitemlistProvider */]])
    ], PendingPage);
    return PendingPage;
}());

//# sourceMappingURL=pending.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_todo_add_todo__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_info_todo_info__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_todoitemlist_todoitemlist__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    // public hitems;
    // public hcount;
    function HomePage(navCtrl, modalCtrl, storage, tdprov) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.tdprov = tdprov;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OverduePage');
        this.storage.ready().then(function () {
            //var temp = 0;
            _this.storage.length().then(function (temp) {
                console.log('temp');
                console.log(temp);
                console.log(_this.storage.get('counter'));
                console.log(_this.storage.get('todolist'));
                console.log(_this.tdprov.count);
                console.log(_this.tdprov.items);
                if (temp == 0) {
                    _this.tdprov.items = [];
                    _this.tdprov.count = 0;
                    console.log(_this.storage.get('counter'));
                    console.log(_this.storage.get('todolist'));
                    console.log(_this.tdprov.count);
                    console.log(_this.tdprov.items);
                }
                else {
                    _this.storage.get('counter').then(function (val) {
                        _this.tdprov.count = val;
                        console.log(_this.storage.get('counter'));
                        console.log(_this.tdprov.count);
                    });
                    _this.storage.get('todolist').then(function (val2) {
                        _this.tdprov.items = val2;
                        console.log(_this.storage.get('todolist'));
                        console.log(_this.tdprov.items);
                    });
                }
            });
        });
    };
    HomePage.prototype.addTodo = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_todo_add_todo__["a" /* AddTodoPage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    HomePage.prototype.saveItem = function (item) {
        this.tdprov.count = this.tdprov.count + 1;
        item.id = this.tdprov.count;
        this.tdprov.items.push(item);
        this.storage.set('counter', this.tdprov.count);
        this.storage.set('todolist', this.tdprov.items);
    };
    HomePage.prototype.TodoInfo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__todo_info_todo_info__["a" /* TodoInfoPage */], {
            item: item
        });
    };
    HomePage.prototype.delete = function (item) {
        var index = this.tdprov.items.indexOf(item, 0);
        if (index > -1) {
            this.tdprov.items.splice(index, 1);
        }
        this.storage.set('counter', this.tdprov.count);
        this.storage.set('todolist', this.tdprov.items);
    };
    HomePage.prototype.statusUpdate = function (item) {
        var index = this.tdprov.items.indexOf(item, 0);
        if (index > -1) {
            if (this.tdprov.items[index].status === 'pending') {
                this.tdprov.items[index].status = 'complete';
            }
            else if (this.tdprov.items[index].status === 'complete') {
                this.tdprov.items[index].status = 'overdue';
            }
            else if (this.tdprov.items[index].status === 'overdue') {
                this.tdprov.items[index].status = 'pending';
            }
        }
        this.storage.set('counter', this.tdprov.count);
        this.storage.set('todolist', this.tdprov.items);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>\n      Todos list!\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addTodo()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-list inset style="background-color: khaki">\n    <ion-item-sliding *ngFor="let item of tdprov.items" style="background-color: khaki">\n      <ion-item (click)="TodoInfo(item)">\n        {{item.title}}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="green" (click)="statusUpdate(item)">\n          <ion-icon name="arrow-up"></ion-icon> Update Status\n        </button>\n        <button ion-button color="danger" (click)="delete(item)">\n          <ion-icon name="trash"></ion-icon> Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding >\n        <ion-item >\n          <!-- blank item for spacing purposes -->\n        </ion-item>\n      </ion-item-sliding>\n  </ion-list>\n\n  <i style="color: gray; font-weight: lighter"><br>Hit the plus in the top right to add a new todo task.\n    <br>  All task are pending by default.\n    <br>  Click on task to see more info. \n    <br>  Slide the task to the left to update status or delete the task.\n  </i>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_todoitemlist_todoitemlist__["a" /* TodoitemlistProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverduePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todoitemlist_todoitemlist__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OverduePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OverduePage = /** @class */ (function () {
    function OverduePage(navCtrl, navParams, tdprov) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tdprov = tdprov;
        this.cItems = [];
    }
    OverduePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OverduePage');
        this.tdprov.items.forEach(function (item) {
            if (item.status == "overdue") {
                _this.cItems.push(item);
            }
        });
        console.log("this.cItems");
        console.log(this.cItems);
        console.log("items");
        console.log(this.tdprov.items);
    };
    OverduePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-overdue',template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\overdue\overdue.html"*/'<!--\n  Generated template for the OverduePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>All Overdue ToDos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of cItems">\n\n      <ion-card style="background-color: khaki">\n        <ion-card-content>\n          <h1>{{item.title}}</h1>\n          <br>\n          <b>ID:</b> {{item.id}}\n          <br>\n          <b>Notes:</b> {{item.notes}}\n          <br>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-item>\n  </ion-list>\n  <i style="color: gray; font-weight: lighter"><br>All Overdue TODOs. Return to Home page to update status.\n  </i>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\overdue\overdue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_todoitemlist_todoitemlist__["a" /* TodoitemlistProvider */]])
    ], OverduePage);
    return OverduePage;
}());

//# sourceMappingURL=overdue.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/complete/complete.module": [
		278,
		2
	],
	"../pages/overdue/overdue.module": [
		280,
		1
	],
	"../pages/pending/pending.module": [
		279,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoPage = /** @class */ (function () {
    function AddTodoPage(navCtrl, view) {
        this.navCtrl = navCtrl;
        this.view = view;
    }
    AddTodoPage.prototype.saveTodo = function () {
        if (this.title == undefined) {
            this.view.dismiss();
            console.log("if this.title");
            console.log(this.title);
        }
        else {
            console.log("else this.title");
            console.log(this.title);
            var newTodo = {
                id: 999,
                title: this.title,
                notes: this.notes,
                status: 'pending'
            };
            this.view.dismiss(newTodo);
        }
    };
    AddTodoPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\add-todo\add-todo.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>\n      Add Todo\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Title</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>Notes</ion-label>\n        <ion-input type="text" [(ngModel)]="notes"></ion-input>\n      </ion-item>\n\n    <!-- <ion-item>\n      <ion-label floating>Status</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item> -->\n\n  </ion-list>\n\n  <button full ion-button color="secondary" (click)="saveTodo()">Add</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\add-todo\add-todo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], AddTodoPage);
    return AddTodoPage;
}());

//# sourceMappingURL=add-todo.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TodoInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TodoInfoPage = /** @class */ (function () {
    function TodoInfoPage(navParams) {
        this.navParams = navParams;
    }
    TodoInfoPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('item').id;
        this.title = this.navParams.get('item').title;
        this.notes = this.navParams.get('item').notes;
        this.status = this.navParams.get('item').status;
    };
    TodoInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-todo-info',template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\todo-info\todo-info.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card style="background-color: khaki">\n    <ion-card-content>\n        <h1>{{title}}</h1><br>\n        <b>ID:</b> {{id}}<br>\n        <b>Current Status:</b> {{status}}<br>\n    </ion-card-content>\n  </ion-card>\n  <ion-card style="background-color: khaki">\n    <ion-card-header>\n      <b>Notes</b>\n    </ion-card-header>\n    <ion-card-content>\n      {{notes}}\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\pages\todo-info\todo-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TodoInfoPage);
    return TodoInfoPage;
}());

//# sourceMappingURL=todo-info.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_add_todo_add_todo__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_todo_info_todo_info__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_overdue_overdue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_complete_complete__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_todoitemlist_todoitemlist__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_todo_add_todo__["a" /* AddTodoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todo_info_todo_info__["a" /* TodoInfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_overdue_overdue__["a" /* OverduePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__["a" /* PendingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_complete_complete__["a" /* CompletePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/complete/complete.module#CompletePageModule', name: 'CompletePage', segment: 'complete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pending/pending.module#PendingPageModule', name: 'PendingPage', segment: 'pending', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/overdue/overdue.module#OverduePageModule', name: 'OverduePage', segment: 'overdue', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_add_todo_add_todo__["a" /* AddTodoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_todo_info_todo_info__["a" /* TodoInfoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_overdue_overdue__["a" /* OverduePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_pending_pending__["a" /* PendingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_complete_complete__["a" /* CompletePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_13__providers_todoitemlist_todoitemlist__["a" /* TodoitemlistProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_overdue_overdue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pending_pending__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_complete_complete__ = __webpack_require__(102);
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
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Overdue Todos', component: __WEBPACK_IMPORTED_MODULE_6__pages_overdue_overdue__["a" /* OverduePage */] },
            { title: 'Pending Todos', component: __WEBPACK_IMPORTED_MODULE_7__pages_pending_pending__["a" /* PendingPage */] },
            { title: 'Complete Todos', component: __WEBPACK_IMPORTED_MODULE_8__pages_complete_complete__["a" /* CompletePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.deletestorage = function () {
        this.storage.clear();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <button ion-button color="danger" (click)="deletestorage()">\n      <ion-icon name="trash"></ion-icon> Delete Saved\n    </button>\n    <i>clears out all task</i>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\mrgaw\Desktop\JS workspace\SWD106\MyIonicApps\SWD106Final\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoitemlistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the TodoitemlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TodoitemlistProvider = /** @class */ (function () {
    function TodoitemlistProvider() {
        this.items = [];
        this.count = 0;
        // constructor(public http: HttpClient) {
        //   console.log('Hello TodoitemlistProvider Provider');
        // }
    }
    TodoitemlistProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TodoitemlistProvider);
    return TodoitemlistProvider;
}());

//# sourceMappingURL=todoitemlist.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var cgrid_component_1 = require('./cgrid.component');
var gridSetting_1 = require('./gridSetting');
require('rxjs/add/operator/map');
var TutorialsComponent = (function () {
    function TutorialsComponent(_product, renderer, elementRef) {
        this._product = _product;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.columns = ['ProductID', 'ProductName'];
        this.tempData = [];
        this.setting = new gridSetting_1.gridSetting();
    }
    TutorialsComponent.prototype.isFirstPageDisabled = function () {
        if (this.setting) {
            if (this.setting.pageNumber && this.gridOption.totalPage) {
                if (this.setting.pageNumber == 1) {
                    return 'disabled';
                }
            }
            else {
                return '';
            }
        }
        else {
            return '';
        }
    };
    TutorialsComponent.prototype.ngOnChanges = function (changes) {
        console.log('Change detected:', changes);
        this.setting.sortDirection = '';
        this.setting.sortColumn = '';
        this.setting.selectedItem = [];
        this.setting.pageNumber = 0;
        this.headerCheckBox.nativeElement.checked = false;
        this.getPageData();
    };
    TutorialsComponent.prototype.sortColumns = function (column) {
        console.log(column);
        if (column == this.setting.sortColumn) {
            if (this.setting.sortDirection == 'asc')
                this.setting.sortDirection = 'desc';
            else
                this.setting.sortDirection = 'asc';
        }
        else {
            this.setting.sortColumn = column;
            this.setting.sortDirection = 'asc';
        }
    };
    TutorialsComponent.prototype.selectAll = function (selected) {
        // this.selectedItem = this.simpleClone(this.data);
        //  this.input.nativeElement.checked = true;
        for (var _i = 0, _a = this.input._results; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.nativeElement.checked = selected;
        }
        if (selected) {
            this.setting.selectedItem = [];
            for (var _b = 0, _c = this.data; _b < _c.length; _b++) {
                var item1 = _c[_b];
                console.log(item1);
                this.setting.selectedItem.push(item1);
            }
        }
        else
            this.setting.selectedItem = [];
        console.log(selected);
    };
    TutorialsComponent.prototype.clicked = function (event, checkBox) {
        if (checkBox) {
            this.setting.selectedItem.push(event);
        }
        else {
            var index = this.setting.selectedItem.indexOf(event);
            this.setting.selectedItem.splice(index, 1);
        }
        console.log(this.setting.selectedItem);
        //headerCheckBox.getElement
        this.headerCheckBox.nativeElement.checked = false;
    };
    TutorialsComponent.prototype.onGridReady = function (params) {
        params.api.sizeColumnsToFit();
    };
    TutorialsComponent.prototype.ngOnInit = function () {
        //   this.getPageData();
    };
    TutorialsComponent.prototype.onClick = function (value) {
        console.log(value);
    };
    TutorialsComponent.prototype.getPageData = function () {
        // reset the temp value
        console.log(this.data.length);
        this.tempData = [];
        if (this.setting.memoryGrid) {
            for (var i = this.setting.pageNumber * this.setting.pageSize; i < this.data.length && i < (this.setting.pageNumber * this.setting.pageSize) + this.setting.pageSize; i++) {
                console.log(i);
                this.tempData.push(this.data[i]);
            }
        }
        else
            this.tempData = this.data;
        console.log(this.tempData);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TutorialsComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', gridSetting_1.gridSetting)
    ], TutorialsComponent.prototype, "setting", void 0);
    __decorate([
        core_1.ViewChildren('test'), 
        __metadata('design:type', Object)
    ], TutorialsComponent.prototype, "input", void 0);
    __decorate([
        core_1.ViewChild('headerCheckBox'), 
        __metadata('design:type', Object)
    ], TutorialsComponent.prototype, "headerCheckBox", void 0);
    TutorialsComponent = __decorate([
        core_1.Component({
            selector: 'my-toturials',
            templateUrl: './app/tutorial.component.html',
            styles: ['h2 {color:Red}'],
            providers: [product_service_1.productservice, cgrid_component_1.CCellDataService]
        }), 
        __metadata('design:paramtypes', [product_service_1.productservice, core_1.Renderer, core_1.ElementRef])
    ], TutorialsComponent);
    return TutorialsComponent;
}());
exports.TutorialsComponent = TutorialsComponent;
//# sourceMappingURL=tutorial.component.js.map
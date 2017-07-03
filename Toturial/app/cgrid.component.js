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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
//service to be used to comunicate with grid
var CCellDataService = (function () {
    function CCellDataService(_appRef, _resolver) {
        this._appRef = _appRef;
        this._resolver = _resolver;
        this.fireClickEmitter = new core_1.EventEmitter();
        this.sortClickEmitter = new core_1.EventEmitter();
        this.filterClickEmitter = new core_1.EventEmitter();
        this.pageChangeEmitter = new core_1.EventEmitter();
    }
    CCellDataService.prototype.fireClickEvent = function (data) {
        this.fireClickEmitter.next(data);
    };
    CCellDataService.prototype.sortClickEvent = function (data) {
        this.sortClickEmitter.next(data);
    };
    CCellDataService.prototype.filterClickEvent = function (data) {
        this.filterClickEmitter.next(data);
    };
    CCellDataService.prototype.pageChangeEvent = function (data) {
        this.pageChangeEmitter.next(data);
    };
    CCellDataService.prototype.blockUI = function (placeholder) {
        var elementRef = placeholder;
        var factory = this._resolver.resolveComponentFactory(CGridSpinnerComponent);
        this.spinnerComp = elementRef.createComponent(factory);
    };
    CCellDataService.prototype.unblockUI = function () {
        if (this.spinnerComp) {
            this.spinnerComp.destroy();
        }
    };
    CCellDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ApplicationRef, core_1.ComponentFactoryResolver])
    ], CCellDataService);
    return CCellDataService;
}());
exports.CCellDataService = CCellDataService;
//block UI component
var CGridSpinnerComponent = (function () {
    function CGridSpinnerComponent() {
        this.state = {
            message: 'Please wait...'
        };
    }
    CGridSpinnerComponent = __decorate([
        core_1.Component({
            selector: 'spinner',
            styles: [
                '.spinner-overlay {  background-color: white;  cursor: wait;}',
                '.spinner-message-container {  position: absolute;  top: 35%;  left: 0;  right: 0;  height: 0;  text-align: center;  z-index: 10001;  cursor: wait;}',
                '.spinner-message {  display: inline-block;  text-align: left;  background-color: #333;  color: #f5f5f5;  padding: 20px;  border-radius: 4px;  font-size: 20px;  font-weight: bold;  filter: alpha(opacity=100);}',
                '.modal-backdrop.in {    filter: alpha(opacity=50);    opacity: .5;}',
                '.modal-backdrop {    position: fixed;    top: 0;    right: 0;    bottom: 0;    left: 0;    z-index: 1040;    background-color: #000;}'
            ],
            template: "<div class=\"in modal-backdrop spinner-overlay\"></div>\n     <div class=\"spinner-message-container\" aria-live=\"assertive\" aria-atomic=\"true\">\n        <div class=\"spinner-message\" [ngClass]=\"spinnerMessageClass\">{{ state.message }}</div>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], CGridSpinnerComponent);
    return CGridSpinnerComponent;
}());
exports.CGridSpinnerComponent = CGridSpinnerComponent;
//cell component with dynamic component loader
function createComponentFactory(compiler, metadata, data) {
    var cmpClass = (function () {
        function DynamicComponent() {
            this.clickEvent = new core_1.EventEmitter();
            this.row = data;
        }
        DynamicComponent.prototype.onclick = function (customData) {
            this.clickEvent.next(customData);
        };
        return DynamicComponent;
    }());
    var decoratedCmp = core_1.Component(metadata)(cmpClass);
    var DynamicHtmlModule = (function () {
        function DynamicHtmlModule() {
        }
        DynamicHtmlModule = __decorate([
            core_1.NgModule({ imports: [common_1.CommonModule, router_1.RouterModule], declarations: [decoratedCmp] }), 
            __metadata('design:paramtypes', [])
        ], DynamicHtmlModule);
        return DynamicHtmlModule;
    }());
    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
        .then(function (moduleWithComponentFactory) {
        return moduleWithComponentFactory.componentFactories.find(function (x) { return x.componentType === decoratedCmp; });
    });
}
exports.createComponentFactory = createComponentFactory;
var CGridCellComponent = (function () {
    function CGridCellComponent(vcRef, compiler, cCellDataService) {
        this.vcRef = vcRef;
        this.compiler = compiler;
        this.cCellDataService = cCellDataService;
    }
    CGridCellComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var html = this.htmlString;
        if (!html)
            return;
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        var compMetadata = new core_1.Component({
            selector: 'dynamic-html',
            template: this.htmlString
        });
        createComponentFactory(this.compiler, compMetadata, this.row)
            .then(function (factory) {
            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], _this.vcRef.parentInjector);
            _this.cmpRef = _this.vcRef.createComponent(factory, 0, injector, []);
            _this.cmpRef.instance.clickEvent.subscribe(function (customData) {
                _this.fireClickEvent(customData);
            });
        });
    };
    CGridCellComponent.prototype.fireClickEvent = function (data) {
        this.cCellDataService.fireClickEvent(data);
    };
    CGridCellComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CGridCellComponent.prototype, "htmlString", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CGridCellComponent.prototype, "row", void 0);
    CGridCellComponent = __decorate([
        core_1.Component({
            selector: 'cgrid-cell',
            template: '<div #target></div>',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Compiler, CCellDataService])
    ], CGridCellComponent);
    return CGridCellComponent;
}());
exports.CGridCellComponent = CGridCellComponent;
//column configuration class
var Column = (function () {
    function Column() {
    }
    return Column;
}());
exports.Column = Column;
//grid configuration class
var GridOption = (function () {
    function GridOption() {
        this.columns = [];
        this.data = [];
        this.filteredData = [];
        this.currentPage = 1;
    }
    return GridOption;
}());
exports.GridOption = GridOption;
//main grid component
var CGridComponent = (function () {
    function CGridComponent(celldataService) {
        this.celldataService = celldataService;
        this.gridOption = new GridOption();
    }
    CGridComponent.prototype.ngOnInit = function () {
    };
    CGridComponent.prototype.onSort = function (sortField, sortDirection) {
        this.celldataService.sortClickEvent({ 'field': sortField, 'direction': sortDirection });
    };
    CGridComponent.prototype.isFiltringEnabled = function () {
        if (this.gridOption && this.gridOption.columns) {
            for (var _i = 0, _a = this.gridOption.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                if (col.allowFiltering)
                    return true;
            }
        }
        return false;
    };
    CGridComponent.prototype.onFilterChange = function (filterField, filterValue) {
        var valueAdded = false;
        for (var _i = 0, _a = this.gridOption.filteredData; _i < _a.length; _i++) {
            var filterD = _a[_i];
            if (filterD['field'] === filterField) {
                filterD['filterValue'] = filterValue;
                valueAdded = true;
            }
        }
        if (!valueAdded) {
            this.gridOption.filteredData.push({ field: filterField, filterValue: filterValue });
        }
        this.celldataService.filterClickEvent(this.gridOption.filteredData);
    };
    CGridComponent.prototype.onPageChange = function (currentPage) {
        if (currentPage > this.gridOption.totalPage) {
            currentPage = this.gridOption.totalPage;
        }
        else if (currentPage < 1) {
            currentPage = 1;
        }
        else {
            this.celldataService.pageChangeEvent({ 'currentPage': currentPage });
        }
    };
    CGridComponent.prototype.getFiletrValue = function (filed) {
        for (var _i = 0, _a = this.gridOption.filteredData; _i < _a.length; _i++) {
            var filterD = _a[_i];
            if (filterD['field'] === filed) {
                return filterD['filterValue'];
            }
        }
        return '';
    };
    CGridComponent.prototype.isFirstPageDisabled = function () {
        if (this.gridOption) {
            if (this.gridOption.currentPage && this.gridOption.totalPage) {
                if (this.gridOption.currentPage == 1) {
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
    CGridComponent.prototype.isLastPageDisabled = function () {
        if (this.gridOption) {
            if (this.gridOption.currentPage && this.gridOption.totalPage) {
                if (this.gridOption.currentPage == this.gridOption.totalPage) {
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
    CGridComponent.prototype.getPageRange = function () {
        var pages = [];
        var startPage;
        var endPage;
        if (this.gridOption.totalPage <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = this.gridOption.totalPage;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (this.gridOption.currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (this.gridOption.currentPage + 4 >= this.gridOption.totalPage) {
                startPage = this.gridOption.totalPage - 9;
                endPage = this.gridOption.totalPage;
            }
            else {
                startPage = this.gridOption.currentPage - 5;
                endPage = startPage + 9;
            }
        }
        for (var value = startPage; value <= endPage; value++) {
            pages.push(value);
        }
        return pages;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', GridOption)
    ], CGridComponent.prototype, "gridOption", void 0);
    CGridComponent = __decorate([
        core_1.Component({
            selector: 'cgrid',
            template: "<div style=\"width:100%\">\n    <div style=\"height:90%\">\n        <table class=\"table table-striped table-bordered table-hover table-condensed\">\n            <thead>\n                <tr>\n                    <th *ngFor=\"let col of gridOption.columns\" style=\"background-color:red;\">\n                    <span *ngIf=\"!col.allowSorting\">{{col.fieldName}}</span>\n                    <span *ngIf=\"col.allowSorting && !(gridOption.currentSortField === col.field)\" style=\"cursor:pointer;\" (click)=\"onSort(col.field, 1)\">\n                        {{col.fieldName}}\n                        <i class=\"fa fa-fw fa-sort\"></i>\n                    </span> \n                    <span *ngIf=\"col.allowSorting && gridOption.currentSortField === col.field && gridOption.currentSortDirection == -1\" \n                    style=\"cursor:pointer;\" (click)=\"onSort(col.field, 1)\">\n                        {{col.fieldName}}\n                        <i class=\"fa fa-fw fa-sort-desc\"></i>\n                    </span>\n                    <span *ngIf=\"col.allowSorting && gridOption.currentSortField === col.field && gridOption.currentSortDirection == 1\" \n                    style=\"cursor:pointer;\" (click)=\"onSort(col.field, -1)\">\n                        {{col.fieldName}}\n                        <i class=\"fa fa-fw fa-sort-asc\"></i>\n                    </span>                      \n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngIf=\"isFiltringEnabled()\">\n                    <td *ngFor=\"let col of gridOption.columns\">\n                        <input *ngIf=\"col.allowFiltering\" type=\"text\" #filter \n                        [value]=\"getFiletrValue(col.field)\"\n                        (change)=\"onFilterChange(col.field, filter.value)\" style=\"width:100%;\"> \n                    </td> \n                </tr>\n                <tr *ngFor=\"let row of gridOption.data\">\n                    <ng-container *ngIf=\"!row['isEditing']\">\n                        <td *ngFor=\"let col of gridOption.columns\" [style.width]=\"col.width\">\n                            <div *ngIf=\"col.isCustom\">\n                                <cgrid-cell [htmlString]=\"col.customTemplate\" [row]=\"row\"></cgrid-cell>\n                            </div>\n                            <div *ngIf=\"!col.isCustom\">\n                                {{ row[col.field] }}\n                            </div>\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"row['isEditing']\">\n                        <td [attr.colspan]=\"3\">\n                            <cgrid-cell [htmlString]=\"gridOption.editTemplate\" [row]=\"row\"></cgrid-cell>\n                        </td>\n                    </ng-container>\n                </tr>\n            </tbody>\n        </table></div>\n        <div style=\"height: 10%;\" class=\"text-right\" *ngIf=\"gridOption.alloPaging\">\n            <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination pagination-sm justify-content-center\">\n                    <li class=\"page-item\" [ngClass]= \"isFirstPageDisabled()\" (click)=\"onPageChange(1)\">\n                        <a class=\"page-link\" aria-label=\"Previous\">\n                            <span aria-hidden=\"true\">&laquo;&laquo;</span>\n                            <span class=\"sr-only\">First</span>\n                        </a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]= \"isFirstPageDisabled()\" (click)=\"onPageChange(gridOption.currentPage-1)\">\n                        <a class=\"page-link\" aria-label=\"Previous\" >\n                            <span aria-hidden=\"true\">&laquo;</span>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                    </li>\n                    <li class=\"page-item\" *ngFor=\"let page of getPageRange()\" [ngClass]=\"{ 'active': page == gridOption.currentPage }\" (click)=\"onPageChange(page)\">\n                        <a class=\"page-link\" >{{page}}</a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]= \"isLastPageDisabled()\" (click)=\"onPageChange(gridOption.currentPage + 1)\">\n                        <a class=\"page-link\" aria-label=\"Next\" >\n                            <span aria-hidden=\"true\">&raquo;</span>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </li>\n                    <li class=\"page-item\" [ngClass]= \"isLastPageDisabled()\" (click)=\"onPageChange(gridOption.totalPage)\">\n                        <a class=\"page-link\" aria-label=\"Next\" >\n                            <span aria-hidden=\"true\">&raquo;&raquo;</span>\n                            <span class=\"sr-only\">Last</span>\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n        </div>        \n        </div>\n    ",
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [CCellDataService])
    ], CGridComponent);
    return CGridComponent;
}());
exports.CGridComponent = CGridComponent;
//# sourceMappingURL=cgrid.component.js.map
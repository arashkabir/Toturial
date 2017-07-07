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
var column_1 = require('./column');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2';
        // string[] = ['ProductID', 'ProductName'];
        this.columns = [
            {
                "headerName": "ProductName",
                'propertyName': 'ProductName',
                'headerClasss': 'ffff',
                'columnClasses': 'retret',
                'sortColumnName': 'retytret',
                'sortOrder': 'tyu',
                'isDefaultSort': true,
                'formatCell': function (a, b) { return '444'; }
            },
            {
                "headerName": "ProductName",
                'propertyName': 'ProductName',
                'headerClasss': 'ffff',
                'columnClasses': 'retret',
                'sortColumnName': 'retytret',
                'sortOrder': 'tyu',
                'columnType': column_1.columnType.link,
                'eventName': 'test',
                'isDefaultSort': true
            }
        ];
        this.data = {
            'Total': 100,
            'Data': [
                {
                    "ProductID": 1,
                    "ProductName": true
                },
                {
                    "ProductID": 2,
                    "ProductName": false
                }
            ]
        }; //,
    }
    // columns: Array<column>;
    AppComponent.prototype.gridUpdate = function (event) {
        console.log(event);
    };
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        }
    //        ,
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        }
    //        ,
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2,
    //            "ProductName": "ProductB"
    //        },
    //        {
    //            "ProductID": 2000,
    //            "ProductName": "ProductB"
    //        }
    //    ]
    //};
    AppComponent.prototype.ChangeData = function () {
        this.data = {
            'Total': 2,
            'Data': [
                {
                    "ProductID": 3,
                    "ProductName": "Productc"
                },
                {
                    "ProductID": 4,
                    "ProductName": "Productd"
                }
            ]
        };
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
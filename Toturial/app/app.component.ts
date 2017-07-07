import { Component } from '@angular/core';
import {column,columnType } from './column'

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id
})
export class AppComponent {
    name = 'Angular 2';
   // columns: Array<column>;


    gridUpdate(event:any) {
        console.log(event);
    }
    // string[] = ['ProductID', 'ProductName'];
    columns = [
        {
            "headerName": "ProductName",
            'propertyName': 'ProductName',
            'headerClasss': 'ffff',
            'columnClasses': 'retret',
            'sortColumnName': 'retytret',
            'sortOrder': 'tyu',
            'isDefaultSort': true,
            'formatCell': function (a: any, b: any) { return '444'}
        },
         {
         "headerName": "ProductName",
        'propertyName': 'ProductName',
        'headerClasss': 'ffff',
        'columnClasses': 'retret',
        'sortColumnName': 'retytret',
        'sortOrder': 'tyu',
        'columnType': columnType.link,
        'eventName':'test',
        'isDefaultSort': true
        
    }
];

    data = {
        'Total': 100,
        'Data':
        [
            {
                "ProductID": 1,
                "ProductName": true
            },
            {
                "ProductID": 2,
                "ProductName": false
            }
        ]
    };//,
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
    
        ChangeData() {
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
        }
}

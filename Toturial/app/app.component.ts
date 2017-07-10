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
        console.log(event);
    }
    // string[] = ['ProductID', 'ProductName'];
    columns = [
        {
            "headerName": "ProductID",
            'propertyName': 'ProductID',
            'headerClasss': 'ffff',
          //  'columnClasses': 'col-md-2',
            'sortColumnName': 'retytret',
            'sortOrder': 'tyu',
            'isDefaultSort': true,
           // 'headerClasses': 'col-md-2',
            'columnSize':'2000px'
           // 'formatCell': function (a: any, b: any) { return '444'}
        },
         {
         "headerName": "ProductName",
        'propertyName': 'ProductName',
      //  'columnClasses': 'col-md-5',
        'sortColumnName': 'retytret',
        'sortOrder': 'tyu',
        'columnType': columnType.link,
        'eventName':'test',
        'isDefaultSort': true,
      //  'headerClasses': 'col-md-5',
        'columnSize': '10px'
        
    }
];

    data:any = {
        'Total': 100,
        'Data':
        [
            {
                "ProductID": 'fff ffff ffffff  fffff gg tttt tttt',
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

import { Component, ViewChild, ViewContainerRef, Renderer, ViewChildren, Input, OnChanges, ElementRef} from '@angular/core';
import { IProduct } from './product';
import { productservice } from './product.service';
import { CGridComponent, CCellDataService, Column, GridOption } from './cgrid.component';
import { gridSetting} from './gridSetting'
//import { RedComponentComponent } from "../red-component/red-component.component";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';  


@Component(
    {
        selector:'my-toturials',
        templateUrl: './app/tutorial.component.html',
        styles: ['h2 {color:Red}'],
        providers: [productservice, CCellDataService]
    }
)
export class TutorialsComponent implements OnChanges  {
    columns: string[] = ['ProductID', 'ProductName'];
    @Input() data:Array<any>;
    private  tempData: Array<any>=[];

    @Input() setting: gridSetting=new gridSetting();
    @ViewChildren('test') input:any;
    @ViewChild('headerCheckBox') headerCheckBox: any;
 
    
     iproducts: IProduct[];
     constructor(private _product: productservice, private renderer: Renderer, private elementRef: ElementRef) {

     }


     isFirstPageDisabled() {
         if (this.setting) {
             if (this.setting.pageNumber && this.gridOption.totalPage) {
                 if (this.setting.pageNumber == 1) {
                     return 'disabled';
                 }
             } else {
                 return '';
             }
         } else {
             return '';
         }
     }

     ngOnChanges(changes: any ) {
         console.log('Change detected:', changes);
         this.setting.sortDirection = '';
         this.setting.sortColumn = '';
         this.setting.selectedItem = [];
         this.setting.pageNumber = 0;
         this.headerCheckBox.nativeElement.checked = false;
         this.getPageData();
     }

     sortColumns(column: string) {
         console.log(column);
         if (column == this.setting.sortColumn) {
             if (this.setting.sortDirection=='asc')
                 this.setting.sortDirection = 'desc'
             else
                 this.setting.sortDirection='asc'
         }
         else {
             this.setting.sortColumn = column;
             this.setting.sortDirection = 'asc';
         }
    
     }
     selectAll(selected:boolean) {
        // this.selectedItem = this.simpleClone(this.data);
       //  this.input.nativeElement.checked = true;
         
         for (let entry of this.input._results) {
             entry.nativeElement.checked = selected;
         }

         if (selected)
         {
             this.setting.selectedItem = [];
             for (let item1 of this.data) {
                 console.log(item1);
                 this.setting.selectedItem.push(item1);
             }
         }
             else
             this.setting.selectedItem = [];

         console.log(selected);
     }


     clicked(event: any, checkBox:boolean) {
               if (checkBox) {
                   this.setting.selectedItem.push(event);
         }
         else
               {
                   var index = this.setting.selectedItem.indexOf(event);
                   this.setting.selectedItem.splice(index,1);
         }

               console.log(this.setting.selectedItem);
               //headerCheckBox.getElement
               this.headerCheckBox.nativeElement.checked = false;
     }

     onGridReady(params:any) {
         params.api.sizeColumnsToFit();
     }

     ngOnInit(): void {
      //   this.getPageData();
     } 

    onClick(value:any) {
        console.log(value);
     }

    getPageData() {
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
    }
}

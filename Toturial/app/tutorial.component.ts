import { Component, ViewChild, ViewContainerRef, Renderer, ViewChildren, Input,Output, OnChanges, ElementRef, EventEmitter, Injectable} from '@angular/core';
import { IProduct } from './product';
import { productservice } from './product.service';
import { CGridComponent, CCellDataService, Column, GridOption } from './cgrid.component';
import { gridSetting } from './gridSetting';
import { gridInputData } from './gridInputData';
import { column, columnType, rowEvent } from './column';
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
    @Input() columns: Array<column> = [];// string[] = ['ProductID', 'ProductName'];
    @Input() data: gridInputData;
    private  tempData: Array<any>=[];

    @Input() setting: gridSetting=new gridSetting();
    @ViewChildren('test') input:any;
    @ViewChild('headerCheckBox') headerCheckBox: any;
    @Output() ChangeEvent = new EventEmitter<gridSetting>();
    @Output() SelectedItem = new EventEmitter<any>();
    @Output() rowEvent = new EventEmitter<rowEvent>();
     //iproducts: IProduct[];
     constructor(private _product: productservice, private renderer: Renderer, private elementRef: ElementRef) {
     }

     getTotalPages():number {
         var totalPageNumber: number = Math.floor(this.data.Total / this.setting.pageSize);
         console.log(totalPageNumber);
         if ( this.data.Total % this.setting.pageSize > 0)
         {
             totalPageNumber = totalPageNumber + 1;
         }
         return totalPageNumber;
     }

     cellHtml(row: any, column: column): string {
         var text: string;

         if (column.formatCell)
             text= column.formatCell(row, row[column.propertyName]);
         else
             text= row[column.propertyName];

        // switch (column.columnType)
        //{
        //     case columnType.link:
        //         text = '<a href="#" (click)= clicked("ff") >' + row[column.propertyName] + '</a>';
        //         break;
        //     case columnType.checkBox:
        //         text = '<input type="checkbox" name= "vehicle" checked >';
        //         break;
        //}

         return text;
     }
     getPageRange() {
         let pages: number[] = [];
         let startPage: number;
         let endPage: number;
         let totalPages: number = this.getTotalPages();
         if (totalPages <= 10) {
             // less than 10 total pages so show all
             startPage = 1;
             endPage = totalPages;
         } else {
             // more than 10 total pages so calculate start and end pages
             if (this.setting.pageNumber <= 6) {
                 startPage = 1;
                 endPage = 10;
             } else if (this.setting.pageNumber + 4 >= totalPages) {
                 startPage = totalPages - 9;
                 endPage = totalPages;
             } else {
                 startPage = this.setting.pageNumber - 5;
                 endPage = startPage + 9;
             }
         }
         for (let value = startPage; value <= endPage; value++) {
             pages.push(value);
         }
         return pages;
     }

     isLastPageDisabled() {
         console.log(this.setting.pageNumber);
         if (this.setting) {
             if (this.setting.pageNumber && this.getTotalPages()) {
                 if (this.setting.pageNumber == this.getTotalPages()) {
                     return 'disabled';
                 }
             } else {
                 return '';
             }
         } else {
             return '';
         }
     }

     isFirstPageDisabled() {
         if (this.setting) {
             if (this.setting.pageNumber ) {
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

     onPageChange(currentPage: number) {
         if (currentPage > this.getTotalPages()) {
             currentPage = this.getTotalPages();
         } else if (currentPage < 1) {
             currentPage = 1;
         } 

         this.setting.pageNumber = currentPage;
         this.getPageData();
         this.ChangeEvent.emit(this.setting);
         console.log(this.setting.pageNumber);
     }

     ngOnChanges(changes: any ) {
         this.setting.sortDirection = '';
         this.setting.sortColumn = '';
         this.setting.selectedItem = [];
         this.setting.pageNumber = 1;
         this.headerCheckBox.nativeElement.checked = false;
         this.getPageData();
         this.ChangeEvent.emit(this.setting);
     }

     sortColumns(column: string) {
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

         this.ChangeEvent.emit(this.setting);
    
     }
     selectAll(selected:boolean) {
         
         for (let entry of this.input._results) {
             entry.nativeElement.checked = selected;
         }

         if (selected)
         {
             this.setting.selectedItem = [];
             for (let item1 of this.data.Data) {
                 this.setting.selectedItem.push(item1);
             }
         }
             else
             this.setting.selectedItem = [];

         this.ChangeEvent.emit(this.setting);
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

               //headerCheckBox.getElement
               this.headerCheckBox.nativeElement.checked = false;

               this.ChangeEvent.emit(this.setting);
     }

     controlClickEvent(data: any, eventName: string)
     {

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

    controlEventClick(data: any, eventName: string) {
        console.log(data);
        console.log(eventName);
    }
    getPageData() {
        this.tempData = [];

        if (this.setting.memoryGrid && this.setting.allowPaging) {
            var i = (this.setting.pageNumber - 1) * this.setting.pageSize;
            console.log(i);
            for (i;  i<this.data.Data.length && i < (this.setting.pageNumber * this.setting.pageSize) + this.setting.pageSize; i++) {
                this.tempData.push(this.data.Data[i]);
              //  console.log(this.setting.pageNumber);
            }
        }
        else
            this.tempData = this.data.Data;
    }
}

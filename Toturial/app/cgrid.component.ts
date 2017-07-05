import { Component, Directive,  NgModule, Input, ViewContainerRef, Compiler, ComponentFactory, ModuleWithComponentFactories,
        ComponentRef,  ReflectiveInjector, ViewChild,  ComponentFactoryResolver, EventEmitter, Injectable, OnInit, ApplicationRef
     } from "@angular/core";
     
import { RouterModule }  from '@angular/router';
import { CommonModule } from '@angular/common';

//service to be used to comunicate with grid
@Injectable()
export class CCellDataService {
    fireClickEmitter: EventEmitter<any> = new EventEmitter<any>();
    fireClickEvent(data: {}) {
        this.fireClickEmitter.next( data );
    } 
    sortClickEmitter: EventEmitter<any> = new EventEmitter<any>();
    sortClickEvent(data: {}) {
        this.sortClickEmitter.next( data );
    }
    filterClickEmitter: EventEmitter<any> = new EventEmitter<any>();
    filterClickEvent(data: {}) {
        this.filterClickEmitter.next( data );
    }
    pageChangeEmitter: EventEmitter<any> = new EventEmitter<any>();
    pageChangeEvent(data: {}) {
        this.pageChangeEmitter.next( data );
    }
    spinnerComp: ComponentRef<any>;
    constructor(private _appRef: ApplicationRef, private _resolver: ComponentFactoryResolver) { }
    public blockUI(placeholder:any) { 
        let elementRef = placeholder; 
        let factory = this._resolver.resolveComponentFactory(CGridSpinnerComponent);
        this.spinnerComp = elementRef.createComponent(factory);
    }
    public unblockUI() {
        if (this.spinnerComp) {
            this.spinnerComp.destroy();
        }
    }
}

//block UI component
@Component({
    selector: 'spinner',
    styles: [
        '.spinner-overlay {  background-color: white;  cursor: wait;}',
        '.spinner-message-container {  position: absolute;  top: 35%;  left: 0;  right: 0;  height: 0;  text-align: center;  z-index: 10001;  cursor: wait;}',
        '.spinner-message {  display: inline-block;  text-align: left;  background-color: #333;  color: #f5f5f5;  padding: 20px;  border-radius: 4px;  font-size: 20px;  font-weight: bold;  filter: alpha(opacity=100);}',
        '.modal-backdrop.in {    filter: alpha(opacity=50);    opacity: .5;}',
        '.modal-backdrop {    position: fixed;    top: 0;    right: 0;    bottom: 0;    left: 0;    z-index: 1040;    background-color: #000;}'
        ],
    template:
    `<div class="in modal-backdrop spinner-overlay"></div>
     <div class="spinner-message-container" aria-live="assertive" aria-atomic="true">
        <div class="spinner-message" [ngClass]="spinnerMessageClass">{{ state.message }}</div>
    </div>`
})
export class CGridSpinnerComponent {
    state = {
        message: 'Please wait...'
    };
}

//cell component with dynamic component loader
export function createComponentFactory(compiler: Compiler, metadata: Component, data:{}): Promise<ComponentFactory<any>> {
    const cmpClass = class DynamicComponent {
        row: {};
        clickEvent: EventEmitter<{}>=new EventEmitter();
        constructor() { 
            this.row = data;           
        }
        //onclick(customData:{}){
        //    this.clickEvent.next(customData);
        //}
    };
    const decoratedCmp = Component(metadata)(cmpClass);

    @NgModule({ imports: [CommonModule, RouterModule], declarations: [decoratedCmp] })
    class DynamicHtmlModule { }

    return compiler.compileModuleAndAllComponentsAsync(DynamicHtmlModule)
       .then((moduleWithComponentFactory: ModuleWithComponentFactories<any>) => {
        return moduleWithComponentFactory.componentFactories.find(x => x.componentType === decoratedCmp);
      });
}

@Component({
    selector: 'cgrid-cell',
    template: '<div #target></div>',
    styleUrls: []
})
export class CGridCellComponent {

    @Input() htmlString: string;
    @Input() row: {};
    cmpRef: ComponentRef<any>;

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler, public cCellDataService: CCellDataService) { }

    ngOnChanges() {
        const html = this.htmlString;
        if (!html) return;
        
        if(this.cmpRef) {
            this.cmpRef.destroy();
        }
        
        const compMetadata = new Component({
            selector: 'dynamic-html',
            template: this.htmlString
        });
        
        createComponentFactory(this.compiler, compMetadata, this.row)
        .then(factory => {
            const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);   
            this.cmpRef = this.vcRef.createComponent(factory, 0, injector, []);
            //this.cmpRef.instance.clickEvent.subscribe(customData => {
            //    this.fireClickEvent(customData); 
           // });
        });        
    }
    fireClickEvent(data: {}){
        this.cCellDataService.fireClickEvent(data);
    }
    ngOnDestroy() {
        if(this.cmpRef) {
            this.cmpRef.destroy();
        }    
    }
    
}
//column configuration class
export class Column {
    public field: string;
    public isCustom: boolean;
    public fieldName: string;
    public allowSorting: boolean;
    public customTemplate: string;
    public width: string;
    public allowFiltering: boolean;
    public filterValue: string;
}
//grid configuration class
export class GridOption{
    public columns: Column[] = [];
    public data: {}[] = [];
    public editTemplate: string;
    public currentSortField: string;
    public currentSortDirection: number;
    public filteredData: {}[] = [];
    public alloPaging: boolean;
    public currentPage: number = 1;
    public totalPage: number;
}


//main grid component
@Component({
    selector: 'cgrid',
    template: `<div style="width:100%">
    <div style="height:90%">
        <table class="table table-striped table-bordered table-hover table-condensed">
            <thead>
                <tr>
                    <th *ngFor="let col of gridOption.columns" style="background-color:red;">
                    <span *ngIf="!col.allowSorting">{{col.fieldName}}</span>
                    <span *ngIf="col.allowSorting && !(gridOption.currentSortField === col.field)" style="cursor:pointer;" (click)="onSort(col.field, 1)">
                        {{col.fieldName}}
                        <i class="fa fa-fw fa-sort"></i>
                    </span> 
                    <span *ngIf="col.allowSorting && gridOption.currentSortField === col.field && gridOption.currentSortDirection == -1" 
                    style="cursor:pointer;" (click)="onSort(col.field, 1)">
                        {{col.fieldName}}
                        <i class="fa fa-fw fa-sort-desc"></i>
                    </span>
                    <span *ngIf="col.allowSorting && gridOption.currentSortField === col.field && gridOption.currentSortDirection == 1" 
                    style="cursor:pointer;" (click)="onSort(col.field, -1)">
                        {{col.fieldName}}
                        <i class="fa fa-fw fa-sort-asc"></i>
                    </span>                      
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngIf="isFiltringEnabled()">
                    <td *ngFor="let col of gridOption.columns">
                        <input *ngIf="col.allowFiltering" type="text" #filter 
                        [value]="getFiletrValue(col.field)"
                        (change)="onFilterChange(col.field, filter.value)" style="width:100%;"> 
                    </td> 
                </tr>
                <tr *ngFor="let row of gridOption.data">
                    <ng-container *ngIf="!row['isEditing']">
                        <td *ngFor="let col of gridOption.columns" [style.width]="col.width">
                            <div *ngIf="col.isCustom">
                                <cgrid-cell [htmlString]="col.customTemplate" [row]="row"></cgrid-cell>
                            </div>
                            <div *ngIf="!col.isCustom">
                                {{ row[col.field] }}
                            </div>
                        </td>
                    </ng-container>
                    <ng-container *ngIf="row['isEditing']">
                        <td [attr.colspan]="3">
                            <cgrid-cell [htmlString]="gridOption.editTemplate" [row]="row"></cgrid-cell>
                        </td>
                    </ng-container>
                </tr>
            </tbody>
        </table></div>
        <div style="height: 10%;" class="text-right" *ngIf="gridOption.alloPaging">
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-sm justify-content-center">
                    <li class="page-item" [ngClass]= "isFirstPageDisabled()" (click)="onPageChange(1)">
                        <a class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;&laquo;</span>
                            <span class="sr-only">First</span>
                        </a>
                    </li>
                    <li class="page-item" [ngClass]= "isFirstPageDisabled()" (click)="onPageChange(gridOption.currentPage-1)">
                        <a class="page-link" aria-label="Previous" >
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    <li class="page-item" *ngFor="let page of getPageRange()" [ngClass]="{ 'active': page == gridOption.currentPage }" (click)="onPageChange(page)">
                        <a class="page-link" >{{page}}</a>
                    </li>
                    <li class="page-item" [ngClass]= "isLastPageDisabled()" (click)="onPageChange(gridOption.currentPage + 1)">
                        <a class="page-link" aria-label="Next" >
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                    <li class="page-item" [ngClass]= "isLastPageDisabled()" (click)="onPageChange(gridOption.totalPage)">
                        <a class="page-link" aria-label="Next" >
                            <span aria-hidden="true">&raquo;&raquo;</span>
                            <span class="sr-only">Last</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>        
        </div>
    `,
    styleUrls: []
})
export class CGridComponent implements OnInit{
    @Input() gridOption: GridOption = new GridOption();
    constructor(public celldataService: CCellDataService) {
    }
    ngOnInit() {
    }

    onSort(sortField: string, sortDirection:number){
        this.celldataService.sortClickEvent({'field': sortField, 'direction': sortDirection});
    }

    isFiltringEnabled(){
        if(this.gridOption && this.gridOption.columns){
            for(let col of this.gridOption.columns){
                if(col.allowFiltering) return true;
            }
        }
        return false;
    }

    onFilterChange(filterField: string, filterValue: string){
        let valueAdded: boolean = false;
        for(let filterD of this.gridOption.filteredData){
            if(filterD['field'] === filterField){
                filterD['filterValue'] = filterValue;
                valueAdded = true;
            }
        }
        if(!valueAdded){
            this.gridOption.filteredData.push({field: filterField, filterValue: filterValue});            
        }
        this.celldataService.filterClickEvent(this.gridOption.filteredData);
    }

    onPageChange(currentPage: number){
        if(currentPage > this.gridOption.totalPage){
            currentPage= this.gridOption.totalPage;
        }else if(currentPage < 1){
            currentPage = 1;
        }else{
            this.celldataService.pageChangeEvent({'currentPage': currentPage});
        }
    }

    getFiletrValue(filed:string){
        for(let filterD of this.gridOption.filteredData){
            if(filterD['field'] === filed){
                return filterD['filterValue'];
            }
        }
        return '';
    }

    isFirstPageDisabled(){
        if(this.gridOption){
            if(this.gridOption.currentPage && this.gridOption.totalPage){
                if(this.gridOption.currentPage == 1){
                    return 'disabled';
                }
            }else{
                return '';
            }
        }else{
            return '';
        }
    }
    isLastPageDisabled(){
        if(this.gridOption){
            if(this.gridOption.currentPage && this.gridOption.totalPage){
                if(this.gridOption.currentPage == this.gridOption.totalPage){
                    return 'disabled';
                }
            }else{
                return '';
            }
        }else{
            return '';
        }
    }
    
    getPageRange(){
        let pages: number[] = [];
        let startPage: number;
        let endPage:number;
        if (this.gridOption.totalPage <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = this.gridOption.totalPage;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (this.gridOption.currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (this.gridOption.currentPage + 4 >= this.gridOption.totalPage) {
                startPage = this.gridOption.totalPage - 9;
                endPage = this.gridOption.totalPage;
            } else {
                startPage = this.gridOption.currentPage - 5;
                endPage = startPage + 9;
            }
        }
        for(let value = startPage; value <= endPage; value++){
            pages.push(value);
        }
        return pages;
    }
    
}


export class column {

    headerName: string;
    propertyName: string;
    headerClasss: string;
    columnSize: string;
    columnClasses: string;
    sortColumnName: string;
    sortOrder: string;
    isDefaultSort: boolean;
    columnType: columnType;
    eventName: string;
    formatCell(column: column, row: any):string {
        return row[column.propertyName];
    }
}

export class rowEvent {
    data: any;
    eventName: string;
}

export  enum columnType {
    text = 1,
    link,
    checkBox,
    button
}
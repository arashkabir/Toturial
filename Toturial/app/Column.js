"use strict";
var column = (function () {
    function column() {
    }
    column.prototype.formatCell = function (column, row) {
        return row[column.propertyName];
    };
    return column;
}());
exports.column = column;
var rowEvent = (function () {
    function rowEvent() {
    }
    return rowEvent;
}());
exports.rowEvent = rowEvent;
(function (columnType) {
    columnType[columnType["text"] = 1] = "text";
    columnType[columnType["link"] = 2] = "link";
    columnType[columnType["checkBox"] = 3] = "checkBox";
    columnType[columnType["button"] = 4] = "button";
})(exports.columnType || (exports.columnType = {}));
var columnType = exports.columnType;
//# sourceMappingURL=column.js.map
"use strict";
var gridSetting = (function () {
    function gridSetting() {
        this.sortDirection = '';
        this.sortColumn = '';
        this.selectedItem = [];
        this.pageSize = 100;
        this.pageNumber = 1;
        this.memoryGrid = true;
        this.allowPaging = true;
        this.showtotalPages = 5;
    }
    return gridSetting;
}());
exports.gridSetting = gridSetting;
//# sourceMappingURL=gridSetting.js.map
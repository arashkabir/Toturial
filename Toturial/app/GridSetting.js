"use strict";
var gridSetting = (function () {
    function gridSetting() {
        this.sortDirection = '';
        this.sortColumn = '';
        this.selectedItem = [];
        this.pageSize = 10;
        this.pageNumber = 0;
        this.memoryGrid = false;
        this.allowPaging = false;
    }
    return gridSetting;
}());
exports.gridSetting = gridSetting;
//# sourceMappingURL=gridSetting.js.map
"use strict";
/// <reference path="./typings/index.d.ts" />
var plugins = require("./beautylog.plugins");
var tableHelpers = {
    makeRow: function (cellCounterArg, colorArg) {
        if (cellCounterArg === void 0) { cellCounterArg = 2; }
        if (colorArg === void 0) { colorArg = "cyan"; }
        var rowArray = [];
        for (var i = 0; i < (cellCounterArg); i++) {
            rowArray.push(String(i + 1).cyan);
        }
        return rowArray;
    }
};
var Table = (function () {
    function Table(tableTypeArg, tableHeadArrayArg) {
        if (tableHeadArrayArg === void 0) { tableHeadArrayArg = tableHelpers.makeRow(); }
        switch (tableTypeArg) {
            case "checks":
                this.tableHead = ['Check Item:'.cyan, 'Status:'.cyan];
                break;
            case "custom":
                this.tableHead = tableHeadArrayArg;
                break;
            default:
                break;
        }
        this.rows = [];
        this.type = tableTypeArg;
    }
    Table.prototype.push = function (row) {
        this.rows.push(row);
    };
    Table.prototype.print = function () {
        var table = new plugins.cliTable({
            head: this.tableHead
        });
        for (var row in this.rows) {
            if (this.rows[row][1] == "success") {
                this.rows[row][1] = ' '.bgGreen + ' ' + this.rows[row][1];
            }
            else if (this.rows[row][1] == "error") {
                this.rows[row][1] = ' '.bgRed + ' ' + this.rows[row][1];
            }
            table.push(this.rows[row]);
        }
        ;
        console.log(table.toString());
    };
    return Table;
}());
exports.Table = Table;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLnRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2Q0FBNkM7QUFDN0MsSUFBWSxPQUFPLFdBQU0scUJBQXFCLENBQUMsQ0FBQTtBQUUvQyxJQUFJLFlBQVksR0FBRztJQUNmLE9BQU8sRUFBRSxVQUFTLGNBQXlCLEVBQUMsUUFBd0I7UUFBbEQsOEJBQXlCLEdBQXpCLGtCQUF5QjtRQUFDLHdCQUF3QixHQUF4QixpQkFBd0I7UUFDaEUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNwQixDQUFDO0NBQ0osQ0FBQztBQUVGO0lBSUksZUFBWSxZQUFtQixFQUFDLGlCQUFtRDtRQUFuRCxpQ0FBbUQsR0FBbkQsb0JBQTZCLFlBQVksQ0FBQyxPQUFPLEVBQUU7UUFDL0UsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLENBQUM7WUFDVixLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztnQkFDbkMsS0FBSyxDQUFDO1lBQ1Y7Z0JBQ0ksS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUNELG9CQUFJLEdBQUosVUFBSyxHQUFZO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELHFCQUFLLEdBQUw7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3ZCLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFBQSxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksYUFBSyxRQW1DakIsQ0FBQSIsImZpbGUiOiJiZWF1dHlsb2cuY2xhc3Nlcy50YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvaW5kZXguZC50c1wiIC8+XHJcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vYmVhdXR5bG9nLnBsdWdpbnNcIjtcclxuXHJcbmxldCB0YWJsZUhlbHBlcnMgPSB7XHJcbiAgICBtYWtlUm93OiBmdW5jdGlvbihjZWxsQ291bnRlckFyZzpudW1iZXIgPSAyLGNvbG9yQXJnOnN0cmluZyA9IFwiY3lhblwiKXtcclxuICAgICAgICBsZXQgcm93QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjZWxsQ291bnRlckFyZyk7IGkrKykge1xyXG4gICAgICAgICAgICByb3dBcnJheS5wdXNoKFN0cmluZyhpICsgMSkuY3lhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3dBcnJheTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZSB7XHJcbiAgICB0YWJsZUhlYWQ6c3RyaW5nW107XHJcbiAgICByb3dzO1xyXG4gICAgdHlwZTpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJsZVR5cGVBcmc6c3RyaW5nLHRhYmxlSGVhZEFycmF5QXJnOnN0cmluZ1tdID0gdGFibGVIZWxwZXJzLm1ha2VSb3coKSkge1xyXG4gICAgICAgIHN3aXRjaCAodGFibGVUeXBlQXJnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja3NcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVIZWFkID0gWydDaGVjayBJdGVtOicuY3lhbiwnU3RhdHVzOicuY3lhbl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImN1c3RvbVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZUhlYWQgPSB0YWJsZUhlYWRBcnJheUFyZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRhYmxlVHlwZUFyZztcclxuICAgIH1cclxuICAgIHB1c2gocm93OnN0cmluZ1tdKXtcclxuICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gbmV3IHBsdWdpbnMuY2xpVGFibGUoe1xyXG4gICAgICAgICAgICBoZWFkOiB0aGlzLnRhYmxlSGVhZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IHJvdyBpbiB0aGlzLnJvd3Mpe1xyXG4gICAgICAgICAgICBpZih0aGlzLnJvd3Nbcm93XVsxXSA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3Nbcm93XVsxXSA9ICcgJy5iZ0dyZWVuICsgJyAnICsgdGhpcy5yb3dzW3Jvd11bMV07XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3dzW3Jvd11bMV0gPT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3Nbcm93XVsxXSA9ICcgJy5iZ1JlZCArICcgJyArIHRoaXMucm93c1tyb3ddWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlLnB1c2godGhpcy5yb3dzW3Jvd10pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2codGFibGUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn0iXX0=

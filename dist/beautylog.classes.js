/// <reference path="./typings/main.d.ts" />
"use strict";
var beautylog_classes_table_1 = require("./beautylog.classes.table");
var beautylog_classes_ora_1 = require("./beautylog.classes.ora");
exports.table = function (tableTypeArg, tableHeadArrayArg) {
    return new beautylog_classes_table_1.Table(tableTypeArg, tableHeadArrayArg);
};
exports.ora = function (textArg, colorArg, startArg) {
    return new beautylog_classes_ora_1.Ora(textArg, colorArg, startArg);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5jbGFzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUMsd0NBQW9CLDJCQUEyQixDQUFDLENBQUE7QUFDaEQsc0NBQWtCLHlCQUF5QixDQUFDLENBQUE7QUFFakMsYUFBSyxHQUFHLFVBQVMsWUFBbUIsRUFBQyxpQkFBMkI7SUFDdkUsTUFBTSxDQUFDLElBQUksK0JBQUssQ0FBQyxZQUFZLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUE7QUFFVSxXQUFHLEdBQUcsVUFBUyxPQUFjLEVBQUMsUUFBZSxFQUFDLFFBQWlCO0lBQ3RFLE1BQU0sQ0FBQyxJQUFJLDJCQUFHLENBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUEiLCJmaWxlIjoiYmVhdXR5bG9nLmNsYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge1RhYmxlfSBmcm9tIFwiLi9iZWF1dHlsb2cuY2xhc3Nlcy50YWJsZVwiO1xyXG5pbXBvcnQge09yYX0gZnJvbSBcIi4vYmVhdXR5bG9nLmNsYXNzZXMub3JhXCI7XHJcblxyXG5leHBvcnQgbGV0IHRhYmxlID0gZnVuY3Rpb24odGFibGVUeXBlQXJnOnN0cmluZyx0YWJsZUhlYWRBcnJheUFyZz86c3RyaW5nW10pe1xyXG4gICAgcmV0dXJuIG5ldyBUYWJsZSh0YWJsZVR5cGVBcmcsdGFibGVIZWFkQXJyYXlBcmcpO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IG9yYSA9IGZ1bmN0aW9uKHRleHRBcmc6c3RyaW5nLGNvbG9yQXJnOnN0cmluZyxzdGFydEFyZz86Ym9vbGVhbil7XHJcbiAgICByZXR1cm4gbmV3IE9yYSh0ZXh0QXJnLGNvbG9yQXJnLHN0YXJ0QXJnKTtcclxufSJdfQ==

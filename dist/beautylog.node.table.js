/// <reference path="./typings/main.d.ts" />
var classes = require("./beautylog.classes");
var beautylogOsTable = {};
beautylogOsTable.new = function (typeArg, tableHeadArrayArg) {
    var newConsoleTable = new classes.ConsoleTable(typeArg, tableHeadArrayArg);
    return newConsoleTable;
};
module.exports = beautylogOsTable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5ub2RlLnRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QyxJQUFPLE9BQU8sV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBRWhELElBQUksZ0JBQWdCLEdBQU8sRUFBRSxDQUFDO0FBRTlCLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxVQUFTLE9BQWMsRUFBQyxpQkFBa0I7SUFDN0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFFLE1BQU0sQ0FBQyxlQUFlLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBQ0YsaUJBQVMsZ0JBQWdCLENBQUMiLCJmaWxlIjoiYmVhdXR5bG9nLm5vZGUudGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgY2xhc3NlcyA9IHJlcXVpcmUoXCIuL2JlYXV0eWxvZy5jbGFzc2VzXCIpO1xuXG52YXIgYmVhdXR5bG9nT3NUYWJsZTphbnkgPSB7fTtcblxuYmVhdXR5bG9nT3NUYWJsZS5uZXcgPSBmdW5jdGlvbih0eXBlQXJnOnN0cmluZyx0YWJsZUhlYWRBcnJheUFyZz8pIHtcbiAgICB2YXIgbmV3Q29uc29sZVRhYmxlID0gbmV3IGNsYXNzZXMuQ29uc29sZVRhYmxlKHR5cGVBcmcsdGFibGVIZWFkQXJyYXlBcmcpO1xuICAgIHJldHVybiBuZXdDb25zb2xlVGFibGU7XG59O1xuZXhwb3J0ID0gYmVhdXR5bG9nT3NUYWJsZTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

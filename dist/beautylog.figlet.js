"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var defaultOptions = {
    font: "Star Wars",
    color: "green",
    cb: function () { }
};
exports.figlet = function (textArg, optionsArg) {
    var done = plugins.q.defer();
    var mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    var options = plugins.lodash.assign(mergeOptions, optionsArg);
    plugins.figlet(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data[options.color]);
        options.cb();
        done.resolve();
    });
    return done.promise;
};
exports.figletSync = function (textArg, optionsArg) {
    var mergeOptions = plugins.lodash.cloneDeep(defaultOptions);
    var options = plugins.lodash.assign(mergeOptions, optionsArg);
    console.log(plugins.figlet.textSync(textArg, {
        font: options.font,
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })[options.color]);
    return true;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5maWdsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDRDQUE0QztBQUM1QyxJQUFPLE9BQU8sV0FBVyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2hELElBQUksY0FBYyxHQUFHO0lBQ2pCLElBQUksRUFBQyxXQUFXO0lBQ2hCLEtBQUssRUFBRSxPQUFPO0lBQ2QsRUFBRSxFQUFFLGNBQVcsQ0FBQztDQUNuQixDQUFDO0FBRVMsY0FBTSxHQUFHLFVBQVMsT0FBYyxFQUFDLFVBQVc7SUFDbkQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUM7UUFDbkIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsY0FBYyxFQUFFLFNBQVM7S0FDNUIsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsa0JBQVUsR0FBRyxVQUFTLE9BQWMsRUFBQyxVQUFXO0lBQ3ZELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQztRQUN4QyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7UUFDbEIsZ0JBQWdCLEVBQUUsU0FBUztRQUMzQixjQUFjLEVBQUUsU0FBUztLQUM1QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUMiLCJmaWxlIjoiYmVhdXR5bG9nLmZpZ2xldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vYmVhdXR5bG9nLnBsdWdpbnNcIik7XG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZm9udDpcIlN0YXIgV2Fyc1wiLFxuICAgIGNvbG9yOiBcImdyZWVuXCIsXG4gICAgY2I6IGZ1bmN0aW9uKCl7fVxufTtcblxuZXhwb3J0IHZhciBmaWdsZXQgPSBmdW5jdGlvbih0ZXh0QXJnOnN0cmluZyxvcHRpb25zQXJnPyl7XG4gICAgdmFyIGRvbmUgPSBwbHVnaW5zLnEuZGVmZXIoKTtcbiAgICB2YXIgbWVyZ2VPcHRpb25zID0gcGx1Z2lucy5sb2Rhc2guY2xvbmVEZWVwKGRlZmF1bHRPcHRpb25zKTtcbiAgICB2YXIgb3B0aW9ucyA9IHBsdWdpbnMubG9kYXNoLmFzc2lnbihtZXJnZU9wdGlvbnMsb3B0aW9uc0FyZyk7XG4gICAgcGx1Z2lucy5maWdsZXQodGV4dEFyZyx7XG4gICAgICAgIGZvbnQ6IG9wdGlvbnMuZm9udCxcbiAgICAgICAgaG9yaXpvbnRhbExheW91dDogJ2RlZmF1bHQnLFxuICAgICAgICB2ZXJ0aWNhbExheW91dDogJ2RlZmF1bHQnXG4gICAgfSwgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZy4uLicpO1xuICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhW29wdGlvbnMuY29sb3JdKTtcbiAgICAgICAgb3B0aW9ucy5jYigpO1xuICAgICAgICBkb25lLnJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZG9uZS5wcm9taXNlO1xufTtcblxuZXhwb3J0IHZhciBmaWdsZXRTeW5jID0gZnVuY3Rpb24odGV4dEFyZzpzdHJpbmcsb3B0aW9uc0FyZz8pe1xuICAgIHZhciBtZXJnZU9wdGlvbnMgPSBwbHVnaW5zLmxvZGFzaC5jbG9uZURlZXAoZGVmYXVsdE9wdGlvbnMpO1xuICAgIHZhciBvcHRpb25zID0gcGx1Z2lucy5sb2Rhc2guYXNzaWduKG1lcmdlT3B0aW9ucyxvcHRpb25zQXJnKTtcbiAgICBjb25zb2xlLmxvZyhwbHVnaW5zLmZpZ2xldC50ZXh0U3luYyh0ZXh0QXJnLHtcbiAgICAgICAgZm9udDogb3B0aW9ucy5mb250LFxuICAgICAgICBob3Jpem9udGFsTGF5b3V0OiAnZGVmYXVsdCcsXG4gICAgICAgIHZlcnRpY2FsTGF5b3V0OiAnZGVmYXVsdCdcbiAgICB9KVtvcHRpb25zLmNvbG9yXSk7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuIl19
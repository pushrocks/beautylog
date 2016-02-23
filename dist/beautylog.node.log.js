/// <reference path="./typings/main.d.ts" />
var plugins = require("./beautylog.plugins");
var localBl = {
    dirPrefix: plugins.clc.bgXterm(39).xterm(231).bold(' DIR ') + ' ',
    errorPrefix: ' Error: '.bgRed.white.bold + ' ',
    infoPrefix: plugins.clc.bgXterm(198).xterm(231).bold(' INFO ') + ' ',
    normalPrefix: ' Log: '.bgCyan.white.bold + ' ',
    okPrefix: ' '.bgGreen + ' OK! '.bgBlack.green.bold + ' ',
    successPrefix: ' Success: '.bgGreen.white.bold + ' ',
    warnPrefix: ' '.bgYellow + ' Warn: '.bgBlack.yellow.bold + ' '
};
/**
 *
 * @param logText
 * @param logType
 * @returns {boolean}
 */
var logFunction = function (logText, logType) {
    if (logText === void 0) { logText = 'empty log'; }
    if (logType === void 0) { logType = 'normal'; }
    try {
        switch (logType) {
            case 'dir':
                logText = localBl.dirPrefix + plugins.clc.xterm(26)(logText);
                break;
            case 'error':
                logText = localBl.errorPrefix + logText.red.bold;
                break;
            case 'info':
                logText = localBl.infoPrefix + plugins.clc.xterm(198)(logText);
                break;
            case 'normal':
                logText = localBl.normalPrefix + logText.cyan.bold;
                break;
            case 'ok':
                logText = localBl.okPrefix + logText.bold;
                break;
            case 'success':
                logText = localBl.successPrefix + logText.green.bold;
                break;
            case 'warn':
                logText = localBl.warnPrefix + logText.bold;
                break;
            case 'log':
            default:
                logText.blue.bold;
                console.log(('unknown logType for "' + logText + '"').red.bold);
                break;
        }
        console.log(logText);
        return true;
    }
    catch (error) {
        console.log(localBl.errorPrefix + 'You seem to have tried logging something strange'.red.bold + error);
        return false;
    }
};
module.exports = logFunction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlYXV0eWxvZy5ub2RlLmxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7QUFFNUMsSUFBTyxPQUFPLFdBQVcscUJBQXFCLENBQUMsQ0FBQztBQUVoRCxJQUFJLE9BQU8sR0FBRztJQUNWLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUc7SUFDakUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHO0lBQzlDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUc7SUFDcEUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHO0lBQzlDLFFBQVEsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHO0lBQ3hELGFBQWEsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRztJQUNwRCxVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRztDQUNqRSxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSCxJQUFJLFdBQVcsR0FBRyxVQUFTLE9BQTRCLEVBQUUsT0FBeUI7SUFBdkQsdUJBQTRCLEdBQTVCLHFCQUE0QjtJQUFFLHVCQUF5QixHQUF6QixrQkFBeUI7SUFDOUUsSUFBSSxDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNkLEtBQUssS0FBSztnQkFDTixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNqRCxLQUFLLENBQUM7WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9ELEtBQUssQ0FBQztZQUNWLEtBQUssUUFBUTtnQkFDVCxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDbkQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxJQUFJO2dCQUNMLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLEtBQUssQ0FBQztZQUNWLEtBQUssU0FBUztnQkFDVixPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDckQsS0FBSyxDQUFDO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLEtBQUssQ0FBQztZQUNWLEtBQUssS0FBSyxDQUFDO1lBQ1g7Z0JBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoRSxLQUFLLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQ0E7SUFBQSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGtEQUFrRCxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdkcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBQ0YsaUJBQVMsV0FBVyxDQUFDIiwiZmlsZSI6ImJlYXV0eWxvZy5ub2RlLmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9iZWF1dHlsb2cucGx1Z2luc1wiKTtcblxudmFyIGxvY2FsQmwgPSB7XG4gICAgZGlyUHJlZml4OiBwbHVnaW5zLmNsYy5iZ1h0ZXJtKDM5KS54dGVybSgyMzEpLmJvbGQoJyBESVIgJykgKyAnICcsXG4gICAgZXJyb3JQcmVmaXg6ICcgRXJyb3I6ICcuYmdSZWQud2hpdGUuYm9sZCArICcgJyxcbiAgICBpbmZvUHJlZml4OiBwbHVnaW5zLmNsYy5iZ1h0ZXJtKDE5OCkueHRlcm0oMjMxKS5ib2xkKCcgSU5GTyAnKSArICcgJyxcbiAgICBub3JtYWxQcmVmaXg6ICcgTG9nOiAnLmJnQ3lhbi53aGl0ZS5ib2xkICsgJyAnLFxuICAgIG9rUHJlZml4OiAnICcuYmdHcmVlbiArICcgT0shICcuYmdCbGFjay5ncmVlbi5ib2xkICsgJyAnLFxuICAgIHN1Y2Nlc3NQcmVmaXg6ICcgU3VjY2VzczogJy5iZ0dyZWVuLndoaXRlLmJvbGQgKyAnICcsXG4gICAgd2FyblByZWZpeDogJyAnLmJnWWVsbG93ICsgJyBXYXJuOiAnLmJnQmxhY2sueWVsbG93LmJvbGQgKyAnICdcbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBsb2dUZXh0XG4gKiBAcGFyYW0gbG9nVHlwZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbnZhciBsb2dGdW5jdGlvbiA9IGZ1bmN0aW9uKGxvZ1RleHQ6c3RyaW5nID0gJ2VtcHR5IGxvZycsIGxvZ1R5cGU6c3RyaW5nID0gJ25vcm1hbCcpIHtcbiAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKGxvZ1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rpcic6XG4gICAgICAgICAgICAgICAgbG9nVGV4dCA9IGxvY2FsQmwuZGlyUHJlZml4ICsgcGx1Z2lucy5jbGMueHRlcm0oMjYpKGxvZ1RleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgIGxvZ1RleHQgPSBsb2NhbEJsLmVycm9yUHJlZml4ICsgbG9nVGV4dC5yZWQuYm9sZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luZm8nOlxuICAgICAgICAgICAgICAgIGxvZ1RleHQgPSBsb2NhbEJsLmluZm9QcmVmaXggKyBwbHVnaW5zLmNsYy54dGVybSgxOTgpKGxvZ1RleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgICAgICAgICBsb2dUZXh0ID0gbG9jYWxCbC5ub3JtYWxQcmVmaXggKyBsb2dUZXh0LmN5YW4uYm9sZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29rJzpcbiAgICAgICAgICAgICAgICBsb2dUZXh0ID0gbG9jYWxCbC5va1ByZWZpeCArIGxvZ1RleHQuYm9sZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgIGxvZ1RleHQgPSBsb2NhbEJsLnN1Y2Nlc3NQcmVmaXggKyBsb2dUZXh0LmdyZWVuLmJvbGQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd3YXJuJzpcbiAgICAgICAgICAgICAgICBsb2dUZXh0ID0gbG9jYWxCbC53YXJuUHJlZml4ICsgbG9nVGV4dC5ib2xkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG9nJzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbG9nVGV4dC5ibHVlLmJvbGQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKCd1bmtub3duIGxvZ1R5cGUgZm9yIFwiJyArIGxvZ1RleHQgKyAnXCInKS5yZWQuYm9sZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobG9nVGV4dCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxCbC5lcnJvclByZWZpeCArICdZb3Ugc2VlbSB0byBoYXZlIHRyaWVkIGxvZ2dpbmcgc29tZXRoaW5nIHN0cmFuZ2UnLnJlZC5ib2xkICsgZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydCA9IGxvZ0Z1bmN0aW9uOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
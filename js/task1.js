var box = document.getElementsByTagName('li');
var arr_num = new Array(3);
var arr_color = new Array(3);

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ',' + g + ',' + b + ")"; //所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
}


function threeColor() {
    // 三个随机颜色,但不是ccc
    for (var i = 0; i < 3; i++) {
        arr_color[i] = getRandomColor().toString();
        // 随机颜色
        for (var j = 0; j < i; j++) {
            // 不能是一样的颜色
            if (arr_color[i] == arr_color[j]) {
                i = i - 1;
                break;
            }
        };
        if (arr_color[i] == "rgb(204, 204, 204)") {
            // 不能是原色
            i = i - 1;
            break;
        }
    }
}

function threeNum() {
    // 三个随机数字
    for (var i = 0; i < 3; i++) {
        arr_num[i] = Math.floor(Math.random() * 9).toString(10);
        // 随机数字
        for (var j = 0; j < i; j++) {
            if (arr_num[i] == arr_num[j]) {
                i = i - 1;
                break;
            }
        };

    }
}

function clearColor() {
    // 清楚颜色
    for (var i = 0; i < box.length; i++) {
        box[i].style.background = "#ccc";
    }
}

function getCss() {
    threeColor();
    threeNum();
    clearColor();
    // 将随机的颜色给随机的地址
    for (var i = 0; i < 3; i++) {
        box[arr_num[i]].style.background = arr_color[i];
    }
}


function on() {
    // 开始
    clearColor();
    time = setInterval("getCss()", 1000);
}

function stop() {
    // 停止
    clearInterval(time);
}

function off() {
    // 结束
    clearColor();
    clearInterval(time);
}

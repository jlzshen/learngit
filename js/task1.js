function getRandomNum(n, min, max) {
    /* 三个随机数 */
    var arr_num = new Array(n);
    for (var i = 0; i < n; i++) {
        arr_num[i] = Math.floor(Math.random() * (max - min + 1) + min);
        for (var j = 0; j < i; i++) {
            if (arr_num[i] == arr_num[j]) {
                i = i - 1;
                break;
            }
        }
    }
}

function getRandomColor(n) {
    /* 三个随机颜色 */
    var arr_color = new Array(n);
    for (var i = 0; i < n; i++) {
        var a = Math.floor(Math.random() * 16777216).toString(16);
        while (a.length < 6) {
            a = '0' + a;
        }
        for (var j = 0; j < i; j++) {
            if (a == arr_color[j]) {
                i = i - 1;
                break;
            }
        }
        arr_color[i] = a;
    }
}

function start() {
    var box = document.getElementsByTagName('li');
    var arr_num = getRandomNum(3, 0, 8);
    var arr_color = getRandomColor(3);
    for (var i = 0; i < 3; i++) {
        box[arr_num[i]].style.background = arr_color[i]; //将随机的颜色给随机的地址
    }

}

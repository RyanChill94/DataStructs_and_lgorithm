/**
 * Created by Ryanchill on 2016/5/7.
 */

function max(a, b) {

    return (a > b ? a : b);
}

function maxMultiple(num,n) {
    //var num = document.getElementById('a').value;
    //var n = document.getElementById('b').value;
    var lenA = num.length;
    if (n > lenA) {
        msg = "分成的段数不能超过数字的位数";
        return msg;
    }

    //初始化二维数组
    var p = [];
    var w = [];
    for (var i = 0; i < lenA + 1; i++) {
        w[i] = [];
        p[i] = [];
        for (var j = 0; j < lenA + 1; j++) {
            p[i].push(0);
            w[i].push(0);
        }
    }

    for (var i = 1; i < lenA + 1; i++) {
        p[i][i] = Number(num[i - 1]);
        for (var j = i + 1; j < lenA + 1; j++)
            p[i][j] = Number(p[i][j - 1] * 10) + Number(num[j - 1]);
    }
    for (var i = 1; i < lenA + 1; i++)
        w[i][1] = p[1][i];

    for (var i = 2; i < n + 1; i++)
        for (var k = i; k < lenA + 1; k++) {
            for (var j = i - 1; j < k; j++) {
                w[k][i] = max(w[k][i], w[j][i - 1] * p[j + 1][k]);
            }
        }
    console.log("分割数组为");
    console.log(p);

    console.log("结果数组");
    console.log(w);

    //console.log("最大K乘积为:" + w[lenA][n]);
    return w[lenA][n];
}

/*测试用例*/
var a = "";
var b = "";

//maxMultiple("1234","3");

//开启数据流
process.stdin.resume();

process.stdout.write('请输入一个整数: ');

process.stdin.on('data', function (chunk) {
    if (!a) {
        a = String.prototype.trim.call(chunk);
        process.stdout.write('请输入分割段数: ')
    } else {
        b = String.prototype.trim.call(chunk);
        process.stdout.write(a + '的最大'+ b +'乘积是:\n' + maxMultiple(a, b));
    }
});
/**
 * Created by Ryanchill on 2016/5/6.
 */
function getLength(string) {
    return string.length;
}

function minEdit(stringA, stringB) {
    var lenA = getLength(stringA);
    var lenB = getLength(stringB);



    //初始化二维数组
    var array = [];
    for (var i = 0; i < lenB+1; i++) {
        array[i] = [];
        for (var j = 0; j < lenA+1; j++) {
            array[i].push(0);
        }
    }
    console.log('初始化矩阵为');
    console.log(array);

    //边界条件初始化
    for (var n = 0; n < lenB + 1; n++) {
        //console.log( '第'+n +'次'+ array[n]);
        array[n][0] = n;
    }
    for (var m = 0; m < lenA + 1; m++) {
        array[0][m] = m;
    }

    console.log('边界条件处理完后的矩阵');
    console.log(array);

    for (var n = 1; n < lenB + 1; n++) {
        for (var m = 1; m < lenA + 1; m++) {
            //判断当前字符是否相等
            if (stringB[n-1] == stringA[m-1]) {
                array[n][m] = array[n - 1][m - 1];
            } else {
                //替换
                array[n][m] = array[n - 1][m - 1] + 1;
                //增加
                array[n][m] = array[n][m] > (array[n][m - 1] + 1) ? (array[n][m - 1] + 1) : array[n][m];

                //先删除
                array[n][m] = array[n][m] > (array[n - 1][m] + 1) ? (array[n][m - 1] + 1) : array[n][m];
            }
        }
    }

    console.log('处理完后的矩阵');
    console.log(array);
    return array[lenB][lenA];

}


/*测试用例*/
var a = "";
var b = "";

////minEdit(a, b); // d(a,b) = 5;

//开启数据流
process.stdin.resume();

process.stdout.write('请输入字符串a的值: ');

process.stdin.on('data', function (chunk) {
    if (!a) {
        a = String.prototype.trim.call(chunk);
        process.stdout.write('请输入字符串b的值: ')
    } else {
        b = String.prototype.trim.call(chunk);
        process.stdout.write('最短编辑距离是' + minEdit(a, b));
    }
});


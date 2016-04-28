/**
 * Created by Ryanchill on 2016/3/25.
 */

/*
 * 冒泡
 * */

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            con(j, j + 1);
        }
    }
    function con(prev, next) {
        var temp;
        if (arr[prev] > arr[next]) {
            temp = arr[next];
            arr[next] = arr[prev];
            arr[prev] = temp;
        }
    }

    return arr;
}

/*
 *选择排序
 * */

function selSort(arr) {
    //结束递归条件 返回数组最终元素
    if (arr.length == 1) {
        return arr;
    }
    var iMin = arr[0];
    var iIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < iMin) {
            iMin = arr[i];
            iIndex = i;
        }
    }

//修改原数组长度
    var result = arr.splice(iIndex, 1);
    return result.concat(selSort(arr));

}

/*快速排序*/
function quickSort(arr) {
    //右侧数组可能为空
    if (arr.length <= 1) {
        return arr;
    }
    //基准点
    var mid = Math.floor(arr.length / 2);
    var midNum = arr.splice(mid, 1);
    //左右数组
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < midNum) {
            left.push(arr[i]);
        }
        if (arr[i] > midNum) {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(midNum, quickSort(right));

}


/*测试用例*/
arr = [3, 4, 5, 8];
console.log(bubbleSort(arr));
//递归写法都改变了原数组,会造成冲突
//console.log(selSort(arr));
console.log(quickSort(arr));

/**
 * Created by Ryanchill on 2016/3/30.
 */

//生成硬币
function makeCoin() {
    var COIN_NUM = 16;
    var arr = [];
    var trueWeight = random(70, 80);
    var fakeWeight = trueWeight - random(1, 5);
    var fakePos = random(0, 8);
    for (var i = 0; i < COIN_NUM - 1; i++) {
        arr.push(trueWeight);
    }
    arr.splice(fakePos, 0, fakeWeight);
    return arr;
}


//生成随机数
function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}


//找伪币
function findFakeCoin(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var midPos = Math.floor(arr.length / 2);
    //console.log('中间值 ' + midPos);
    //slice() endPosition 不包括本身
    var left = arr.slice(0, midPos);
    var right = arr.slice(midPos, arr.length);
    var nextArray = [];
    //console.log('左侧数组 ' + left);
    //console.log('右侧数组 ' + right);
    if (sumWeight(left) <= sumWeight(right)) {
        nextArray = left.slice(0);
    } else {
        nextArray = right.slice(0);
    }
    console.log('下一个数组 ' + nextArray);
    return findFakeCoin(nextArray);

    function sumWeight(aWeight) {
        var sum = 0;
        for (var i = 0; i < aWeight.length; i++) {
            sum += aWeight[i];
        }
        return sum;
    }
}


function showPosition(arr) {
    var result = findFakeCoin(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === result[0]) {
            return '第' + (i + 1) + '枚是伪币';
        }
    }
}


/*测试用例*/
var arr = makeCoin();
console.log(arr);
//findFakeCoin(arr);
console.log(showPosition(arr));

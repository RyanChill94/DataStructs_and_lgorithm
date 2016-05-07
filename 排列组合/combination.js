/**
 * Created by Ryanchill on 2016/5/7.
 */

/*-------------------
 * 排列
 * @param arr  {array}  排序的数组
 * @param num  {number} 选出的数量
 *
 --------------------*/

function permutation (arr, num) {
    var resultNum = 0;
    var resultArr = [];
    var iNow = 1;

    function change(arr, iNow,str) {
        for (var i = 0; i < arr.length; i++) {
            var result = arr.concat();
            var cloneStr = str;
            cloneStr += result.splice(i, 1);
            if (iNow == num) {
                resultNum += result.length;
                for(var j = 0 ;j <result.length;j++){
                    resultArr.push( cloneStr + result[j])
                }
            } else {
                change(result, iNow + 1,cloneStr);
            }
        }

    }

    change(arr, iNow + 1,'');
    resultArr.push(resultNum);
    return resultArr;
}

/*-------------------
 * 组合
 * @param arr  {array}  排序的数组
 * @param num  {number} 选出的数量
 *
 --------------------*/
function combination (arr, num) {
    var resultNum = 0;
    var resultArr = [];
    var iNow = 1;

    function change(arr, iNow,str) {
        for (var i = 0; i < arr.length; i++) {
            var result = arr.concat();
            var cloneStr = str;
            cloneStr += result.splice(i, 1);
            if (iNow == num) {
                resultNum += result.length;
                for(var j = 0 ;j <result.length;j++){
                    resultArr.push( cloneStr + result[j])
                }
            } else {
                change(result, iNow + 1,cloneStr);
            }
        }

    }

    function unique(resultArr){
        var hash = {};
        var result = [];
        for(var i = 0 ; i < resultArr.length;i++){
            resultArr[i] = resultArr[i].split('').sort().join('');
        }
        for(var i = 0 ; i <resultArr.length;i++){
            if( !hash[resultArr[i]]){
                hash[resultArr[i]] = 1;
                result.push(resultArr[i]);
            }
        }

        return  result;

    }


    change(arr, iNow + 1,'');
    resultArr = unique(resultArr);
    resultArr.push(resultArr.length);
    return resultArr;
}



/*测试用例*/

var arr = ['A', 'B', 'C','D'];

console.log('排列结果为：' +permutation (arr, 4));
console.log('组合结果为：' +combination(arr, 4));

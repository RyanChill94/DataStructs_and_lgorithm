/**
 * Created by Ryanchill on 2016/6/3.
 */

function transformArray(num){
    var result =[];
    if(num <= 4){
        if(num <= 2){
            result.push(num);
            console.log("输入错误")
        }else{
            if(num == 3){
                result = result.concat([1,2]);
            }
            if(num == 4){
                result = result.concat([1,3])
            }
        }
    }else{
        //第一次
        var tmp = 2;
        result.push(2);
        num = num - tmp;
        //循环拆分
        while(num  > 0 ){
            tmp = tmp + 1 ;

            // 无法用下一个更大整数分解了
            if(num < tmp){
                //把剩余部分平均分
                var now = 1;
                while(num > 0){
                    //console.log(result);
                    result[result.length-now] += 1;
                    //console.log(result.length -now);
                    //console.log(now);
                    now ++ ;
                    num -- ;
                }
            }else{
                result.push(tmp);
                num = num - tmp
            }

        }
    }

    return result;
}

function multiplication(array){
    var result = 1;
    array.forEach(function(currentValue,index){
        result *= currentValue;
    });
    return result;
}

//console.log( multiplication([2,3,5]));



function solve(a){
    console.log('分解的数组是' +transformArray(a));
    return multiplication(transformArray(a));

}


/*测试用例*/
var a = "";

////minEdit(a, b); // d(a,b) = 5;

//开启数据流
process.stdin.resume();

process.stdout.write('请输入一个整数: ');

 process.stdin.on('data', function (chunk) {
        a = String.prototype.trim.call(chunk);
        process.stdout.write('最优分解为 ：' +  solve(parseInt(a)));

});

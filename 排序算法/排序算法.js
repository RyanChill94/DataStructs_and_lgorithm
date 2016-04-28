/**
 * Created by Ryanchill on 2016/3/25.
 */

/*
 * ð��
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
 *ѡ������
 * */

function selSort(arr) {
    //�����ݹ����� ������������Ԫ��
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

//�޸�ԭ���鳤��
    var result = arr.splice(iIndex, 1);
    return result.concat(selSort(arr));

}

/*��������*/
function quickSort(arr) {
    //�Ҳ��������Ϊ��
    if (arr.length <= 1) {
        return arr;
    }
    //��׼��
    var mid = Math.floor(arr.length / 2);
    var midNum = arr.splice(mid, 1);
    //��������
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


/*��������*/
arr = [3, 4, 5, 8];
console.log(bubbleSort(arr));
//�ݹ�д�����ı���ԭ����,����ɳ�ͻ
//console.log(selSort(arr));
console.log(quickSort(arr));

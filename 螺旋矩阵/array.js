// oo版本

/**
 * @desc: 生成一个指定规模的螺旋矩阵
 * @param {object} opt : 生成矩阵的初始化参数
 *  opt.parent   :　指定父级
 *  opt.col      :  每一行的列数
 *  opt.sizeGrid :  每一个单元格大小
 * */
function SpiralMatrix(opt) {
    this.oUl = document.getElementById(opt.parent);
    this.aLi = this.oUl.getElementsByTagName("li");
    this.NUM_COL = opt.col;
    this.LENGTH = this.NUM_COL * this.NUM_COL;
    this.SIZE_GRID = opt.sizeGrid;

}

SpiralMatrix.prototype.makeArray = function () {

    //生成网格
    this.oUl.style.width = (this.SIZE_GRID + 1) * this.NUM_COL + 'px';

    for (var i = 0; i < this.LENGTH; i++) {
        var li = document.createElement("li");
        li.style.width = this.SIZE_GRID + 'px';
        li.style.height = this.SIZE_GRID + 'px';
        this.oUl.appendChild(li);
    }
};

SpiralMatrix.prototype.makeNum = function () {
    //设定特殊拐点
    var col = 0;
    var row = 0;
    var min = 0;
    var max = this.NUM_COL - 1;
    for (var i = 0; i < this.LENGTH; i++) {
        this.aLi[row * this.NUM_COL + col].innerHTML = i;
        if (row == min && col < max) {
            col = col + 1;
        } else if (col == max && row < max) {
            row = row + 1;
        } else if (row == max && col > min) {
            col = col - 1;
        } else if (col == min && row > min) {
            row = row - 1;
        }

        //缩短环数
        if (row - 1 == min && col == min) {
            min = min + 1;
            max = max - 1;
        }

    }
};
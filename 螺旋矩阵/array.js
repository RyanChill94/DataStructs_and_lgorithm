// oo�汾

/**
 * @desc: ����һ��ָ����ģ����������
 * @param {object} opt : ���ɾ���ĳ�ʼ������
 *  opt.parent   :��ָ������
 *  opt.col      :  ÿһ�е�����
 *  opt.sizeGrid :  ÿһ����Ԫ���С
 * */
function SpiralMatrix(opt) {
    this.oUl = document.getElementById(opt.parent);
    this.aLi = this.oUl.getElementsByTagName("li");
    this.NUM_COL = opt.col;
    this.LENGTH = this.NUM_COL * this.NUM_COL;
    this.SIZE_GRID = opt.sizeGrid;

}

SpiralMatrix.prototype.makeArray = function () {

    //��������
    this.oUl.style.width = (this.SIZE_GRID + 1) * this.NUM_COL + 'px';

    for (var i = 0; i < this.LENGTH; i++) {
        var li = document.createElement("li");
        li.style.width = this.SIZE_GRID + 'px';
        li.style.height = this.SIZE_GRID + 'px';
        this.oUl.appendChild(li);
    }
};

SpiralMatrix.prototype.makeNum = function () {
    //�趨����յ�
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

        //���̻���
        if (row - 1 == min && col == min) {
            min = min + 1;
            max = max - 1;
        }

    }
};
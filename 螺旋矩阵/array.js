/**
 * Created by Ryanchill on 2016/4/28.
 */

function SpiralMatrix(opt) {
    this.NUM_COL = opt.col || 5;
    this.sizeGrid = opt.sizeGrid || 50;
    this.LENGTH = this.NUM_COL * this.NUM_COL;
    this.oUl = document.getElementById(opt.parent);
    this.aLi = oUl.getElementsByTagName("li");
    this.col = 0;
    this.row = 0;
    this.min = 0;
    this.max = this.NUM_COL - 1;

    //this.makeArray = makeArray;
    this.oUl.style.width = (this.sizeGrid + 1) * this.NUM_COL + 'px';

    for (var i = 0; i < this.LENGTH; i++) {
        var li = document.createElement("li");
        li.style.width = this.SIZE_GRID + 'px';
        li.style.height = this.SIZE_GRID + 'px';
        this.oUl.appendChild(li);
    }
    //this.showNum = showNum;
    for (var i = 0; i < this.LENGTH; i++) {
        this.aLi[this.row * this.NUM_COL + this.col].innerHTML = i;
        if (this.row == this.min && this.col < this.max) {
            this.col ++;
        } else if (col == max && row < max) {
            this.row ++;
        } else if (row == max && col > min) {
            this.col --;
        } else if (col == min && row > min) {
            this.row --;
        }

        //Ëõ¶Ì»·Êý
        if (this.row - 1 == this.min && this.col == this.min) {
            this.min = this.min + 1;
            this.max = this.max - 1;
        }
    }
}

function makeArray() {

    alert("1211111");

}

function showNum() {

}
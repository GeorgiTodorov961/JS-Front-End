function matrixPrint(num){
    let matrix = '';
    for (let row = 0; row < num; row++){
        for (let col = 0; col < num; col++){
            matrix += num+' ';
        }
        matrix += '\n';
    }
    console.log(matrix);
}


matrixPrint(7)

////

let newWay = (num) => new Array(num).fill(new Array(num).fill(num)).forEach(row => console.log(row.join(' ')))
newWay(10)
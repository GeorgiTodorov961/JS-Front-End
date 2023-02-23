function solve(num, arr){
    let newArr = arr.slice(0,num);
    let reversedArr = newArr.reverse().join(' ')
    console.log(reversedArr)
}


solve(2, [66, 43, 75, 89, 47])
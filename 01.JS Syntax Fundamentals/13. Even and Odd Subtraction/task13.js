function solve(inputArr){
    let odd = 0;
    let even = 0;
    for(let index = 0; index < inputArr.length; index++) {
        if (inputArr[index] % 2 !== 0){
            odd += inputArr[index]
        }
        else{
            even += inputArr[index]
        }
    }
    console.log(even - odd)
}



solve([3, 5, 7, 9])
function sameNumbers(num){
    let numString = num.toString();
    let numList = numString.split('');
    let allEqual = arr => arr.every(val => val === arr[0]);
    let result = allEqual(numList)
    let sum = 0;
    for (let index = 0; index < numList.length; index++){
        sum += Number(numList[index]);
    }

    console.log(result)
    console.log(sum)
    }



sameNumbers(2212)
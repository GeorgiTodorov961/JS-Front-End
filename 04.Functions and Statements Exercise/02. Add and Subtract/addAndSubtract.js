function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sum = (a,b) => a + b;
    let subtrackt = (mySum, num) => mySum-num;

    return subtrackt(sum(firstNum, secondNum), thirdNum)
}

console.log(addAndSubtract(23, 6, 10))


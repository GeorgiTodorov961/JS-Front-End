function oddEvenSum(nums) {
    let numbersStr = nums.toString().split('');
    let odd = (a) => a % 2 !== 0;
    let even = (a) => a % 2 === 0;
    
    console.log(`Odd sum = ${odd()}`)
}


oddEvenSum(123445)
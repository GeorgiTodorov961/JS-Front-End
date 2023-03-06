function palindromeIntegers(numbers){
    const isPalindrome = (num) => Number([...num.toString()].reverse().join('')) === num;
    return numbers.map(isPalindrome).join('\n')
}

console.log(
    palindromeIntegers(
        [123, 323,421,121]
    )
);
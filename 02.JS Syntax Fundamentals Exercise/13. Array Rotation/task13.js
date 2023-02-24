function arrayRotation(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstNum = numbers.shift();
        numbers.push(firstNum)
        
    }
    console.log(numbers.join(' '))
}


arrayRotation([51, 47, 32, 61, 21], 2)
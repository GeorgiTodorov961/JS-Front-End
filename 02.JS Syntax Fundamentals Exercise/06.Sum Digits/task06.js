function sumDigits(num) {
    let sum = 0;
    let numberAsString = num.toString();

    for (const digitAsString of numberAsString){
        let digit = Number(digitAsString);
        sum += digit
    }

    console.log(sum)
}



sumDigits(245678)
function isPerfect(number) {
    let divisors = [];
    for(let currentNum = 0; currentNum < number; currentNum++){
        if (number % currentNum === 0){
            divisors.push(currentNum)
        }
    }
    let divisorsSum = divisors.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    },0)
    if (divisorsSum === number){
        console.log('We have a perfect number!')
    }else{
        console.log(`It's not so perfect.`)
    }
}


isPerfect(6);
isPerfect(28);
isPerfect(1236498);
function fruit(product, grams, money){
    let kilograms = grams / 1000;
    let moneyNeeded = kilograms * money;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${product}.`)
}


fruit('apple', 1563, 2.35)
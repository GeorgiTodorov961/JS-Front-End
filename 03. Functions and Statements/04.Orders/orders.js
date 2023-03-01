function orders(product, count) {
    let result = 0;
    switch (product){
        case 'coffee':
            result += 1.50*count;
            return result.toFixed(2);
        case 'coke':
            result += 1.40*count;
            return result.toFixed(2);
        case 'water':
            result += 1.00*count;
            return result.toFixed(2);
        case 'snacks':
            result += 2.00*count;
            return result.toFixed(2);
    }
}   


console.log(orders('water', 5))
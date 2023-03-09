function cityTaxes(name, population, tresury) {
    
    let city = {
        name,
        population,
        tresury,
        taxRate: 10,
        collectTaxes () { this.tresury += this.population * this.taxRate},
        applyGrowth (num) { this.population += Math.floor((num/100) * this.population)},
        applyRecession (num){ this.tresury -= Math.floor(tresury * (num/100))}
    }
    return city
}

const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);

city.applyGrowth(5)
console.log(city.population)
// console.log(city.population)


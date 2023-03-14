function heroRegister(input) {
    let heroes = [];
    for(const line of input){
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        heroes.push({name, level, items});
    }
    let sortedHeroes = heroes.sort((heroA, heroB) => {
        return heroA.level - heroB.level;
    });

    for (line of heroes){
        console.log(`Hero: ${line['name']}`);
        console.log(`level => ${line['level']}`);
        console.log(`items => ${line['items']}`)
    }
}


heroRegister([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])
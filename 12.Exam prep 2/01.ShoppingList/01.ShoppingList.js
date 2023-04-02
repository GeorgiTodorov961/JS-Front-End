function solve(input) {
    const firstItems = input.shift().split('!');
    let shoppingList = firstItems;

    let commandParser = {
        'Urgent': urgent,
        'Unnecessary': unnecessary,
        'Correct': correct,
        'Rearrange': rearrange,
    }


    for(const line of input){
        if(line === 'Go Shopping!'){
            console.log(shoppingList.join(', '));
            break;
        }
        const lineSplitedInfo = line.split(' ');
        const command = lineSplitedInfo[0];
        commandParser[command](...lineSplitedInfo.slice(1))
    }
    

    function urgent(item) {
        if (!shoppingList.includes(item)){
            shoppingList.unshift(item);
        }else{
            return;
        }
    }

    function unnecessary(item) {
        if(shoppingList.includes(item)){
            const index = shoppingList.indexOf(item);
            shoppingList.splice(index, 1);
        }else{
            return;
        }
    }

    function correct(oldItem, newItem) {
        if(shoppingList.includes(oldItem)){
            const index = shoppingList.indexOf(oldItem);
            shoppingList[index] = newItem;
        }else{
            return;
        }
    }

    function rearrange(item) {
        if(shoppingList.includes(item)){
            const index = shoppingList.indexOf(item);
            const listItem = shoppingList.splice(index, 1);
            shoppingList.push(listItem);
        }
    }
}

solve(
    (["Milk!Pepper!Salt!Water!Banana",

"Urgent Salt",

"Unnecessary Grapes",

"Correct Pepper Onion",

"Rearrange Grapes",

"Correct Tomatoes Potatoes",

"Go Shopping!"])
)
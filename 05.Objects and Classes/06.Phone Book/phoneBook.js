function phoneBook(infoArr){
    let bookOfNumbers = {}
    for (let info of infoArr){
        const [key, value] = info.split(' ');
        if(!bookOfNumbers.hasOwnProperty(key)){ // to see if the key DO NOT exist ---> will add it --> return true or false
            bookOfNumbers[key] = value;
        }
    }
    for(let[key, value] of Object.entries(bookOfNumbers)){
        console.log(`${key} -> ${value}`)
    }
}



phoneBook(['Tim 0834212554', 'Peter 0877547887','Bill 0896543112','Tim 0876566344'])
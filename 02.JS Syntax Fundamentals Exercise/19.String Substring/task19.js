function stringSubstring(word, text){
    let textArr = text.split(' ');
    let wordFounded = false;
    for (wrd of textArr){
        if (wrd.toLowerCase() === word){
            wordFounded = true;
            console.log(word)
            
        }
    }
    if (wordFounded === false){
        console.log(`${word} not found!`)
    }
}


stringSubstring('javascript', 'JavaScript is the best programming language')
stringSubstring('python', 'JavaScript is the best programming language')
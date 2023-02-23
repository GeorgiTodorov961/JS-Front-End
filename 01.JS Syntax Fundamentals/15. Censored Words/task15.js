function solve(text, word) {
    function repeat(word){
        let lenWord = word.length;
        let result = '';
        for(let index = 0; index < lenWord; index++){
            result += '*'
        }
        return result
    }

    let censored = text.replace(word, repeat(word));
    while (censored.includes(word)){
        censored = censored.replace(word, repeat(word))
    }
    console.log(censored)
}


solve('A small sentence with some words', 'small')
